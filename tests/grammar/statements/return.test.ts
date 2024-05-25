import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('return statement tests', () => {
    test('should parse a return with no expression', () => {
        const parser = CommonHelpers.getParser('return;');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        ExpectHelpers.expectEmptyReturn(result);

        const nonEmptyReturn = ParsingHelpers.getNonEmptyReturn(result);
        expect(nonEmptyReturn).not.to.exist;
    });

    test('should parse a return with an expression', () => {
        const parser = CommonHelpers.getParser('return stuff;');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const emptyReturn = ParsingHelpers.getEmptyReturn(result);
        expect(emptyReturn).not.to.exist;

        ExpectHelpers.expectNonEmptyReturn(result);
        ExpectHelpers.expectIdentifier(result, 'stuff');
    });

    test('should parse a return with x in y expression', () => {
        const parser = CommonHelpers.getParser('return seek_obj in list_of_objects;');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const emptyReturn = ParsingHelpers.getEmptyReturn(result);
        expect(emptyReturn).not.to.exist;

        const nonEmptyReturn = ParsingHelpers.getNonEmptyReturn(result);
        const inConditional = ParsingHelpers.getConditionalIn(nonEmptyReturn?.expression());

        expect(inConditional?.conditional_or_expression_list()).to.have.length(2);

        ExpectHelpers.expectIdentifier(inConditional?.conditional_or_expression(0), 'seek_obj');
        ExpectHelpers.expectIdentifier(inConditional?.conditional_or_expression(1), 'list_of_objects');
    });
});