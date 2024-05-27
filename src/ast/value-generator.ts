import { ParserRuleContext } from 'antlr4';
import { Bool_literalContext, CaretContext, Corified_valueContext, DollarContext, Error_catcherContext, Error_codeContext, Float_literalContext, IdentifierContext, Integer_literalContext, ListContext, List_splicerContext, MapContext, Map_entryContext, Object_idContext, Optional_targetContext, Parenthesis_expressionContext, String_literalContext } from '../grammar/generated/MoocodeParser';
import { MoocodeVisitor } from './abstract';
import { ContextPosition, ErrorCode, getContextAsText } from './common';
import { NodeGenerationError } from './error';
import { ExpressionGenerator } from './expression-generator';
import { BooleanNode, CorifiedValueNode, ErrorCatcherNode, ErrorCodeNode, Expression, Float, FloatNode, Int64, IntegerNode, ListNode, ListSplicerNode, MapEntryNode, MapNode, ObjectIdNode, OptionalTargetNode, ParenthesisNode, RangeEndNode, RangeStartNode, StringNode, Value, VariableNode } from './nodes';

export class ValueGenerator extends MoocodeVisitor<Value> {
	public override visitObject_id = (context: Object_idContext): ObjectIdNode | undefined => {
		const id = `${context.MINUS() ? '-' : ''}${getContextAsText(context.integer_literal())}`;
		return new ObjectIdNode(ContextPosition.fromContext(context), id);
	}

	public override visitCorified_value = (context: Corified_valueContext): CorifiedValueNode | undefined => {
		return new CorifiedValueNode(ContextPosition.fromContext(context), getContextAsText(context.identifier()));
	}

	public override visitIdentifier = (context: IdentifierContext): VariableNode | undefined => {
		return new VariableNode(ContextPosition.fromContext(context), getContextAsText(context));
	}

	public override visitOptional_target = (context: Optional_targetContext): OptionalTargetNode | undefined => {
		const variable = ValueGenerator.generate<VariableNode>(context.identifier());
		return new OptionalTargetNode(ContextPosition.fromContext(context), variable);
	}

	public override visitCaret = (context: CaretContext): RangeStartNode | undefined => {
		return new RangeStartNode(ContextPosition.fromContext(context));
	}

	public override visitDollar = (context: DollarContext): RangeEndNode | undefined => {
		return new RangeEndNode(ContextPosition.fromContext(context));
	}

	public override visitMap = (context: MapContext): MapNode | undefined => {
		const entries = Array<MapEntryNode>();

		for (const x of context.map_entry_list()) {
			const node = ValueGenerator.generate<MapEntryNode>(x);

			if (node) {
				entries.push(node);
			}
		}

		return new MapNode(ContextPosition.fromContext(context), entries);
	}

	public override visitMap_entry = (context: Map_entryContext): MapEntryNode | undefined => {
		const key = ExpressionGenerator.generateExpression(context._map_key);
		const value = ExpressionGenerator.generateExpression(context._map_value);

		return new MapEntryNode(ContextPosition.fromContext(context), key, value);
	}

	public override visitList = (context: ListContext): ListNode | undefined => {
		const entries = Array<Expression>();

		for (const x of context.expression_list()) {
			const node = ExpressionGenerator.generateExpression(x);

			if (node) {
				entries.push(node);
			}
		}

		return new ListNode(ContextPosition.fromContext(context), entries);
	}

	public override visitString_literal = (context: String_literalContext): StringNode | undefined => {
		const valueText = getContextAsText(context);
		const sanitizedValue = valueText.trim().slice(1, valueText.length - 1);

		return new StringNode(ContextPosition.fromContext(context), sanitizedValue, valueText);
	}

	public override visitInteger_literal = (context: Integer_literalContext): IntegerNode | undefined => {
		const valueText = getContextAsText(context);
		const value = JSON.parse(valueText) as Int64;

		if (value === 0) {
			return new IntegerNode(ContextPosition.fromContext(context), value, valueText);
		}

		if (!value) {
			throw NodeGenerationError.fromContext(context);
		}

		return new IntegerNode(ContextPosition.fromContext(context), value, valueText);
	}

	public override visitFloat_literal = (context: Float_literalContext): FloatNode | undefined => {
		const valueText = getContextAsText(context);

		const sanitizedText = valueText
			.trim()
			.replace(/(?<!\d)\./, '0.')
			.replace(/\.(?!\d)/, '.0');

		const value = JSON.parse(sanitizedText) as Float;

		if (value === 0.0) {
			return new FloatNode(ContextPosition.fromContext(context), value, valueText);
		}

		if (!value) {
			throw NodeGenerationError.fromContext(context);
		}

		return new FloatNode(ContextPosition.fromContext(context), value, valueText);
	}

	public override visitBool_literal = (context: Bool_literalContext): BooleanNode | undefined => {
		const valueText = getContextAsText(context);

		if (valueText.trim().toLowerCase() === 'true') {
			return new BooleanNode(ContextPosition.fromContext(context), true, valueText);
		} else if (valueText.trim().toLowerCase() === 'false') {
			return new BooleanNode(ContextPosition.fromContext(context), false, valueText);
		}

		throw NodeGenerationError.fromContext(context);
	}

	public override visitError_code = (context: Error_codeContext): ErrorCodeNode | undefined => {
		const valueText = getContextAsText(context);
		const key = valueText as keyof typeof ErrorCode;

		return new ErrorCodeNode(ContextPosition.fromContext(context), ErrorCode[key], valueText);
	}

	public override visitError_catcher = (context: Error_catcherContext): ErrorCatcherNode | undefined => {
		const tryExpression = ExpressionGenerator.generateExpression(context._try_);
		const errorCodes = ExpressionGenerator.generateExpressions(context.error_codes());

		let onErrorExpression: Expression | undefined = undefined;
		if (context._on_error) {
			onErrorExpression = ExpressionGenerator.generateExpression(context._on_error);
		}

		return new ErrorCatcherNode(ContextPosition.fromContext(context), tryExpression, errorCodes, onErrorExpression);
	}

	public override visitList_splicer = (context: List_splicerContext): ListSplicerNode | undefined => {
		const expression = ValueGenerator.generate<VariableNode>(context.identifier());
		return new ListSplicerNode(ContextPosition.fromContext(context), expression);
	}

	public override visitParenthesis_expression = (context: Parenthesis_expressionContext): ParenthesisNode | undefined => {
		const innerExpression = ExpressionGenerator.generateExpression(context.expression());

		return new ParenthesisNode(ContextPosition.fromContext(context), innerExpression);
	}

	private constructor() {
		super();
	}

	public static generate<T extends Value>(context: ParserRuleContext): T | undefined {
		const generator = new ValueGenerator();
		const result = generator.visit(context) as T;

		if (!result) {
			throw NodeGenerationError.fromContext(context);
		}

		return result;
	}

	public static generateValue(context: ParserRuleContext): Value | undefined {
		return ValueGenerator.generate<Value>(context);
	}
}