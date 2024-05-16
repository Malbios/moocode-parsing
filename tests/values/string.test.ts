import { suite, test } from 'mocha';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';

const testCases = [
    { description: 'should parse a string', code: '"blabla"', expectedValue: '"blabla"' },
    { description: 'should parse the word "string"', code: '"string"', expectedValue: '"string"' },
    { description: 'should parse a string with numbers', code: '"abc123"', expectedValue: '"abc123"' },
    { description: 'should parse a string with spaces', code: '"multi1 multi2 multi3"', expectedValue: '"multi1 multi2 multi3"' },
    { description: 'should parse a string with underscores', code: '"z_Z_Z_zz"', expectedValue: '"z_Z_Z_zz"' },
    { description: 'should parse a string with a quote', code: '"\\""', expectedValue: '"\\""' },
    { description: 'should parse a string with a backslash', code: '"\\\\"', expectedValue: '"\\\\"' },
    { description: 'should parse a string with various special characters', code: '"x;§%$§& y z !! nope 1_2 \\"abc?\\""', expectedValue: '"x;§%$§& y z !! nope 1_2 \\"abc?\\""' }
];

suite('string value tests', () => {
    testCases.forEach(testCaseData => {
        test(testCaseData.description, () => {
            const parser = CommonHelpers.getParser(testCaseData.code);
            const result = parser.literal();

            ExpectHelpers.expectSyntaxErrors(parser, 0);

            ExpectHelpers.expectString(result, testCaseData.expectedValue);
        });
    });
});