import { ParserRuleContext } from 'antlr4';
import { CommentContext, Elseif_expressionContext, Empty_breakContext, Empty_continueContext, Empty_returnContext, Empty_statementContext, For_loop_statementContext, Fork_statementContext, If_expressionContext, If_statementContext, Non_empty_breakContext, Non_empty_continueContext, Non_empty_returnContext, StatementContext, Try_exceptContext, Try_statementContext, While_loop_statementContext } from '../grammar/generated/MoocodeParser';
import { MoocodeVisitor } from './abstract';
import { ContextPosition } from './common';
import { NodeGenerationError } from './error';
import { ExpressionGenerator } from './expression-generator';
import { BreakStatementNode, CommentStatementNode, ContinueStatementNode, ElseIfNode, ElseNode, EmptyStatementNode, ErrorCodeNode, ExceptNode, Expression, ExpressionStatementNode, FinallyNode, ForStatementNode, ForkStatementNode, IfNode, IfStatementNode, PartialExpressionStatementNode, PartialVerbInvocationNode, RangedForStatementNode, ReturnStatementNode, Statement, StringNode, TryStatementNode, VariableNode, WhileStatementNode } from './nodes';
import { ValueGenerator } from './value-generator';

function generateIfNode(depth: number, context: If_expressionContext | Elseif_expressionContext, isIf = true, isElseIf = false): IfNode | ElseIfNode {
	const conditions = ExpressionGenerator.generate<Expression>(context._conditions);
	const body = StatementGenerator.generateStatements(context._body.statement_list(), depth + 1);

	const position = (!body || body.length < 1)
		? ContextPosition.fromValues(context.start, conditions?.position.stopToken)
		: ContextPosition.fromValues(context.start, (body.at(body.length - 1))?.position.stopToken);

	if (isIf && !isElseIf) {
		return new IfNode(depth, position, conditions, body);
	}

	if (!isIf && isElseIf) {
		return new ElseIfNode(depth, position, conditions, body);
	}

	throw NodeGenerationError.fromContext(context);
}

function generateExceptNode(depth: number, context: Try_exceptContext): ExceptNode {
	const exceptPosition = ContextPosition.fromContext(context);
	const errorInfo = ValueGenerator.generate<VariableNode>(context.identifier());

	const errorCodes = new Array<ErrorCodeNode>();
	for (const x of context.error_codes().expression_list()) {
		const node = ValueGenerator.generate<ErrorCodeNode>(x);
		if (node) {
			errorCodes.push(node);
		}
	}

	const statements = StatementGenerator.generateStatements(context.statements().statement_list(), depth + 1);

	return new ExceptNode(depth, exceptPosition, errorInfo, errorCodes, statements);
}

export class StatementGenerator extends MoocodeVisitor<Statement> {
	private _depth = 0;

	public override visitStatement = (context: StatementContext): Statement | undefined => {
		if (context.expression()) {
			const expression = ExpressionGenerator.generateExpression(context.expression());

			if (expression instanceof PartialVerbInvocationNode) {
				return new PartialExpressionStatementNode(this._depth, ContextPosition.fromContext(context), expression);
			}

			return new ExpressionStatementNode(this._depth, ContextPosition.fromContext(context), expression);
		}

		return this.visit(context.getChild(0));
	};

	public override visitIf_statement = (context: If_statementContext): IfStatementNode | undefined => {
		const ifNode = generateIfNode(this._depth, context.if_expression(), true) as IfNode;

		const elseIfNodes = new Array<IfNode>();
		for (const x of context.elseif_expression_list()) {
			elseIfNodes.push(generateIfNode(this._depth, x, false, true) as ElseIfNode);
		}

		let elseNode: ElseNode | undefined = undefined;

		if (context.else_expression()) {
			const elseBody = StatementGenerator.generateStatements(context.else_expression()._body.statement_list(), this._depth + 1);
			elseNode = new ElseNode(this._depth, ContextPosition.fromContext(context.else_expression()), elseBody);
		}

		return new IfStatementNode(this._depth, ContextPosition.fromContext(context), ifNode, elseIfNodes, elseNode);
	};

	public override visitFor_loop_statement = (context: For_loop_statementContext): ForStatementNode | RangedForStatementNode | undefined => {
		const position = ContextPosition.fromContext(context);
		const statements = StatementGenerator.generateStatements(context.statements().statement_list(), this._depth + 1);

		const forExpression = context.for_expression();
		const rangedForExpression = context.ranged_for_expression();

		if (forExpression) {
			const value = ValueGenerator.generate<VariableNode>(forExpression._value);
			const rangeExpression = ExpressionGenerator.generateExpression(forExpression._range);

			if (forExpression._key) {
				const keyOrIndex = ValueGenerator.generate<VariableNode>(forExpression._key);
				return ForStatementNode.withKeyOrIndex(this._depth, position, value, keyOrIndex, rangeExpression, statements);
			} else {
				return ForStatementNode.new(this._depth, position, value, rangeExpression, statements);
			}
		} else if (rangedForExpression) {
			const value = ValueGenerator.generate<VariableNode>(rangedForExpression._value);
			const rangeStart = ExpressionGenerator.generateExpression(rangedForExpression._start);
			const rangeEnd = ExpressionGenerator.generateExpression(rangedForExpression._end);

			return new RangedForStatementNode(this._depth, position, value, rangeStart, rangeEnd, statements);
		}

		throw NodeGenerationError.fromContext(context);
	};

	public override visitWhile_loop_statement = (context: While_loop_statementContext): WhileStatementNode | undefined => {
		const position = ContextPosition.fromContext(context);
		const conditions = ExpressionGenerator.generateExpression(context.expression());
		const statements = StatementGenerator.generateStatements(context.statements().statement_list(), this._depth + 1);

		if (context._outer_name) {
			const name = ValueGenerator.generate<VariableNode>(context._outer_name);

			return WhileStatementNode.withName(this._depth, position, conditions, statements, name);
		}

		if (context._inner_name) {
			const name = ValueGenerator.generate<VariableNode>(context._inner_name);

			return WhileStatementNode.withName(this._depth, position, conditions, statements, name);
		}

		return WhileStatementNode.new(this._depth, position, conditions, statements);
	};

	public override visitTry_statement = (context: Try_statementContext): TryStatementNode | undefined => {
		const position = ContextPosition.fromContext(context);
		const statements = StatementGenerator.generateStatements(context.statements().statement_list(), this._depth + 1);

		const exceptNodes = new Array<ExceptNode>();
		for (const x of context.try_except_list()) {
			exceptNodes.push(generateExceptNode(this._depth, x));
		}

		const finallyContext = context.try_finally();
		let finallyPart: FinallyNode | undefined = undefined;
		if (finallyContext) {
			const finallyPosition = ContextPosition.fromContext(finallyContext);
			const finallyStatements = StatementGenerator.generateStatements(finallyContext.statements().statement_list(), this._depth + 1);

			finallyPart = new FinallyNode(this._depth, finallyPosition, finallyStatements);
		}

		return new TryStatementNode(this._depth, position, statements, exceptNodes, finallyPart);
	};

	public override visitFork_statement = (context: Fork_statementContext): ForkStatementNode | undefined => {
		const position = ContextPosition.fromContext(context);
		const expression = ExpressionGenerator.generateExpression(context.expression());
		const statements = StatementGenerator.generateStatements(context.statements().statement_list(), this._depth + 1);

		if (context._name) {
			const name = ValueGenerator.generate<VariableNode>(context._name);

			return ForkStatementNode.withName(this._depth, position, expression, statements, name);
		}

		return ForkStatementNode.new(this._depth, position, expression, statements);
	};

	public override visitEmpty_return = (context: Empty_returnContext): ReturnStatementNode | undefined => {
		return new ReturnStatementNode(this._depth, ContextPosition.fromContext(context));
	};

	public override visitNon_empty_return = (context: Non_empty_returnContext): ReturnStatementNode | undefined => {
		const expression = ExpressionGenerator.generateExpression(context.expression());
		return new ReturnStatementNode(this._depth, ContextPosition.fromContext(context), expression);
	};

	public override visitEmpty_continue = (context: Empty_continueContext): ContinueStatementNode | undefined => {
		return new ContinueStatementNode(this._depth, ContextPosition.fromContext(context));
	};

	public override visitNon_empty_continue = (context: Non_empty_continueContext): ContinueStatementNode | undefined => {
		const expression = ValueGenerator.generateValue(context.identifier());
		return new ContinueStatementNode(this._depth, ContextPosition.fromContext(context), expression);
	};

	public override visitEmpty_break = (context: Empty_breakContext): BreakStatementNode | undefined => {
		return new BreakStatementNode(this._depth, ContextPosition.fromContext(context));
	};

	public override visitNon_empty_break = (context: Non_empty_breakContext): BreakStatementNode | undefined => {
		const expression = ValueGenerator.generateValue(context.identifier());
		return new BreakStatementNode(this._depth, ContextPosition.fromContext(context), expression);
	};

	public override visitComment = (context: CommentContext): CommentStatementNode | undefined => {
		const value = ValueGenerator.generate<StringNode>(context.string_literal());

		return new CommentStatementNode(this._depth, ContextPosition.fromContext(context), value);
	};

	public override visitEmpty_statement = (context: Empty_statementContext): EmptyStatementNode | undefined => {
		return new EmptyStatementNode(this._depth, ContextPosition.fromContext(context));
	};

	private constructor(depth: number) {
		super();

		this._depth = depth;
	}

	public static generate<T extends Statement>(context: ParserRuleContext | undefined, depth: number): T | undefined {
		if (!context) {
			return undefined;
		}

		const generator = new StatementGenerator(depth);
		const result = generator.visit(context) as T;

		if (!result) {
			throw NodeGenerationError.fromContext(context);
		}

		return result;
	}

	public static generateStatement(context: ParserRuleContext | undefined, depth: number): Statement | undefined {
		return StatementGenerator.generate<Statement>(context, depth);
	}

	public static generateStatements(contexts: (ParserRuleContext | undefined)[] | undefined, depth: number): (Statement | undefined)[] {
		const statementNodes = new Array<Statement>();

		if (!contexts) {
			return statementNodes;
		}

		for (const x of contexts) {
			const statement = StatementGenerator.generateStatement(x, depth);

			if (statement) {
				statementNodes.push(statement);
			}
		}

		return statementNodes;
	}
}