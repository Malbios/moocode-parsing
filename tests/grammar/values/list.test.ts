import { ParserRuleContext } from 'antlr4';
import { expect } from 'chai';
import { suite, test } from 'mocha';

import { ListContext } from '../../../src/grammar/generated/MoocodeParser';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

interface ExpectedData {
    // eslint-disable-next-line no-unused-vars
    action: (context: ParserRuleContext | undefined) => void;
}

function runTest(code: string, expectedData: ExpectedData[]) {
    const parser = CommonHelpers.getParser(code);
    const result = parser.expression();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    testListEntries(result, expectedData);
}

function testListEntries(context: ParserRuleContext | undefined, expectedData: ExpectedData[]) {
    const listContext = ParsingHelpers.getContext<ListContext>(context, ListContext);

    expect(listContext?.expression_list()).to.have.length(expectedData.length);

    let i = 0;
    for (const data of expectedData) {
        data.action(listContext?.expression(i));
        i++;
    }
}

suite('CST tests for list values', () => {
    test('should parse an empty list', () => {
        runTest('{}', []);
    });

    test('should parse a list with an identifier', () => {
        runTest('{bob_var}', [{ action: context => ExpectHelpers.expectIdentifier(context, 'bob_var') }]);
    });

    test('should parse a list with a boolean', () => {
        runTest('{false}', [{ action: context => ExpectHelpers.expectBool(context, 'false') }]);
    });

    test('should parse a list with an integer', () => {
        runTest('{1}', [{ action: context => ExpectHelpers.expectInteger(context, '1') }]);
    });

    test('should parse a list with a float', () => {
        runTest('{-1.02}', [{ action: context => ExpectHelpers.expectFloat(context, '-1.02') }]);
    });

    test('should parse a list with a string', () => {
        runTest('{"some text"}', [{ action: context => ExpectHelpers.expectString(context, '"some text"') }]);
    });

    test('should parse a list with an object id', () => {
        runTest('{#123}', [{ action: context => ExpectHelpers.expectObjectId(context, '#123') }]);
    });

    test('should parse a list with a corified object reference', () => {
        runTest('{$dude}', [{ action: context => ExpectHelpers.expectCorifiedObject(context, '$dude') }]);
    });

    test('should parse a list with multiple elements', () => {
        runTest('{1, 2, 3}', [
            { action: context => ExpectHelpers.expectInteger(context, '1') },
            { action: context => ExpectHelpers.expectInteger(context, '2') },
            { action: context => ExpectHelpers.expectInteger(context, '3') }
        ]);
    });

    test('should parse a list with list elements', () => {
        runTest('{1, {2}, {3, 4}}', [
            { action: context => ExpectHelpers.expectInteger(context, '1') },
            {
                action: context => testListEntries(context, [{ action: context => ExpectHelpers.expectInteger(context, '2') }])
            },
            {
                action: context => testListEntries(context, [{ action: context => ExpectHelpers.expectInteger(context, '3') },
                { action: context => ExpectHelpers.expectInteger(context, '4') }])
            }
        ]);
    });

    test('should parse a nested list', () => {
        runTest('{{{1}}}', [
            {
                action: context => {
                    testListEntries(context, [{
                        action: context =>
                            testListEntries(context, [{ action: context => ExpectHelpers.expectInteger(context, '1') }])
                    }])
                }
            }
        ]);
    });
});