import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for for statements', () => {
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
    const forExpression = ParsingHelpers.getForExpression(forStatement);

    const rangedForExpression = ParsingHelpers.getRangedForExpression(forStatement);
    expect(rangedForExpression).not.to.exist;

    ExpectHelpers.expectIdentifier(forExpression?._value, 'n');

    expect(forExpression?._key).not.to.exist;

    const rangeList = ParsingHelpers.getList(forExpression?._range);

    expect(rangeList?.expression_list()).to.have.length(3);

    ExpectHelpers.expectInteger(rangeList?.expression(0), '1');
    ExpectHelpers.expectInteger(rangeList?.expression(1), '2');
    ExpectHelpers.expectInteger(rangeList?.expression(2), '3');

    expect(forStatement?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(forStatement?.statements().statement(0), 'x');
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
    const forExpression = ParsingHelpers.getForExpression(forStatement);

    const rangedForExpression = ParsingHelpers.getRangedForExpression(forStatement);
    expect(rangedForExpression).not.to.exist;

    ExpectHelpers.expectIdentifier(forExpression?._value, 'n');
    ExpectHelpers.expectIdentifier(forExpression?._key, 'k');

    const rangeList = ParsingHelpers.getList(forExpression?._range);

    expect(rangeList?.expression_list()).to.have.length(3);

    ExpectHelpers.expectInteger(rangeList?.expression(0), '1');
    ExpectHelpers.expectInteger(rangeList?.expression(1), '2');
    ExpectHelpers.expectInteger(rangeList?.expression(2), '3');

    expect(forStatement?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(forStatement?.statements().statement(0), 'x');
  });

  test('should parse a for loop with start..stop range', () => {
    const code = `
for o in [#0..max_object()]
  x();
endfor
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const forStatement = ParsingHelpers.getForStatement(result);
    const rangedForExpression = ParsingHelpers.getRangedForExpression(forStatement);

    const forExpression = ParsingHelpers.getForExpression(forStatement);
    expect(forExpression).not.to.exist;

    ExpectHelpers.expectIdentifier(rangedForExpression?._value, 'o');

    ExpectHelpers.expectObjectId(rangedForExpression?._start, '#0');

    const bfInvocation = ParsingHelpers.getBuiltInFunctionInvocation(rangedForExpression?._end);

    ExpectHelpers.expectIdentifier(bfInvocation?.identifier(), 'max_object');
    expect(bfInvocation?._arguments).to.not.exist;

    expect(forStatement?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(forStatement?.statements().statement(0), 'x');
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
    const forExpression = ParsingHelpers.getForExpression(forStatement);

    const rangedForExpression = ParsingHelpers.getRangedForExpression(forStatement);
    expect(rangedForExpression).not.to.exist;

    ExpectHelpers.expectIdentifier(forExpression?._value, 'n');

    expect(forExpression?._key).not.to.exist;

    const rangeList = ParsingHelpers.getList(forExpression?._range);

    expect(rangeList?.expression_list()).to.have.length(1);

    ExpectHelpers.expectInteger(rangeList?.expression(0), '1');

    expect(forStatement?.statements().statement_list()).to.have.length(1);

    const innerForStatement = ParsingHelpers.getForStatement(forStatement?.statements().statement(0));
    const innerForExpression = ParsingHelpers.getForExpression(innerForStatement);

    const innerRangedForExpression = ParsingHelpers.getRangedForExpression(innerForStatement);
    expect(innerRangedForExpression).not.to.exist;

    ExpectHelpers.expectIdentifier(innerForExpression?._value, 'm');

    expect(innerForExpression?._key).not.to.exist;

    const innerRangeList = ParsingHelpers.getList(innerForExpression?._range);

    expect(innerRangeList?.expression_list()).to.have.length(1);

    ExpectHelpers.expectInteger(innerRangeList?.expression(0), '2');

    expect(innerForStatement?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(innerForStatement?.statements().statement(0), 'x');
  });
});