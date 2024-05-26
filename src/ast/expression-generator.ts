import { ParserRuleContext } from 'antlr4';
import MoocodeLexer from '../grammar/generated/MoocodeLexer';
import { Additive_expressionContext, And_expressionContext, AssignmentContext, Bf_invocationContext, Complement_unary_expressionContext, Conditional_and_expressionContext, Conditional_expressionContext, Conditional_in_expressionContext, Conditional_or_expressionContext, Equality_expressionContext, Exclusive_or_expressionContext, ExpressionsContext, Inclusive_or_expressionContext, IndexerContext, Multiplicative_expressionContext, Negated_unary_expressionContext, Negative_unary_expressionContext, Primary_expressionContext, Primary_expression_startContext, Property_accessorContext, Relational_expressionContext, Shift_expressionContext, Verb_invocationContext } from '../grammar/generated/MoocodeParser';
import { BaseNode, SingleValueVisitor } from './abstract';
import { ContextPosition, getContextAsText, is } from './common';
import { NodeGenerationError } from './error';
import { AdditionNode, ArgumentIndexerNode, BitwiseAndNode, BitwiseExclusiveOrNode, BitwiseInclusiveOrNode, BuiltInFunctionInvocationNode, ComplementNode, ComputedPropertyAccessorNode, ComputedVerbInvocationNode, ConditionalAndNode, ConditionalInNode, ConditionalNode, ConditionalOrNode, CorifiedVerbInvocationNode, DivisionNode, EqualsNode, Expression, GreaterOrEqualNode, GreaterThanNode, Indexer, Invocation, LessOrEqualNode, LessThanNode, ListAssignmentNode, ListNode, ModulationNode, MultiplicationNode, NegatedNode, NegativeNode, OptionalTargetAssignmentNode, OptionalTargetNode, PropertyAccessor, PropertyAccessorNode, PropertyAssignmentNode, RangeIndexerNode, ShiftLeftNode, ShiftRightNode, SubtractionNode, UnequalsNode, Value, VariableAssignmentNode, VariableNode, VerbInvocationNode } from './nodes';
import { ValueGenerator } from './value-generator';

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

function generateMultiPartNode<T extends BaseNode>(context: ParserRuleContext, create: (position: ContextPosition, left: Expression, operator: ParserRuleContext, right: Expression) => T): T | Expression {
	const children = (context.children ?? []) as ParserRuleContext[];

	if (children.length === 0) {
		throw NodeGenerationError.fromContext(context);
	}

	if (children.length === 1) {
		return ExpressionGenerator.generateExpression(children[0]);
	}

	if ((children.length + 1) % 2 != 0) {
		throw NodeGenerationError.fromContext(context);
	}

	const initialPosition = ContextPosition.fromValues(context.start, children[2].stop);
	const initialLeftExpression = ExpressionGenerator.generateExpression(children[0]);
	const initialRightExpression = ExpressionGenerator.generateExpression(children[2]);

	let result = create(initialPosition, initialLeftExpression, children[1], initialRightExpression);

	for (let i = 3; i < (children.length - 1); i += 2) {
		const rightExpression = ExpressionGenerator.generateExpression(children[i + 1]);
		const position = ContextPosition.fromValues(result.position.startToken, rightExpression.position.stopToken);
		result = create(position, result, children[i], rightExpression);
	}

	return result;
}

export class ExpressionGenerator extends SingleValueVisitor<Expression> {
	public override visitAssignment = (context: AssignmentContext): VariableAssignmentNode | OptionalTargetAssignmentNode | ListAssignmentNode | PropertyAssignmentNode => {
		const leftNode = ExpressionGenerator.generateExpression(context.unary_expression());
		const rightNode = ExpressionGenerator.generateExpression(context.expression());

		if (leftNode instanceof VariableNode) {
			return new VariableAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		if (leftNode instanceof OptionalTargetNode) {
			return new OptionalTargetAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		if (leftNode instanceof ListNode) {
			return new ListAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		if (leftNode instanceof PropertyAccessorNode || leftNode instanceof ComputedPropertyAccessorNode) {
			return new PropertyAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		throw NodeGenerationError.fromContext(context);
	}

	public override visitConditional_expression = (context: Conditional_expressionContext): ConditionalNode | Expression => {
		const conditionalIn = context.conditional_in_expression();

		if (!context._true_ex && !context._false_ex) {
			return this.visit(conditionalIn);
		}

		if (!context._true_ex) {
			throw NodeGenerationError.fromContext(context);
		}

		if (!context._false_ex) {
			throw NodeGenerationError.fromContext(context);
		}

		const position = ContextPosition.fromContext(context);
		const conditions = ExpressionGenerator.generateExpression(conditionalIn);
		const ifTrue = ExpressionGenerator.generateExpression(context._true_ex);
		const ifFalse = ExpressionGenerator.generateExpression(context._false_ex);

		return new ConditionalNode(position, conditions, ifTrue, ifFalse);
	}

	public override visitConditional_in_expression = (context: Conditional_in_expressionContext): ConditionalInNode | Expression => {
		return generateMultiPartNode(context, (position, left, _, right) => new ConditionalInNode(position, left, right));
	}

	public override visitConditional_or_expression = (context: Conditional_or_expressionContext): ConditionalOrNode | Expression => {
		return generateMultiPartNode(context, (position, left, _, right) => new ConditionalOrNode(position, left, right));
	}

	public override visitConditional_and_expression = (context: Conditional_and_expressionContext): ConditionalAndNode | Expression => {
		return generateMultiPartNode(context, (position, left, _, right) => new ConditionalAndNode(position, left, right));
	}

	public override visitInclusive_or_expression = (context: Inclusive_or_expressionContext): BitwiseInclusiveOrNode | Expression => {
		return generateMultiPartNode(context, (position, left, _, right) => new BitwiseInclusiveOrNode(position, left, right));
	}

	public override visitExclusive_or_expression = (context: Exclusive_or_expressionContext): BitwiseExclusiveOrNode | Expression => {
		return generateMultiPartNode(context, (position, left, _, right) => new BitwiseExclusiveOrNode(position, left, right));
	}

	public override visitAnd_expression = (context: And_expressionContext): BitwiseAndNode | Expression => {
		return generateMultiPartNode(context, (position, left, _, right) => new BitwiseAndNode(position, left, right));
	}

	public override visitEquality_expression = (context: Equality_expressionContext): EqualsNode | UnequalsNode | Expression => {
		return generateMultiPartNode(context, (position, left, operator, right) => {
			if (is(operator, MoocodeLexer.OP_EQ)) {
				return new EqualsNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.OP_NE)) {
				return new UnequalsNode(position, left, right);
			}

			throw NodeGenerationError.fromContext(context);
		});
	}

	public override visitRelational_expression = (context: Relational_expressionContext): LessThanNode | GreaterThanNode | LessOrEqualNode | GreaterOrEqualNode | Expression => {
		return generateMultiPartNode(context, (position, left, operator, right) => {
			if (is(operator, MoocodeLexer.OP_LT)) {
				return new LessThanNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.OP_GT)) {
				return new GreaterThanNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.OP_LE)) {
				return new LessOrEqualNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.OP_GE)) {
				return new GreaterOrEqualNode(position, left, right);
			}

			throw NodeGenerationError.fromContext(context);
		});
	}

	public override visitShift_expression = (context: Shift_expressionContext): ShiftLeftNode | ShiftRightNode | Expression => {
		return generateMultiPartNode(context, (position, left, operator, right) => {
			if (is(operator, MoocodeLexer.LOG_SHIFT_LEFT)) {
				return new ShiftLeftNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.LOG_SHIFT_RIGHT)) {
				return new ShiftRightNode(position, left, right);
			}

			throw NodeGenerationError.fromContext(context);
		});
	}

	public override visitAdditive_expression = (context: Additive_expressionContext): AdditionNode | SubtractionNode | Expression => {
		return generateMultiPartNode(context, (position, left, operator, right) => {
			if (is(operator, MoocodeLexer.PLUS)) {
				return new AdditionNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.MINUS)) {
				return new SubtractionNode(position, left, right);
			}

			throw NodeGenerationError.fromContext(context);
		});
	}

	public override visitMultiplicative_expression = (context: Multiplicative_expressionContext): MultiplicationNode | DivisionNode | ModulationNode | Expression => {
		return generateMultiPartNode(context, (position, left, operator, right) => {
			if (is(operator, MoocodeLexer.STAR)) {
				return new MultiplicationNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.DIV)) {
				return new DivisionNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.PERCENT)) {
				return new ModulationNode(position, left, right);
			}

			throw NodeGenerationError.fromContext(context);
		});
	}

	public override visitPrimary_expression = (context: Primary_expressionContext): Value | Indexer | PropertyAccessor | Invocation => {
		if (hasNoIndexerAccessorOrInvocation(context)) {
			return ValueGenerator.generateValue(context._pe);
		}

		const children = context.children as ParserRuleContext[];
		let expression: Value | Indexer | PropertyAccessor | Invocation;
		expression = ValueGenerator.generateValue(context._pe);

		for (let i = 1; i < children.length; i++) {
			const info = InfoNodeGenerator.generateInfoNode(children[i] as ParserRuleContext);
			expression = generateNodeFromInfo(context, expression, info);
		}

		return expression;
	}

	public override visitPrimary_expression_start = (context: Primary_expression_startContext): Value => {
		return ValueGenerator.generateValue(context);
	}

	public override visitNegated_unary_expression = (context: Negated_unary_expressionContext): NegatedNode => {
		const innerExpression = ExpressionGenerator.generateExpression(context.unary_expression());
		return new NegatedNode(ContextPosition.fromContext(context), innerExpression);
	}

	public override visitNegative_unary_expression = (context: Negative_unary_expressionContext): NegativeNode => {
		const innerExpression = ExpressionGenerator.generateExpression(context.unary_expression());
		return new NegativeNode(ContextPosition.fromContext(context), innerExpression);
	}

	public override visitComplement_unary_expression = (context: Complement_unary_expressionContext): ComplementNode => {
		const innerExpression = ExpressionGenerator.generateExpression(context.unary_expression());
		return new ComplementNode(ContextPosition.fromContext(context), innerExpression);
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

class InfoNodeGenerator extends SingleValueVisitor<InfoNode> {
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

	public static generate<T extends InfoNode>(context: ParserRuleContext): T {
		const generator = new InfoNodeGenerator();
		const result = generator.visit(context) as T;

		if (!result) {
			throw NodeGenerationError.fromContext(context);
		}

		return result;
	}

	public static generateInfoNode(context: ParserRuleContext): InfoNode {
		return InfoNodeGenerator.generate<InfoNode>(context);
	}
}

type InfoNode = (ArgumentIndexerNodeInfo | RangeIndexerNodeInfo | PropertyAccessorNodeInfo | ComputedPropertyAccessorNodeInfo | VerbInvocationNodeInfo | ComputedVerbInvocationNodeInfo | CallInfo);

class ArgumentIndexerNodeInfo extends BaseNode {
	private _argument: Expression;

	public get argument(): Expression {
		return this._argument;
	}

	public constructor(position: ContextPosition, argument: Expression) {
		super(position);

		this._argument = argument;
	}
}

class RangeIndexerNodeInfo extends BaseNode {
	private _start: Expression;
	private _end: Expression;

	public get start(): Expression {
		return this._start
	}

	public get end(): Expression {
		return this._end
	}

	public constructor(position: ContextPosition, start: Expression, end: Expression) {
		super(position);

		this._start = start;
		this._end = end;
	}
}

class PropertyAccessorNodeInfo extends BaseNode {
	private _name: string;

	public get name(): string {
		return this._name
	}

	public constructor(position: ContextPosition, name: string) {
		super(position);

		this._name = name;
	}
}

class ComputedPropertyAccessorNodeInfo extends BaseNode {
	private _name: Expression;

	public get name(): Expression {
		return this._name
	}

	public constructor(position: ContextPosition, name: Expression) {
		super(position);

		this._name = name;
	}
}

class VerbInvocationNodeInfo extends BaseNode {
	private _name: string;
	private _arguments: Expression[];

	public get name(): string {
		return this._name
	}

	public get arguments(): Expression[] {
		return this._arguments;
	}

	public constructor(position: ContextPosition, name: string, functionArguments: Expression[]) {
		super(position);

		this._name = name;
		this._arguments = functionArguments;
	}
}

class ComputedVerbInvocationNodeInfo extends BaseNode {
	private _name: Expression;
	private _arguments: Expression[];

	public get name(): Expression {
		return this._name
	}

	public get arguments(): Expression[] {
		return this._arguments;
	}

	public constructor(position: ContextPosition, name: Expression, functionArguments: Expression[]) {
		super(position);

		this._name = name;
		this._arguments = functionArguments;
	}
}

class CallInfo extends BaseNode {
	private _arguments: Expression[];

	public get arguments(): Expression[] {
		return this._arguments;
	}

	public constructor(position: ContextPosition, functionArguments: Expression[]) {
		super(position);

		this._arguments = functionArguments;
	}
}