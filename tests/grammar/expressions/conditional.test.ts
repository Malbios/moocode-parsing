import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('conditional expression tests', () => {
    test('should parse a conditional', () => {
        const parser = CommonHelpers.getParser('true ? "yes" | -1');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const conditionalExpression = ParsingHelpers.getConditional(result);

        ExpectHelpers.expectBool(conditionalExpression?._if_conditions, 'true');
        ExpectHelpers.expectString(conditionalExpression?._true_ex, '"yes"');
        ExpectHelpers.expectInteger(conditionalExpression?._false_ex, '-1');
    });

    test('should parse a conditional in', () => {
        const parser = CommonHelpers.getParser('1 in my_list');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const conditionalInExpression = ParsingHelpers.getConditionalIn(result);

        expect(conditionalInExpression?.conditional_or_expression_list()).to.have.length(2);

        ExpectHelpers.expectInteger(conditionalInExpression?.conditional_or_expression(0), '1');
        ExpectHelpers.expectIdentifier(conditionalInExpression?.conditional_or_expression(1), 'my_list');
    });

    test('should parse a conditional or', () => {
        const parser = CommonHelpers.getParser('true || false');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const conditionalOrExpression = ParsingHelpers.getConditionalOr(result);

        expect(conditionalOrExpression?.conditional_and_expression_list()).to.have.length(2);

        ExpectHelpers.expectBool(conditionalOrExpression?.conditional_and_expression(0), 'true');
        ExpectHelpers.expectBool(conditionalOrExpression?.conditional_and_expression(1), 'false');
    });

    test('should parse a chained conditional or', () => {
        const parser = CommonHelpers.getParser('true || false || 0');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const conditionalOrExpression = ParsingHelpers.getConditionalOr(result);

        expect(conditionalOrExpression?.conditional_and_expression_list()).to.have.length(3);

        ExpectHelpers.expectBool(conditionalOrExpression?.conditional_and_expression(0), 'true');
        ExpectHelpers.expectBool(conditionalOrExpression?.conditional_and_expression(1), 'false');
        ExpectHelpers.expectInteger(conditionalOrExpression?.conditional_and_expression(2), '0');
    });

    test('should parse a conditional and', () => {
        const parser = CommonHelpers.getParser('false && true');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const conditionalAndExpression = ParsingHelpers.getConditionalAnd(result);

        expect(conditionalAndExpression?.inclusive_or_expression_list()).to.have.length(2);

        ExpectHelpers.expectBool(conditionalAndExpression?.inclusive_or_expression(0), 'false');
        ExpectHelpers.expectBool(conditionalAndExpression?.inclusive_or_expression(1), 'true');
    });

    test('should parse a chained conditional and', () => {
        const parser = CommonHelpers.getParser('false && true && 1');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const conditionalAndExpression = ParsingHelpers.getConditionalAnd(result);

        expect(conditionalAndExpression?.inclusive_or_expression_list()).to.have.length(3);

        ExpectHelpers.expectBool(conditionalAndExpression?.inclusive_or_expression(0), 'false');
        ExpectHelpers.expectBool(conditionalAndExpression?.inclusive_or_expression(1), 'true');
        ExpectHelpers.expectInteger(conditionalAndExpression?.inclusive_or_expression(2), '1');
    });

    test('should parse nested conditionals', () => {
        const parser = CommonHelpers.getParser('true || false && 1');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const conditionalOrExpression = ParsingHelpers.getConditionalOr(result);

        expect(conditionalOrExpression?.conditional_and_expression_list()).to.have.length(2);

        ExpectHelpers.expectBool(conditionalOrExpression?.conditional_and_expression(0), 'true');

        const conditionalAndExpression = ParsingHelpers.getConditionalAnd(conditionalOrExpression?.conditional_and_expression(1));

        expect(conditionalAndExpression?.inclusive_or_expression_list()).to.have.length(2);

        ExpectHelpers.expectBool(conditionalAndExpression?.inclusive_or_expression(0), 'false');
        ExpectHelpers.expectInteger(conditionalAndExpression?.inclusive_or_expression(1), '1');
    });
});