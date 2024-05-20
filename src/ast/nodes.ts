import { ParserRuleContext } from 'antlr4';

import { DocumentPosition, getContextAsText } from '../common';
import { BaseNode, LiteralNode, ReferenceNode } from './abstract';

export type Statement = (IfStatementNode | Assignment | ReturnStatementNode);
export type Expression = (Assignment | NonAssignment);
export type NonAssignment = (VariableNode | LiteralValue);
export type Assignment = (VariableAssignmentNode);
export type ObjectReference = (VariableNode | ObjectIdNode | CorifiedObjectNode);
export type LiteralValue = (
    BooleanValueNode
    | IntegerValueNode
    | FloatValueNode
    | StringValueNode
);

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
}

export class ReturnStatementNode extends BaseNode {
    private _expression: Expression | undefined;

    public get expression(): Expression | undefined {
        return this._expression;
    }

    public constructor(context: ParserRuleContext, expression?: Expression) {
        super(DocumentPosition.fromContext(context));

        this._expression = expression;
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
}

export class BooleanValueNode extends LiteralNode<boolean> {
    private constructor(position: DocumentPosition, value: boolean) {
        super(position, value);
    }

    public static fromContext(context: ParserRuleContext): BooleanValueNode {
        return new BooleanValueNode(DocumentPosition.fromContext(context), JSON.parse(getContextAsText(context)));
    }
}

export class IntegerValueNode extends LiteralNode<Int64> {
    private constructor(position: DocumentPosition, value: Int64) {
        super(position, value);
    }

    public static fromContext(context: ParserRuleContext): IntegerValueNode {
        return new IntegerValueNode(DocumentPosition.fromContext(context), JSON.parse(getContextAsText(context)));
    }
}

export class FloatValueNode extends LiteralNode<Float> {
    private constructor(position: DocumentPosition, value: Float) {
        super(position, value);
    }

    public static fromContext(context: ParserRuleContext): FloatValueNode {
        return new FloatValueNode(DocumentPosition.fromContext(context), JSON.parse(getContextAsText(context)));
    }
}

export class StringValueNode extends LiteralNode<string> {
    private constructor(position: DocumentPosition, value: string) {
        super(position, value);
    }

    public static fromContext(context: ParserRuleContext): StringValueNode {
        return new StringValueNode(DocumentPosition.fromContext(context), JSON.parse(getContextAsText(context)));
    }
}

export class VariableNode extends ReferenceNode {
    private constructor(position: DocumentPosition, name: string) {
        super(position, name);
    }

    public static fromContext(context: ParserRuleContext): VariableNode {
        return new VariableNode(DocumentPosition.fromContext(context), getContextAsText(context));
    }
}

export class ObjectIdNode extends ReferenceNode {
    private constructor(position: DocumentPosition, name: string) {
        super(position, name);
    }

    public static fromContext(context: ParserRuleContext): ObjectIdNode {
        return new ObjectIdNode(DocumentPosition.fromContext(context), getContextAsText(context));
    }
}

export class CorifiedObjectNode extends ReferenceNode {
    private constructor(position: DocumentPosition, name: string) {
        super(position, name);
    }

    public static fromContext(context: ParserRuleContext): CorifiedObjectNode {
        return new CorifiedObjectNode(DocumentPosition.fromContext(context), getContextAsText(context));
    }
}

function getPositionForIfNode(context: ParserRuleContext, conditions: Expression, body?: Statement[]): DocumentPosition {
    if (!body || body.length < 1) {
        return DocumentPosition.fromValues(context.start, conditions.position.stopToken);
    }

    const lastBodyStatement = body.at(body.length - 1);
    return DocumentPosition.fromValues(context.start, lastBodyStatement?.position.stopToken);
}