import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for try statements', () => {
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

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(tryStatement?.statements().statement(0), 'x');

    expect(tryStatement?.try_except_list()).to.have.length(1);

    const except = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(except?.identifier(), 'ex');
    expect(except?.error_codes().expression_list()).to.have.length(1);
    ExpectHelpers.expectError(except?.error_codes().expression(0), 'E_VARNF');

    expect(except?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(except?.statements().statement(0), 'y');

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

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(tryStatement?.statements().statement(0), 'x');

    expect(tryStatement?.try_except_list()).to.have.length(0);

    const finallyPart = tryStatement?.try_finally();

    expect(finallyPart?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(finallyPart?.statements().statement(0), 'y');
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

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(tryStatement?.statements().statement(0), 'x');

    expect(tryStatement?.try_except_list()).to.have.length(1);

    const except = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(except?.identifier(), 'ex');
    expect(except?.error_codes().expression_list()).to.have.length(1);
    ExpectHelpers.expectError(except?.error_codes().expression(0), 'E_VARNF');

    expect(except?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(except?.statements().statement(0), 'y');

    const finallyPart = tryStatement?.try_finally();

    expect(finallyPart?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(finallyPart?.statements().statement(0), 'z');
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

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(tryStatement?.statements().statement(0), 'x');

    expect(tryStatement?.try_except_list()).to.have.length(1);

    const except = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(except?.identifier(), 'ex');
    expect(except?.error_codes().expression_list()).to.have.length(2);
    ExpectHelpers.expectError(except?.error_codes().expression(0), 'E_VARNF');
    ExpectHelpers.expectError(except?.error_codes().expression(1), 'E_PROPNF');

    expect(except?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(except?.statements().statement(0), 'y');

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

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(tryStatement?.statements().statement(0), 'x');

    expect(tryStatement?.try_except_list()).to.have.length(1);

    const except = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(except?.identifier(), 'ex');
    expect(except?.error_codes().expression_list()).to.have.length(1);
    expect(except?.error_codes().expression(0).getText()).to.equal('ANY');

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(except?.statements().statement(0), 'y');

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
    expect(except?.error_codes().expression_list()).to.have.length(1);
    ExpectHelpers.expectError(except?.error_codes().expression(0), 'E_ARGS');

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

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(tryStatement?.statements().statement(0), 'x');

    expect(tryStatement?.try_except_list()).to.have.length(2);

    const exceptA = tryStatement?.try_except(0);

    ExpectHelpers.expectIdentifier(exceptA?.identifier(), 'ex');
    expect(exceptA?.error_codes().expression_list()).to.have.length(1);
    ExpectHelpers.expectError(exceptA?.error_codes().expression(0), 'E_VARNF');

    expect(exceptA?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(exceptA?.statements().statement(0), 'y');

    const exceptB = tryStatement?.try_except(1);

    ExpectHelpers.expectIdentifier(exceptB?.identifier(), 'ex');
    expect(exceptB?.error_codes().expression_list()).to.have.length(1);
    ExpectHelpers.expectError(exceptB?.error_codes().expression(0), 'E_ARGS');

    expect(exceptB?.statements().statement_list()).to.have.length(1);

    ExpectHelpers.expectBuiltInFunctionWithNoArguments(exceptB?.statements().statement(0), 'z');

    expect(tryStatement?.try_finally()).not.to.exist;
  });
});