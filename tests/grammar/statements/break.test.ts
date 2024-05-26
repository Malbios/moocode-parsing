import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for break statements', () => {
    test('should parse a break with no expression', () => {
        const parser = CommonHelpers.getParser('break;');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        ExpectHelpers.expectEmptyBreak(result);

        const nonEmptyBreak = ParsingHelpers.getNonEmptyBreak(result);
        expect(nonEmptyBreak).not.to.exist;
    });

    test('should parse a break with an identifier', () => {
        const parser = CommonHelpers.getParser('break blob_y;');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const emptyBreak = ParsingHelpers.getEmptyBreak(result);
        expect(emptyBreak).not.to.exist;

        ExpectHelpers.expectNonEmptyBreak(result);
        ExpectHelpers.expectIdentifier(result, 'blob_y');
    });
});