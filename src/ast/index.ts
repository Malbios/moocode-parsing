import { CharStream, CommonTokenStream, ParserRuleContext } from 'antlr4';
import MoocodeLexer from '../grammar/generated/MoocodeLexer';
import MoocodeParser from '../grammar/generated/MoocodeParser';
import { ContextWithError, LexerErrorListener, ParserErrorListener } from './error';
import { InvalidStatement, Statement } from './nodes';
import { StatementGenerator } from './statement-generator';

function generateCst(input: string, getResult: (parser: MoocodeParser) => ParserRuleContext[]): ParserRuleContext[] {
    const lexer = new MoocodeLexer(new CharStream(input));
    const parser = new MoocodeParser(new CommonTokenStream(lexer));

    const lexerErrorListener = new LexerErrorListener();
    lexer.removeErrorListeners();
    lexer.addErrorListener(lexerErrorListener);

    const parserErrorListener = new ParserErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(parserErrorListener);

    const result = getResult(parser);

    for (const error of lexerErrorListener.errors) {
        console.log(error.toString());
    }

    for (const error of parserErrorListener.errors) {
        console.log(error.toString());
    }

    return result;
}

function generateStatementNode(context: ParserRuleContext): Statement | InvalidStatement | undefined {
    if (context instanceof ContextWithError) {
        return new InvalidStatement(context.position, context.text);
    }

    return StatementGenerator.generateStatement(context, 0);
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
    const sanitizedContexts: ParserRuleContext[] = [];

    let contextWithError: ContextWithError | undefined = undefined;

    for (const context of contexts) {
        if (!hasError(context)) {
            if (contextWithError) {
                sanitizedContexts.push(contextWithError);
                contextWithError = undefined;
            }

            sanitizedContexts.push(context);
            continue;
        }

        if (contextWithError) {
            contextWithError.add(context);
            continue;
        }

        contextWithError = new ContextWithError();
        contextWithError.add(context);
    }

    if (contextWithError) {
        sanitizedContexts.push(contextWithError);
    }

    return sanitizedContexts;
}

function getSanitizedAst(nodes: (Statement | undefined)[]): Statement[] {
    const sanitizedNodes: Statement[] = [];

    for (const node of nodes) {
        if (node) {
            sanitizedNodes.push(node);
        }
    }

    return sanitizedNodes;
}

export default function generateAst(input: string): Statement[] {
    const cst = generateCst(input, parser => parser.moocode().statement_list());

    const ast = getSanitizedCst(cst).map(x => generateStatementNode(x));

    return getSanitizedAst(ast);
}