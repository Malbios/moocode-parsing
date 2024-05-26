import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for continue statements', () => {
    test('should parse a continue with no expression', () => {
        const parser = CommonHelpers.getParser('continue;');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        ExpectHelpers.expectEmptyContinue(result);

        const nonEmptyContinue = ParsingHelpers.getNonEmptyContinue(result);
        expect(nonEmptyContinue).not.to.exist;
    });

    test('should parse a continue with an identifier', () => {
        const parser = CommonHelpers.getParser('continue abc;');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const emptyContinue = ParsingHelpers.getEmptyContinue(result);
        expect(emptyContinue).not.to.exist;

        ExpectHelpers.expectNonEmptyContinue(result);
        ExpectHelpers.expectIdentifier(result, 'abc');
    });
});