import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';
import ParsingHelpers from '../test-utils/parsing';

suite('shift expression tests', () => {
    test('should parse a shift left', () => {
        const parser = CommonHelpers.getParser('4 << 6');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const shift = ParsingHelpers.getShift(result);

        expect(shift?.additive_expression_list()).to.have.length(2);

        expect(shift?.LOG_SHIFT_LEFT_list()).to.have.length(1);
        expect(shift?.LOG_SHIFT_RIGHT_list()).to.have.length(0);

        ExpectHelpers.expectInteger(shift?.additive_expression(0), '4');
        ExpectHelpers.expectInteger(shift?.additive_expression(1), '6');
    });

    test('should parse a shift right', () => {
        const parser = CommonHelpers.getParser('8 >> 2');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const shift = ParsingHelpers.getShift(result);

        expect(shift?.additive_expression_list()).to.have.length(2);

        expect(shift?.LOG_SHIFT_LEFT_list()).to.have.length(0);
        expect(shift?.LOG_SHIFT_RIGHT_list()).to.have.length(1);

        ExpectHelpers.expectInteger(shift?.additive_expression(0), '8');
        ExpectHelpers.expectInteger(shift?.additive_expression(1), '2');
    });

    test('should parse a chained shift', () => {
        const parser = CommonHelpers.getParser('8 >> 2 << 1');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const shift = ParsingHelpers.getShift(result);

        expect(shift?.additive_expression_list()).to.have.length(3);

        expect(shift?.LOG_SHIFT_LEFT_list()).to.have.length(1);
        expect(shift?.LOG_SHIFT_RIGHT_list()).to.have.length(1);

        ExpectHelpers.expectInteger(shift?.additive_expression(0), '8');
        ExpectHelpers.expectInteger(shift?.additive_expression(1), '2');
        ExpectHelpers.expectInteger(shift?.additive_expression(2), '1');
    });
});