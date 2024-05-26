import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for verb invocation expressions', () => {
	test('should handle literal', () => {
		runAstTest('a = x:y();');
	});

	test('should handle literal with argument', () => {
		runAstTest('a = x:y(z);');
	});

	test('should handle literal with arguments', () => {
		runAstTest('a = v:w(x,y,z);', 'a = v:w(x, y, z);');
	});

	test('should handle computed', () => {
		runAstTest('a = x:(y)();');
	});

	test('should handle computed with argument', () => {
		runAstTest('a = x:(y)(z);');
	});

	test('should handle computed with arguments', () => {
		runAstTest('a = v:(w)(x,y,z);', 'a = v:(w)(x, y, z);');
	});

	test('should handle chained with literal first', () => {
		runAstTest('a = u:v(w,x,y):(z)();', 'a = u:v(w, x, y):(z)();');
	});

	test('should handle chained with computed first', () => {
		runAstTest('a = u:(v)(w,x,y):z();', 'a = u:(v)(w, x, y):z();');
	});

	test('should handle corified verb invocation', () => {
		runAstTest('a = $x(y,z);', 'a = $x(y, z);');
	});
});