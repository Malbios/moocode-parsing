import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';

suite('script tests', () => {
    test('should parse an empty string as a script with no statements', () => {
        const parser = CommonHelpers.getParser('');
        const result = parser.moocode();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        expect(result.statement_list()).to.have.length(0);
    });
});