import { CharStream, CommonTokenStream, ParserRuleContext } from 'antlr4';

import MoocodeLexer from '../grammar/generated/MoocodeLexer';
import MoocodeParser, {
    AssignmentContext,
    Bool_literalContext,
    Elseif_expressionContext,
    Empty_returnContext,
    Float_literalContext,
    IdentifierContext,
    If_expressionContext,
    If_statementContext,
    Integer_literalContext,
    Non_empty_returnContext,
    String_literalContext
} from '../grammar/generated/MoocodeParser';

import {
    BooleanValueNode,
    ElseNode,
    Expression,
    FloatValueNode,
    IfNode,
    IfStatementNode,
    IntegerValueNode,
    ReturnStatementNode,
    Statement,
    StringValueNode,
    VariableAssignmentNode,
    VariableNode
} from './nodes';

import { NodeGenerationError, ParsingError } from '../error';
import { SingleValueVisitor } from './abstract';
import { SyntaxErrorListener } from './listeners';

function generateStatements(contexts: ParserRuleContext[]): Statement[] {
    const statementNodes = new Array<Statement>();

    for (const x of contexts) {
        const childContext = x as ParserRuleContext;
        statementNodes.push(generateStatement(childContext));
    }

    return statementNodes;
}

function generateStatement(context: ParserRuleContext): Statement {
    const visitor = new BuildStatementVisitor();
    const result = visitor.visit(context);

    if (!result) {
        throw new NodeGenerationError();
    }

    return result;
}

function generateNode<T>(context: ParserRuleContext): T {
    const visitor = new BuildExpressionVisitor();
    const result = visitor.visit(context) as T;

    if (!result) {
        throw new NodeGenerationError();
    }

    return result;
}

function generateIfNode(context: If_expressionContext | Elseif_expressionContext): IfNode {
    const ifConditions = generateNode<Expression>(context._conditions);
    const ifBody = generateStatements(context._body.statement_list());

    return new IfNode(context, ifConditions, ifBody);
}

class BuildStatementVisitor extends SingleValueVisitor<Statement> {
    public override visitIf_statement = (context: If_statementContext): Statement => {
        const ifNode = generateIfNode(context.if_expression());

        const elseIfNodes = new Array<IfNode>();
        for (const x of context.elseif_expression_list()) {
            elseIfNodes.push(generateIfNode(x));
        }

        let elseNode: ElseNode | undefined = undefined;

        if (context.else_expression()) {
            const elseBody = generateStatements(context.else_expression()._body.statement_list());
            elseNode = new ElseNode(context.else_expression(), elseBody);
        }

        return new IfStatementNode(context, ifNode, elseIfNodes, elseNode);
    }

    public override visitAssignment = (context: AssignmentContext): Statement => {
        const leftNode = generateNode<VariableNode>(context.unary_expression());
        const rightNode = generateNode<Expression>(context.expression());

        return new VariableAssignmentNode(context, leftNode, rightNode);
    }

    public override visitEmpty_return = (context: Empty_returnContext): Statement => {
        return new ReturnStatementNode(context);
    }

    public override visitNon_empty_return = (context: Non_empty_returnContext): Statement => {
        const returnExpressionNode = generateNode<Expression>(context.expression());
        return new ReturnStatementNode(context, returnExpressionNode);
    }
}

class BuildExpressionVisitor extends SingleValueVisitor<Expression> {
    public override visitIdentifier = (context: IdentifierContext): VariableNode => {
        return VariableNode.fromContext(context);
    }

    public override visitString_literal = (context: String_literalContext): Expression => {
        return StringValueNode.fromContext(context);
    }

    public override visitInteger_literal = (context: Integer_literalContext): Expression => {
        return IntegerValueNode.fromContext(context);
    }

    public override visitFloat_literal = (context: Float_literalContext): Expression => {
        return FloatValueNode.fromContext(context);
    }

    public override visitBool_literal = (context: Bool_literalContext): Expression => {
        return BooleanValueNode.fromContext(context);
    }
}

export function generateAst(code: string): Statement[] {
    const lexer = new MoocodeLexer(new CharStream(code));
    const parser = new MoocodeParser(new CommonTokenStream(lexer));

    const syntaxErrorListener = new SyntaxErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(syntaxErrorListener);

    const statementContexts = parser.moocode().statement_list();

    if (parser.syntaxErrorsCount > 0) {
        throw new ParsingError(code, syntaxErrorListener.errors);
    }

    return generateStatements(statementContexts);
}