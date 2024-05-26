import { BaseNode, FlowControlStatementNode, LiteralNode, ReferenceNode, TwoPartNode, WrappedNode } from './abstract';
import { ContextPosition, ErrorCode } from './common';

export type Statement = (IfStatementNode | Loop | ForkStatementNode | TryStatementNode | FlowControlStatement | ExpressionStatementNode | CommentStatementNode | EmptyStatementNode);
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

export class IfStatementNode extends BaseNode {
	private _depth: number;

	private _if: IfNode;
	private _elseIfs: ElseIfNode[];
	private _else: ElseNode | undefined;

	public get if(): IfNode {
		return this._if;
	}

	public get elseifs(): ElseIfNode[] {
		return this._elseIfs;
	}

	public get else(): ElseNode | undefined {
		return this._else;
	}

	public constructor(depth: number, position: ContextPosition, ifNode: IfNode, elseIfNodes?: ElseIfNode[], elseNode?: ElseNode) {
		super(position);

		this._depth = depth;

		this._if = ifNode;
		this._elseIfs = elseIfNodes ?? [];
		this._else = elseNode;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const ifPart = `${this._if.toString(lineInfo)}\n`;
		let elseIfParts = '';
		let elsePart = '';

		if (this._elseIfs.length > 0) {
			elseIfParts = `${this._elseIfs.map(x => `${x.toString(lineInfo)}`).join('\n')}${this._elseIfs.length > 0 ? '\n' : ''}`;
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

	private _conditions: Expression;
	private _body: Statement[];

	public get conditions() {
		return this._conditions;
	}

	public get body() {
		return this._body;
	}

	public constructor(depth: number, position: ContextPosition, conditions: Expression, body?: Statement[]) {
		super(position);

		this._depth = depth;

		this._conditions = conditions;
		this._body = body ?? [];
	}

	public toString(lineInfo = true): string {
		const start = `${getDepthIndent(this._depth)}if (${this._conditions.toString(lineInfo)})`;

		if (this._body.length === 0) {
			return start;
		}

		return `${start}\n${this._body.map(x => x.toString(lineInfo)).join('\n')}`;
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

	private _body: Statement[];

	public get body(): Statement[] {
		return this._body;
	}

	public constructor(depth: number, position: ContextPosition, body?: Statement[]) {
		super(position);

		this._depth = depth;

		this._body = body ?? [];
	}

	public toString(lineInfo = true): string {
		if (this._body.length === 0) {
			return `${getDepthIndent(this._depth)}else\n`;
		}

		return `${getDepthIndent(this._depth)}else\n${this._body.map(x => x.toString(lineInfo)).join('\n')}`;
	}
}

export class ForStatementNode extends BaseNode {
	private _depth: number;

	private _value: VariableNode;
	private _keyOrIndex: VariableNode | undefined;
	private _rangeExpression: Expression;
	private _statements: Statement[];

	public get value(): VariableNode {
		return this._value;
	}

	public get keyOrIndex(): VariableNode | undefined {
		return this._keyOrIndex;
	}

	public get rangeExpression(): Expression {
		return this._rangeExpression;
	}

	public get statements(): Statement[] {
		return this._statements;
	}

	private constructor(depth: number, position: ContextPosition, value: VariableNode, rangeExpression: Expression, statements: Statement[], keyOrIndex?: VariableNode) {
		super(position);

		this._depth = depth;

		this._value = value;
		this._keyOrIndex = keyOrIndex;
		this._rangeExpression = rangeExpression;
		this._statements = statements;
	}

	public static new(depth: number, position: ContextPosition, value: VariableNode, rangeExpression: Expression, statements: Statement[]): ForStatementNode {
		return new ForStatementNode(depth, position, value, rangeExpression, statements);
	}

	public static withKeyOrIndex(depth: number, position: ContextPosition, value: VariableNode, keyOrIndex: VariableNode, rangeExpression: Expression, statements: Statement[]): ForStatementNode {
		return new ForStatementNode(depth, position, value, rangeExpression, statements, keyOrIndex);
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const keyOrIndex = this._keyOrIndex ? `, ${this._keyOrIndex.toString(lineInfo)}` : '';

		const forPart = `${getDepthIndent(this._depth)}for ${this._value.toString(lineInfo)}${keyOrIndex} in (${this._rangeExpression.toString(lineInfo)})\n`;

		const bodyPart = `${this._statements.map(x => x.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

		const endFor = `${getDepthIndent(this._depth)}endfor`;

		return `${forPart}${bodyPart}${endFor}${base}`;
	}
}

export class RangedForStatementNode extends BaseNode {
	private _depth: number;

	private _value: VariableNode;
	private _rangeStart: Expression;
	private _rangeEnd: Expression;
	private _statements: Statement[];

	public get value(): VariableNode {
		return this._value;
	}

	public get rangeStart(): Expression {
		return this._rangeStart;
	}

	public get rangeEnd(): Expression {
		return this._rangeEnd;
	}

	public get statements(): Statement[] {
		return this._statements;
	}

	public constructor(depth: number, position: ContextPosition, value: VariableNode, rangeStart: Expression, rangeEnd: Expression, statements: Statement[]) {
		super(position);

		this._depth = depth;

		this._value = value;
		this._rangeStart = rangeStart;
		this._rangeEnd = rangeEnd;
		this._statements = statements;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const forPart = `${getDepthIndent(this._depth)}for ${this._value.toString(lineInfo)} in [${this._rangeStart.toString(lineInfo)}..${this._rangeEnd.toString(lineInfo)}]\n`;

		const bodyPart = `${this._statements.map(x => x.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

		const endFor = `${getDepthIndent(this._depth)}endfor`;

		return `${forPart}${bodyPart}${endFor}${base}`;
	}
}

export class WhileStatementNode extends BaseNode {
	private _depth: number;

	private _name: VariableNode | undefined;
	private _conditions: Expression;
	private _statements: Statement[];

	public get name(): VariableNode | undefined {
		return this._name;
	}

	public get conditions(): Expression {
		return this._conditions;
	}

	public get statements(): Statement[] {
		return this._statements;
	}

	private constructor(depth: number, position: ContextPosition, conditions: Expression, statements: Statement[], name?: VariableNode) {
		super(position);

		this._depth = depth;

		this._conditions = conditions;
		this._statements = statements;
		this._name = name;
	}

	public static new(depth: number, position: ContextPosition, conditions: Expression, statements: Statement[]): WhileStatementNode {
		return new WhileStatementNode(depth, position, conditions, statements);
	}

	public static withName(depth: number, position: ContextPosition, conditions: Expression, statements: Statement[], name: VariableNode): WhileStatementNode {
		return new WhileStatementNode(depth, position, conditions, statements, name);
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const name = this._name ? `${this._name.toString(lineInfo)} ` : '';

		const whilePart = `${getDepthIndent(this._depth)}while ${name}(${this._conditions.toString(lineInfo)})\n`;

		const bodyPart = `${this._statements.map(x => x.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

		const endWhile = `${getDepthIndent(this._depth)}endwhile`;

		return `${whilePart}${bodyPart}${endWhile}${base}`;
	}
}

export class TryStatementNode extends BaseNode {
	private _depth: number;

	private _statements: Statement[];
	private _excepts: ExceptNode[];
	private _finally: FinallyNode | undefined;

	public get statements(): Statement[] {
		return this._statements;
	}

	public get excepts(): ExceptNode[] {
		return this._excepts;
	}

	public get finally(): FinallyNode | undefined {
		return this._finally;
	}

	public constructor(depth: number, position: ContextPosition, statements: Statement[], excepts: ExceptNode[], finallyNode?: FinallyNode) {
		super(position);

		this._depth = depth;

		this._statements = statements;
		this._excepts = excepts;
		this._finally = finallyNode;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const tryPart = `${getDepthIndent(this._depth)}try\n`;

		const tryBodyPart = `${this._statements.map(x => x.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

		const excepts = `${this._excepts.map(x => x.toString(lineInfo)).join('\n')}${this._excepts.length > 0 ? '\n' : ''}`;

		const finallyBlock = this._finally ? `${this._finally.toString(lineInfo)}\n` : '';

		const endTry = `${getDepthIndent(this._depth)}endtry`;

		return `${tryPart}${tryBodyPart}${excepts}${finallyBlock}${endTry}${base}`;
	}
}

export class ExceptNode extends BaseNode {
	private _depth: number;

	private _errorInfo: VariableNode;
	private _errorCodes: ErrorCodeNode[];
	private _statements: Statement[];

	// error info looks like this: {code, message, value, traceback}

	public get errorInfo(): VariableNode {
		return this._errorInfo;
	}

	public get errorCodes(): ErrorCodeNode[] {
		return this._errorCodes;
	}

	public get statements(): Statement[] {
		return this._statements;
	}

	public constructor(depth: number, position: ContextPosition, errorInfo: VariableNode, errorCodes: ErrorCodeNode[], statements: Statement[]) {
		super(position);

		this._depth = depth;

		this._errorInfo = errorInfo;
		this._errorCodes = errorCodes;
		this._statements = statements;
	}

	public toString(lineInfo = true): string {
		const errorCodes = this._errorCodes.map(x => x.toString(lineInfo)).join(', ');

		const exceptPart = `${getDepthIndent(this._depth)}except ${this._errorInfo.toString(lineInfo)} (${errorCodes})${this._statements.length > 0 ? '\n' : ''}`;

		const bodyPart = this._statements.map(x => x.toString(lineInfo)).join('\n');

		return `${exceptPart}${bodyPart}`;
	}
}

export class FinallyNode extends BaseNode {
	private _depth: number;

	private _statements: Statement[];

	public get statements(): Statement[] {
		return this._statements;
	}

	public constructor(depth: number, position: ContextPosition, statements: Statement[]) {
		super(position);

		this._depth = depth;

		this._statements = statements;
	}

	public toString(lineInfo = true): string {
		const finallyPart = `${getDepthIndent(this._depth)}finally${this._statements.length > 0 ? '\n' : ''}`;

		const bodyPart = this._statements.map(x => x.toString(lineInfo)).join('\n');

		return `${finallyPart}${bodyPart}`;
	}
}

export class ForkStatementNode extends BaseNode {
	private _depth: number;

	private _name: VariableNode | undefined;
	private _expression: Expression;
	private _statements: Statement[];

	public get name(): VariableNode | undefined {
		return this._name;
	}

	public get expression(): Expression {
		return this._expression;
	}

	public get statements(): Statement[] {
		return this._statements;
	}

	private constructor(depth: number, position: ContextPosition, expression: Expression, statements: Statement[], nameVariable?: VariableNode) {
		super(position);

		this._depth = depth;

		this._name = nameVariable;
		this._expression = expression;
		this._statements = statements;
	}

	public static new(depth: number, position: ContextPosition, expression: Expression, statements: Statement[]): ForkStatementNode {
		return new ForkStatementNode(depth, position, expression, statements);
	}

	public static withName(depth: number, position: ContextPosition, expression: Expression, statements: Statement[], nameVariable: VariableNode): ForkStatementNode {
		return new ForkStatementNode(depth, position, expression, statements, nameVariable);
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const name = this._name ? `${this._name.toString(lineInfo)} ` : '';

		const forkPart = `${getDepthIndent(this._depth)}fork ${name}(${this._expression.toString(lineInfo)})\n`;

		const bodyPart = `${this._statements.map(x => x.toString(lineInfo)).join('\n')}${this._statements.length > 0 ? '\n' : ''}`;

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

	private _comment: StringNode;

	public get text(): StringNode {
		return this._comment;
	}

	public constructor(depth: number, position: ContextPosition, comment: StringNode) {
		super(position);

		this._depth = depth;

		this._comment = comment;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		return `${getDepthIndent(this._depth)}${this._comment.toString(lineInfo)};${base}`;
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

	private _expression: Expression;

	public get expression(): Expression {
		return this._expression;
	}

	public constructor(depth: number, position: ContextPosition, expression: Expression) {
		super(position);

		this._depth = depth;

		this._expression = expression;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		return `${getDepthIndent(this._depth)}${this._expression.toString(lineInfo)};${base}`;
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

	public toString(lineInfo = true): string {
		return `${this._variable.toString(lineInfo)} = ${this._value.toString(lineInfo)}`;
	}
}

export class OptionalTargetAssignmentNode extends BaseNode {
	private _variable: OptionalTargetNode;
	private _value: Expression;

	public get variable(): OptionalTargetNode {
		return this._variable;
	}

	public get value(): Expression {
		return this._value;
	}

	public constructor(position: ContextPosition, variable: OptionalTargetNode, value: Expression) {
		super(position);

		this._variable = variable;
		this._value = value;
	}

	public toString(lineInfo = true): string {
		return `${this._variable.toString(lineInfo)} = ${this._value.toString(lineInfo)}`;
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

	public toString(lineInfo = true): string {
		return `${this._property.toString(lineInfo)} = ${this._value.toString(lineInfo)}`;
	}
}

export class ListAssignmentNode extends BaseNode {
	private _list: ListNode;
	private _value: Expression;

	public get list(): ListNode {
		return this._list;
	}

	public get value(): Expression {
		return this._value;
	}

	public constructor(position: ContextPosition, list: ListNode, value: Expression) {
		super(position);

		this._list = list;
		this._value = value;
	}

	public toString(lineInfo = true): string {
		return `${this._list.toString(lineInfo)} = ${this._value.toString(lineInfo)}`;
	}
}

export class ConditionalNode extends BaseNode {
	private _conditions: Expression;
	private _ifTrue: Expression;
	private _ifFalse: Expression;

	public get conditions(): Expression {
		return this._conditions;
	}

	public get ifTrue(): Expression {
		return this._ifTrue;
	}

	public get ifFalse(): Expression {
		return this._ifFalse;
	}

	public constructor(position: ContextPosition, conditions: Expression, ifTrue: Expression, ifFalse: Expression) {
		super(position);

		this._conditions = conditions;
		this._ifTrue = ifTrue;
		this._ifFalse = ifFalse;
	}

	public toString(lineInfo = true): string {
		return `${this._conditions.toString(lineInfo)} ? ${this._ifTrue.toString(lineInfo)} | ${this._ifFalse.toString(lineInfo)}`;
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
		return `-${this._value.toString(lineInfo)}`;
	}
}

export class NegatedNode extends WrappedNode<Expression> {
	public toString(lineInfo = true): string {
		return `!${this._value.toString(lineInfo)}`;
	}
}

export class ComplementNode extends WrappedNode<Expression> {
	public toString(lineInfo = true): string {
		return `~${this._value.toString(lineInfo)}`;
	}
}

export class ParenthesisNode extends WrappedNode<Expression> {
	public toString(lineInfo = true): string {
		return `(${this._value.toString(lineInfo)})`;
	}
}

export class ArgumentIndexerNode extends BaseNode {
	private _indexedEntity: Expression;
	private _argument: Expression;

	public get indexedEntity(): Expression {
		return this._indexedEntity;
	}

	public get argument(): Expression {
		return this._argument;
	}

	public constructor(position: ContextPosition, indexedEntity: Expression, argument: Expression) {
		super(position);

		this._indexedEntity = indexedEntity;
		this._argument = argument;
	}

	public toString(lineInfo = true): string {
		return `${this._indexedEntity.toString(lineInfo)}[${this._argument.toString(lineInfo)}]`;
	}
}

export class RangeIndexerNode extends BaseNode {
	private _indexedEntity: Expression;
	private _start: Expression;
	private _end: Expression;

	public get indexedEntity(): Expression {
		return this._indexedEntity;
	}

	public get start(): Expression {
		return this._start
	}

	public get end(): Expression {
		return this._end
	}

	public constructor(position: ContextPosition, object: Expression, start: Expression, end: Expression) {
		super(position);

		this._indexedEntity = object;
		this._start = start;
		this._end = end;
	}

	public toString(lineInfo = true): string {
		return `${this._indexedEntity.toString(lineInfo)}[${this._start.toString(lineInfo)}..${this._end.toString(lineInfo)}]`;
	}
}

export class PropertyAccessorNode extends BaseNode {
	private _accessedEntity: Expression;
	private _propertyName: string;

	public get accessedEntity(): Expression {
		return this._accessedEntity;
	}

	public get propertyName(): string {
		return this._propertyName
	}

	public constructor(position: ContextPosition, accessedEntity: Expression, propertyName: string) {
		super(position);

		this._accessedEntity = accessedEntity;
		this._propertyName = propertyName;
	}

	public toString(lineInfo = true): string {
		return `${this._accessedEntity.toString(lineInfo)}.${this._propertyName}`;
	}
}

export class ComputedPropertyAccessorNode extends BaseNode {
	private _accessedEntity: Expression;
	private _propertyName: Expression;

	public get accessedEntity(): Expression {
		return this._accessedEntity;
	}

	public get propertyName(): Expression {
		return this._propertyName
	}

	public constructor(position: ContextPosition, accessedEntity: Expression, propertyName: Expression) {
		super(position);

		this._accessedEntity = accessedEntity;
		this._propertyName = propertyName;
	}

	public toString(lineInfo = true): string {
		return `${this._accessedEntity.toString(lineInfo)}.(${this._propertyName.toString(lineInfo)})`;
	}
}

export class VerbInvocationNode extends BaseNode {
	private _invokedEntity: Expression;
	private _verbName: string;
	private _verbArguments: Expression[];

	public get invokedEntity(): Expression {
		return this._invokedEntity;
	}

	public get verbName(): string {
		return this._verbName
	}

	public get verbArguments(): Expression[] {
		return this._verbArguments;
	}

	public constructor(position: ContextPosition, invokedEntity: Expression, verbName: string, verbArguments: Expression[]) {
		super(position);

		this._invokedEntity = invokedEntity;
		this._verbName = verbName;
		this._verbArguments = verbArguments;
	}

	public toString(lineInfo = true): string {
		return `${this._invokedEntity.toString(lineInfo)}:${this._verbName}(${this._verbArguments.map(x => x.toString(lineInfo)).join(', ')})`;
	}
}

export class ComputedVerbInvocationNode extends BaseNode {
	private _invokedEntity: Expression;
	private _verbName: Expression;
	private _verbArguments: Expression[];

	public get invokedEntity(): Expression {
		return this._invokedEntity;
	}

	public get verbName(): Expression {
		return this._verbName
	}

	public get verbArguments(): Expression[] {
		return this._verbArguments;
	}

	public constructor(position: ContextPosition, invokedEntity: Expression, verbName: Expression, verbArguments: Expression[]) {
		super(position);

		this._invokedEntity = invokedEntity;
		this._verbName = verbName;
		this._verbArguments = verbArguments;
	}

	public toString(lineInfo = true): string {
		return `${this._invokedEntity.toString(lineInfo)}:(${this._verbName.toString(lineInfo)})(${this._verbArguments.map(x => x.toString(lineInfo)).join(', ')})`;
	}
}

export class CorifiedVerbInvocationNode extends BaseNode {
	private _invokedEntity: Expression;
	private _verbArguments: Expression[];

	public get invokedEntity(): Expression {
		return this._invokedEntity;
	}

	public get verbArguments(): Expression[] {
		return this._verbArguments;
	}

	public constructor(position: ContextPosition, invokedEntity: Expression, verbArguments: Expression[]) {
		super(position);

		this._invokedEntity = invokedEntity;
		this._verbArguments = verbArguments;
	}

	public toString(lineInfo = true): string {
		return `${this._invokedEntity.toString(lineInfo)}(${this._verbArguments.map(x => x.toString(lineInfo)).join(', ')})`;
	}
}

export class BuiltInFunctionInvocationNode extends BaseNode {
	private _functionName: string;
	private _functionArguments: Expression[];

	public get functionName(): string {
		return this._functionName
	}

	public get functionArguments(): Expression[] {
		return this._functionArguments;
	}

	public constructor(position: ContextPosition, functionName: string, functionArguments: Expression[]) {
		super(position);

		this._functionName = functionName;
		this._functionArguments = functionArguments;
	}

	public toString(lineInfo = true): string {
		return `${this._functionName}(${this._functionArguments.map(x => x.toString(lineInfo)).join(', ')})`;
	}
}

export class ListSplicerNode extends BaseNode {
	private _value: Expression;

	public get value(): Expression {
		return this._value;
	}

	public constructor(contextPosition: ContextPosition, value: Expression) {
		super(contextPosition);

		this._value = value;
	}

	public toString(lineInfo = true): string {
		return `@${this._value.toString(lineInfo)}`;
	}
}

export class ErrorCatcherNode extends BaseNode {
	private _try: Expression;
	private _errorCodes: Expression[];
	private _onError: Expression | undefined;

	public get try(): Expression {
		return this._try;
	}

	public get errorCodes(): Expression[] {
		return this._errorCodes;
	}

	public get onError(): Expression | undefined {
		return this._onError;
	}

	public constructor(position: ContextPosition, tryExpression: Expression, errorCodes: Expression[], onError?: Expression) {
		super(position);

		this._try = tryExpression;
		this._errorCodes = errorCodes;
		this._onError = onError;
	}

	public toString(lineInfo = true): string {
		const onError = this._onError ? ` => ${this._onError.toString(lineInfo)}` : '';
		return `\`${this._try.toString(lineInfo)} ! ${this._errorCodes.map(x => x.toString(lineInfo)).join(', ')}${onError}'`;
	}
}

export class BooleanNode extends LiteralNode<boolean> { }

export class IntegerNode extends LiteralNode<Int64> { }

export class FloatNode extends LiteralNode<Float> { }

export class StringNode extends LiteralNode<string> { }

export class ErrorCodeNode extends LiteralNode<ErrorCode> { }

export class ListNode extends BaseNode {
	private _elements: Expression[];

	public get elements(): Expression[] {
		return this._elements;
	}

	public at(index: number): Expression | undefined {
		return this._elements.at(index);
	}

	public constructor(contextPosition: ContextPosition, elements: Expression[]) {
		super(contextPosition);

		this._elements = elements;
	}

	public toString(lineInfo = true): string {
		return `{${this._elements.map(x => x.toString(lineInfo)).join(', ')}}`;
	}
}

export class MapNode extends BaseNode {
	private _elements: MapEntryNode[];

	public get elements(): MapEntryNode[] {
		return this._elements;
	}

	public constructor(position: ContextPosition, elements: MapEntryNode[]) {
		super(position);

		this._elements = elements;
	}

	public toString(lineInfo = true): string {
		return `[${this._elements.map(x => x.toString(lineInfo)).join(', ')}]`;
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

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return `${this._key.toString(lineInfo)} -> ${this._value.toString(lineInfo)}`;
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
		return `?${this._value.toString(lineInfo)}`;
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