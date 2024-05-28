import { CharStream, CommonTokenStream, ParserRuleContext } from 'antlr4';
import MoocodeLexer from '../grammar/generated/MoocodeLexer';
import MoocodeParser from '../grammar/generated/MoocodeParser';
import MoocodePartialParser from '../grammar/generated/MoocodePartialParser';
import { Ast, ParsedExpression, SyntaxError } from '../interfaces';
import { CustomErrorStrategy, InvalidOperationError, LexerErrorListener, MergedContext, ParserErrorListener } from './error';
import { ExpressionGenerator } from './expression-generator';
import { InvalidStatementNode, Statement } from './nodes';
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

function generatePartialCst(input: string, getResult: (parser: MoocodePartialParser) => ParserRuleContext[]): Cst {
    return internalGenerateCst<MoocodePartialParser>(input,
        lexer => new MoocodePartialParser(new CommonTokenStream(lexer)), getResult);
}

function hasError(context: ParserRuleContext): boolean {
    if (context.exception) {
        return true;
    }

    for (const child of context.children ?? []) {
        if (hasError(child as ParserRuleContext)) {
            return true;
        }
    }

    return false;
}

function getSanitizedCst(contexts: ParserRuleContext[]): ParserRuleContext[] {
    const result: ParserRuleContext[] = [];

    let contextsWithError: ParserRuleContext[] = [];

    for (const context of contexts) {
        if (!hasError(context)) {
            if (contextsWithError.length > 0) {
                result.push(new MergedContext(contextsWithError));
                contextsWithError = [];
            }

            result.push(context);
            continue;
        }

        contextsWithError.push(context);
    }

    if (contextsWithError.length > 0) {
        result.push(new MergedContext(contextsWithError));
    }

    return result;
}

function internalGenerateAst(contexts: ParserRuleContext[]): (Statement | undefined)[] {
    const results: (Statement | undefined)[] = [];

    for (const context of contexts) {
        if (context instanceof MergedContext) {
            const cst = generatePartialCst(context.getText(), parser => parser.moocode().statement_list());

            const newContext = cst.contexts.at(0);

            if (newContext) {
                results.push(StatementGenerator.generateStatement(newContext, 0));
            }

            continue;
        }

        results.push(StatementGenerator.generateStatement(context, 0));
    }

    return results;
}

interface SanitizedAst {
    valid: Statement[];
    invalid: InvalidStatementNode[];
}

function getSanitizedAst(statements: (Statement | undefined)[]): SanitizedAst {
    const validStatements: Statement[] = [];
    const invalidStatements: InvalidStatementNode[] = [];

    for (const statement of statements) {
        if (!statement) {
            continue;
        }

        if (statement instanceof InvalidStatementNode) {
            invalidStatements.push(statement);
            continue;
        }

        validStatements.push(statement);
    }

    return { valid: validStatements, invalid: invalidStatements };
}

export function generateAst(input: string): Ast {
    const cst = generateCst(input, parser => parser.moocode().statement_list());

    const sanitizedCst = getSanitizedCst(cst.contexts);

    const ast = internalGenerateAst(sanitizedCst);

    const sanitizedAst = getSanitizedAst(ast);

    return { valid: sanitizedAst.valid, invalid: sanitizedAst.invalid, lexerErrors: cst.lexerErrors, parserErrors: cst.parserErrors };
}

export function parseExpression(input: string): ParsedExpression {
    const cst = generateCst(input, parser => [parser.expression()]);

    if (cst.contexts.length < 1) {
        return { expression: undefined, lexerErrors: cst.lexerErrors, parserErrors: cst.parserErrors };
    }

    if (cst.contexts.length > 1) {
        throw new InvalidOperationError(`found more than one expression in input; ${input}`);
    }

    return { expression: ExpressionGenerator.generateExpression(cst.contexts[0]), lexerErrors: cst.lexerErrors, parserErrors: cst.parserErrors };
}