import { ParserRuleContext } from 'antlr4';
import MoocodeLexer from '../grammar/generated/MoocodeLexer';
import { Additive_expressionContext, And_expressionContext, AssignmentContext, Complement_unary_expressionContext, Conditional_and_expressionContext, Conditional_expressionContext, Conditional_in_expressionContext, Conditional_or_expressionContext, Equality_expressionContext, Exclusive_or_expressionContext, ExpressionsContext, Inclusive_or_expressionContext, IndexerContext, Multiplicative_expressionContext, Negated_unary_expressionContext, Negative_unary_expressionContext, Primary_expressionContext, Primary_expression_startContext, Property_accessorContext, Relational_expressionContext, Shift_expressionContext, Verb_invocationContext } from '../grammar/generated/MoocodeParser';
import { BaseNode, MoocodeVisitor } from './abstract';
import { ContextPosition, getContextAsText, is } from './common';
import { NodeGenerationError } from './error';
import { AdditionNode, BitwiseAndNode, BitwiseExclusiveOrNode, BitwiseInclusiveOrNode, ComplementNode, ComputedPropertyAccessorNode, ComputedVerbInvocationNode, ConditionalAndNode, ConditionalInNode, ConditionalNode, ConditionalOrNode, DivisionNode, EqualsNode, Expression, GreaterOrEqualNode, GreaterThanNode, Indexer, IndexerNode, Invocation, LessOrEqualNode, LessThanNode, ListAssignmentNode, ListNode, ModulationNode, MultiplicationNode, NegatedNode, NegativeNode, OptionalTargetAssignmentNode, OptionalVariableNode, PartialComputedPropertyAccessorNode, PartialComputedVerbInvocationNode, PartialIndexerNode, PartialPropertyAccessorNode, PartialVerbInvocationNode, PropertyAccessor, PropertyAccessorNode, PropertyAssignmentNode, RangeIndexerNode, ShiftLeftNode, ShiftRightNode, SubtractionNode, UnequalsNode, Value, VariableAssignmentNode, VariableNode, VerbInvocationNode } from './nodes';
import { ValueGenerator } from './value-generator';

function hasNoIndexerAccessorOrInvocation(context: Primary_expressionContext): boolean {
	return (context.indexer_list().length === 0 && context.property_accessor_list().length === 0 && context.verb_invocation_list().length === 0);
}

function generateMultiPartNode<T extends BaseNode>(context: ParserRuleContext, create: (position: ContextPosition, left: Expression | undefined, operator: ParserRuleContext | undefined, right: Expression | undefined) => T | undefined): T | Expression | undefined {
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

		if (result) {
			const position = ContextPosition.fromValues(result.position.startToken, rightExpression?.position.stopToken);
			result = create(position, result, children[i], rightExpression);
		}
	}

	return result;
}

export class ExpressionGenerator extends MoocodeVisitor<Expression> {
	public override visitAssignment = (context: AssignmentContext): VariableAssignmentNode | OptionalTargetAssignmentNode | ListAssignmentNode | PropertyAssignmentNode | undefined => {
		const leftNode = ExpressionGenerator.generateExpression(context.unary_expression());
		const rightNode = ExpressionGenerator.generateExpression(context.expression());

		if (leftNode instanceof VariableNode) {
			return new VariableAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		if (leftNode instanceof OptionalVariableNode) {
			return new OptionalTargetAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		if (leftNode instanceof ListNode) {
			return new ListAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		if (leftNode instanceof PropertyAccessorNode || leftNode instanceof ComputedPropertyAccessorNode) {
			return new PropertyAssignmentNode(ContextPosition.fromContext(context), leftNode, rightNode);
		}

		throw NodeGenerationError.fromContext(context);
	};

	public override visitConditional_expression = (context: Conditional_expressionContext): ConditionalNode | Expression | undefined => {
		const conditionalIn = context.conditional_in_expression();

		if (!context._true_ex && !context._false_ex) {
			return ExpressionGenerator.generateExpression(conditionalIn);
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
	};

	public override visitConditional_in_expression = (context: Conditional_in_expressionContext): ConditionalInNode | Expression | undefined => {
		return generateMultiPartNode(context, (position, left, _, right) => new ConditionalInNode(position, left, right));
	};

	public override visitConditional_or_expression = (context: Conditional_or_expressionContext): ConditionalOrNode | Expression | undefined => {
		return generateMultiPartNode(context, (position, left, _, right) => new ConditionalOrNode(position, left, right));
	};

	public override visitConditional_and_expression = (context: Conditional_and_expressionContext): ConditionalAndNode | Expression | undefined => {
		return generateMultiPartNode(context, (position, left, _, right) => new ConditionalAndNode(position, left, right));
	};

	public override visitInclusive_or_expression = (context: Inclusive_or_expressionContext): BitwiseInclusiveOrNode | Expression | undefined => {
		return generateMultiPartNode(context, (position, left, _, right) => new BitwiseInclusiveOrNode(position, left, right));
	};

	public override visitExclusive_or_expression = (context: Exclusive_or_expressionContext): BitwiseExclusiveOrNode | Expression | undefined => {
		return generateMultiPartNode(context, (position, left, _, right) => new BitwiseExclusiveOrNode(position, left, right));
	};

	public override visitAnd_expression = (context: And_expressionContext): BitwiseAndNode | Expression | undefined => {
		return generateMultiPartNode(context, (position, left, _, right) => new BitwiseAndNode(position, left, right));
	};

	public override visitEquality_expression = (context: Equality_expressionContext): EqualsNode | UnequalsNode | Expression | undefined => {
		return generateMultiPartNode(context, (position, left, operator, right) => {
			if (is(operator, MoocodeLexer.OP_EQ)) {
				return new EqualsNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.OP_NE)) {
				return new UnequalsNode(position, left, right);
			}

			throw NodeGenerationError.fromContext(context);
		});
	};

	public override visitRelational_expression = (context: Relational_expressionContext): LessThanNode | GreaterThanNode | LessOrEqualNode | GreaterOrEqualNode | Expression | undefined => {
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
	};

	public override visitShift_expression = (context: Shift_expressionContext): ShiftLeftNode | ShiftRightNode | Expression | undefined => {
		return generateMultiPartNode(context, (position, left, operator, right) => {
			if (is(operator, MoocodeLexer.LOG_SHIFT_LEFT)) {
				return new ShiftLeftNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.LOG_SHIFT_RIGHT)) {
				return new ShiftRightNode(position, left, right);
			}

			throw NodeGenerationError.fromContext(context);
		});
	};

	public override visitAdditive_expression = (context: Additive_expressionContext): AdditionNode | SubtractionNode | Expression | undefined => {
		return generateMultiPartNode(context, (position, left, operator, right) => {
			if (is(operator, MoocodeLexer.PLUS)) {
				return new AdditionNode(position, left, right);
			}

			if (is(operator, MoocodeLexer.MINUS)) {
				return new SubtractionNode(position, left, right);
			}

			throw NodeGenerationError.fromContext(context);
		});
	};

	public override visitMultiplicative_expression = (context: Multiplicative_expressionContext): MultiplicationNode | DivisionNode | ModulationNode | Expression | undefined => {
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
	};

	public override visitPrimary_expression = (context: Primary_expressionContext): Value | Indexer | PropertyAccessor | Invocation | undefined => {
		if (hasNoIndexerAccessorOrInvocation(context)) {
			return ValueGenerator.generateValue(context._pe);
		}

		const children = context.children as ParserRuleContext[];
		let expression: Value | Indexer | PropertyAccessor | Invocation | undefined;
		expression = ValueGenerator.generateValue(context._pe);

		for (let i = 1; i < children.length; i++) {
			expression = PrimaryExpressionNodeGenerator.generate(expression, children[i] as ParserRuleContext);
		}

		return expression;
	};

	public override visitPrimary_expression_start = (context: Primary_expression_startContext): Value | undefined => {
		return ValueGenerator.generateValue(context);
	};

	public override visitNegated_unary_expression = (context: Negated_unary_expressionContext): NegatedNode | undefined => {
		const innerExpression = ExpressionGenerator.generateExpression(context.unary_expression());
		return new NegatedNode(ContextPosition.fromContext(context), innerExpression);
	};

	public override visitNegative_unary_expression = (context: Negative_unary_expressionContext): NegativeNode | undefined => {
		const innerExpression = ExpressionGenerator.generateExpression(context.unary_expression());
		return new NegativeNode(ContextPosition.fromContext(context), innerExpression);
	};

	public override visitComplement_unary_expression = (context: Complement_unary_expressionContext): ComplementNode | undefined => {
		const innerExpression = ExpressionGenerator.generateExpression(context.unary_expression());
		return new ComplementNode(ContextPosition.fromContext(context), innerExpression);
	};

	private constructor() {
		super();
	}

	public static generate<T extends Expression>(context: ParserRuleContext | undefined): T | undefined {
		if (!context) {
			return undefined;
		}

		const generator = new ExpressionGenerator();
		const result = generator.visit(context) as T;

		if (!result) {
			return undefined;
		}

		return result;
	}

	public static generateExpression(context: ParserRuleContext | undefined): Expression | undefined {
		return ExpressionGenerator.generate<Expression>(context);
	}

	public static generateExpressions(context: ExpressionsContext | undefined): (Expression | undefined)[] {
		const expressions: (Expression | undefined)[] = [];

		if (!context) {
			return expressions;
		}

		for (const subcontext of context.expression_list()) {
			const expression = ExpressionGenerator.generateExpression(subcontext);

			if (expression) {
				expressions.push(expression);
			}
		}

		return expressions;
	}
}

class PrimaryExpressionNodeGenerator extends MoocodeVisitor<Indexer | PropertyAccessor | Invocation | undefined> {
	public override visitIndexer = (context: IndexerContext): Indexer | undefined => {
		const position = this.getPosition(context);

		if (context._argument) {
			const argument = ExpressionGenerator.generateExpression(context._argument);

			if (context.CLOSE_BRACKET()) {
				return new IndexerNode(position, this._invokingEntity, argument);
			}

			return new PartialIndexerNode(position, this._invokingEntity, argument);
		} else if (context._start && context._end) {
			const start = ExpressionGenerator.generateExpression(context._start);
			const end = ExpressionGenerator.generateExpression(context._end);
			return new RangeIndexerNode(position, this._invokingEntity, start, end);
		}

		throw NodeGenerationError.fromContext(context);
	};

	public override visitProperty_accessor = (context: Property_accessorContext): PropertyAccessor | undefined => {
		const position = this.getPosition(context);

		if (context.identifier()) {
			return new PropertyAccessorNode(position, this._invokingEntity, getContextAsText(context.identifier()));
		}

		if (!context.OPEN_PARENS()) {
			return new PartialPropertyAccessorNode(position, this._invokingEntity, undefined);
		}

		const nameExpression = ExpressionGenerator.generateExpression(context._computed_prop_arguments);

		if (context.CLOSE_PARENS()) {
			return new ComputedPropertyAccessorNode(position, this._invokingEntity, nameExpression);
		}

		return new PartialComputedPropertyAccessorNode(position, this._invokingEntity, nameExpression);
	};

	public override visitVerb_invocation = (context: Verb_invocationContext): VerbInvocationNode | ComputedVerbInvocationNode | undefined => {
		const position = this.getPosition(context);
		const argumentExpressions = ExpressionGenerator.generateExpressions(context._arguments);

		if (context.identifier()) {
			if (context.CLOSE_PARENS_list().length < 1) {
				return new PartialVerbInvocationNode(position, this._invokingEntity, getContextAsText(context.identifier()), argumentExpressions);
			}

			return new VerbInvocationNode(position, this._invokingEntity, getContextAsText(context.identifier()), argumentExpressions);
		}

		const nameExpression = ExpressionGenerator.generateExpression(context._computed_verb_arguments);

		if (context.CLOSE_PARENS_list().length < 2) {
			return new PartialComputedVerbInvocationNode(position, this._invokingEntity, nameExpression, argumentExpressions);
		}

		return new ComputedVerbInvocationNode(position, this._invokingEntity, nameExpression, argumentExpressions);
	};

	private _invokingEntity: Value | Indexer | PropertyAccessor | Invocation | undefined;

	private constructor(invokingEntity: Value | Indexer | PropertyAccessor | Invocation | undefined) {
		super();

		this._invokingEntity = invokingEntity;
	}

	private getPosition(context: ParserRuleContext | undefined): ContextPosition {
		return ContextPosition.fromValues(this._invokingEntity?.position.startToken, context?.stop);
	}

	public static generate(invokingEntity: Value | Indexer | PropertyAccessor | Invocation | undefined, context: ParserRuleContext | undefined): Indexer | PropertyAccessor | Invocation | undefined {
		if (!context) {
			return undefined;
		}

		const generator = new PrimaryExpressionNodeGenerator(invokingEntity);
		const result = generator.visit(context);

		if (!result) {
			throw NodeGenerationError.fromContext(context);
		}

		return result;
	}
}