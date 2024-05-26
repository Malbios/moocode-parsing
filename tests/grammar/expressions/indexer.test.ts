import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for indexer expressions', () => {
    test('should parse an identifier indexer with a literal index', () => {
        const parser = CommonHelpers.getParser('some_var[1]');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'some_var');

        expect(primaryExpression?.indexer_list()).to.have.length(1);

        ExpectHelpers.expectInteger(primaryExpression?.indexer(0)._argument, '1');

        expect(primaryExpression?.indexer(0)._start).not.to.exist;
        expect(primaryExpression?.indexer(0)._end).not.to.exist;
    });

    test('should parse an identifier indexer with an identifier index', () => {
        const parser = CommonHelpers.getParser('some_var[other_var]]');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'some_var');

        expect(primaryExpression?.indexer_list()).to.have.length(1);

        ExpectHelpers.expectIdentifier(primaryExpression?.indexer(0)._argument, 'other_var');

        expect(primaryExpression?.indexer(0)._start).not.to.exist;
        expect(primaryExpression?.indexer(0)._end).not.to.exist;
    });

    test('should parse a string indexer', () => {
        const parser = CommonHelpers.getParser('"this is some text"[44]');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectString(primaryExpression?._pe, '"this is some text"');

        expect(primaryExpression?.indexer_list()).to.have.length(1);

        ExpectHelpers.expectInteger(primaryExpression?.indexer(0)._argument, '44');

        expect(primaryExpression?.indexer(0)._start).not.to.exist;
        expect(primaryExpression?.indexer(0)._end).not.to.exist;
    });

    test('should parse a chained indexer', () => {
        const parser = CommonHelpers.getParser('blob[44][stuff]');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'blob');

        expect(primaryExpression?.indexer_list()).to.have.length(2);

        ExpectHelpers.expectInteger(primaryExpression?.indexer(0)._argument, '44');

        expect(primaryExpression?.indexer(0)._start).not.to.exist;
        expect(primaryExpression?.indexer(0)._end).not.to.exist;

        ExpectHelpers.expectIdentifier(primaryExpression?.indexer(1)._argument, 'stuff');

        expect(primaryExpression?.indexer(1)._start).not.to.exist;
        expect(primaryExpression?.indexer(1)._end).not.to.exist;
    });

    test('should parse a ranged indexer', () => {
        const parser = CommonHelpers.getParser('blob[1..2]');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'blob');

        expect(primaryExpression?.indexer_list()).to.have.length(1);

        const indexer = primaryExpression?.indexer(0);

        expect(indexer?._argument).not.to.exist;

        ExpectHelpers.expectInteger(indexer?._start, '1');
        ExpectHelpers.expectInteger(indexer?._end, '2');
    });

    test('should parse a ranged indexer with circumflex start', () => {
        const parser = CommonHelpers.getParser('blob[^..2]');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'blob');

        expect(primaryExpression?.indexer_list()).to.have.length(1);

        const indexer = primaryExpression?.indexer(0);

        expect(indexer?._argument).not.to.exist;

        ExpectHelpers.expectCaret(indexer?._start);
        ExpectHelpers.expectInteger(indexer?._end, '2');
    });

    test('should parse a ranged indexer with dollar end', () => {
        const parser = CommonHelpers.getParser('blob[1..$]');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'blob');

        expect(primaryExpression?.indexer_list()).to.have.length(1);

        const indexer = primaryExpression?.indexer(0);

        expect(indexer?._argument).not.to.exist;

        ExpectHelpers.expectInteger(indexer?._start, '1');
        ExpectHelpers.expectDollar(indexer?._end);
    });

    test('should parse a ranged indexer with circumflex start and dollar end', () => {
        const parser = CommonHelpers.getParser('blob[^..$]');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'blob');

        expect(primaryExpression?.indexer_list()).to.have.length(1);

        const indexer = primaryExpression?.indexer(0);

        expect(indexer?._argument).not.to.exist;

        ExpectHelpers.expectCaret(indexer?._start);
        ExpectHelpers.expectDollar(indexer?._end);
    });

    test('should parse a calculated ranged indexer', () => {
        const parser = CommonHelpers.getParser('bobby_x[^+start+1 .. 2*$]');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const primaryExpression = ParsingHelpers.getPrimaryExpression(result);

        ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'bobby_x');

        expect(primaryExpression?.indexer_list()).to.have.length(1);

        const indexer = primaryExpression?.indexer(0);

        expect(indexer?._argument).not.to.exist;

        const additiveExpressionForStart = ParsingHelpers.getAdditive(indexer?._start);

        expect(additiveExpressionForStart?.multiplicative_expression_list()).to.have.length(3);

        expect(additiveExpressionForStart?.PLUS_list()).to.have.length(2);
        expect(additiveExpressionForStart?.MINUS_list()).to.have.length(0);

        ExpectHelpers.expectCaret(additiveExpressionForStart?.multiplicative_expression(0));
        ExpectHelpers.expectIdentifier(additiveExpressionForStart?.multiplicative_expression(1), 'start');
        ExpectHelpers.expectInteger(additiveExpressionForStart?.multiplicative_expression(2), '1');

        const multiplicativeExpressionForEnd = ParsingHelpers.getMultiplicative(indexer?._end);

        expect(multiplicativeExpressionForEnd?.unary_expression_list()).to.have.length(2);

        expect(multiplicativeExpressionForEnd?.STAR_list()).to.have.length(1);
        expect(multiplicativeExpressionForEnd?.DIV_list()).to.have.length(0);
        expect(multiplicativeExpressionForEnd?.PERCENT_list()).to.have.length(0);

        ExpectHelpers.expectInteger(multiplicativeExpressionForEnd?.unary_expression(0), '2');
        ExpectHelpers.expectDollar(multiplicativeExpressionForEnd?.unary_expression(1));
    });
});