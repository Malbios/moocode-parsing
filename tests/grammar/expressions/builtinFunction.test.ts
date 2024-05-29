import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for built-in function invocations', () => {
    test('should parse invocation with one argument', () => {
        const parser = CommonHelpers.getParser('valid(me)');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const bfInvocation = ParsingHelpers.getBuiltInFunctionInvocation(result);

        ExpectHelpers.expectIdentifier(bfInvocation?.identifier(), 'valid');

        const invocationArguments = bfInvocation?._arguments;

        expect(invocationArguments?.expression_list()).to.have.length(1);

        ExpectHelpers.expectIdentifier(invocationArguments?.expression(0), 'me');
    });

    test('should parse invocation with multiple arguments', () => {
        const parser = CommonHelpers.getParser('valid(me, not)');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const bfInvocation = ParsingHelpers.getBuiltInFunctionInvocation(result);

        ExpectHelpers.expectIdentifier(bfInvocation?.identifier(), 'valid');

        const invocationArguments = bfInvocation?._arguments;

        expect(invocationArguments?.expression_list()).to.have.length(2);

        ExpectHelpers.expectIdentifier(invocationArguments?.expression(0), 'me');
        ExpectHelpers.expectIdentifier(invocationArguments?.expression(1), 'not');
    });

    test('should parse invocation with no arguments', () => {
        const parser = CommonHelpers.getParser('valid()');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const bfInvocation = ParsingHelpers.getBuiltInFunctionInvocation(result);

        ExpectHelpers.expectIdentifier(bfInvocation?.identifier(), 'valid');

        expect(bfInvocation?._arguments).to.not.exist;
    });
});