import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('equality expression tests', () => {
    test('should parse an equals equality', () => {
        const parser = CommonHelpers.getParser('my_var == other_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const equalityExpression = ParsingHelpers.getEquality(result);

        expect(equalityExpression?.relational_expression_list()).to.have.length(2);

        expect(equalityExpression?.OP_EQ_list()).to.have.length(1);
        expect(equalityExpression?.OP_NE_list()).to.have.length(0);

        ExpectHelpers.expectIdentifier(equalityExpression?.relational_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(equalityExpression?.relational_expression(1), 'other_var');
    });

    test('should parse an unequals equality', () => {
        const parser = CommonHelpers.getParser('my_var != other_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const equalityExpression = ParsingHelpers.getEquality(result);

        expect(equalityExpression?.relational_expression_list()).to.have.length(2);

        expect(equalityExpression?.OP_EQ_list()).to.have.length(0);
        expect(equalityExpression?.OP_NE_list()).to.have.length(1);

        ExpectHelpers.expectIdentifier(equalityExpression?.relational_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(equalityExpression?.relational_expression(1), 'other_var');
    });

    test('should parse a chained equality', () => {
        const parser = CommonHelpers.getParser('my_var == other_var != third_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const equalityExpression = ParsingHelpers.getEquality(result);

        expect(equalityExpression?.relational_expression_list()).to.have.length(3);

        expect(equalityExpression?.OP_EQ_list()).to.have.length(1);
        expect(equalityExpression?.OP_NE_list()).to.have.length(1);

        ExpectHelpers.expectIdentifier(equalityExpression?.relational_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(equalityExpression?.relational_expression(1), 'other_var');
        ExpectHelpers.expectIdentifier(equalityExpression?.relational_expression(2), 'third_var');
    });
});