import { suite, test } from 'mocha';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';
import ParsingHelpers from '../test-utils/parsing';

suite('list slicer expression tests', () => {
    test('should parse a list slicer', () => {
        const parser = CommonHelpers.getParser('@some_list_var');
        const result = parser.expression();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const listSlicer = ParsingHelpers.getListSlicer(result);

        ExpectHelpers.expectIdentifier(listSlicer, 'some_list_var');
    });
});