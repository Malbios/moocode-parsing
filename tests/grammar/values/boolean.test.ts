import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';

const testCaseData = [
    { description: 'should parse false in lowercase', code: 'false', expectedValue: 'false' },
    { description: 'should parse false in uppercase', code: 'FALSE', expectedValue: 'FALSE' },
    { description: 'should parse false in mixed case', code: 'FaLsE', expectedValue: 'FaLsE' },
    { description: 'should parse true in lowercase', code: 'true', expectedValue: 'true' },
    { description: 'should parse true in uppercase', code: 'TRUE', expectedValue: 'TRUE' },
    { description: 'should parse true in mixed case', code: 'tRuE', expectedValue: 'tRuE' }
];

suite('boolean value tests', () => {
    testCaseData.forEach(testCaseData => {
        test(testCaseData.description, () => {
            const parser = CommonHelpers.getParser(testCaseData.code);
            const result = parser.literal();

            ExpectHelpers.expectSyntaxErrors(parser, 0);

            ExpectHelpers.expectBool(result, testCaseData.expectedValue);
        });
    });
});