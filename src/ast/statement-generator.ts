import { ParserRuleContext } from 'antlr4';
import { AssignmentContext, CommentContext, Elseif_expressionContext, Empty_returnContext, Empty_statementContext, If_expressionContext, If_statementContext, Non_empty_returnContext, Primary_expressionContext } from '../grammar/generated/MoocodeParser';
import { Action } from '../interfaces';
import { SingleValueVisitor } from './abstract';
import { NodeGenerationError } from './error';
import { ExpressionGenerator } from './expression-generator';
import { Assignment, CommentNode, ElseNode, EmptyStatementNode, Expression, IfNode, IfStatementNode, ReturnNode, Statement } from './nodes';

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

	return new IfNode(context, ifConditions, ifBody);
}

export class StatementGenerator extends SingleValueVisitor<Statement> {
	public override visitIf_statement = (context: If_statementContext): Statement => {
		const ifNode = generateIfNode(context.if_expression());

		const elseIfNodes = new Array<IfNode>();
		for (const x of context.elseif_expression_list()) {
			elseIfNodes.push(generateIfNode(x));
		}

		let elseNode: ElseNode | undefined = undefined;

		if (context.else_expression()) {
			const elseBody = StatementGenerator.generateStatements(context.else_expression()._body.statement_list());
			elseNode = new ElseNode(context.else_expression(), elseBody);
		}

		return new IfStatementNode(context, ifNode, elseIfNodes, elseNode);
	}

	public override visitAssignment = (context: AssignmentContext): Statement => {
		return ExpressionGenerator.generate<Assignment>(context);
	}

	public override visitEmpty_return = (context: Empty_returnContext): Statement => {
		return new ReturnNode(context);
	}

	public override visitNon_empty_return = (context: Non_empty_returnContext): Statement => {
		const returnExpressionNode = ExpressionGenerator.generate<Expression>(context.expression());
		return new ReturnNode(context, returnExpressionNode);
	}

	public override visitComment = (context: CommentContext): Statement => {
		return new CommentNode(context);
	}

	public override visitEmpty_statement = (context: Empty_statementContext): Statement => {
		return new EmptyStatementNode(context);
	}

	public override visitPrimary_expression = (context: Primary_expressionContext): Statement => {
		return ExpressionGenerator.generateExpression(context);
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