import { ParserRuleContext } from 'antlr4';
import { Additive_expressionContext, And_expressionContext, Bf_invocationContext, Bool_literalContext, CommentContext, Complement_unary_expressionContext, Conditional_and_expressionContext, Conditional_or_expressionContext, Corified_objectContext, Empty_statementContext, Equality_expressionContext, Exclusive_or_expressionContext, Float_literalContext, IdentifierContext, Inclusive_or_expressionContext, Integer_literalContext, ListContext, MapContext, Map_entryContext, Multiplicative_expressionContext, Negated_unary_expressionContext, Negative_unary_expressionContext, Object_idContext, Relational_expressionContext, Shift_expressionContext, String_literalContext } from '../grammar/generated/MoocodeParser';
import { BaseNode, LiteralNode, ReferenceNode, TwoPartNode } from './abstract';
import { DocumentPosition, getContextAsText } from './common';

export type Statement = (IfStatementNode | Assignment | ReturnNode | CommentNode | EmptyStatementNode);
export type Expression = (Assignment | Computation | Value);
export type Computation = (Bitwise | Logical | Equality | Relational | Shift | Arithmetic | Invocation);
export type Assignment = (VariableAssignmentNode | ListAssignmentNode);
export type Logical = (ConditionalAndNode | ConditionalOrNode | NegatedNode);
export type Bitwise = (BitwiseAndNode | BitwiseInclusiveOrNode | BitwiseExclusiveOrNode);
export type Equality = (EqualNode | UnequalNode);
export type Relational = (GreaterThanNode | LessThanNode | GreaterOrEqualNode | LessOrEqualNode);
export type Shift = (ShiftLeftNode | ShiftRightNode);
export type Arithmetic = (AdditionNode | SubtractionNode | MultiplicationNode | DivisionNode | ModulationNode | NegativeNode);
export type Invocation = (VerbCallNode | BuiltInFunctionCallNode);
export type Value = (Literal | ObjectReference | ListNode | Map | PropertyAccessNode);
export type Map = (MapNode | MapEntryNode);
export type ObjectReference = (VariableNode | ObjectIdNode | CorifiedObjectNode);
export type Literal = (BooleanNode | IntegerNode | FloatNode | StringNode);

export type Int64 = number;
export type Float = number;

export class IfStatementNode extends BaseNode {
	private _if: IfNode;
	private _elseIfs: IfNode[];
	private _else: ElseNode | undefined;

	public get if() {
		return this._if;
	}

	public get elseifs() {
		return this._elseIfs;
	}

	public get else() {
		return this._else;
	}

	public constructor(context: ParserRuleContext, ifNode: IfNode, elseIfNodes?: IfNode[], elseNode?: ElseNode) {
		super(DocumentPosition.fromContext(context));

		this._if = ifNode;
		this._elseIfs = elseIfNodes ?? [];
		this._else = elseNode;
	}

	public toString(): string {
		return `${this._if.toString()}${this._elseIfs.map(x => `else${x.toString()}`)}${this._else?.toString()}\nendif\n`;
	}
}

export class IfNode extends BaseNode {
	private _conditions: Expression;
	private _body: Statement[];

	public get conditions() {
		return this._conditions;
	}

	public get body() {
		return this._body;
	}

	public constructor(context: ParserRuleContext, conditions: Expression, body?: Statement[]) {
		super(getPositionForIfNode(context, conditions, body));

		this._conditions = conditions;
		this._body = body ?? [];
	}

	public toString(): string {
		const start = `if (${this._conditions.toString()})\n`;

		if (this._body.length === 0) {
			return start;
		}

		return `${start}\t${this._body.map(x => x.toString()).join('\n\t')}\n`;
	}
}

function getPositionForIfNode(context: ParserRuleContext, conditions: Expression, body?: Statement[]): DocumentPosition {
	if (!body || body.length < 1) {
		return DocumentPosition.fromValues(context.start, conditions.position.stopToken);
	}

	const lastBodyStatement = body.at(body.length - 1);
	return DocumentPosition.fromValues(context.start, lastBodyStatement?.position.stopToken);
}

export class ElseNode extends BaseNode {
	private _body: Statement[];

	public get body(): Statement[] {
		return this._body;
	}

	public constructor(context: ParserRuleContext, body?: Statement[]) {
		super(DocumentPosition.fromContext(context));

		this._body = body ?? [];
	}

	public toString(): string {
		if (this._body.length === 0) {
			return 'else\n';
		}

		return `else\n\t${this._body.map(x => x.toString()).join('\n\t')}\n`;
	}
}

export class VariableAssignmentNode extends BaseNode {
	private _variable: VariableNode;
	private _value: Expression;

	public get variable(): VariableNode {
		return this._variable;
	}

	public get value(): Expression {
		return this._value;
	}

	public constructor(context: ParserRuleContext, variable: VariableNode, value: Expression) {
		super(DocumentPosition.fromContext(context));

		this._variable = variable;
		this._value = value;
	}

	public toString(): string {
		return `${this._variable.toString()} = ${this._value.toString()}`;
	}
}

export class ListAssignmentNode extends BaseNode {
	private _variables: Expression[];
	private _value: Expression;

	public get variables(): Expression[] {
		return this._variables;
	}

	public get value(): Expression {
		return this._value;
	}

	public constructor(context: ParserRuleContext, variables: ListNode, value: Expression) {
		super(DocumentPosition.fromContext(context));

		this._variables = variables.entries;
		this._value = value;
	}

	public toString(): string {
		return `${this._variables.toString()} = ${this._value.toString()}`;
	}
}

export class ReturnNode extends BaseNode {
	private _expression: Expression | undefined;

	public get expression(): Expression | undefined {
		return this._expression;
	}

	public constructor(context: ParserRuleContext, expression?: Expression) {
		super(DocumentPosition.fromContext(context));

		this._expression = expression;
	}

	public toString(): string {
		const base = super.toString();

		let expression = '';
		if (this._expression) {
			expression = ` ${this._expression.toString()}`;
		}

		return `return${expression}; (${base})`;
	}
}

export class CommentNode extends BaseNode {
	private _text: string;

	public get text(): string {
		return this._text;
	}

	public constructor(context: CommentContext) {
		super(DocumentPosition.fromContext(context));

		this._text = JSON.parse(context.STRING_LITERAL().getText());
	}

	public toString(): string {
		const base = super.toString();

		return `"${this._text}"; (${base})`;
	}
}

export class EmptyStatementNode extends BaseNode {
	public constructor(context: Empty_statementContext) {
		super(DocumentPosition.fromContext(context));
	}

	public toString(): string {
		const base = super.toString();

		return `<empty>; (${base})`;
	}
}

export class ConditionalAndNode extends TwoPartNode {
	public constructor(context: Conditional_and_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} && ${this._right.toString()}`
	}
}

export class ConditionalOrNode extends TwoPartNode {
	public constructor(context: Conditional_or_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} || ${this._right.toString()}`;
	}
}

export class BitwiseAndNode extends TwoPartNode {
	public constructor(context: And_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} &. ${this._right.toString()}`;
	}
}

export class BitwiseInclusiveOrNode extends TwoPartNode {
	public constructor(context: Inclusive_or_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} |. ${this._right.toString()}`;
	}
}

export class BitwiseExclusiveOrNode extends TwoPartNode {
	public constructor(context: Exclusive_or_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} ^. ${this._right.toString()}`;
	}
}

export class EqualNode extends TwoPartNode {
	public constructor(context: Equality_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} == ${this._right.toString()}`;
	}
}

export class UnequalNode extends TwoPartNode {
	public constructor(context: Equality_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} != ${this._right.toString()}`;
	}
}

export class GreaterThanNode extends TwoPartNode {
	public constructor(context: Relational_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} > ${this._right.toString()}`;
	}
}

export class LessThanNode extends TwoPartNode {
	public constructor(context: Relational_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} < ${this._right.toString()}`;
	}
}

export class GreaterOrEqualNode extends TwoPartNode {
	public constructor(context: Relational_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} >= ${this._right.toString()}`;
	}
}

export class LessOrEqualNode extends TwoPartNode {
	public constructor(context: Relational_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} <= ${this._right.toString()}`;
	}
}

export class ShiftLeftNode extends TwoPartNode {
	public constructor(context: Shift_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} << ${this._right.toString()}`;
	}
}

export class ShiftRightNode extends TwoPartNode {
	public constructor(context: Shift_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} >> ${this._right.toString()}`;
	}
}

export class AdditionNode extends TwoPartNode {
	public constructor(context: Additive_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} + ${this._right.toString()}`;
	}
}

export class SubtractionNode extends TwoPartNode {
	public constructor(context: Additive_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} - ${this._right.toString()}`;
	}
}

export class MultiplicationNode extends TwoPartNode {
	public constructor(context: Multiplicative_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} * ${this._right.toString()}`;
	}
}

export class DivisionNode extends TwoPartNode {
	public constructor(context: Multiplicative_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} / ${this._right.toString()}`;
	}
}

export class ModulationNode extends TwoPartNode {
	public constructor(context: Multiplicative_expressionContext, left: Expression, right: Expression) {
		super(context, left, right);
	}

	public toString(): string {
		return `${this._left.toString()} % ${this._right.toString()}`;
	}
}

export class NegativeNode extends BaseNode {
	private _innerNode: Expression;

	public get innerNode(): Expression {
		return this._innerNode;
	}

	public constructor(context: Negative_unary_expressionContext, innerNode: Expression) {
		super(DocumentPosition.fromContext(context));

		this._innerNode = innerNode;
	}

	public toString(): string {
		return `-${this._innerNode.toString()}`;
	}
}

export class NegatedNode extends BaseNode {
	private _innerNode: Expression;

	public get innerNode(): Expression {
		return this._innerNode;
	}

	public constructor(context: Negated_unary_expressionContext, innerNode: Expression) {
		super(DocumentPosition.fromContext(context));

		this._innerNode = innerNode;
	}

	public toString(): string {
		return `!${this._innerNode.toString()}`;
	}
}

export class ComplementNode extends BaseNode {
	private _innerNode: Expression;

	public get innerNode(): Expression {
		return this._innerNode;
	}

	public constructor(context: Complement_unary_expressionContext, innerNode: Expression) {
		super(DocumentPosition.fromContext(context));

		this._innerNode = innerNode;
	}

	public toString(): string {
		return `~${this._innerNode.toString()}`;
	}
}

export class VerbCallNode extends BaseNode {
	private _object: ObjectReference;
	private _name: string;
	private _arguments: Expression[];

	public get object(): ObjectReference {
		return this._object;
	}

	public get name(): string {
		return this._name
	}

	public get arguments(): Expression[] {
		return this._arguments;
	}

	public constructor(context: Bf_invocationContext, object: ObjectReference, name: string, functionArguments: Expression[]) {
		super(DocumentPosition.fromContext(context));

		this._object = object;
		this._name = name;
		this._arguments = functionArguments;
	}

	public toString(): string {
		return `${this._object.toString()}:${this._name}(${this._arguments.map(x => x.toString()).join(', ')})`;
	}
}

export class BuiltInFunctionCallNode extends BaseNode {
	private _name: string;
	private _arguments: Expression[];

	public get name(): string {
		return this._name
	}

	public get arguments(): Expression[] {
		return this._arguments;
	}

	public constructor(context: Bf_invocationContext, name: string, functionArguments: Expression[]) {
		super(DocumentPosition.fromContext(context));

		this._name = name;
		this._arguments = functionArguments;
	}

	public toString(): string {
		return `${this._name}(${this._arguments.map(x => x.toString()).join(', ')})`;
	}
}

export class PropertyAccessNode extends BaseNode {
	private _object: ObjectReference;
	private _name: string;

	public get object(): ObjectReference {
		return this._object;
	}

	public get name(): string {
		return this._name
	}

	public constructor(context: Bf_invocationContext, object: ObjectReference, name: string) {
		super(DocumentPosition.fromContext(context));

		this._object = object;
		this._name = name;
	}

	public toString(): string {
		return `${this._object.toString()}.${this._name}`;
	}
}

export class BooleanNode extends LiteralNode<boolean> {
	private constructor(position: DocumentPosition, value: boolean) {
		super(position, value);
	}

	public static fromContext(context: Bool_literalContext): BooleanNode {
		return new BooleanNode(DocumentPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}
}

export class IntegerNode extends LiteralNode<Int64> {
	private constructor(position: DocumentPosition, value: Int64) {
		super(position, value);
	}

	public static fromContext(context: Integer_literalContext): IntegerNode {
		return new IntegerNode(DocumentPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}
}

export class FloatNode extends LiteralNode<Float> {
	private constructor(position: DocumentPosition, value: Float) {
		super(position, value);
	}

	public static fromContext(context: Float_literalContext): FloatNode {
		return new FloatNode(DocumentPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}
}

export class StringNode extends LiteralNode<string> {
	private constructor(position: DocumentPosition, value: string) {
		super(position, value);
	}

	public static fromContext(context: String_literalContext): StringNode {
		return new StringNode(DocumentPosition.fromContext(context), JSON.parse(getContextAsText(context)));
	}
}

export class ListNode extends BaseNode {
	private _entries: Expression[];

	public get entries(): Expression[] {
		return this._entries;
	}

	public at(index: number): Expression | undefined {
		return this._entries.at(index);
	}

	public constructor(context: ListContext, entries: Expression[]) {
		super(DocumentPosition.fromContext(context));

		this._entries = entries;
	}

	public toString(): string {
		return `{${this._entries.map(x => x.toString()).join(', ')}}`;
	}
}

export class MapEntryNode extends BaseNode {
	private _key: Expression;
	private _value: Expression;

	public get key(): Expression {
		return this._key;
	}

	public get value(): Expression {
		return this._value;
	}

	public constructor(context: Map_entryContext, key: Expression, value: Expression) {
		super(DocumentPosition.fromContext(context));

		this._key = key;
		this._value = value;
	}

	public toString(): string {
		return `${this._key} -> ${this._value}`;
	}
}

export class MapNode extends BaseNode {
	private _entries: MapEntryNode[];

	public get entries(): MapEntryNode[] {
		return this._entries;
	}

	public constructor(context: MapContext, entries: MapEntryNode[]) {
		super(DocumentPosition.fromContext(context));

		this._entries = entries;
	}
}

export class VariableNode extends ReferenceNode {
	private constructor(position: DocumentPosition, name: string) {
		super(position, name);
	}

	public static fromContext(context: IdentifierContext): VariableNode {
		return new VariableNode(DocumentPosition.fromContext(context), getContextAsText(context));
	}

	public toString(): string {
		return `${this._name}`;
	}
}

export class ObjectIdNode extends ReferenceNode {
	private constructor(position: DocumentPosition, name: string) {
		super(position, name);
	}

	public static fromContext(context: Object_idContext): ObjectIdNode {
		return new ObjectIdNode(DocumentPosition.fromContext(context), getContextAsText(context));
	}

	public toString(): string {
		return `#${this._name}`;
	}
}

export class CorifiedObjectNode extends ReferenceNode {
	private constructor(position: DocumentPosition, name: string) {
		super(position, name);
	}

	public static fromContext(context: Corified_objectContext): CorifiedObjectNode {
		return new CorifiedObjectNode(DocumentPosition.fromContext(context), getContextAsText(context));
	}

	public toString(): string {
		return `\$${this._name}`;
	}
}