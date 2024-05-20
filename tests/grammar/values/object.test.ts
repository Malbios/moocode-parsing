import { suite, test } from 'mocha';
import { ParserRuleContext } from 'antlr4';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';

const testCaseData = [
    { description: 'should parse an object reference', code: '#123', expectedValue: '#123', expectInnerValue: (context: ParserRuleContext, expectedValue: string) => ExpectHelpers.expectObjectId(context, expectedValue) },
    { description: 'should parse an object reference with leading zeroes', code: '#007', expectedValue: '#007', expectInnerValue: (context: ParserRuleContext, expectedValue: string) => ExpectHelpers.expectObjectId(context, expectedValue) },
    { description: 'should parse a negative object reference', code: '#-3', expectedValue: '#-3', expectInnerValue: (context: ParserRuleContext, expectedValue: string) => ExpectHelpers.expectObjectId(context, expectedValue) },
    { description: 'should parse a corified object reference', code: '$mystuff', expectedValue: '$mystuff', expectInnerValue: (context: ParserRuleContext, expectedValue: string) => ExpectHelpers.expectCorifiedObject(context, expectedValue) }
];

suite('object reference tests', () => {
    testCaseData.forEach(testCaseData => {
        test(testCaseData.description, () => {
            const parser = CommonHelpers.getParser(testCaseData.code);
            const result = parser.primary_expression();

            ExpectHelpers.expectSyntaxErrors(parser, 0);

            ExpectHelpers.expectObjectReference(result, testCaseData.expectedValue);
            testCaseData.expectInnerValue(result, testCaseData.expectedValue);
        });
    });
});