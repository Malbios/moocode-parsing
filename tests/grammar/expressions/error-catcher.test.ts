import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for error catcher expressions', () => {
    test('should parse an error catcher', () => {
        const parser = CommonHelpers.getParser('`stuff ! E_VARNF => "yes"\'');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const errorCatcher = ParsingHelpers.getErrorCatcher(result);

        ExpectHelpers.expectIdentifier(errorCatcher?._try_, 'stuff');

        expect(errorCatcher?.error_codes().expression_list()).to.have.length(1);
        ExpectHelpers.expectError(errorCatcher?.error_codes().expression(0), 'E_VARNF');

        ExpectHelpers.expectString(errorCatcher?._on_error, '"yes"');
    });

    test('should parse an error catcher with multiple error codes', () => {
        const parser = CommonHelpers.getParser('`stuff ! E_TYPE, E_VARNF, E_PERM => "yes"\'');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const errorCatcher = ParsingHelpers.getErrorCatcher(result);

        ExpectHelpers.expectIdentifier(errorCatcher?._try_, 'stuff');

        expect(errorCatcher?.error_codes().expression_list()).to.have.length(3);
        ExpectHelpers.expectError(errorCatcher?.error_codes().expression(0), 'E_TYPE');
        ExpectHelpers.expectError(errorCatcher?.error_codes().expression(1), 'E_VARNF');
        ExpectHelpers.expectError(errorCatcher?.error_codes().expression(2), 'E_PERM');

        ExpectHelpers.expectString(errorCatcher?._on_error, '"yes"');
    });

    test('should parse an error catcher with variable for error value', () => {
        const parser = CommonHelpers.getParser('`stuff ! my_var => "yes"\'');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const errorCatcher = ParsingHelpers.getErrorCatcher(result);

        ExpectHelpers.expectIdentifier(errorCatcher?._try_, 'stuff');

        expect(errorCatcher?.error_codes().expression_list()).to.have.length(1);
        ExpectHelpers.expectIdentifier(errorCatcher?.error_codes().expression(0), 'my_var');

        ExpectHelpers.expectString(errorCatcher?._on_error, '"yes"');
    });

    test('should parse an error catcher with ANY as error code', () => {
        const parser = CommonHelpers.getParser('`stuff ! ANY => "yes"\'');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const errorCatcher = ParsingHelpers.getErrorCatcher(result);

        ExpectHelpers.expectIdentifier(errorCatcher?._try_, 'stuff');

        expect(errorCatcher?.error_codes().expression_list()).to.have.length(1);
        expect(errorCatcher?.error_codes().expression(0).getText()).to.equal('ANY');

        ExpectHelpers.expectString(errorCatcher?._on_error, '"yes"');
    });

    test('should parse an error catcher with no on error expression', () => {
        const parser = CommonHelpers.getParser('`stuff ! ANY\'');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const errorCatcher = ParsingHelpers.getErrorCatcher(result);

        ExpectHelpers.expectIdentifier(errorCatcher?._try_, 'stuff');

        expect(errorCatcher?.error_codes().expression_list()).to.have.length(1);
        expect(errorCatcher?.error_codes().expression(0).getText()).to.equal('ANY');

        expect(errorCatcher?._on_error).to.not.exist;
    });
});