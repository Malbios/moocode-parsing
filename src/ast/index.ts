import { CharStream, CommonTokenStream } from 'antlr4';
import MoocodeLexer from '../grammar/generated/MoocodeLexer';
import MoocodeParser from '../grammar/generated/MoocodeParser';
import { ParsingError, SyntaxErrorListener } from './error';
import { Statement } from './nodes';
import { StatementGenerator } from './statement-generator';

export default function generateAst(code: string): Statement[] {
    const lexer = new MoocodeLexer(new CharStream(code));
    const parser = new MoocodeParser(new CommonTokenStream(lexer));

    const syntaxErrorListener = new SyntaxErrorListener();
    parser.removeErrorListeners();
    parser.addErrorListener(syntaxErrorListener);

    const statementContexts = parser.moocode().statement_list();

    // console.log(getContextNames(statementContexts));

    if (parser.syntaxErrorsCount > 0) {
        throw new ParsingError(code, syntaxErrorListener.errors);
    }

    return StatementGenerator.generateStatements(statementContexts, 0);
}