import { ParserRuleContext } from 'antlr4';
import { AssignmentContext, Bf_invocationContext, Complement_unary_expressionContext, ExpressionsContext, IndexerContext, Negated_unary_expressionContext, Negative_unary_expressionContext, Primary_expressionContext, Primary_expression_startContext, Property_accessorContext, Verb_invocationContext } from '../grammar/generated/MoocodeParser';
import { BaseNode, SingleValueVisitor } from './abstract';
import { ContextPosition, getContextAsText } from './common';
import { NodeGenerationError } from './error';
import { ArgumentIndexerNode, BuiltInFunctionInvocationNode, ComplementNode, ComputedPropertyAccessorNode, ComputedVerbInvocationNode, CorifiedVerbInvocationNode, Expression, Indexer, Invocation, ListAssignmentNode, ListNode, NegatedNode, NegativeNode, PropertyAccessor, PropertyAccessorNode, PropertyAssignmentNode, RangeIndexerNode, Value, VariableAssignmentNode, VariableNode, VerbInvocationNode } from './nodes';
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

export class ExpressionGenerator extends SingleValueVisitor<Expression> {
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

	public override visitAssignment = (context: AssignmentContext): VariableAssignmentNode | ListAssignmentNode | PropertyAssignmentNode => {
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

		throw NodeGenerationError.fromContext(context);
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