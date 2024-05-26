import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';

suite('CST tests for scripts', () => {
    test('should parse an empty string as a script with no statements', () => {
        const parser = CommonHelpers.getParser('');
        const result = parser.moocode();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        expect(result.statement_list()).to.have.length(0);
    });
});