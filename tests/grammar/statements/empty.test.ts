import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';

suite('CST tests for empty statements', () => {
    test('should parse an empty statement', () => {
        const parser = CommonHelpers.getParser(';');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        expect(result.empty_statement()).to.exist;
    });
});