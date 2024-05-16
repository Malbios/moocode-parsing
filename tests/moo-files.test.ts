import { suite, test } from 'mocha';
import { readFileSync } from 'fs';

import CommonHelpers from './test-utils/common';
import ExpectHelpers from './test-utils/expectations';

const testData = [
    { index: 1 },
    { index: 2 },
    { index: 3 }
];

suite('moo file tests', () => {
    testData.forEach(data => {
        test(`should parse file ${data.index}`, async () => {
            const fileContent = readFileSync(`./tests/moo-files/${data.index}.moo`, 'utf8');
            const parser = CommonHelpers.getParser(fileContent);
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const result = parser.moocode();

            ExpectHelpers.expectSyntaxErrors(parser, 0);
        });
    });
});