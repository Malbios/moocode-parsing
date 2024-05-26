import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';

const errorCodes = [
    'ANY',
    'E_NONE',
    'E_TYPE',
    'E_DIV',
    'E_PERM',
    'E_PROPNF',
    'E_VERBNF',
    'E_VARNF',
    'E_INVIND',
    'E_RECMOVE',
    'E_MAXREC',
    'E_RANGE',
    'E_ARGS',
    'E_NACC',
    'E_INVARG',
    'E_QUOTA',
    'E_FLOAT',
    'E_FILE',
    'E_EXEC',
    'E_INTRPT'
]

suite('CST tests for error values', () => {
    errorCodes.forEach(errorCode => {
        test(`should parse the error code ${errorCode}`, () => {
            const parser = CommonHelpers.getParser(errorCode);
            const result = parser.expression();

            ExpectHelpers.expectSyntaxErrors(parser, 0);

            ExpectHelpers.expectError(result, errorCode);
        });
    });
});