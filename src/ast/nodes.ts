import { BaseNode, FlowControlStatementNode, LiteralNode, ReferenceNode, TwoPartNode, WrappedNode } from './abstract';
import { ContextPosition, ErrorCode } from './common';

export type Statement = (CommentStatementNode | EmptyStatementNode | IfStatementNode | FlowControlStatement | StatementNode);
export type FlowControlStatement = (ReturnStatementNode | ContinueStatementNode | BreakStatementNode);
export type Expression = (Assignment | ConditionalNode | Computation | Invocation | Value | InfoNode);
export type Computation = (Bitwise | Logical | Equality | Relational | Shift | Arithmetic);
export type Assignment = (VariableAssignmentNode | PropertyAssignmentNode | ListAssignmentNode);
export type Logical = (ConditionalInNode | ConditionalAndNode | ConditionalOrNode | NegatedNode);
export type Bitwise = (BitwiseAndNode | BitwiseInclusiveOrNode | BitwiseExclusiveOrNode | ComplementNode);
export type Equality = (EqualNode | UnequalNode);
export type Relational = (GreaterThanNode | LessThanNode | GreaterOrEqualNode | LessOrEqualNode);
export type Shift = (ShiftLeftNode | ShiftRightNode);
export type Arithmetic = (AdditionNode | SubtractionNode | MultiplicationNode | DivisionNode | ModulationNode | NegativeNode);
export type Invocation = (VerbInvocationNode | ComputedVerbInvocationNode | CorifiedVerbInvocationNode | BuiltInFunctionInvocationNode);
export type Value = (Literal | ObjectReference | ListNode | MapNode | MapEntryNode | ListSlicerNode | ErrorCatcherNode | PropertyAccessor | Indexer | ParenthesesNode);
export type PropertyAccessor = (PropertyAccessorNode | ComputedPropertyAccessorNode);
export type Indexer = (ArgumentIndexerNode | RangeIndexerNode);
export type ObjectReference = (VariableNode | ObjectIdNode | CorifiedValueNode);
export type Literal = (BooleanNode | IntegerNode | FloatNode | StringNode | ErrorCodeNode);
export type InfoNode = (ArgumentIndexerNodeInfo | RangeIndexerNodeInfo | PropertyAccessorNodeInfo | ComputedPropertyAccessorNodeInfo | VerbInvocationNodeInfo | ComputedVerbInvocationNodeInfo | CallInfo);

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

	public constructor(position: ContextPosition, ifNode: IfNode, elseIfNodes?: IfNode[], elseNode?: ElseNode) {
		super(position);

		this._if = ifNode;
		this._elseIfs = elseIfNodes ?? [];
		this._else = elseNode;
	}

	public toString(): string {
		const base = super.toString();

		const ifPart = `${this._if.toString()}\n`;
		let elseIfParts = '';
		let elsePart = '';

		if (this._elseIfs.length > 0) {
			elseIfParts = `${this._elseIfs.map(x => `else${x.toString()}`).join('\n')}\n`;
		}

		if (this._else) {
			elsePart = `${this._else.toString()}\n`;
		}

		return `${ifPart}${elseIfParts}${elsePart}endif (${base})`;
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

	public constructor(position: ContextPosition, conditions: Expression, body?: Statement[]) {
		super(position);

		this._conditions = conditions;
		this._body = body ?? [];
	}

	public toString(): string {
		const start = `if (${this._conditions.toString()})`;

		if (this._body.length === 0) {
			return start;
		}

		return `${start}\n  ${this._body.map(x => x.toString()).join('\n  ')}`;
	}
}

export class ElseNode extends BaseNode {
	private _body: Statement[];

	public get body(): Statement[] {
		return this._body;
	}

	public constructor(position: ContextPosition, body?: Statement[]) {
		super(position);

		this._body = body ?? [];
	}

	public toString(): string {
		if (this._body.length === 0) {
			return 'else\n';
		}

		return `else\n  ${this._body.map(x => x.toString()).join('\n  ')}\n`;
	}
}

export class ReturnStatementNode extends FlowControlStatementNode<Expression> {
	public toString(): string {
		const base = super.toString();

		return `return${base}`;
	}
}

export class ContinueStatementNode extends FlowControlStatementNode<Expression> {
	public toString(): string {
		const base = super.toString();

		return `continue${base}`;
	}
}

export class BreakStatementNode extends FlowControlStatementNode<Expression> {
	public toString(): string {
		const base = super.toString();

		return `break${base}`;
	}
}

export class CommentStatementNode extends BaseNode {
	private _text: string;

	public get text(): string {
		return this._text;
	}

	public constructor(position: ContextPosition, text: string) {
		super(position);

		this._text = text;
	}

	public toString(): string {
		const base = super.toString();

		return `"${this._text}"; (${base})`;
	}
}

export class EmptyStatementNode extends BaseNode {
	public toString(): string {
		const base = super.toString();

		return `<empty>; (${base})`;
	}
}

export class StatementNode extends BaseNode {
	private _expression: Expression;

	public get expression(): Expression {
		return this._expression;
	}

	public constructor(position: ContextPosition, expression: Expression) {
		super(position);

		this._expression = expression;
	}

	public toString(): string {
		const base = super.toString();
		return `${this._expression.toString()}; (${base})`;
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

	public constructor(position: ContextPosition, variable: VariableNode, value: Expression) {
		super(position);

		this._variable = variable;
		this._value = value;
	}

	public toString(): string {
		return `${this._variable.toString()} = ${this._value.toString()}`;
	}
}

export class PropertyAssignmentNode extends BaseNode {
	private _property: PropertyAccessor;
	private _value: Expression;

	public get property(): PropertyAccessor {
		return this._property;
	}

	public get value(): Expression {
		return this._value;
	}

	public constructor(position: ContextPosition, property: PropertyAccessor, value: Expression) {
		super(position);

		this._property = property;
		this._value = value;
	}

	public toString(): string {
		return `${this._property.toString()} = ${this._value.toString()}`;
	}
}

export class ListAssignmentNode extends BaseNode {
	private _variables: ListNode;
	private _value: Expression;

	public get variables(): ListNode {
		return this._variables;
	}

	public get value(): Expression {
		return this._value;
	}

	public constructor(position: ContextPosition, variables: ListNode, value: Expression) {
		super(position);

		this._variables = variables;
		this._value = value;
	}

	public toString(): string {
		return `${this._variables.toString()} = ${this._value.toString()}`;
	}
}

export class ConditionalInNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} in ${this._right.toString()}`;
	}
}

export class ConditionalAndNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} && ${this._right.toString()}`;
	}
}

export class ConditionalOrNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} || ${this._right.toString()}`;
	}
}

export class BitwiseAndNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} &. ${this._right.toString()}`;
	}
}

export class BitwiseInclusiveOrNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} |. ${this._right.toString()}`;
	}
}

export class BitwiseExclusiveOrNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} ^. ${this._right.toString()}`;
	}
}

export class EqualNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} == ${this._right.toString()}`;
	}
}

export class UnequalNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} != ${this._right.toString()}`;
	}
}

export class GreaterThanNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} > ${this._right.toString()}`;
	}
}

export class LessThanNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} < ${this._right.toString()}`;
	}
}

export class GreaterOrEqualNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} >= ${this._right.toString()}`;
	}
}

export class LessOrEqualNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} <= ${this._right.toString()}`;
	}
}

export class ShiftLeftNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} << ${this._right.toString()}`;
	}
}

export class ShiftRightNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} >> ${this._right.toString()}`;
	}
}

export class AdditionNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} + ${this._right.toString()}`;
	}
}

export class SubtractionNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} - ${this._right.toString()}`;
	}
}

export class MultiplicationNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} * ${this._right.toString()}`;
	}
}

export class DivisionNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} / ${this._right.toString()}`;
	}
}

export class ModulationNode extends TwoPartNode<Expression, Expression> {
	public toString(): string {
		return `${this._left.toString()} % ${this._right.toString()}`;
	}
}

export class NegativeNode extends WrappedNode<Expression> {
	public toString(): string {
		return `-${this._value.toString()}`;
	}
}

export class NegatedNode extends WrappedNode<Expression> {
	public toString(): string {
		return `!${this._value.toString()}`;
	}
}

export class ComplementNode extends WrappedNode<Expression> {
	public toString(): string {
		return `~${this._value.toString()}`;
	}
}

export class ParenthesesNode extends WrappedNode<Expression> {
	public toString(): string {
		return `(${this._value.toString()})`;
	}
}

export class ArgumentIndexerNode extends BaseNode {
	private _object: Expression;
	private _argument: Expression;

	public get object(): Expression {
		return this._object;
	}

	public get argument(): Expression {
		return this._argument;
	}

	public constructor(position: ContextPosition, object: Expression, argument: Expression) {
		super(position);

		this._object = object;
		this._argument = argument;
	}

	public toString(): string {
		return `${this._object.toString()}[${this._argument.toString()}]`;
	}
}

export class RangeIndexerNode extends BaseNode {
	private _object: Expression;
	private _start: Expression;
	private _end: Expression;

	public get object(): Expression {
		return this._object;
	}

	public get start(): Expression {
		return this._start
	}

	public get end(): Expression {
		return this._end
	}

	public constructor(position: ContextPosition, object: Expression, start: Expression, end: Expression) {
		super(position);

		this._object = object;
		this._start = start;
		this._end = end;
	}

	public toString(): string {
		return `${this._object.toString()}[${this._start.toString()}..${this._end.toString()}]`;
	}
}

export class PropertyAccessorNode extends BaseNode {
	private _object: Expression;
	private _name: string;

	public get object(): Expression {
		return this._object;
	}

	public get name(): string {
		return this._name
	}

	public constructor(position: ContextPosition, object: Expression, name: string) {
		super(position);

		this._object = object;
		this._name = name;
	}

	public toString(): string {
		return `${this._object.toString()}.${this._name}`;
	}
}

export class ComputedPropertyAccessorNode extends BaseNode {
	private _object: Expression;
	private _name: Expression;

	public get object(): Expression {
		return this._object;
	}

	public get name(): Expression {
		return this._name
	}

	public constructor(position: ContextPosition, object: Expression, name: Expression) {
		super(position);

		this._object = object;
		this._name = name;
	}

	public toString(): string {
		return `${this._object.toString()}.(${this._name.toString()})`;
	}
}

export class VerbInvocationNode extends BaseNode {
	private _object: Expression;
	private _name: string;
	private _arguments: Expression[];

	public get object(): Expression {
		return this._object;
	}

	public get name(): string {
		return this._name
	}

	public get arguments(): Expression[] {
		return this._arguments;
	}

	public constructor(position: ContextPosition, object: Expression, name: string, functionArguments: Expression[]) {
		super(position);

		this._object = object;
		this._name = name;
		this._arguments = functionArguments;
	}

	public toString(): string {
		return `${this._object.toString()}:${this._name}(${this._arguments.map(x => x.toString()).join(', ')})`;
	}
}

export class ComputedVerbInvocationNode extends BaseNode {
	private _object: Expression;
	private _name: Expression;
	private _arguments: Expression[];

	public get object(): Expression {
		return this._object;
	}

	public get name(): Expression {
		return this._name
	}

	public get arguments(): Expression[] {
		return this._arguments;
	}

	public constructor(position: ContextPosition, object: Expression, name: Expression, functionArguments: Expression[]) {
		super(position);

		this._object = object;
		this._name = name;
		this._arguments = functionArguments;
	}

	public toString(): string {
		return `${this._object.toString()}:(${this._name.toString()})(${this._arguments.map(x => x.toString()).join(', ')})`;
	}
}

export class CorifiedVerbInvocationNode extends BaseNode {
	private _verbReference: Expression;
	private _arguments: Expression[];

	public get verbReference(): Expression {
		return this._verbReference;
	}

	public get arguments(): Expression[] {
		return this._arguments;
	}

	public constructor(position: ContextPosition, verbReference: Expression, functionArguments: Expression[]) {
		super(position);

		this._verbReference = verbReference;
		this._arguments = functionArguments;
	}

	public toString(): string {
		return `${this._verbReference.toString()}(${this._arguments.map(x => x.toString()).join(', ')})`;
	}
}

export class BuiltInFunctionInvocationNode extends BaseNode {
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

	public toString(): string {
		return `${this._name}(${this._arguments.map(x => x.toString()).join(', ')})`;
	}
}

export class ListSlicerNode extends BaseNode {
	private _value: Expression;

	public get value(): Expression {
		return this._value;
	}

	public constructor(contextPosition: ContextPosition, value: Expression) {
		super(contextPosition);

		this._value = value;
	}

	public toString(): string {
		return `@${this._value.toString()}`;
	}
}

export class ConditionalNode extends BaseNode {
	private _conditions: Expression;
	private _true: Expression;
	private _false: Expression;

	public get conditions(): Expression {
		return this._conditions;
	}

	public get true(): Expression {
		return this._true;
	}

	public get false(): Expression {
		return this._false;
	}

	public constructor(position: ContextPosition, conditions: Expression, trueExpression: Expression, falseExpression: Expression) {
		super(position);

		this._conditions = conditions;
		this._true = trueExpression;
		this._false = falseExpression;
	}

	public toString(): string {
		return `${this._conditions.toString()} ? ${this._true.toString()} | ${this._false.toString()}`;
	}
}

export class ErrorCatcherNode extends BaseNode {
	private _try: Expression;
	private _errorCodes: Expression[];
	private _onError: Expression;

	public get try(): Expression {
		return this._try;
	}

	public get errorCodes(): Expression[] {
		return this._errorCodes;
	}

	public get onError(): Expression {
		return this._onError;
	}

	public constructor(position: ContextPosition, tryExpression: Expression, errorCodes: Expression[], onError: Expression) {
		super(position);

		this._try = tryExpression;
		this._errorCodes = errorCodes;
		this._onError = onError;
	}

	public toString(): string {
		return `\`${this._try.toString()} ! ${this._errorCodes.toString()} => ${this._onError.toString()}'`;
	}
}

export class BooleanNode extends LiteralNode<boolean> { }

export class IntegerNode extends LiteralNode<Int64> { }

export class FloatNode extends LiteralNode<Float> { }

export class StringNode extends LiteralNode<string> { }

export class ListNode extends BaseNode {
	private _entries: Expression[];

	public get entries(): Expression[] {
		return this._entries;
	}

	public at(index: number): Expression | undefined {
		return this._entries.at(index);
	}

	public constructor(contextPosition: ContextPosition, entries: Expression[]) {
		super(contextPosition);

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

	public constructor(position: ContextPosition, key: Expression, value: Expression) {
		super(position);

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

	public constructor(position: ContextPosition, entries: MapEntryNode[]) {
		super(position);

		this._entries = entries;
	}
}

export class VariableNode extends ReferenceNode {
	public toString(): string {
		return `${this._name}`;
	}
}

export class ObjectIdNode extends ReferenceNode {
	public toString(): string {
		return `#${this._name}`;
	}
}

export class CorifiedValueNode extends ReferenceNode {
	public toString(): string {
		return `\$${this._name}`;
	}
}

export class ErrorCodeNode extends BaseNode {
	private _value: ErrorCode;

	public get value(): ErrorCode {
		return this._value;
	}

	public constructor(position: ContextPosition, value: ErrorCode) {
		super(position);

		this._value = value;
	}

	public toString(): string {
		return ErrorCode[this._value];
	}
}

export class ArgumentIndexerNodeInfo extends BaseNode {
	private _argument: Expression;

	public get argument(): Expression {
		return this._argument;
	}

	public constructor(position: ContextPosition, argument: Expression) {
		super(position);

		this._argument = argument;
	}
}

export class RangeIndexerNodeInfo extends BaseNode {
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

export class PropertyAccessorNodeInfo extends BaseNode {
	private _name: string;

	public get name(): string {
		return this._name
	}

	public constructor(position: ContextPosition, name: string) {
		super(position);

		this._name = name;
	}
}

export class ComputedPropertyAccessorNodeInfo extends BaseNode {
	private _name: Expression;

	public get name(): Expression {
		return this._name
	}

	public constructor(position: ContextPosition, name: Expression) {
		super(position);

		this._name = name;
	}
}

export class VerbInvocationNodeInfo extends BaseNode {
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

export class ComputedVerbInvocationNodeInfo extends BaseNode {
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

export class CallInfo extends BaseNode {
	private _arguments: Expression[];

	public get arguments(): Expression[] {
		return this._arguments;
	}

	public constructor(position: ContextPosition, functionArguments: Expression[]) {
		super(position);

		this._arguments = functionArguments;
	}
}