import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('bitwise expression tests', () => {
    test('should parse an inclusive or', () => {
        const parser = CommonHelpers.getParser('my_var |. other_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const inclusiveOrExpression = ParsingHelpers.getInclusiveOr(result);

        expect(inclusiveOrExpression?.exclusive_or_expression_list()).to.have.length(2);

        ExpectHelpers.expectIdentifier(inclusiveOrExpression?.exclusive_or_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(inclusiveOrExpression?.exclusive_or_expression(1), 'other_var');
    });

    test('should parse an exclusive or', () => {
        const parser = CommonHelpers.getParser('my_var ^. other_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const exclusiveOrExpression = ParsingHelpers.getExclusiveOr(result);

        expect(exclusiveOrExpression?.and_expression_list()).to.have.length(2);

        ExpectHelpers.expectIdentifier(exclusiveOrExpression?.and_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(exclusiveOrExpression?.and_expression(1), 'other_var');
    });

    test('should parse an and', () => {
        const parser = CommonHelpers.getParser('my_var &. other_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const andExpression = ParsingHelpers.getAnd(result);

        expect(andExpression?.equality_expression_list()).to.have.length(2);

        ExpectHelpers.expectIdentifier(andExpression?.equality_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(andExpression?.equality_expression(1), 'other_var');
    });
});