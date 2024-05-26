import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';

const testCaseData = [
    { description: 'should parse a float number', code: '1.0', expectedValue: '1.0' },
    { description: 'should parse a large float number', code: '56.12345', expectedValue: '56.12345' },
    { description: 'should parse a float number without decimal value', code: '325.', expectedValue: '325.' },
    { description: 'should parse a float number with small e', code: '3.25e2', expectedValue: '3.25e2' },
    { description: 'should parse a float number with large e', code: '0.325E3', expectedValue: '0.325E3' },
    { description: 'should parse a float number with large E right after decimal point', code: '325.E1', expectedValue: '325.E1' },
    { description: 'should parse a float number with no leading digit', code: '.0325', expectedValue: '.0325' },
    { description: 'should parse a float number with e+', code: '1.0325e+4', expectedValue: '1.0325e+4' },
    { description: 'should parse a float number with e- and no dot', code: '32500e-2', expectedValue: '32500e-2' },
    { description: 'should parse a negative float', code: '-56.12345', expectedValue: '-56.12345' }
];

suite('CST tests for float values', () => {
    testCaseData.forEach(testCaseData => {
        test(testCaseData.description, () => {
            const parser = CommonHelpers.getParser(testCaseData.code);
            const result = parser.literal();

            ExpectHelpers.expectSyntaxErrors(parser, 0);

            ExpectHelpers.expectFloat(result, testCaseData.expectedValue);
        });
    });
});