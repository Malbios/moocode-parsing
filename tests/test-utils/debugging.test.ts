import { suite, test } from 'mocha';

import CommonHelpers from './common';
import ExpectHelpers from './expectations';
import ParsingHelpers from './parsing';

suite('debugging tests', () => {
  test('should do x', () => {
    const code = `
for x in [min..max]
  x();
endfor
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const forStatement = ParsingHelpers.getForStatement(result);

    //console.log(forStatement);
  });
});