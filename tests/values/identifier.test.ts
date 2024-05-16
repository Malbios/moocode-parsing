import { suite, test } from 'mocha';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';

const testCaseData = [
    { description: 'should parse an identifier', code: 'myvar', expectedValue: 'myvar' },
    { description: 'should parse an identifier with an underscore', code: 'my_var', expectedValue: 'my_var' },
    { description: 'should parse a long identifier', code: 'shvlia_dgsiug_csaeg', expectedValue: 'shvlia_dgsiug_csaeg' },
    { description: 'should parse an identifier with lots of underscores', code: 'x_y____Z', expectedValue: 'x_y____Z' },
    { description: 'should parse an identifier with leading underscores', code: '__abc', expectedValue: '__abc' }
];

suite('identifier value tests', () => {
    testCaseData.forEach(testCaseData => {
        test(testCaseData.description, () => {
            const parser = CommonHelpers.getParser(testCaseData.code);
            const result = parser.primary_expression();

            ExpectHelpers.expectSyntaxErrors(parser, 0);

            ExpectHelpers.expectIdentifier(result, testCaseData.expectedValue);
        });
    });
});