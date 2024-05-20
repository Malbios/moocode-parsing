import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('try statement tests', () => {
  test('should parse a try except statement', () => {
    const code = `
try
  x();
except ex (E_VARNF)
  y();
endtry
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const tryStatement = ParsingHelpers.getTryStatement(result);

    expect(tryStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(tryStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_except_list()).to.have.length(1);

    const except = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(except?.identifier(), 'ex');
    expect(except?.error_codes().error_code_list()).to.have.length(1);
    ExpectHelpers.expectError(except?.error_codes().error_code(0), 'E_VARNF');

    expect(except?.statements().statement_list()).to.have.length(1);

    const exceptPrimaryExpression = ParsingHelpers.getPrimaryExpression(except?.statements().statement(0));
    ExpectHelpers.expectIdentifier(exceptPrimaryExpression?._pe, 'y');
    expect(exceptPrimaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(exceptPrimaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_finally()).not.to.exist;
  });

  test('should parse a try finally statement', () => {
    const code = `
try
  x();
finally
  y();
endtry
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const tryStatement = ParsingHelpers.getTryStatement(result);

    expect(tryStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(tryStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_except_list()).to.have.length(0);

    const finallyPart = tryStatement?.try_finally();

    expect(finallyPart?.statements().statement_list()).to.have.length(1);

    const finallyPrimaryExpression = ParsingHelpers.getPrimaryExpression(finallyPart?.statements().statement(0));
    ExpectHelpers.expectIdentifier(finallyPrimaryExpression?._pe, 'y');
    expect(finallyPrimaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(finallyPrimaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);
  });

  test('should parse a try except finally statement', () => {
    const code = `
try
  x();
except ex (E_VARNF)
  y();
finally
  z();
endtry
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const tryStatement = ParsingHelpers.getTryStatement(result);

    expect(tryStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(tryStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_except_list()).to.have.length(1);

    const except = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(except?.identifier(), 'ex');
    expect(except?.error_codes().error_code_list()).to.have.length(1);
    ExpectHelpers.expectError(except?.error_codes().error_code(0), 'E_VARNF');

    expect(except?.statements().statement_list()).to.have.length(1);

    const exceptPrimaryExpression = ParsingHelpers.getPrimaryExpression(except?.statements().statement(0));
    ExpectHelpers.expectIdentifier(exceptPrimaryExpression?._pe, 'y');
    expect(exceptPrimaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(exceptPrimaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    const finallyPart = tryStatement?.try_finally();

    expect(finallyPart?.statements().statement_list()).to.have.length(1);

    const finallyPrimaryExpression = ParsingHelpers.getPrimaryExpression(finallyPart?.statements().statement(0));
    ExpectHelpers.expectIdentifier(finallyPrimaryExpression?._pe, 'z');
    expect(finallyPrimaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(finallyPrimaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);
  });

  test('should parse a try except statement with multiple error codes', () => {
    const code = `
try
  x();
except ex (E_VARNF, E_PROPNF)
  y();
endtry
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const tryStatement = ParsingHelpers.getTryStatement(result);

    expect(tryStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(tryStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_except_list()).to.have.length(1);

    const except = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(except?.identifier(), 'ex');
    expect(except?.error_codes().error_code_list()).to.have.length(2);
    ExpectHelpers.expectError(except?.error_codes().error_code(0), 'E_VARNF');
    ExpectHelpers.expectError(except?.error_codes().error_code(1), 'E_PROPNF');

    expect(except?.statements().statement_list()).to.have.length(1);

    const exceptPrimaryExpression = ParsingHelpers.getPrimaryExpression(except?.statements().statement(0));
    ExpectHelpers.expectIdentifier(exceptPrimaryExpression?._pe, 'y');
    expect(exceptPrimaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(exceptPrimaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_finally()).not.to.exist;
  });

  test('should parse a try with any error except', () => {
    const code = `
try
  x();
except ex (ANY)
  y();
endtry
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const tryStatement = ParsingHelpers.getTryStatement(result);

    expect(tryStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(tryStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_except_list()).to.have.length(1);

    const except = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(except?.identifier(), 'ex');
    expect(except?.error_codes()).not.to.exist;
    expect(except?.ANY_ERROR()).to.exist;

    const exceptPrimaryExpression = ParsingHelpers.getPrimaryExpression(except?.statements().statement(0));
    ExpectHelpers.expectIdentifier(exceptPrimaryExpression?._pe, 'y');
    expect(exceptPrimaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(exceptPrimaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_finally()).not.to.exist;
  });

  test('should parse a try except finally with no statements', () => {
    const code = `
try
except ex (E_ARGS)
finally
endtry
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const tryStatement = ParsingHelpers.getTryStatement(result);

    expect(tryStatement?.statements().statement_list()).to.have.length(0);

    expect(tryStatement?.try_except_list()).to.have.length(1);

    const except = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(except?.identifier(), 'ex');
    expect(except?.error_codes().error_code_list()).to.have.length(1);
    ExpectHelpers.expectError(except?.error_codes().error_code(0), 'E_ARGS');

    expect(except?.statements().statement_list()).to.have.length(0);

    const finallyPart = tryStatement?.try_finally();

    expect(finallyPart?.statements().statement_list()).to.have.length(0);
  });

  test('should parse a try except with multiple excepts', () => {
    const code = `
try
  x();
except ex (E_VARNF)
  y();
except ex (E_ARGS)
  z();
endtry
`;
    const parser = CommonHelpers.getParser(code);
    const result = parser.statement();

    ExpectHelpers.expectSyntaxErrors(parser, 0);

    const tryStatement = ParsingHelpers.getTryStatement(result);

    expect(tryStatement?.statements().statement_list()).to.have.length(1);

    const primaryExpression = ParsingHelpers.getPrimaryExpression(tryStatement?.statements().statement(0));
    ExpectHelpers.expectIdentifier(primaryExpression?._pe, 'x');
    expect(primaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(primaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_except_list()).to.have.length(2);

    const exceptA = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(exceptA?.identifier(), 'ex');
    expect(exceptA?.error_codes().error_code_list()).to.have.length(1);
    ExpectHelpers.expectError(exceptA?.error_codes().error_code(0), 'E_VARNF');

    expect(exceptA?.statements().statement_list()).to.have.length(1);

    const exceptAPrimaryExpression = ParsingHelpers.getPrimaryExpression(exceptA?.statements().statement(0));
    ExpectHelpers.expectIdentifier(exceptAPrimaryExpression?._pe, 'y');
    expect(exceptAPrimaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(exceptAPrimaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    const exceptB = tryStatement?.try_except(1);

    ExpectHelpers.expectIdentifier(exceptB?.identifier(), 'ex');
    expect(exceptB?.error_codes().error_code_list()).to.have.length(1);
    ExpectHelpers.expectError(exceptB?.error_codes().error_code(0), 'E_ARGS');

    expect(exceptB?.statements().statement_list()).to.have.length(1);

    const exceptBPrimaryExpression = ParsingHelpers.getPrimaryExpression(exceptB?.statements().statement(0));
    ExpectHelpers.expectIdentifier(exceptBPrimaryExpression?._pe, 'z');
    expect(exceptBPrimaryExpression?.bf_invocation_list()).to.have.length(1);
    expect(exceptBPrimaryExpression?.bf_invocation(0)._arguments.expression_list()).to.have.length(0);

    expect(tryStatement?.try_finally()).not.to.exist;
  });
});