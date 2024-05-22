import { ParserRuleContext } from 'antlr4';
import { AssignmentContext, Bool_literalContext, Complement_unary_expressionContext, Corified_valueContext, Error_codeContext, Float_literalContext, IdentifierContext, IndexerContext, Integer_literalContext, ListContext, MapContext, Map_entryContext, Negated_unary_expressionContext, Negative_unary_expressionContext, Object_idContext, Primary_expressionContext, Primary_expression_startContext, String_literalContext } from '../grammar/generated/MoocodeParser';
import { SingleValueVisitor } from './abstract';
import { ContextPosition, ErrorCode, getContextAsText } from './common';
import { NodeGenerationError, NotImplementedError } from './error';
import { ArgumentIndexerNode, BooleanNode, ComplementNode, CorifiedValueNode, ErrorNode, Expression, FloatNode, IntegerNode, ListAssignmentNode, ListNode, MapEntryNode, MapNode, NegatedNode, NegativeNode, ObjectIdNode, RangeIndexerNode, StringNode, VariableAssignmentNode, VariableNode } from './nodes';

class ExpressionGeneratorForPrimaryExpressionStart extends SingleValueVisitor<Expression> {
	public override visitObject_id = (context: Object_idContext): Expression => {
		return new ObjectIdNode(ContextPosition.fromContext(context), getContextAsText(context));
	}

	public override visitCorified_value = (context: Corified_valueContext): Expression => {
		return new CorifiedValueNode(ContextPosition.fromContext(context), getContextAsText(context));
	}

	public override visitIdentifier = (context: IdentifierContext): Expression => {
		return new VariableNode(ContextPosition.fromContext(context), getContextAsText(context));
	}

	public override visitMap = (context: MapContext): Expression => {
		const entries = Array<MapEntryNode>();

		for (const x of context.map_entry_list()) {
			entries.push(ExpressionGenerator.generate<MapEntryNode>(x));
		}

		return new MapNode(ContextPosition.fromContext(context), entries);
	}

	public override visitMap_entry = (context: Map_entryContext): Expression => {
		const key = ExpressionGenerator.generateExpression(context._map_key);
		const value = ExpressionGenerator.generateExpression(context._map_value);

		return new MapEntryNode(ContextPosition.fromContext(context), key, value);
	}

	public override visitList = (context: ListContext): Expression => {
		const entries = Array<Expression>();

		for (const x of context.expression_list()) {
			entries.push(ExpressionGenerator.generateExpression(x));
		}

		return new ListNode(ContextPosition.fromContext(context), entries);
	}

	public override visitString_literal = (context: String_literalContext): Expression => {
		return new StringNode(ContextPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}

	public override visitInteger_literal = (context: Integer_literalContext): Expression => {
		return new IntegerNode(ContextPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}

	public override visitFloat_literal = (context: Float_literalContext): Expression => {
		return new FloatNode(ContextPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}

	public override visitBool_literal = (context: Bool_literalContext): Expression => {
		return new BooleanNode(ContextPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}

	public override visitError_code = (context: Error_codeContext): Expression => {
		const key = getContextAsText(context) as keyof typeof ErrorCode;
		return new ErrorNode(ContextPosition.fromContext(context), ErrorCode[key]);
	}

	private constructor() {
		super();
	}

	public static generate<T extends Expression>(context: Primary_expression_startContext): T {
		const generator = new ExpressionGeneratorForPrimaryExpressionStart();
		const result = generator.visit(context) as T;

		if (!result) {
			throw NodeGenerationError.fromContext(context);
		}

		return result;
	}

	public static generateExpression(context: Primary_expression_startContext): Expression {
		return ExpressionGeneratorForPrimaryExpressionStart.generate<Expression>(context);
	}
}

export class ExpressionGenerator extends SingleValueVisitor<Expression> {
	public override visitAssignment = (context: AssignmentContext): Expression => {
		const leftNode = ExpressionGenerator.generateExpression(context.unary_expression());
		const rightNode = ExpressionGenerator.generateExpression(context.expression());

		if (leftNode instanceof VariableNode) {
			return new VariableAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		if (leftNode instanceof ListNode) {
			return new ListAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		throw new NotImplementedError('assignment with left side not being a variable or list');
	}

	public override visitNegated_unary_expression = (context: Negated_unary_expressionContext): Expression => {
		const innerExpression = ExpressionGenerator.generateExpression(context.unary_expression());
		return new NegatedNode(ContextPosition.fromContext(context), innerExpression);
	}

	public override visitNegative_unary_expression = (context: Negative_unary_expressionContext): Expression => {
		const innerExpression = ExpressionGenerator.generateExpression(context.unary_expression());
		return new NegativeNode(ContextPosition.fromContext(context), innerExpression);
	}

	public override visitComplement_unary_expression = (context: Complement_unary_expressionContext): Expression => {
		const innerExpression = ExpressionGenerator.generateExpression(context.unary_expression());
		return new ComplementNode(ContextPosition.fromContext(context), innerExpression);
	}

	public override visitPrimary_expression_start = (context: Primary_expression_startContext): Expression => {
		return ExpressionGeneratorForPrimaryExpressionStart.generateExpression(context);
	}

	public override visitIndexer = (context: IndexerContext): Expression => {
		const primaryExpression = context.parentCtx as Primary_expressionContext;
		if (!primaryExpression || !primaryExpression._pe) {
			throw NodeGenerationError.fromContext(context);
		}

		const object = ExpressionGeneratorForPrimaryExpressionStart.generateExpression(primaryExpression._pe);

		if (context._argument) {
			const argument = ExpressionGenerator.generateExpression(context._argument);
			return new ArgumentIndexerNode(ContextPosition.fromContext(context), object, argument);
		} else if (context._start && context._end) {
			const start = ExpressionGenerator.generateExpression(context._start);
			const end = ExpressionGenerator.generateExpression(context._end);
			return new RangeIndexerNode(ContextPosition.fromContext(context), object, start, end);
		} else {
			throw NodeGenerationError.fromContext(context);
		}
	}

	private constructor() {
		super();
	}

	public static generate<T extends Expression>(context: ParserRuleContext): T {
		const generator = new ExpressionGenerator();
		const result = generator.visit(context) as T;

		if (!result) {
			throw NodeGenerationError.fromContext(context);
		}

		return result;
	}

	public static generateExpression(context: ParserRuleContext): Expression {
		return ExpressionGenerator.generate<Expression>(context);
	}
}