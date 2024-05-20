import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';

suite('empty statement tests', () => {
    test('should parse an empty statement', () => {
        const parser = CommonHelpers.getParser(';');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        expect(result.empty_statement()).to.exist;
    });
});