import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('multiplicative expression tests', () => {
    test('should parse a multiplication', () => {
        const parser = CommonHelpers.getParser('7 * 4');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const multiExpression = ParsingHelpers.getMultiplicative(result);

        expect(multiExpression?.STAR_list()).to.have.length(1);
        expect(multiExpression?.DIV_list()).to.have.length(0);
        expect(multiExpression?.PERCENT_list()).to.have.length(0);

        expect(multiExpression?.unary_expression_list()).to.have.length(2);

        ExpectHelpers.expectInteger(multiExpression?.unary_expression(0), '7');
        ExpectHelpers.expectInteger(multiExpression?.unary_expression(1), '4');
    });

    test('should parse a division', () => {
        const parser = CommonHelpers.getParser('7 / 4');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const multiExpression = ParsingHelpers.getMultiplicative(result);

        expect(multiExpression?.STAR_list()).to.have.length(0);
        expect(multiExpression?.DIV_list()).to.have.length(1);
        expect(multiExpression?.PERCENT_list()).to.have.length(0);

        expect(multiExpression?.unary_expression_list()).to.have.length(2);

        ExpectHelpers.expectInteger(multiExpression?.unary_expression(0), '7');
        ExpectHelpers.expectInteger(multiExpression?.unary_expression(1), '4');
    });

    test('should parse a modulation', () => {
        const parser = CommonHelpers.getParser('7 % 4');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const multiExpression = ParsingHelpers.getMultiplicative(result);

        expect(multiExpression?.STAR_list()).to.have.length(0);
        expect(multiExpression?.DIV_list()).to.have.length(0);
        expect(multiExpression?.PERCENT_list()).to.have.length(1);

        expect(multiExpression?.unary_expression_list()).to.have.length(2);

        ExpectHelpers.expectInteger(multiExpression?.unary_expression(0), '7');
        ExpectHelpers.expectInteger(multiExpression?.unary_expression(1), '4');
    });

    test('should parse a chained multiplicative', () => {
        const parser = CommonHelpers.getParser('7 % 4 * 3 / 12');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const multiExpression = ParsingHelpers.getMultiplicative(result);

        expect(multiExpression?.STAR_list()).to.have.length(1);
        expect(multiExpression?.DIV_list()).to.have.length(1);
        expect(multiExpression?.PERCENT_list()).to.have.length(1);

        expect(multiExpression?.unary_expression_list()).to.have.length(4);

        ExpectHelpers.expectInteger(multiExpression?.unary_expression(0), '7');
        ExpectHelpers.expectInteger(multiExpression?.unary_expression(1), '4');
        ExpectHelpers.expectInteger(multiExpression?.unary_expression(2), '3');
        ExpectHelpers.expectInteger(multiExpression?.unary_expression(3), '12');
    });
});