import { ParserRuleContext } from 'antlr4';
import { expect } from 'chai';

import moocodeParser, {
    Bool_literalContext,
    Corified_valueContext,
    Error_codeContext,
    Float_literalContext,
    IdentifierContext,
    Integer_literalContext,
    LiteralContext,
    Object_idContext,
    Object_referenceContext,
    Optional_variableContext,
    String_literalContext
} from '../../src/grammar/generated/MoocodeParser';

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

    public static expectDollar(context: ParserRuleContext | undefined) {
        this.expectValue<LiteralContext>(context, LiteralContext, '$');
    }

    public static expectCaret(context: ParserRuleContext | undefined) {
        this.expectValue<LiteralContext>(context, LiteralContext, '^');
    }

    public static expectIdentifier(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<IdentifierContext>(context, IdentifierContext, expectedValue);
    }

    public static expectOptionalVariable(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Optional_variableContext>(context, Optional_variableContext, expectedValue);
    }

    public static expectObjectReference(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Object_referenceContext>(context, Object_referenceContext, expectedValue);
    }

    public static expectObjectId(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Object_idContext>(context, Object_idContext, expectedValue);
    }

    public static expectCorifiedObject(context: ParserRuleContext | undefined, expectedValue: string) {
        this.expectValue<Corified_valueContext>(context, Corified_valueContext, expectedValue);
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

    public static expectBuiltInFunctionWithNoArguments(context: ParserRuleContext | undefined, expectedName: string) {
        const foundContext = ParsingHelpers.getBuiltInFunctionInvocation(context);
        expect(foundContext).to.exist;
        this.expectIdentifier(foundContext?.identifier(), expectedName);
        expect(foundContext?._arguments).to.not.exist;
    }
}
