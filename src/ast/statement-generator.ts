import { ParserRuleContext } from 'antlr4';
import { CommentContext, Elseif_expressionContext, Empty_breakContext, Empty_continueContext, Empty_returnContext, Empty_statementContext, For_loop_statementContext, If_expressionContext, If_statementContext, Non_empty_breakContext, Non_empty_continueContext, Non_empty_returnContext, StatementContext, While_loop_statementContext } from '../grammar/generated/MoocodeParser';
import { Action } from '../interfaces';
import { SingleValueVisitor } from './abstract';
import { ContextPosition } from './common';
import { NodeGenerationError } from './error';
import { ExpressionGenerator, ValueGenerator } from './expression-generator';
import { BreakStatementNode, CommentStatementNode, ContinueStatementNode, ElseNode, EmptyStatementNode, Expression, ExpressionStatementNode, ForStatementNode, IfNode, IfStatementNode, RangedForStatementNode, ReturnStatementNode, Statement, VariableNode, WhileStatementNode } from './nodes';

function handleErrors(action: Action<void>) {
	try {
		action();
	} catch (error: unknown) {
		throw error;
	}
}

function generateIfNode(context: If_expressionContext | Elseif_expressionContext): IfNode {
	const ifConditions = ExpressionGenerator.generate<Expression>(context._conditions);
	const ifBody = StatementGenerator.generateStatements(context._body.statement_list());

	const position = (!ifBody || ifBody.length < 1)
		? ContextPosition.fromValues(context.start, ifConditions.position.stopToken)
		: ContextPosition.fromValues(context.start, (ifBody.at(ifBody.length - 1))?.position.stopToken);

	return new IfNode(position, ifConditions, ifBody);
}

export class StatementGenerator extends SingleValueVisitor<Statement> {
	public override visitStatement = (context: StatementContext): Statement => {
		if (context.expression()) {
			const expression = ExpressionGenerator.generateExpression(context.expression());
			return new ExpressionStatementNode(ContextPosition.fromContext(context), expression);
		}

		return this.visit(context.getChild(0));
	}

	public override visitIf_statement = (context: If_statementContext): IfStatementNode => {
		const ifNode = generateIfNode(context.if_expression());

		const elseIfNodes = new Array<IfNode>();
		for (const x of context.elseif_expression_list()) {
			elseIfNodes.push(generateIfNode(x));
		}

		let elseNode: ElseNode | undefined = undefined;

		if (context.else_expression()) {
			const elseBody = StatementGenerator.generateStatements(context.else_expression()._body.statement_list());
			elseNode = new ElseNode(ContextPosition.fromContext(context.else_expression()), elseBody);
		}

		return new IfStatementNode(ContextPosition.fromContext(context), ifNode, elseIfNodes, elseNode);
	}

	public override visitFor_loop_statement = (context: For_loop_statementContext): ForStatementNode | RangedForStatementNode => {
		const position = ContextPosition.fromContext(context);
		const statements = StatementGenerator.generateStatements(context.statements().statement_list());

		const forExpression = context.for_expression();
		const rangedForExpression = context.ranged_for_expression();

		if (forExpression) {
			const value = ValueGenerator.generate<VariableNode>(forExpression._value);
			const rangeExpression = ExpressionGenerator.generateExpression(forExpression._range);

			if (forExpression._key) {
				const keyOrIndex = ValueGenerator.generate<VariableNode>(forExpression._key);
				return ForStatementNode.withKeyOrIndex(position, value, keyOrIndex, rangeExpression, statements);
			} else {
				return ForStatementNode.new(position, value, rangeExpression, statements);
			}
		} else if (rangedForExpression) {
			const value = ValueGenerator.generate<VariableNode>(rangedForExpression._value);
			const rangeStart = ExpressionGenerator.generateExpression(rangedForExpression._start);
			const rangeEnd = ExpressionGenerator.generateExpression(rangedForExpression._end);

			return new RangedForStatementNode(position, value, rangeStart, rangeEnd, statements);
		} else {
			throw NodeGenerationError.fromContext(context);
		}
	}

	public override visitWhile_loop_statement = (context: While_loop_statementContext): WhileStatementNode => {
		const position = ContextPosition.fromContext(context);
		const conditions = ExpressionGenerator.generateExpression(context.expression());
		const statements = StatementGenerator.generateStatements(context.statements().statement_list());

		if (context._outer_name) {
			const name = ValueGenerator.generate<VariableNode>(context._outer_name);

			return WhileStatementNode.withName(position, conditions, statements, name);
		}

		if (context._inner_name) {
			const name = ValueGenerator.generate<VariableNode>(context._inner_name);

			return WhileStatementNode.withName(position, conditions, statements, name);
		}

		return WhileStatementNode.new(position, conditions, statements);
	}

	public override visitEmpty_return = (context: Empty_returnContext): ReturnStatementNode => {
		return new ReturnStatementNode(ContextPosition.fromContext(context));
	}

	public override visitNon_empty_return = (context: Non_empty_returnContext): ReturnStatementNode => {
		const expression = ExpressionGenerator.generateExpression(context.expression());
		return new ReturnStatementNode(ContextPosition.fromContext(context), expression);
	}

	public override visitEmpty_continue = (context: Empty_continueContext): ContinueStatementNode => {
		return new ContinueStatementNode(ContextPosition.fromContext(context));
	}

	public override visitNon_empty_continue = (context: Non_empty_continueContext): ContinueStatementNode => {
		const expression = ValueGenerator.generateValue(context.identifier());
		return new ContinueStatementNode(ContextPosition.fromContext(context), expression);
	}

	public override visitEmpty_break = (context: Empty_breakContext): BreakStatementNode => {
		return new BreakStatementNode(ContextPosition.fromContext(context));
	}

	public override visitNon_empty_break = (context: Non_empty_breakContext): BreakStatementNode => {
		const expression = ValueGenerator.generateValue(context.identifier());
		return new BreakStatementNode(ContextPosition.fromContext(context), expression);
	}

	public override visitComment = (context: CommentContext): CommentStatementNode => {
		return new CommentStatementNode(ContextPosition.fromContext(context), JSON.parse(context.STRING_LITERAL().getText()));
	}

	public override visitEmpty_statement = (context: Empty_statementContext): EmptyStatementNode => {
		return new EmptyStatementNode(ContextPosition.fromContext(context));
	}

	private constructor() {
		super();
	}

	public static generate<T extends Statement>(context: ParserRuleContext): T {
		const generator = new StatementGenerator();
		const result = generator.visit(context) as T;

		if (!result) {
			throw NodeGenerationError.fromContext(context);
		}

		return result;
	}

	public static generateStatement(context: ParserRuleContext): Statement {
		return StatementGenerator.generate<Statement>(context);
	}

	public static generateStatements(contexts: ParserRuleContext[]): Statement[] {
		const statementNodes = new Array<Statement>();

		for (const x of contexts) {
			handleErrors(() => {
				statementNodes.push(StatementGenerator.generateStatement(x));
			});
		}

		return statementNodes;
	}
}