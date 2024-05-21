import { ParserRuleContext } from 'antlr4';
import { expect } from 'chai';

import moocodeParser, {
    Bool_literalContext,
    Corified_objectContext,
    Dollar_literalContext,
    Error_codeContext,
    Float_literalContext,
    IdentifierContext,
    Integer_literalContext,
    Object_idContext,
    Object_referenceContext,
    String_literalContext
} from '../../src/grammar/generated/MoocodeParser';

import { fail } from 'assert';
import { ParsingError } from '../../src/ast/error';
import { Action } from '../../src/interfaces';
import ParsingHelpers from './parsing';

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class ExpectHelpers {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private static expectValue<T extends ParserRuleContext>(context: ParserRuleContext | undefined, expectedContextType: any, expectedValue: string) {
        const actualValue = ParsingHelpers.getValue<T>(context, expectedContextType);
        expect(actualValue?.toLowerCase()).to.equal(expectedValue.toLowerCase());
    }

    public static expectSyntaxErrors(parser: moocodeParser, count: number) {
        expect(parser.syntaxErrorsCount).to.equal(count, 'expected syntax errors');
    }

    public static expectBool(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Bool_literalContext>(context, Bool_literalContext, expectedValue);
    }

    public static expectInteger(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Integer_literalContext>(context, Integer_literalContext, expectedValue);
    }

    public static expectFloat(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Float_literalContext>(context, Float_literalContext, expectedValue);
    }

    public static expectString(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<String_literalContext>(context, String_literalContext, expectedValue);
    }

    public static expectDollar(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Dollar_literalContext>(context, Dollar_literalContext, expectedValue);
    }

    public static expectIdentifier(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<IdentifierContext>(context, IdentifierContext, expectedValue);
    }

    public static expectObjectReference(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Object_referenceContext>(context, Object_referenceContext, expectedValue);
    }

    public static expectObjectId(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Object_idContext>(context, Object_idContext, expectedValue);
    }

    public static expectCorifiedObject(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Corified_objectContext>(context, Corified_objectContext, expectedValue);
    }

    public static expectError(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Error_codeContext>(context, Error_codeContext, expectedValue);
    }

    public static expectEmptyReturn(context: ParserRuleContext | undefined) {
        const foundContext = ParsingHelpers.getEmptyReturn(context);
        expect(foundContext).to.exist;
    }

    public static expectNonEmptyReturn(context: ParserRuleContext | undefined) {
        const foundContext = ParsingHelpers.getNonEmptyReturn(context);
        expect(foundContext).to.exist;
    }

    public static expectEmptyBreak(context: ParserRuleContext | undefined) {
        const foundContext = ParsingHelpers.getEmptyBreak(context);
        expect(foundContext).to.exist;
    }

    public static expectNonEmptyBreak(context: ParserRuleContext | undefined) {
        const foundContext = ParsingHelpers.getNonEmptyBreak(context);
        expect(foundContext).to.exist;
    }

    public static expectEmptyContinue(context: ParserRuleContext | undefined) {
        const foundContext = ParsingHelpers.getEmptyContinue(context);
        expect(foundContext).to.exist;
    }

    public static expectNonEmptyContinue(context: ParserRuleContext | undefined) {
        const foundContext = ParsingHelpers.getNonEmptyContinue(context);
        expect(foundContext).to.exist;
    }
}

export function expectParsingError(action: Action<void>) {
    try {
        action();
        fail();
    } catch (error: unknown) {
        const parsingError = error as ParsingError;
        if (!parsingError) {
            fail();
        }
    }
}