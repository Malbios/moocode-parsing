import { CharStream, CommonTokenStream, ParserRuleContext, TerminalNode } from 'antlr4';
import MoocodeLexer from '../grammar/generated/MoocodeLexer';
import MoocodeParser from '../grammar/generated/MoocodeParser';
import MoocodePartialParser from '../grammar/generated/MoocodePartialParser';
import { Ast, ParsedExpression, SyntaxError } from '../interfaces';
import { ContextPosition, getContextAsText } from './common';
import { CustomErrorStrategy, InvalidOperationError, LexerErrorListener, ParserErrorListener } from './error';
import { ExpressionGenerator } from './expression-generator';
import { InvalidExpressionNode, InvalidStatementNode, Statement } from './nodes';
import { StatementGenerator } from './statement-generator';

interface Cst {
    contexts: ParserRuleContext[];
    lexerErrors: SyntaxError[];
    parserErrors: SyntaxError[];
}

function internalGenerateCst<T extends (MoocodeParser | MoocodePartialParser)>(input: string, getParser: (lexer: MoocodeLexer) => T, getResult: (parser: T) => ParserRuleContext[]): Cst {
    const lexer = new MoocodeLexer(new CharStream(input));
    const parser = getParser(lexer);

    const lexerErrorListener = new LexerErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);

    const parserErrorListener = new ParserErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(parserErrorListener);

    parser._errHandler = new CustomErrorStrategy();

    const result = getResult(parser);

    return { contexts: result, lexerErrors: lexerErrorListener.errors, parserErrors: parserErrorListener.errors };
}

function generateCst(input: string, getResult: (parser: MoocodeParser) => ParserRuleContext[]): Cst {
    return internalGenerateCst<MoocodeParser>(input,
        lexer => new MoocodeParser(new CommonTokenStream(lexer)), getResult);
}

// function generatePartialCst(input: string, getResult: (parser: MoocodePartialParser) => ParserRuleContext[]): Cst {
//     return internalGenerateCst<MoocodePartialParser>(input,
//         lexer => new MoocodePartialParser(new CommonTokenStream(lexer)), getResult);
// }

function hasErrorOrArtificialToken(context: ParserRuleContext): boolean {
    if (context.exception) {
        return true;
    }

    const token = context as unknown as TerminalNode;
    if (token?.symbol?.start === -1 && token?.symbol?.stop === -1 && token?.symbol?.tokenIndex === -1) {
        return true;
    }

    for (const child of context.children ?? []) {
        if (hasErrorOrArtificialToken(child as ParserRuleContext)) {
            return true;
        }
    }

    return false;
}

interface SanitizedCst {
    valid: ParserRuleContext[];
    invalid: ParserRuleContext[];
}

function getSanitizedCst(contexts: ParserRuleContext[]): SanitizedCst {
    const valid: ParserRuleContext[] = [];
    const invalid: ParserRuleContext[] = [];

    for (const context of contexts) {
        if (hasErrorOrArtificialToken(context)) {
            invalid.push(context);
            continue;
        }

        valid.push(context);
    }

    return { valid: valid, invalid: invalid };
}

interface InternalAst {
    valid: Statement[];
    invalid: InvalidStatementNode[];
}

function internalGenerateAst(cst: SanitizedCst): InternalAst {
    const valid: Statement[] = [];
    const invalid: InvalidStatementNode[] = [];

    for (const context of cst.valid) {
        const result = StatementGenerator.generateStatement(context, 0);

        if (result) {
            valid.push(result);
        }
    }

    for (const context of cst.invalid) {
        const position = ContextPosition.fromContext(context);
        const text = getContextAsText(context);

        invalid.push(new InvalidStatementNode(position, text));
    }

    return { valid: valid, invalid: invalid };
}

export function generateAst(input: string): Ast {
    const cst = generateCst(input, parser => parser.moocode().statement_list());

    const sanitizedCst = getSanitizedCst(cst.contexts);

    const ast = internalGenerateAst(sanitizedCst);

    return { valid: ast.valid, invalid: ast.invalid, lexerErrors: cst.lexerErrors, parserErrors: cst.parserErrors };
}

export function parseExpression(input: string): ParsedExpression {
    const cst = generateCst(input, parser => [parser.expression()]);

    if (cst.contexts.length < 1) {
        return { expression: undefined, lexerErrors: cst.lexerErrors, parserErrors: cst.parserErrors };
    }

    if (cst.contexts.length > 1) {
        throw new InvalidOperationError(`found more than one expression in input: ${input}`);
    }

    const context = cst.contexts[0];

    if (hasErrorOrArtificialToken(context)) {
        const position = ContextPosition.fromContext(context);
        const text = getContextAsText(context);

        return {
            expression: new InvalidExpressionNode(position, text),
            lexerErrors: cst.lexerErrors,
            parserErrors: cst.parserErrors
        };
    }

    return {
        expression: ExpressionGenerator.generateExpression(cst.contexts[0]),
        lexerErrors: cst.lexerErrors,
        parserErrors: cst.parserErrors
    };
}