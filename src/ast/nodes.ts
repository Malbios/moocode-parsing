import { BaseNode, FlowControlStatementNode, LiteralNode, ReferenceNode, TwoPartNode, WrappedNode } from './abstract';
import { ContextPosition, ErrorCode } from './common';

export type Statement = (IfStatementNode | Loop | ForkStatementNode | TryStatementNode | FlowControlStatement | ExpressionStatementNode | CommentStatementNode | EmptyStatementNode | InvalidStatement);
export type Loop = (For | WhileStatementNode);
export type For = (ForStatementNode | RangedForStatementNode);
export type FlowControlStatement = (ReturnStatementNode | ContinueStatementNode | BreakStatementNode);
export type Expression = (Assignment | Computation | Invocation | Value);
export type Computation = (Bitwise | Logical | Equality | Relational | Shift | Arithmetic);
export type Assignment = (VariableAssignmentNode | PropertyAssignmentNode | ListAssignmentNode);
export type Logical = (ConditionalNode | ConditionalInNode | ConditionalAndNode | ConditionalOrNode | NegatedNode);
export type Bitwise = (BitwiseAndNode | BitwiseInclusiveOrNode | BitwiseExclusiveOrNode | ComplementNode);
export type Equality = (EqualsNode | UnequalsNode);
export type Relational = (GreaterThanNode | LessThanNode | GreaterOrEqualNode | LessOrEqualNode);
export type Shift = (ShiftLeftNode | ShiftRightNode);
export type Arithmetic = (AdditionNode | SubtractionNode | MultiplicationNode | DivisionNode | ModulationNode | NegativeNode);
export type Invocation = (VerbInvocationNode | ComputedVerbInvocationNode | CorifiedVerbInvocationNode | BuiltInFunctionInvocationNode);
export type Value = (Literal | Reference | ListNode | MapNode | MapEntryNode | ListSplicerNode | ErrorCatcherNode | PropertyAccessor | Indexer | ParenthesisNode);
export type PropertyAccessor = (PropertyAccessorNode | ComputedPropertyAccessorNode);
export type Indexer = (ArgumentIndexerNode | RangeIndexerNode);
export type Reference = (Variable | ObjectIdNode);
export type Variable = (VariableNode | OptionalTargetNode | CorifiedValueNode);
export type Literal = (BooleanNode | IntegerNode | FloatNode | StringNode | ErrorCodeNode | RangeStartNode | RangeEndNode);

export type Int64 = number;
export type Float = number;

function getDepthIndent(depth: number): string {
	return ''.padStart(depth * 2, ' ');
}

export class InvalidStatement extends BaseNode {
	private _data: string;

	public constructor(position: ContextPosition, data: string) {
		super(position);

		this._data = data;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo?: boolean): string {
		return `${this._data}`;
	}
}

export class IfStatementNode extends BaseNode {
	private _depth: number;

	private _if: IfNode | undefined;
	private _elseIfs: (ElseIfNode | undefined)[];
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

	public constructor(depth: number, position: ContextPosition, ifNode: IfNode | undefined, elseIfNodes?: (ElseIfNode | undefined)[], elseNode?: ElseNode | undefined) {
		super(position);

		this._depth = depth;

		this._if = ifNode;
		this._elseIfs = elseIfNodes ?? [];
		this._else = elseNode;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const ifPart = `${this._if?.toString(lineInfo)}\n`;
		let elseIfParts = '';
		let elsePart = '';

		if (this._elseIfs.length > 0) {
			elseIfParts = `${this._elseIfs.map(x => `${x?.toString(lineInfo)}`).join('\n')}${this._elseIfs.length > 0 ? '\n' : ''}`;
		}

		if (this._else) {
			elsePart = `${this._else.toString(lineInfo)}\n`;
		}

		const endIf = `${getDepthIndent(this._depth)}endif`;

		return `${ifPart}${elseIfParts}${elsePart}${endIf}${base}`;
	}
}

export class IfNode extends BaseNode {
	protected _depth: number;

	private _conditions: Expression | undefined;
	private _body: (Statement | undefined)[];

	public get conditions() {
		return this._conditions;
	}

	public get body() {
		return this._body;
	}

	public constructor(depth: number, position: ContextPosition, conditions: Expression | undefined, body?: (Statement | undefined)[]) {
		super(position);

		this._depth = depth;

		this._conditions = conditions;
		this._body = body ?? [];
	}

	public toString(lineInfo = true): string {
		const start = `${getDepthIndent(this._depth)}if (${this._conditions?.toString(lineInfo)})`;

		if (this._body.length === 0) {
			return start;
		}

		return `${start}\n${this._body.map(x => x?.toString(lineInfo)).join('\n')}`;
	}
}

export class ElseIfNode extends IfNode {
	public toString(lineInfo?: boolean): string {
		const base = super.toString(lineInfo).trimStart();

		return `${getDepthIndent(this._depth)}else${base}`;
	}
}

export class ElseNode extends BaseNode {
	private _depth: number;

	private _body: (Statement | undefined)[];

	public get body() {
		return this._body;
	}

	public constructor(depth: number, position: ContextPosition, body?: (Statement | undefined)[]) {
		super(position);

		this._depth = depth;

		this._body = body ?? [];
	}

	public toString(lineInfo = true): string {
		if (this._body.length === 0) {
			return `${getDepthIndent(this._depth)}else\n`;
		}

		return `${getDepthIndent(this._depth)}else\n${this._body.map(x => x?.toString(lineInfo)).join('\n')}`;
	}
}

export class ForStatementNode extends BaseNode {
	private _depth: number;

	private _value: VariableNode | undefined;
	private _keyOrIndex: VariableNode | undefined;
	private _rangeExpression: Expression | undefined;
	private _statements: (Statement | undefined)[];

	public get value() {
		return this._value;
	}

	public get keyOrIndex() {
		return this._keyOrIndex;
	}

	public get rangeExpression() {
		return this._rangeExpression;
	}

	public get statements() {
		return this._statements;
	}

	private constructor(depth: number, position: ContextPosition, value: VariableNode | undefined, rangeExpression: Expression | undefined, statements: (Statement | undefined)[], keyOrIndex?: VariableNode | undefined) {
		super(position);

		this._depth = depth;

		this._value = value;
		this._keyOrIndex = keyOrIndex;
		this._rangeExpression = rangeExpression;
		this._statements = statements;
	}

	public static new(depth: number, position: ContextPosition, value: VariableNode | undefined, rangeExpression: Expression | undefined, statements: (Statement | undefined)[]): ForStatementNode {
		return new ForStatementNode(depth, position, value, rangeExpression, statements);
	}

	public static withKeyOrIndex(depth: number, position: ContextPosition, value: VariableNode | undefined, keyOrIndex: VariableNode | undefined, rangeExpression: Expression | undefined, statements: (Statement | undefined)[]): ForStatementNode {
		return new ForStatementNode(depth, position, value, rangeExpression, statements, keyOrIndex);
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const keyOrIndex = this._keyOrIndex ? `, ${this._keyOrIndex.toString(lineInfo)}` : '';

		const forPart = `${getDepthIndent(this._depth)}for ${this._value?.toString(lineInfo)}${keyOrIndex} in (${this._rangeExpression?.toString(lineInfo)})\n`;

		const bodyPart = `${this._statements.map(x => x?.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

		const endFor = `${getDepthIndent(this._depth)}endfor`;

		return `${forPart}${bodyPart}${endFor}${base}`;
	}
}

export class RangedForStatementNode extends BaseNode {
	private _depth: number;

	private _value: VariableNode | undefined;
	private _rangeStart: Expression | undefined;
	private _rangeEnd: Expression | undefined;
	private _statements: (Statement | undefined)[];

	public get value() {
		return this._value;
	}

	public get rangeStart() {
		return this._rangeStart;
	}

	public get rangeEnd() {
		return this._rangeEnd;
	}

	public get statements() {
		return this._statements;
	}

	public constructor(depth: number, position: ContextPosition, value: VariableNode | undefined, rangeStart: Expression | undefined, rangeEnd: Expression | undefined, statements: (Statement | undefined)[]) {
		super(position);

		this._depth = depth;

		this._value = value;
		this._rangeStart = rangeStart;
		this._rangeEnd = rangeEnd;
		this._statements = statements;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const forPart = `${getDepthIndent(this._depth)}for ${this._value?.toString(lineInfo)} in [${this._rangeStart?.toString(lineInfo)}..${this._rangeEnd?.toString(lineInfo)}]\n`;

		const bodyPart = `${this._statements.map(x => x?.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

		const endFor = `${getDepthIndent(this._depth)}endfor`;

		return `${forPart}${bodyPart}${endFor}${base}`;
	}
}

export class WhileStatementNode extends BaseNode {
	private _depth: number;

	private _name: VariableNode | undefined;
	private _conditions: Expression | undefined;
	private _statements: (Statement | undefined)[];

	public get name() {
		return this._name;
	}

	public get conditions() {
		return this._conditions;
	}

	public get statements() {
		return this._statements;
	}

	private constructor(depth: number, position: ContextPosition, conditions: Expression | undefined, statements: (Statement | undefined)[], name?: VariableNode | undefined) {
		super(position);

		this._depth = depth;

		this._conditions = conditions;
		this._statements = statements;
		this._name = name;
	}

	public static new(depth: number, position: ContextPosition, conditions: Expression | undefined, statements: (Statement | undefined)[]): WhileStatementNode {
		return new WhileStatementNode(depth, position, conditions, statements);
	}

	public static withName(depth: number, position: ContextPosition, conditions: Expression | undefined, statements: (Statement | undefined)[], name: VariableNode | undefined): WhileStatementNode {
		return new WhileStatementNode(depth, position, conditions, statements, name);
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const name = this._name ? `${this._name.toString(lineInfo)} ` : '';

		const whilePart = `${getDepthIndent(this._depth)}while ${name}(${this._conditions?.toString(lineInfo)})\n`;

		const bodyPart = `${this._statements.map(x => x?.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

		const endWhile = `${getDepthIndent(this._depth)}endwhile`;

		return `${whilePart}${bodyPart}${endWhile}${base}`;
	}
}

export class TryStatementNode extends BaseNode {
	private _depth: number;

	private _statements: (Statement | undefined)[];
	private _excepts: (ExceptNode | undefined)[];
	private _finally: FinallyNode | undefined;

	public get statements() {
		return this._statements;
	}

	public get excepts() {
		return this._excepts;
	}

	public get finally() {
		return this._finally;
	}

	public constructor(depth: number, position: ContextPosition, statements: (Statement | undefined)[], excepts: (ExceptNode | undefined)[], finallyNode?: FinallyNode | undefined) {
		super(position);

		this._depth = depth;

		this._statements = statements;
		this._excepts = excepts;
		this._finally = finallyNode;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const tryPart = `${getDepthIndent(this._depth)}try\n`;

		const tryBodyPart = `${this._statements.map(x => x?.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

		const excepts = `${this._excepts.map(x => x?.toString(lineInfo)).join('\n')}${this._excepts.length > 0 ? '\n' : ''}`;

		const finallyBlock = this._finally ? `${this._finally.toString(lineInfo)}\n` : '';

		const endTry = `${getDepthIndent(this._depth)}endtry`;

		return `${tryPart}${tryBodyPart}${excepts}${finallyBlock}${endTry}${base}`;
	}
}

export class ExceptNode extends BaseNode {
	private _depth: number;

	private _errorInfo: VariableNode | undefined;
	private _errorCodes: (ErrorCodeNode | undefined)[];
	private _statements: (Statement | undefined)[];

	// error info looks like this: {code, message, value, traceback}

	public get errorInfo() {
		return this._errorInfo;
	}

	public get errorCodes() {
		return this._errorCodes;
	}

	public get statements() {
		return this._statements;
	}

	public constructor(depth: number, position: ContextPosition, errorInfo: VariableNode | undefined, errorCodes: (ErrorCodeNode | undefined)[], statements: (Statement | undefined)[]) {
		super(position);

		this._depth = depth;

		this._errorInfo = errorInfo;
		this._errorCodes = errorCodes;
		this._statements = statements;
	}

	public toString(lineInfo = true): string {
		const errorCodes = this._errorCodes.map(x => x?.toString(lineInfo)).join(', ');

		const exceptPart = `${getDepthIndent(this._depth)}except ${this._errorInfo?.toString(lineInfo)} (${errorCodes})${this._statements.length > 0 ? '\n' : ''}`;

		const bodyPart = this._statements.map(x => x?.toString(lineInfo)).join('\n');

		return `${exceptPart}${bodyPart}`;
	}
}

export class FinallyNode extends BaseNode {
	private _depth: number;

	private _statements: (Statement | undefined)[];

	public get statements() {
		return this._statements;
	}

	public constructor(depth: number, position: ContextPosition, statements: (Statement | undefined)[]) {
		super(position);

		this._depth = depth;

		this._statements = statements;
	}

	public toString(lineInfo = true): string {
		const finallyPart = `${getDepthIndent(this._depth)}finally${this._statements.length > 0 ? '\n' : ''}`;

		const bodyPart = this._statements.map(x => x?.toString(lineInfo)).join('\n');

		return `${finallyPart}${bodyPart}`;
	}
}

export class ForkStatementNode extends BaseNode {
	private _depth: number;

	private _name: VariableNode | undefined;
	private _expression: Expression | undefined;
	private _statements: (Statement | undefined)[];

	public get name() {
		return this._name;
	}

	public get expression() {
		return this._expression;
	}

	public get statements() {
		return this._statements;
	}

	private constructor(depth: number, position: ContextPosition, expression: Expression | undefined, statements: (Statement | undefined)[], nameVariable?: VariableNode | undefined) {
		super(position);

		this._depth = depth;

		this._name = nameVariable;
		this._expression = expression;
		this._statements = statements;
	}

	public static new(depth: number, position: ContextPosition, expression: Expression | undefined, statements: (Statement | undefined)[]): ForkStatementNode {
		return new ForkStatementNode(depth, position, expression, statements);
	}

	public static withName(depth: number, position: ContextPosition, expression: Expression | undefined, statements: (Statement | undefined)[], nameVariable: VariableNode | undefined): ForkStatementNode {
		return new ForkStatementNode(depth, position, expression, statements, nameVariable);
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const name = this._name ? `${this._name.toString(lineInfo)} ` : '';

		const forkPart = `${getDepthIndent(this._depth)}fork ${name}(${this._expression?.toString(lineInfo)})\n`;

		const bodyPart = `${this._statements.map(x => x?.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

		const endFork = `${getDepthIndent(this._depth)}endfork`;

		return `${forkPart}${bodyPart}${endFork}${base}`;
	}
}

export class ReturnStatementNode extends FlowControlStatementNode<Expression> {
	public toString(lineInfo = true): string {
		const base = super.toString(lineInfo);

		return `${getDepthIndent(this._depth)}return${base}`;
	}
}

export class ContinueStatementNode extends FlowControlStatementNode<Expression> {
	public toString(lineInfo = true): string {
		const base = super.toString(lineInfo);

		return `${getDepthIndent(this._depth)}continue${base}`;
	}
}

export class BreakStatementNode extends FlowControlStatementNode<Expression> {
	public toString(lineInfo = true): string {
		const base = super.toString(lineInfo);

		return `${getDepthIndent(this._depth)}break${base}`;
	}
}

export class CommentStatementNode extends BaseNode {
	private _depth: number;

	private _comment: StringNode | undefined;

	public get text() {
		return this._comment;
	}

	public constructor(depth: number, position: ContextPosition, comment: StringNode | undefined) {
		super(position);

		this._depth = depth;

		this._comment = comment;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		return `${getDepthIndent(this._depth)}${this._comment?.toString(lineInfo)};${base}`;
	}
}

export class EmptyStatementNode extends BaseNode {
	private _depth: number;

	public constructor(depth: number, position: ContextPosition) {
		super(position);

		this._depth = depth;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		return `${getDepthIndent(this._depth)};${base}`;
	}
}

export class ExpressionStatementNode extends BaseNode {
	private _depth: number;

	private _expression: Expression | undefined;

	public get expression() {
		return this._expression;
	}

	public constructor(depth: number, position: ContextPosition, expression: Expression | undefined) {
		super(position);

		this._depth = depth;

		this._expression = expression;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		return `${getDepthIndent(this._depth)}${this._expression?.toString(lineInfo)};${base}`;
	}
}

export class VariableAssignmentNode extends BaseNode {
	private _variable: VariableNode | undefined;
	private _value: Expression | undefined;

	public get variable() {
		return this._variable;
	}

	public get value() {
		return this._value;
	}

	public constructor(position: ContextPosition, variable: VariableNode | undefined, value: Expression | undefined) {
		super(position);

		this._variable = variable;
		this._value = value;
	}

	public toString(lineInfo = true): string {
		return `${this._variable?.toString(lineInfo)} = ${this._value?.toString(lineInfo)}`;
	}
}

export class OptionalTargetAssignmentNode extends BaseNode {
	private _variable: OptionalTargetNode | undefined;
	private _value: Expression | undefined;

	public get variable() {
		return this._variable;
	}

	public get value() {
		return this._value;
	}

	public constructor(position: ContextPosition, variable: OptionalTargetNode | undefined, value: Expression | undefined) {
		super(position);

		this._variable = variable;
		this._value = value;
	}

	public toString(lineInfo = true): string {
		return `${this._variable?.toString(lineInfo)} = ${this._value?.toString(lineInfo)}`;
	}
}

export class PropertyAssignmentNode extends BaseNode {
	private _property: PropertyAccessor | undefined;
	private _value: Expression | undefined;

	public get property() {
		return this._property;
	}

	public get value() {
		return this._value;
	}

	public constructor(position: ContextPosition, property: PropertyAccessor | undefined, value: Expression | undefined) {
		super(position);

		this._property = property;
		this._value = value;
	}

	public toString(lineInfo = true): string {
		return `${this._property?.toString(lineInfo)} = ${this._value?.toString(lineInfo)}`;
	}
}

export class ListAssignmentNode extends BaseNode {
	private _list: ListNode | undefined;
	private _value: Expression | undefined;

	public get list() {
		return this._list;
	}

	public get value() {
		return this._value;
	}

	public constructor(position: ContextPosition, list: ListNode | undefined, value: Expression | undefined) {
		super(position);

		this._list = list;
		this._value = value;
	}

	public toString(lineInfo = true): string {
		return `${this._list?.toString(lineInfo)} = ${this._value?.toString(lineInfo)}`;
	}
}

export class ConditionalNode extends BaseNode {
	private _conditions: Expression | undefined;
	private _ifTrue: Expression | undefined;
	private _ifFalse: Expression | undefined;

	public get conditions() {
		return this._conditions;
	}

	public get ifTrue() {
		return this._ifTrue;
	}

	public get ifFalse() {
		return this._ifFalse;
	}

	public constructor(position: ContextPosition, conditions: Expression | undefined, ifTrue: Expression | undefined, ifFalse: Expression | undefined) {
		super(position);

		this._conditions = conditions;
		this._ifTrue = ifTrue;
		this._ifFalse = ifFalse;
	}

	public toString(lineInfo = true): string {
		return `${this._conditions?.toString(lineInfo)} ? ${this._ifTrue?.toString(lineInfo)} | ${this._ifFalse?.toString(lineInfo)}`;
	}
}

export class ConditionalInNode extends TwoPartNode<Expression> {
	protected _separator = 'in';
}

export class ConditionalAndNode extends TwoPartNode<Expression> {
	protected _separator = '&&';
}

export class ConditionalOrNode extends TwoPartNode<Expression> {
	protected _separator = '||';
}

export class BitwiseAndNode extends TwoPartNode<Expression> {
	protected _separator = '&.';
}

export class BitwiseInclusiveOrNode extends TwoPartNode<Expression> {
	protected _separator = '|.';
}

export class BitwiseExclusiveOrNode extends TwoPartNode<Expression> {
	protected _separator = '^.';
}

export class EqualsNode extends TwoPartNode<Expression> {
	protected _separator = '==';
}

export class UnequalsNode extends TwoPartNode<Expression> {
	protected _separator = '!=';
}

export class LessThanNode extends TwoPartNode<Expression> {
	protected _separator = '<';
}

export class GreaterThanNode extends TwoPartNode<Expression> {
	protected _separator = '>';
}

export class LessOrEqualNode extends TwoPartNode<Expression> {
	protected _separator = '<=';
}

export class GreaterOrEqualNode extends TwoPartNode<Expression> {
	protected _separator = '>=';
}

export class ShiftLeftNode extends TwoPartNode<Expression> {
	protected _separator = '<<';
}

export class ShiftRightNode extends TwoPartNode<Expression> {
	protected _separator = '>>';
}

export class AdditionNode extends TwoPartNode<Expression> {
	protected _separator = '+';
}

export class SubtractionNode extends TwoPartNode<Expression> {
	protected _separator = '-';
}

export class MultiplicationNode extends TwoPartNode<Expression> {
	protected _separator = '*';
}

export class DivisionNode extends TwoPartNode<Expression> {
	protected _separator = '/';
}

export class ModulationNode extends TwoPartNode<Expression> {
	protected _separator = '%';
}

export class NegativeNode extends WrappedNode<Expression> {
	public toString(lineInfo = true): string {
		return `-${this._value?.toString(lineInfo)}`;
	}
}

export class NegatedNode extends WrappedNode<Expression> {
	public toString(lineInfo = true): string {
		return `!${this._value?.toString(lineInfo)}`;
	}
}

export class ComplementNode extends WrappedNode<Expression> {
	public toString(lineInfo = true): string {
		return `~${this._value?.toString(lineInfo)}`;
	}
}

export class ParenthesisNode extends WrappedNode<Expression> {
	public toString(lineInfo = true): string {
		return `(${this._value?.toString(lineInfo)})`;
	}
}

export class ArgumentIndexerNode extends BaseNode {
	private _indexedEntity: Expression | undefined;
	private _argument: Expression | undefined;

	public get indexedEntity() {
		return this._indexedEntity;
	}

	public get argument() {
		return this._argument;
	}

	public constructor(position: ContextPosition, indexedEntity: Expression | undefined, argument: Expression | undefined) {
		super(position);

		this._indexedEntity = indexedEntity;
		this._argument = argument;
	}

	public toString(lineInfo = true): string {
		return `${this._indexedEntity?.toString(lineInfo)}[${this._argument?.toString(lineInfo)}]`;
	}
}

export class RangeIndexerNode extends BaseNode {
	private _indexedEntity: Expression | undefined;
	private _start: Expression | undefined;
	private _end: Expression | undefined;

	public get indexedEntity() {
		return this._indexedEntity;
	}

	public get start() {
		return this._start
	}

	public get end() {
		return this._end
	}

	public constructor(position: ContextPosition, object: Expression | undefined, start: Expression | undefined, end: Expression | undefined) {
		super(position);

		this._indexedEntity = object;
		this._start = start;
		this._end = end;
	}

	public toString(lineInfo = true): string {
		return `${this._indexedEntity?.toString(lineInfo)}[${this._start?.toString(lineInfo)}..${this._end?.toString(lineInfo)}]`;
	}
}

export class PropertyAccessorNode extends BaseNode {
	private _accessedEntity: Expression | undefined;
	private _propertyName: string | undefined;

	public get accessedEntity() {
		return this._accessedEntity;
	}

	public get propertyName() {
		return this._propertyName
	}

	public constructor(position: ContextPosition, accessedEntity: Expression | undefined, propertyName: string | undefined) {
		super(position);

		this._accessedEntity = accessedEntity;
		this._propertyName = propertyName;
	}

	public toString(lineInfo = true): string {
		return `${this._accessedEntity?.toString(lineInfo)}.${this._propertyName}`;
	}
}

export class ComputedPropertyAccessorNode extends BaseNode {
	private _accessedEntity: Expression | undefined;
	private _propertyName: Expression | undefined;

	public get accessedEntity() {
		return this._accessedEntity;
	}

	public get propertyName() {
		return this._propertyName
	}

	public constructor(position: ContextPosition, accessedEntity: Expression | undefined, propertyName: Expression | undefined) {
		super(position);

		this._accessedEntity = accessedEntity;
		this._propertyName = propertyName;
	}

	public toString(lineInfo = true): string {
		return `${this._accessedEntity?.toString(lineInfo)}.(${this._propertyName?.toString(lineInfo)})`;
	}
}

export class VerbInvocationNode extends BaseNode {
	private _invokedEntity: Expression | undefined;
	private _verbName: string | undefined;
	private _verbArguments: (Expression | undefined)[];

	public get invokedEntity() {
		return this._invokedEntity;
	}

	public get verbName() {
		return this._verbName
	}

	public get verbArguments() {
		return this._verbArguments;
	}

	public constructor(position: ContextPosition, invokedEntity: Expression | undefined, verbName: string | undefined, verbArguments: (Expression | undefined)[]) {
		super(position);

		this._invokedEntity = invokedEntity;
		this._verbName = verbName;
		this._verbArguments = verbArguments;
	}

	public toString(lineInfo = true): string {
		return `${this._invokedEntity?.toString(lineInfo)}:${this._verbName}(${this._verbArguments.map(x => x?.toString(lineInfo)).join(', ')})`;
	}
}

export class ComputedVerbInvocationNode extends BaseNode {
	private _invokedEntity: Expression | undefined;
	private _verbName: Expression | undefined;
	private _verbArguments: (Expression | undefined)[];

	public get invokedEntity() {
		return this._invokedEntity;
	}

	public get verbName() {
		return this._verbName
	}

	public get verbArguments() {
		return this._verbArguments;
	}

	public constructor(position: ContextPosition, invokedEntity: Expression | undefined, verbName: Expression | undefined, verbArguments: (Expression | undefined)[]) {
		super(position);

		this._invokedEntity = invokedEntity;
		this._verbName = verbName;
		this._verbArguments = verbArguments;
	}

	public toString(lineInfo = true): string {
		return `${this._invokedEntity?.toString(lineInfo)}:(${this._verbName?.toString(lineInfo)})(${this._verbArguments.map(x => x?.toString(lineInfo)).join(', ')})`;
	}
}

export class CorifiedVerbInvocationNode extends BaseNode {
	private _invokedEntity: Expression | undefined;
	private _verbArguments: (Expression | undefined)[];

	public get invokedEntity() {
		return this._invokedEntity;
	}

	public get verbArguments() {
		return this._verbArguments;
	}

	public constructor(position: ContextPosition, invokedEntity: Expression | undefined, verbArguments: (Expression | undefined)[]) {
		super(position);

		this._invokedEntity = invokedEntity;
		this._verbArguments = verbArguments;
	}

	public toString(lineInfo = true): string {
		return `${this._invokedEntity?.toString(lineInfo)}(${this._verbArguments.map(x => x?.toString(lineInfo)).join(', ')})`;
	}
}

export class BuiltInFunctionInvocationNode extends BaseNode {
	private _functionName: string | undefined;
	private _functionArguments: (Expression | undefined)[];

	public get functionName() {
		return this._functionName
	}

	public get functionArguments() {
		return this._functionArguments;
	}

	public constructor(position: ContextPosition, functionName: string | undefined, functionArguments: (Expression | undefined)[]) {
		super(position);

		this._functionName = functionName;
		this._functionArguments = functionArguments;
	}

	public toString(lineInfo = true): string {
		return `${this._functionName}(${this._functionArguments.map(x => x?.toString(lineInfo)).join(', ')})`;
	}
}

export class ListSplicerNode extends BaseNode {
	private _value: Expression | undefined;

	public get value() {
		return this._value;
	}

	public constructor(contextPosition: ContextPosition, value: Expression | undefined) {
		super(contextPosition);

		this._value = value;
	}

	public toString(lineInfo = true): string {
		return `@${this._value?.toString(lineInfo)}`;
	}
}

export class ErrorCatcherNode extends BaseNode {
	private _try: Expression | undefined;
	private _errorCodes: (Expression | undefined)[];
	private _onError: Expression | undefined;

	public get try() {
		return this._try;
	}

	public get errorCodes() {
		return this._errorCodes;
	}

	public get onError() {
		return this._onError;
	}

	public constructor(position: ContextPosition, tryExpression: Expression | undefined, errorCodes: (Expression | undefined)[], onError?: Expression | undefined) {
		super(position);

		this._try = tryExpression;
		this._errorCodes = errorCodes;
		this._onError = onError;
	}

	public toString(lineInfo = true): string {
		const onError = this._onError ? ` => ${this._onError.toString(lineInfo)}` : '';
		return `\`${this._try?.toString(lineInfo)} ! ${this._errorCodes.map(x => x?.toString(lineInfo)).join(', ')}${onError}'`;
	}
}

export class BooleanNode extends LiteralNode<boolean> { }

export class IntegerNode extends LiteralNode<Int64> { }

export class FloatNode extends LiteralNode<Float> { }

export class StringNode extends LiteralNode<string> { }

export class ErrorCodeNode extends LiteralNode<ErrorCode> { }

export class ListNode extends BaseNode {
	private _elements: (Expression | undefined)[];

	public get elements() {
		return this._elements;
	}

	public constructor(contextPosition: ContextPosition, elements: (Expression | undefined)[]) {
		super(contextPosition);

		this._elements = elements;
	}

	public toString(lineInfo = true): string {
		return `{${this._elements.map(x => x?.toString(lineInfo)).join(', ')}}`;
	}
}

export class MapNode extends BaseNode {
	private _elements: (MapEntryNode | undefined)[];

	public get elements() {
		return this._elements;
	}

	public constructor(position: ContextPosition, elements: (MapEntryNode | undefined)[]) {
		super(position);

		this._elements = elements;
	}

	public toString(lineInfo = true): string {
		return `[${this._elements.map(x => x?.toString(lineInfo)).join(', ')}]`;
	}
}

export class MapEntryNode extends BaseNode {
	private _key: Expression | undefined;
	private _value: Expression | undefined;

	public get key() {
		return this._key;
	}

	public get value() {
		return this._value;
	}

	public constructor(position: ContextPosition, key: Expression | undefined, value: Expression | undefined) {
		super(position);

		this._key = key;
		this._value = value;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return `${this._key?.toString(lineInfo)} -> ${this._value?.toString(lineInfo)}`;
	}
}

export class VariableNode extends ReferenceNode {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return `${this._name}`;
	}
}

export class OptionalTargetNode extends WrappedNode<VariableNode> {
	public toString(lineInfo = true): string {
		return `?${this._value?.toString(lineInfo)}`;
	}
}

export class ObjectIdNode extends ReferenceNode {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return `#${this._name}`;
	}
}

export class CorifiedValueNode extends ReferenceNode {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return `\$${this._name}`;
	}
}

export class RangeStartNode extends BaseNode {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return '^';
	}
}

export class RangeEndNode extends BaseNode {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return '$';
	}
}