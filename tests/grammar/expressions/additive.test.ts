import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('additive expression tests', () => {
    test('should parse an addition', () => {
        const parser = CommonHelpers.getParser('var + 5');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const additiveExpression = ParsingHelpers.getAdditive(result);

        expect(additiveExpression?.PLUS_list()).to.have.length(1);
        expect(additiveExpression?.MINUS_list()).to.have.length(0);

        expect(additiveExpression?.multiplicative_expression_list()).to.have.length(2);

        ExpectHelpers.expectIdentifier(additiveExpression?.multiplicative_expression(0), 'var');
        ExpectHelpers.expectInteger(additiveExpression?.multiplicative_expression(1), '5');
    });

    test('should parse an subtraction', () => {
        const parser = CommonHelpers.getParser('5.4 - 6.1');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const additiveExpression = ParsingHelpers.getAdditive(result);

        expect(additiveExpression?.PLUS_list()).to.have.length(0);
        expect(additiveExpression?.MINUS_list()).to.have.length(1);

        expect(additiveExpression?.multiplicative_expression_list()).to.have.length(2);

        ExpectHelpers.expectFloat(additiveExpression?.multiplicative_expression(0), '5.4');
        ExpectHelpers.expectFloat(additiveExpression?.multiplicative_expression(1), '6.1');
    });

    test('should parse a chained additive', () => {
        const parser = CommonHelpers.getParser('5.4 - 6.1 + vork');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const additiveExpression = ParsingHelpers.getAdditive(result);

        expect(additiveExpression?.PLUS_list()).to.have.length(1);
        expect(additiveExpression?.MINUS_list()).to.have.length(1);

        expect(additiveExpression?.multiplicative_expression_list()).to.have.length(3);

        ExpectHelpers.expectFloat(additiveExpression?.multiplicative_expression(0), '5.4');
        ExpectHelpers.expectFloat(additiveExpression?.multiplicative_expression(1), '6.1');
        ExpectHelpers.expectIdentifier(additiveExpression?.multiplicative_expression(2), 'vork');
    });
});