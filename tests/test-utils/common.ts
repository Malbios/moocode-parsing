import { CharStream, CommonTokenStream, ParserRuleContext } from 'antlr4';
import { inspect as utilInspect } from 'util';

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

export function log(data: unknown, depth?: number) {
    console.log(inspect(data, depth ?? 1));
}

export function inspect(data: unknown, depth: number): string {
    return utilInspect(data, { showHidden: false, depth: depth, colors: true });
}

export function inspectAll(data: unknown): string {
    return utilInspect(data, { showHidden: false, depth: null, colors: true });
}

function getInnerContextName(context: ParserRuleContext, depth = 0): string[] {
    let strings = [getDepthIndent(depth) + context.constructor.name];

    for (let i = 0; i < context.getChildCount(); i++) {
        const childStrings = getInnerContextName(context.getChild(i) as ParserRuleContext, depth + 1);
        strings = strings.concat(childStrings);
    }

    return strings;
}

export function getContextNames(contexts: ParserRuleContext[]): string {
    return contexts.map(x => getInnerContextName(x).join('\n')).join('\n\n---\n\n');
}

export function getContextName(context: ParserRuleContext): string {
    return getContextNames([context]);
}

function getDepthIndent(depth: number): string {
    let indent = '';

    for (let i = 0; i < depth; i++) {
        indent += '|-';
    }

    return indent;
}