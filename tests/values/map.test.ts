import { suite, test } from 'mocha';
import { expect } from 'chai';
import { ParserRuleContext } from 'antlr4';

import { MapContext } from '../../src/grammar/generated/MoocodeParser';

import CommonHelpers from '../test-utils/common';
import ParsingHelpers from '../test-utils/parsing';
import ExpectHelpers from '../test-utils/expectations';

interface ExpectedData {
    // eslint-disable-next-line no-unused-vars
    keyAction: (context: ParserRuleContext | undefined) => void;
    // eslint-disable-next-line no-unused-vars
    valueAction: (context: ParserRuleContext | undefined) => void;
}

function runTest(code: string, expectedData: ExpectedData[]) {
    const parser = CommonHelpers.getParser(code);
    const result = parser.expression();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    testMapEntries(result, expectedData);
}

function testMapEntries(context: ParserRuleContext | undefined, expectedData: ExpectedData[]) {
    const mapContext = ParsingHelpers.getContext<MapContext>(context, MapContext);

    expect(mapContext?.map_entry_list()).to.have.length(expectedData.length);

    let i = 0;
    for (const data of expectedData) {
        data.keyAction(mapContext?.map_entry(i)._map_key);
        data.valueAction(mapContext?.map_entry(i)._map_value);
        i++;
    }
}

suite('map value tests', () => {
    test('should parse an empty map', () => {
        runTest('[]', []);
    });

    test('should parse a map with a bool key and bool value', () => {
        runTest('[true -> false]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectBool(context, 'true'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectBool(context, 'false')
        }]);
    });

    test('should parse a map with a integer key and integer value', () => {
        runTest('[1 -> 2]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectInteger(context, '1'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectInteger(context, '2')
        }]);
    });

    test('should parse a map with a float key and float value', () => {
        runTest('[0.23 -> 7.]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectFloat(context, '0.23'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectFloat(context, '7.')
        }]);
    });

    test('should parse a map with a string key and string value', () => {
        runTest('["test" -> "abc"]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectString(context, '"test"'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectString(context, '"abc"')
        }]);
    });

    test('should parse a map with an object id key and object id value', () => {
        runTest('[#12 -> #33]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectObjectId(context, '#12'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectObjectId(context, '#33')
        }]);
    });

    test('should parse a map with a corified object key and corified object value', () => {
        runTest('[$stuff -> $exit]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectCorifiedObject(context, '$stuff'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectCorifiedObject(context, '$exit')
        }]);
    });

    test('should parse a map with an identifier key and identifier value', () => {
        runTest('[blob -> thix]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectIdentifier(context, 'blob'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectIdentifier(context, 'thix')
        }]);
    });

    test('should parse a map with an error key and error value', () => {
        runTest('[E_ARGS -> E_NONE]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectError(context, 'E_ARGS'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectError(context, 'E_NONE')
        }]);
    });

    test('should parse a map with multiple entries', () => {
        runTest('[1 -> 2.5, "yes" -> true, false -> $giga]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectInteger(context, '1'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectFloat(context, '2.5')
        }, {
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectString(context, '"yes"'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectBool(context, 'true')
        }, {
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectBool(context, 'false'),
            valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectCorifiedObject(context, '$giga')
        }]);
    });

    test('should parse a nested map', () => {
        runTest('[15 -> [4 -> [x -> "yes"]]]', [{
            keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectInteger(context, '15'),
            valueAction: (context: ParserRuleContext | undefined) => testMapEntries(context, [{
                keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectInteger(context, '4'), valueAction: (context: ParserRuleContext | undefined) => testMapEntries(context, [{
                    keyAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectIdentifier(context, 'x'),
                    valueAction: (context: ParserRuleContext | undefined) => ExpectHelpers.expectString(context, '"yes"')
                }])
            }])
        }]);
    });
});