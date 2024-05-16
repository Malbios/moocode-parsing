import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';
import ParsingHelpers from '../test-utils/parsing';

suite('relational expression tests', () => {
    test('should parse a less than relation', () => {
        const parser = CommonHelpers.getParser('my_var < other_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const relationalExpression = ParsingHelpers.getRelational(result);

        expect(relationalExpression?.shift_expression_list()).to.have.length(2);

        expect(relationalExpression?.OP_LT_list()).to.have.length(1);
        expect(relationalExpression?.OP_GT_list()).to.have.length(0);
        expect(relationalExpression?.OP_LE_list()).to.have.length(0);
        expect(relationalExpression?.OP_GE_list()).to.have.length(0);

        ExpectHelpers.expectIdentifier(relationalExpression?.shift_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(relationalExpression?.shift_expression(1), 'other_var');
    });

    test('should parse a less than relation', () => {
        const parser = CommonHelpers.getParser('my_var > other_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const relationalExpression = ParsingHelpers.getRelational(result);

        expect(relationalExpression?.shift_expression_list()).to.have.length(2);

        expect(relationalExpression?.OP_LT_list()).to.have.length(0);
        expect(relationalExpression?.OP_GT_list()).to.have.length(1);
        expect(relationalExpression?.OP_LE_list()).to.have.length(0);
        expect(relationalExpression?.OP_GE_list()).to.have.length(0);

        ExpectHelpers.expectIdentifier(relationalExpression?.shift_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(relationalExpression?.shift_expression(1), 'other_var');
    });

    test('should parse a less than relation', () => {
        const parser = CommonHelpers.getParser('my_var <= other_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const relationalExpression = ParsingHelpers.getRelational(result);

        expect(relationalExpression?.shift_expression_list()).to.have.length(2);

        expect(relationalExpression?.OP_LT_list()).to.have.length(0);
        expect(relationalExpression?.OP_GT_list()).to.have.length(0);
        expect(relationalExpression?.OP_LE_list()).to.have.length(1);
        expect(relationalExpression?.OP_GE_list()).to.have.length(0);

        ExpectHelpers.expectIdentifier(relationalExpression?.shift_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(relationalExpression?.shift_expression(1), 'other_var');
    });

    test('should parse a less than relation', () => {
        const parser = CommonHelpers.getParser('my_var >= other_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const relationalExpression = ParsingHelpers.getRelational(result);

        expect(relationalExpression?.shift_expression_list()).to.have.length(2);

        expect(relationalExpression?.OP_LT_list()).to.have.length(0);
        expect(relationalExpression?.OP_GT_list()).to.have.length(0);
        expect(relationalExpression?.OP_LE_list()).to.have.length(0);
        expect(relationalExpression?.OP_GE_list()).to.have.length(1);

        ExpectHelpers.expectIdentifier(relationalExpression?.shift_expression(0), 'my_var');
        ExpectHelpers.expectIdentifier(relationalExpression?.shift_expression(1), 'other_var');
    });
});