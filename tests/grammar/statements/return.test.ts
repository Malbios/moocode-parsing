import { suite, test } from 'mocha';
import { expect } from 'chai';

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
});