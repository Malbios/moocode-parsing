import { CharStream, CommonTokenStream } from 'antlr4';

import MoocodeLexer from '../../src/grammar/generated/MoocodeLexer';
import MoocodeParser from '../../src/grammar/generated/MoocodeParser';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class CommonHelpers {
    public static getParser(input: string): MoocodeParser {
        const lexer = new MoocodeLexer(new CharStream(input));
        const parser = new MoocodeParser(new CommonTokenStream(lexer));

        return parser;
    }
}