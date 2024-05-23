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
export type Equality = (EqualNode | UnequalNode);
export type Relational = (GreaterThanNode | LessThanNode | GreaterOrEqualNode | LessOrEqualNode);
export type Shift = (ShiftLeftNode | ShiftRightNode);
export type Arithmetic = (AdditionNode | SubtractionNode | MultiplicationNode | DivisionNode | ModulationNode | NegativeNode);
export type Invocation = (VerbInvocationNode | ComputedVerbInvocationNode | CorifiedVerbInvocationNode | BuiltInFunctionInvocationNode);
export type Value = (Literal | ObjectReference | ListNode | MapNode | MapEntryNode | ListSlicerNode | ErrorCatcherNode | PropertyAccessor | Indexer | ParenthesisNode);
export type PropertyAccessor = (PropertyAccessorNode | ComputedPropertyAccessorNode);
export type Indexer = (ArgumentIndexerNode | RangeIndexerNode);
export type ObjectReference = (VariableNode | ObjectIdNode | CorifiedValueNode);
export type Literal = (BooleanNode | IntegerNode | FloatNode | StringNode | ErrorCodeNode);

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

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const ifPart = `${this._if.toString(lineInfo)}\n`;
		let elseIfParts = '';
		let elsePart = '';

		if (this._elseIfs.length > 0) {
			elseIfParts = `${this._elseIfs.map(x => `else${x.toString(lineInfo)}`).join('\n')}\n`;
		}

		if (this._else) {
			elsePart = `${this._else.toString(lineInfo)}\n`;
		}

		return `${ifPart}${elseIfParts}${elsePart}endif${base}`;
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

	public toString(lineInfo = true): string {
		const start = `if (${this._conditions.toString(lineInfo)})`;

		if (this._body.length === 0) {
			return start;
		}

		return `${start}\n  ${this._body.map(x => x.toString(lineInfo)).join('\n  ')}`;
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

	public toString(lineInfo = true): string {
		if (this._body.length === 0) {
			return 'else\n';
		}

		return `else\n  ${this._body.map(x => x.toString(lineInfo)).join('\n  ')}\n`;
	}
}

export class ForStatementNode extends BaseNode {
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

	private constructor(position: ContextPosition, value: VariableNode, rangeExpression: Expression, statements: Statement[], keyOrIndex?: VariableNode) {
		super(position);

		this._value = value;
		this._keyOrIndex = keyOrIndex;
		this._rangeExpression = rangeExpression;
		this._statements = statements;
	}

	public static new(position: ContextPosition, value: VariableNode, rangeExpression: Expression, statements: Statement[]): ForStatementNode {
		return new ForStatementNode(position, value, rangeExpression, statements);
	}

	public static withKeyOrIndex(position: ContextPosition, value: VariableNode, keyOrIndex: VariableNode, rangeExpression: Expression, statements: Statement[]): ForStatementNode {
		return new ForStatementNode(position, value, rangeExpression, statements, keyOrIndex);
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const keyOrIndex = this._keyOrIndex ? `, ${this._keyOrIndex.toString(lineInfo)}` : '';

		return `for ${this._value.toString(lineInfo)}${keyOrIndex} in (${this._rangeExpression.toString(lineInfo)})\n${this._statements.map(x => x.toString(lineInfo)).join('\n')}\nendfor${base}`;
	}
}

export class RangedForStatementNode extends BaseNode {
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

	public constructor(position: ContextPosition, value: VariableNode, rangeStart: Expression, rangeEnd: Expression, statements: Statement[]) {
		super(position);

		this._value = value;
		this._rangeStart = rangeStart;
		this._rangeEnd = rangeEnd;
		this._statements = statements;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		return `for ${this._value.toString(lineInfo)} in [${this._rangeStart.toString(lineInfo)}..${this._rangeEnd.toString(lineInfo)}]\n${this._statements.map(x => x.toString(lineInfo)).join('\n')}\nendfor${base}`;
	}
}

export class WhileStatementNode extends BaseNode {
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

	private constructor(position: ContextPosition, conditions: Expression, statements: Statement[], name?: VariableNode) {
		super(position);

		this._conditions = conditions;
		this._statements = statements;
		this._name = name;
	}

	public static new(position: ContextPosition, conditions: Expression, statements: Statement[]): WhileStatementNode {
		return new WhileStatementNode(position, conditions, statements);
	}

	public static withName(position: ContextPosition, conditions: Expression, statements: Statement[], name: VariableNode): WhileStatementNode {
		return new WhileStatementNode(position, conditions, statements, name);
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const name = this._name ? `${this._name.toString(lineInfo)} ` : '';

		return `while ${name}(${this._conditions.toString(lineInfo)})\n${this._statements.map(x => x.toString(lineInfo)).join('\n')}\nendwhile${base}`;
	}
}

export class ExceptNode extends BaseNode {
	private _errorInfo: VariableNode;
	private _errorCodes: Expression;
	private _statements: Statement[];

	// error info looks like this: {code, message, value, traceback}

	public get errorInfo(): VariableNode {
		return this._errorInfo;
	}

	public get errorCodes(): Expression {
		return this._errorCodes;
	}

	public get statements(): Statement[] {
		return this._statements;
	}

	public constructor(position: ContextPosition, errorInfo: VariableNode, errorCodes: Expression, statements: Statement[]) {
		super(position);

		this._errorInfo = errorInfo;
		this._errorCodes = errorCodes;
		this._statements = statements;
	}

	public toString(lineInfo = true): string {
		return `except ${this._errorInfo.toString(lineInfo)} (${this._errorCodes.toString(lineInfo)})\n${this._statements.map(x => x.toString(lineInfo)).join('\n')}`;
	}
}

export class FinallyNode extends BaseNode {
	private _statements: Statement[];

	public get statements(): Statement[] {
		return this._statements;
	}

	public constructor(position: ContextPosition, statements: Statement[]) {
		super(position);

		this._statements = statements;
	}

	public toString(lineInfo = true): string {
		return `finally\n${this._statements.map(x => x.toString(lineInfo)).join('\n')}`;
	}
}

export class TryStatementNode extends BaseNode {
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

	public constructor(position: ContextPosition, statements: Statement[], excepts: ExceptNode[], finallyNode?: FinallyNode) {
		super(position);

		this._statements = statements;
		this._excepts = excepts;
		this._finally = finallyNode;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const finallyBlock = this._finally ? this._finally.toString(lineInfo) : '';

		return `try\n${this._statements.map(x => x.toString(lineInfo)).join('\n')}\n${this._excepts.map(x => x.toString(lineInfo)).join('\n')}\n${finallyBlock}\nendtry${base}`;
	}
}

export class ForkStatementNode extends BaseNode {
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

	private constructor(position: ContextPosition, expression: Expression, statements: Statement[], nameVariable?: VariableNode) {
		super(position);

		this._name = nameVariable;
		this._expression = expression;
		this._statements = statements;
	}

	public static new(position: ContextPosition, expression: Expression, statements: Statement[]): ForkStatementNode {
		return new ForkStatementNode(position, expression, statements);
	}

	public static withName(position: ContextPosition, expression: Expression, statements: Statement[], nameVariable: VariableNode): ForkStatementNode {
		return new ForkStatementNode(position, expression, statements, nameVariable);
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		const name = this._name ? `${this._name.toString(lineInfo)} ` : '';

		return `fork ${name}(${this._expression.toString(lineInfo)})\n${this._statements.map(x => x.toString(lineInfo)).join('\n')}\nendfork${base}`;
	}
}

export class ReturnStatementNode extends FlowControlStatementNode<Expression> {
	public toString(lineInfo = true): string {
		const base = `${super.toString(lineInfo)}`;

		return `return${base}`;
	}
}

export class ContinueStatementNode extends FlowControlStatementNode<Expression> {
	public toString(lineInfo = true): string {
		const base = ` ${super.toString(lineInfo)}`;

		return `return ${base}`;
	}
}

export class BreakStatementNode extends FlowControlStatementNode<Expression> {
	public toString(lineInfo = true): string {
		const base = ` ${super.toString(lineInfo)}`;

		return `return ${base}`;
	}
}

export class CommentStatementNode extends BaseNode {
	private _comment: string;

	public get text(): string {
		return this._comment;
	}

	public constructor(position: ContextPosition, comment: string) {
		super(position);

		this._comment = comment;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		return `"${this._comment}";${base}`;
	}
}

export class EmptyStatementNode extends BaseNode {
	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';

		return `<empty>;${base}`;
	}
}

export class ExpressionStatementNode extends BaseNode {
	private _expression: Expression;

	public get expression(): Expression {
		return this._expression;
	}

	public constructor(position: ContextPosition, expression: Expression) {
		super(position);

		this._expression = expression;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString(lineInfo)})` : '';
		return `${this._expression.toString(lineInfo)};${base}`;
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

export class ConditionalInNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} in ${this._right.toString(lineInfo)}`;
	}
}

export class ConditionalAndNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} && ${this._right.toString(lineInfo)}`;
	}
}

export class ConditionalOrNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} || ${this._right.toString(lineInfo)}`;
	}
}

export class BitwiseAndNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} &. ${this._right.toString(lineInfo)}`;
	}
}

export class BitwiseInclusiveOrNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} |. ${this._right.toString(lineInfo)}`;
	}
}

export class BitwiseExclusiveOrNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} ^. ${this._right.toString(lineInfo)}`;
	}
}

export class EqualNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} == ${this._right.toString(lineInfo)}`;
	}
}

export class UnequalNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} != ${this._right.toString(lineInfo)}`;
	}
}

export class GreaterThanNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} > ${this._right.toString(lineInfo)}`;
	}
}

export class LessThanNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} < ${this._right.toString(lineInfo)}`;
	}
}

export class GreaterOrEqualNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} >= ${this._right.toString(lineInfo)}`;
	}
}

export class LessOrEqualNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} <= ${this._right.toString(lineInfo)}`;
	}
}

export class ShiftLeftNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} << ${this._right.toString(lineInfo)}`;
	}
}

export class ShiftRightNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} >> ${this._right.toString(lineInfo)}`;
	}
}

export class AdditionNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} + ${this._right.toString(lineInfo)}`;
	}
}

export class SubtractionNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} - ${this._right.toString(lineInfo)}`;
	}
}

export class MultiplicationNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} * ${this._right.toString(lineInfo)}`;
	}
}

export class DivisionNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} / ${this._right.toString(lineInfo)}`;
	}
}

export class ModulationNode extends TwoPartNode<Expression, Expression> {
	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} % ${this._right.toString(lineInfo)}`;
	}
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

export class ListSlicerNode extends BaseNode {
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

export class ErrorCodeNode extends LiteralNode<ErrorCode> {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return ErrorCode[this._value];
	}
}

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
		return `${this._key} -> ${this._value}`;
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
}

export class VariableNode extends ReferenceNode {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return `${this._name}`;
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