import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';

suite('CST tests for expression statements', () => {
    test('should parse an expression statement', () => {
        const parser = CommonHelpers.getParser('x;');
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        ExpectHelpers.expectIdentifier(result, 'x');
    });
});