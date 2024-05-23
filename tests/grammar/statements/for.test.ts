import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('for statement tests', () => {
  test('should parse a for loop', () => {
    const code = `
for n in ({1, 2, 3})
  x();
endfor
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const forStatement = ParsingHelpers.getForStatement(result);

    ExpectHelpers.expectIdentifier(forStatement?._value, 'n');

    expect(forStatement?._key).not.to.exist;

    expect(forStatement?._start).not.to.exist;
    expect(forStatement?._end).not.to.exist;

    const rangeList = ParsingHelpers.getList(forStatement?._range);

    expect(rangeList?.expression_list()).to.have.length(3);

    ExpectHelpers.expectInteger(rangeList?.expression(0), '1');
    ExpectHelpers.expectInteger(rangeList?.expression(1), '2');
    ExpectHelpers.expectInteger(rangeList?.expression(2), '3');

    expect(forStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(forStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);
  });

  test('should parse a for loop with key', () => {
    const code = `
for n, k in ({1, 2, 3})
  x();
endfor
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const forStatement = ParsingHelpers.getForStatement(result);

    ExpectHelpers.expectIdentifier(forStatement?._value, 'n');

    ExpectHelpers.expectIdentifier(forStatement?._key, 'k');

    expect(forStatement?._start).not.to.exist;
    expect(forStatement?._end).not.to.exist;

    const rangeList = ParsingHelpers.getList(forStatement?._range);

    expect(rangeList?.expression_list()).to.have.length(3);

    ExpectHelpers.expectInteger(rangeList?.expression(0), '1');
    ExpectHelpers.expectInteger(rangeList?.expression(1), '2');
    ExpectHelpers.expectInteger(rangeList?.expression(2), '3');

    expect(forStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(forStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);
  });

  test('should parse a for loop with start..stop range', () => {
    const code = `
for o in [#0..max_object()]
  break;
endfor
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const forStatement = ParsingHelpers.getForStatement(result);

    ExpectHelpers.expectIdentifier(forStatement?._value, 'o');

    expect(forStatement?._key).not.to.exist;

    expect(forStatement?._range).not.to.exist;

    ExpectHelpers.expectObjectId(forStatement?._start, '#0');

    const primaryExpression = ParsingHelpers.getPrimaryExpression(forStatement?._end);

    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'max_object');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(forStatement?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectEmptyBreak(forStatement?.statements().statement(0));
  });

  test('should parse a nested for loop', () => {
    const code = `
for n in ({1})
  for m in ({2})
    x();
  endfor
endfor
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const forStatement = ParsingHelpers.getForStatement(result);

    ExpectHelpers.expectIdentifier(forStatement?._value, 'n');

    expect(forStatement?._key).not.to.exist;

    expect(forStatement?._start).not.to.exist;
    expect(forStatement?._end).not.to.exist;

    const rangeList = ParsingHelpers.getList(forStatement?._range);

    expect(rangeList?.expression_list()).to.have.length(1);

    ExpectHelpers.expectInteger(rangeList?.expression(0), '1');

    expect(forStatement?.statements().statement_list()).to.have.length(1);

    const innerForStatement = ParsingHelpers.getForStatement(forStatement?.statements().statement(0));

    ExpectHelpers.expectIdentifier(innerForStatement?._value, 'm');

    expect(innerForStatement?._key).not.to.exist;

    expect(innerForStatement?._start).not.to.exist;
    expect(innerForStatement?._end).not.to.exist;

    const innerRangeList = ParsingHelpers.getList(innerForStatement?._range);

    expect(innerRangeList?.expression_list()).to.have.length(1);

    ExpectHelpers.expectInteger(innerRangeList?.expression(0), '2');

    expect(innerForStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(innerForStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);
  });
});