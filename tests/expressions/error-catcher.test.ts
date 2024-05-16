import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';
import ParsingHelpers from '../test-utils/parsing';

suite('error catcher expression tests', () => {
    test('should parse an error catcher', () => {
        const parser = CommonHelpers.getParser('`stuff(1) ! E_VARNF => "yes"\'');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const errorCatcher = ParsingHelpers.getErrorCatcher(result);
        const primaryExpression = ParsingHelpers.getPrimaryExpression(errorCatcher?._try_);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'stuff');
        expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
        ExpectHelpers.expectInteger(primaryExpression?.bf_invocation(0), '1');

        expect(errorCatcher?.error_codes().error_code_list()).to.have.length(1);
        ExpectHelpers.expectError(errorCatcher?.error_codes().error_code(0), 'E_VARNF');

        ExpectHelpers.expectString(errorCatcher?._on_error, '"yes"');
    });

    test('should parse an error catcher with multiple error codes', () => {
        const parser = CommonHelpers.getParser('`stuff(1) ! E_TYPE, E_VARNF, E_PERM => "yes"\'');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const errorCatcher = ParsingHelpers.getErrorCatcher(result);
        const primaryExpression = ParsingHelpers.getPrimaryExpression(errorCatcher?._try_);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'stuff');
        expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
        ExpectHelpers.expectInteger(primaryExpression?.bf_invocation(0), '1');

        expect(errorCatcher?.error_codes().error_code_list()).to.have.length(3);
        ExpectHelpers.expectError(errorCatcher?.error_codes().error_code(0), 'E_TYPE');
        ExpectHelpers.expectError(errorCatcher?.error_codes().error_code(1), 'E_VARNF');
        ExpectHelpers.expectError(errorCatcher?.error_codes().error_code(2), 'E_PERM');

        ExpectHelpers.expectString(errorCatcher?._on_error, '"yes"');
    });
});