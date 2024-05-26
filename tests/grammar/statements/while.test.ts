import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for while statements', () => {
  test('should parse a while loop', () => {
    const code = `
while (true)
  x();
endwhile
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const whileStatement = ParsingHelpers.getWhileStatement(result);

    expect(whileStatement?._outer_name).not.to.exist;
    expect(whileStatement?._inner_name).not.to.exist;

    ExpectHelpers.expectBool(whileStatement?._conditions, 'true');

    expect(whileStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(whileStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);
  });

  test('should parse a while loop with name', () => {
    const code = `
while name (true)
  x();
endwhile
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const whileStatement = ParsingHelpers.getWhileStatement(result);

    expect(whileStatement?._inner_name).not.to.exist;

    ExpectHelpers.expectIdentifier(whileStatement?._outer_name, 'name');

    ExpectHelpers.expectBool(whileStatement?._conditions, 'true');

    expect(whileStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(whileStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);
  });
});