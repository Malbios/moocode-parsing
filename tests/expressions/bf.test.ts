import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';
import ParsingHelpers from '../test-utils/parsing';

suite('built-in function invocation tests', () => {
    test('should parse a bf invocation with one argument', () => {
        const parser = CommonHelpers.getParser('valid(me)');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'valid');

        expect(primaryExpression?.bf_invocation_list()).to.have.length(1);

        const invocationArguments = primaryExpression?.bf_invocation(0)?._arguments;

        expect(invocationArguments?.expression_list()).to.have.length(1);

        ExpectHelpers.expectIdentifier(invocationArguments?.expression(0), 'me');
    });

    test('should parse a bf invocation with multiple arguments', () => {
        const parser = CommonHelpers.getParser('valid(me, not)');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'valid');

        expect(primaryExpression?.bf_invocation_list()).to.have.length(1);

        const invocationArguments = primaryExpression?.bf_invocation(0)?._arguments;

        expect(invocationArguments?.expression_list()).to.have.length(2);

        ExpectHelpers.expectIdentifier(invocationArguments?.expression(0), 'me');
        ExpectHelpers.expectIdentifier(invocationArguments?.expression(1), 'not');
    });
});