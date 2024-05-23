import { readFileSync } from 'fs';
import { suite, test } from 'mocha';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';

function runTest(filePath: string) {
    const fileContent = readFileSync(filePath, 'utf8');
    const parser = CommonHelpers.getParser(fileContent);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = parser.moocode();

    ExpectHelpers.expectSyntaxErrors(parser, 0);
}

suite('moo file tests', () => {
    test('should parse file 1', () => {
        runTest('./tests/moo-files/1.moo');
    });

    test('should parse file 2', () => {
        runTest('./tests/moo-files/2.moo');
    });

    test('should parse file 3', () => {
        runTest('./tests/moo-files/3.moo');
    });

    test('should parse file 4', () => {
        runTest('./tests/moo-files/4.moo');
    });

    test('should parse file 5', () => {
        runTest('./tests/moo-files/5.moo');
    });
});