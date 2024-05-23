import { ParserRuleContext } from 'antlr4';
import { Bool_literalContext, Corified_valueContext, Error_catcherContext, Error_codeContext, Float_literalContext, IdentifierContext, Integer_literalContext, ListContext, List_slicerContext, MapContext, Map_entryContext, Object_idContext, Parenthesis_expressionContext, String_literalContext } from '../grammar/generated/MoocodeParser';
import { SingleValueVisitor } from './abstract';
import { ContextPosition, ErrorCode, getContextAsText } from './common';
import { NodeGenerationError } from './error';
import { ExpressionGenerator } from './expression-generator';
import { BooleanNode, CorifiedValueNode, ErrorCatcherNode, ErrorCodeNode, Expression, FloatNode, IntegerNode, ListNode, ListSlicerNode, MapEntryNode, MapNode, ObjectIdNode, ParenthesisNode, StringNode, Value, VariableNode } from './nodes';

export class ValueGenerator extends SingleValueVisitor<Value> {
	public override visitObject_id = (context: Object_idContext): ObjectIdNode => {
		const id = `${context.MINUS() ? '-' : ''}${getContextAsText(context.integer_literal())}`;
		return new ObjectIdNode(ContextPosition.fromContext(context), id);
	}

	public override visitCorified_value = (context: Corified_valueContext): CorifiedValueNode => {
		return new CorifiedValueNode(ContextPosition.fromContext(context), getContextAsText(context.identifier()));
	}

	public override visitIdentifier = (context: IdentifierContext): VariableNode => {
		return new VariableNode(ContextPosition.fromContext(context), getContextAsText(context));
	}

	public override visitMap = (context: MapContext): MapNode => {
		const entries = Array<MapEntryNode>();

		for (const x of context.map_entry_list()) {
			entries.push(ExpressionGenerator.generate<MapEntryNode>(x));
		}

		return new MapNode(ContextPosition.fromContext(context), entries);
	}

	public override visitMap_entry = (context: Map_entryContext): MapEntryNode => {
		const key = ExpressionGenerator.generateExpression(context._map_key);
		const value = ExpressionGenerator.generateExpression(context._map_value);

		return new MapEntryNode(ContextPosition.fromContext(context), key, value);
	}

	public override visitList = (context: ListContext): ListNode => {
		const entries = Array<Expression>();

		for (const x of context.expression_list()) {
			entries.push(ExpressionGenerator.generateExpression(x));
		}

		return new ListNode(ContextPosition.fromContext(context), entries);
	}

	public override visitString_literal = (context: String_literalContext): StringNode => {
		return new StringNode(ContextPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}

	public override visitInteger_literal = (context: Integer_literalContext): IntegerNode => {
		return new IntegerNode(ContextPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}

	public override visitFloat_literal = (context: Float_literalContext): FloatNode => {
		return new FloatNode(ContextPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}

	public override visitBool_literal = (context: Bool_literalContext): BooleanNode => {
		return new BooleanNode(ContextPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}

	public override visitError_code = (context: Error_codeContext): ErrorCodeNode => {
		const key = getContextAsText(context) as keyof typeof ErrorCode;
		return new ErrorCodeNode(ContextPosition.fromContext(context), ErrorCode[key]);
	}

	public override visitError_catcher = (context: Error_catcherContext): ErrorCatcherNode => {
		const tryExpression = ExpressionGenerator.generateExpression(context._try_);
		const errorCodes = ExpressionGenerator.generateExpressions(context.error_codes());
		const onErrorExpression = ExpressionGenerator.generateExpression(context._on_error);

		return new ErrorCatcherNode(ContextPosition.fromContext(context), tryExpression, errorCodes, onErrorExpression);
	}

	public override visitList_slicer = (context: List_slicerContext): ListSlicerNode => {
		const expression = ValueGenerator.generateValue(context.identifier());
		return new ListSlicerNode(ContextPosition.fromContext(context), expression);
	}

	public override visitParenthesis_expression = (context: Parenthesis_expressionContext): ParenthesisNode => {
		const innerExpression = ExpressionGenerator.generateExpression(context.expression());

		return new ParenthesisNode(ContextPosition.fromContext(context), innerExpression);
	}

	private constructor() {
		super();
	}

	public static generate<T extends Value>(context: ParserRuleContext): T {
		const generator = new ValueGenerator();
		const result = generator.visit(context) as T;

		if (!result) {
			throw NodeGenerationError.fromContext(context);
		}

		return result;
	}

	public static generateValue(context: ParserRuleContext): Value {
		return ValueGenerator.generate<Value>(context);
	}
}