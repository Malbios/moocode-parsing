import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('verb invocation tests', () => {
    test('should parse a verb invocation with one argument', () => {
        const parser = CommonHelpers.getParser('obj:x(y)');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'obj');

        expect(primaryExpression?.verb_invocation_list()).to.have.length(1);

        ExpectHelpers.expectIdentifier(primaryExpression?.verb_invocation(0).identifier(), 'x');

        const invocationArguments = primaryExpression?.verb_invocation(0)?._arguments;

        expect(invocationArguments?.expression_list()).to.have.length(1);

        ExpectHelpers.expectIdentifier(invocationArguments?.expression(0), 'y');
    });

    test('should parse a verb invocation with multiple arguments', () => {
        const parser = CommonHelpers.getParser('obj:x(y, z)');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'obj');

        expect(primaryExpression?.verb_invocation_list()).to.have.length(1);

        ExpectHelpers.expectIdentifier(primaryExpression?.verb_invocation(0).identifier(), 'x');

        const invocationArguments = primaryExpression?.verb_invocation(0)?._arguments;

        expect(invocationArguments?.expression_list()).to.have.length(2);

        ExpectHelpers.expectIdentifier(invocationArguments?.expression(0), 'y');
        ExpectHelpers.expectIdentifier(invocationArguments?.expression(1), 'z');
    });

    test('should parse a verb invocation with computed verb name', () => {
        const parser = CommonHelpers.getParser('obj:(y)()');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'obj');

        expect(primaryExpression?.verb_invocation_list()).to.have.length(1);

        const verbInvocation = primaryExpression?.verb_invocation(0);

        expect(verbInvocation?.identifier()).not.to.exist;

        ExpectHelpers.expectIdentifier(verbInvocation?._computed_verb_arguments, 'y');

        expect(verbInvocation?._arguments?.expression_list()).to.have.length(0);
    });

    test('should parse a corified verb invocation', () => {
        const parser = CommonHelpers.getParser('$verb_name()');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectCorifiedObject(primaryExpression?._pe, '$verb_name');

        expect(primaryExpression?.bf_invocation_list()).to.have.length(1);

        expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);
    });
});