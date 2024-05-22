import { ParserRuleContext } from 'antlr4';
import { AssignmentContext, Bf_invocationContext, Bool_literalContext, Complement_unary_expressionContext, Corified_valueContext, Error_catcherContext, Error_codeContext, ExpressionsContext, Float_literalContext, IdentifierContext, IndexerContext, Integer_literalContext, ListContext, MapContext, Map_entryContext, Negated_unary_expressionContext, Negative_unary_expressionContext, Object_idContext, Parented_expressionContext, Primary_expressionContext, Primary_expression_startContext, Property_accessorContext, String_literalContext, Verb_invocationContext } from '../grammar/generated/MoocodeParser';
import { SingleValueVisitor } from './abstract';
import { ContextPosition, ErrorCode, getContextAsText } from './common';
import { NodeGenerationError, NotImplementedError } from './error';
import { ArgumentIndexerNode, ArgumentIndexerNodeInfo, BooleanNode, BuiltInFunctionInvocationNode, CallInfo, ComplementNode, ComputedPropertyAccessorNode, ComputedPropertyAccessorNodeInfo, ComputedVerbInvocationNode, ComputedVerbInvocationNodeInfo, CorifiedValueNode, CorifiedVerbInvocationNode, ErrorCatcherNode, ErrorNode, Expression, FloatNode, Indexer, InfoNode, IntegerNode, Invocation, ListAssignmentNode, ListNode, MapEntryNode, MapNode, NegatedNode, NegativeNode, ObjectIdNode, PropertyAccessor, PropertyAccessorNode, PropertyAccessorNodeInfo, PropertyAssignmentNode, RangeIndexerNode, RangeIndexerNodeInfo, StringNode, Value, VariableAssignmentNode, VariableNode, VerbInvocationNode, VerbInvocationNodeInfo } from './nodes';

function hasNoIndexerAccessorOrInvocation(context: Primary_expressionContext): boolean {
	return (context.indexer_list().length === 0 && context.property_accessor_list().length === 0 && context.verb_invocation_list().length === 0 && context.bf_invocation_list().length === 0);
}

function generateNodeFromInfo(context: ParserRuleContext, object: Expression, info: InfoNode): Indexer | PropertyAccessor | Invocation {
	const position = ContextPosition.fromValues(object.position.startToken, info.position.stopToken);

	if (info instanceof ArgumentIndexerNodeInfo) {
		return new ArgumentIndexerNode(position, object, info.argument);
	} else if (info instanceof RangeIndexerNodeInfo) {
		return new RangeIndexerNode(position, object, info.start, info.end);
	} else if (info instanceof PropertyAccessorNodeInfo) {
		return new PropertyAccessorNode(position, object, info.name);
	} else if (info instanceof ComputedPropertyAccessorNodeInfo) {
		return new ComputedPropertyAccessorNode(position, object, info.name);
	} else if (info instanceof VerbInvocationNodeInfo) {
		return new VerbInvocationNode(position, object, info.name, info.arguments);
	} else if (info instanceof ComputedVerbInvocationNodeInfo) {
		return new ComputedVerbInvocationNode(position, object, info.name, info.arguments);
	} else if (info instanceof CallInfo) {
		if (object.toString().startsWith('$')) {
			return new CorifiedVerbInvocationNode(position, object, info.arguments);
		} else {
			return new BuiltInFunctionInvocationNode(position, object.toString(), info.arguments);
		}
	}

	throw NodeGenerationError.fromContext(context);
}

class ValueGenerator extends SingleValueVisitor<Value> {
	public override visitObject_id = (context: Object_idContext): Expression => {
		return new ObjectIdNode(ContextPosition.fromContext(context), getContextAsText(context));
	}

	public override visitCorified_value = (context: Corified_valueContext): Expression => {
		return new CorifiedValueNode(ContextPosition.fromContext(context), getContextAsText(context.identifier()));
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

	public static generate<T extends Value>(context: Primary_expression_startContext): T {
		const generator = new ValueGenerator();
		const result = generator.visit(context) as T;

		if (!result) {
			throw NodeGenerationError.fromContext(context);
		}

		return result;
	}

	public static generateValue(context: Primary_expression_startContext): Expression {
		return ValueGenerator.generate<Expression>(context);
	}
}

export class ExpressionGenerator extends SingleValueVisitor<Expression> {
	public override visitPrimary_expression = (context: Primary_expressionContext): Expression => {
		if (hasNoIndexerAccessorOrInvocation(context)) {
			return ValueGenerator.generateValue(context._pe);
		}

		const children = context.children as ParserRuleContext[];
		let expression = ValueGenerator.generateValue(context._pe);

		for (let i = 1; i < children.length; i++) {
			const info = ExpressionGenerator.generate<InfoNode>(children[i] as ParserRuleContext);
			expression = generateNodeFromInfo(context, expression, info);
		}

		return expression;
	}

	public override visitPrimary_expression_start = (context: Primary_expression_startContext): Expression => {
		return ValueGenerator.generateValue(context);
	}

	public override visitParented_expression = (context: Parented_expressionContext): Expression => {
		return this.visit(context.expression());
	}

	public override visitAssignment = (context: AssignmentContext): Expression => {
		const leftNode = ExpressionGenerator.generateExpression(context.unary_expression());
		const rightNode = ExpressionGenerator.generateExpression(context.expression());

		if (leftNode instanceof VariableNode) {
			return new VariableAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		if (leftNode instanceof ListNode) {
			return new ListAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		if (leftNode instanceof PropertyAccessorNode) {
			return new PropertyAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		throw NotImplementedError.withMessage(context, 'assignment with left side not being a variable or list');
	}

	public override visitError_catcher = (context: Error_catcherContext): Expression => {
		const tryExpression = ExpressionGenerator.generateExpression(context._try_);
		const errorCodes = ExpressionGenerator.generate(context.error_codes().error_code_list());
		const onErrorExpression = ExpressionGenerator.generateExpression(context._on_error);

		return new ErrorCatcherNode(ContextPosition.fromContext(context), tryExpression, errorCodes, onErrorExpression);
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

	public override visitIndexer = (context: IndexerContext): ArgumentIndexerNodeInfo | RangeIndexerNodeInfo => {
		if (context._argument) {
			const argument = ExpressionGenerator.generateExpression(context._argument);
			return new ArgumentIndexerNodeInfo(ContextPosition.fromContext(context), argument);
		} else if (context._start && context._end) {
			const start = ExpressionGenerator.generateExpression(context._start);
			const end = ExpressionGenerator.generateExpression(context._end);
			return new RangeIndexerNodeInfo(ContextPosition.fromContext(context), start, end);
		} else {
			throw NodeGenerationError.fromContext(context);
		}
	}

	public override visitProperty_accessor = (context: Property_accessorContext): PropertyAccessorNodeInfo | ComputedPropertyAccessorNodeInfo => {
		const position = ContextPosition.fromContext(context);

		if (context.identifier()) {
			return new PropertyAccessorNodeInfo(position, getContextAsText(context.identifier()));
		}

		const nameExpression = ExpressionGenerator.generateExpression(context._computed_prop_arguments);

		return new ComputedPropertyAccessorNodeInfo(position, nameExpression);
	}

	public override visitVerb_invocation = (context: Verb_invocationContext): VerbInvocationNodeInfo | ComputedVerbInvocationNodeInfo => {
		const position = ContextPosition.fromContext(context);
		const argumentExpressions = ExpressionGenerator.generateExpressions(context._arguments);

		if (context.identifier()) {
			return new VerbInvocationNodeInfo(position, getContextAsText(context.identifier()), argumentExpressions);
		}

		const nameExpression = ExpressionGenerator.generateExpression(context._computed_verb_arguments);

		return new ComputedVerbInvocationNodeInfo(position, nameExpression, argumentExpressions);
	}

	public override visitBf_invocation = (context: Bf_invocationContext): CallInfo => {
		const position = ContextPosition.fromContext(context);
		const argumentExpressions = ExpressionGenerator.generateExpressions(context._arguments);
		return new CallInfo(position, argumentExpressions);
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

	public static generateExpressions(context: ExpressionsContext): Expression[] {
		const expressions = [];

		for (const subcontext of context.expression_list()) {
			const expression = ExpressionGenerator.generateExpression(subcontext);
			expressions.push(expression);
		}

		return expressions;
	}
}