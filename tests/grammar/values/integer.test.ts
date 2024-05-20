import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';

const testCaseData = [
    { description: 'should parse the integer 0', code: '0', expectedValue: '0' },
    { description: 'should parse the integer 1', code: '1', expectedValue: '1' },
    { description: 'should parse a large integer', code: '1234567890', expectedValue: '1234567890' },
    { description: 'should parse a negative integer', code: '-128', expectedValue: '-128' }
];

suite('integer value tests', () => {
    testCaseData.forEach(testCaseData => {
        test(testCaseData.description, () => {
            const parser = CommonHelpers.getParser(testCaseData.code);
            const result = parser.literal();

            ExpectHelpers.expectSyntaxErrors(parser, 0);

            ExpectHelpers.expectInteger(result, testCaseData.expectedValue);
        });
    });
});