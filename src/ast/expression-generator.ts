import { ParserRuleContext } from 'antlr4';
import { logContext } from '../../tests/test-utils/common';
import { AssignmentContext, Bool_literalContext, Corified_objectContext, Float_literalContext, IdentifierContext, Integer_literalContext, ListContext, MapContext, Map_entryContext, Object_idContext, Primary_expressionContext, String_literalContext } from '../grammar/generated/MoocodeParser';
import { SingleValueVisitor } from './abstract';
import { NodeGenerationError, NotImplementedError } from './error';
import { BooleanNode, CorifiedObjectNode, ErrorNode, Expression, FloatNode, IntegerNode, ListAssignmentNode, ListNode, MapEntryNode, MapNode, ObjectIdNode, StringNode, VariableAssignmentNode, VariableNode } from './nodes';

export class ExpressionGenerator extends SingleValueVisitor<Expression> {
	public override visitPrimary_expression = (context: Primary_expressionContext): Expression => {
		const indexers = context.indexer_list();
		const propertyAccessors = context.property_access_list();
		const verbInvocations = context.verb_invocation_list();
		const bfInvocations = context.bf_invocation_list();

		if (indexers.length === 0 && propertyAccessors.length === 0 && verbInvocations.length === 0 && bfInvocations.length === 0) {
			return this.visit(context._pe);
		}

		// TODO: probably needs some iteration over all children to preserve order of items

		logContext(context);

		return ErrorNode.fromContext(context);
	}

	public override visitAssignment = (context: AssignmentContext): Expression => {
		const leftNode = ExpressionGenerator.generateExpression(context.unary_expression());
		const rightNode = ExpressionGenerator.generateExpression(context.expression());

		if (leftNode instanceof VariableNode) {
			return new VariableAssignmentNode(context, leftNode, rightNode);
		}

		if (leftNode instanceof ListNode) {
			return new ListAssignmentNode(context, leftNode, rightNode);
		}

		throw new NotImplementedError('assignment with left side not being a variable or list');
	}

	public override visitObject_id = (context: Object_idContext): Expression => {
		return ObjectIdNode.fromContext(context);
	}

	public override visitCorified_object = (context: Corified_objectContext): Expression => {
		return CorifiedObjectNode.fromContext(context);
	}

	public override visitIdentifier = (context: IdentifierContext): Expression => {
		return VariableNode.fromContext(context);
	}

	public override visitMap = (context: MapContext): Expression => {
		const entries = Array<MapEntryNode>();

		for (const x of context.map_entry_list()) {
			entries.push(ExpressionGenerator.generate<MapEntryNode>(x));
		}

		return new MapNode(context, entries);
	}

	public override visitMap_entry = (context: Map_entryContext): Expression => {
		const key = ExpressionGenerator.generateExpression(context._map_key);
		const value = ExpressionGenerator.generateExpression(context._map_value);

		return new MapEntryNode(context, key, value);
	}

	public override visitList = (context: ListContext): Expression => {
		const entries = Array<Expression>();

		for (const x of context.expression_list()) {
			entries.push(ExpressionGenerator.generateExpression(x));
		}

		return new ListNode(context, entries);
	}

	public override visitString_literal = (context: String_literalContext): Expression => {
		return StringNode.fromContext(context);
	}

	public override visitInteger_literal = (context: Integer_literalContext): Expression => {
		return IntegerNode.fromContext(context);
	}

	public override visitFloat_literal = (context: Float_literalContext): Expression => {
		return FloatNode.fromContext(context);
	}

	public override visitBool_literal = (context: Bool_literalContext): Expression => {
		return BooleanNode.fromContext(context);
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