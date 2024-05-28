import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for expression statements', () => {
	test('should handle assignment', () => {
		runAstTest('a=x;', 'a = x;');
	});

	test('should handle verb invocation', () => {
		runAstTest('x:y(a,b);', 'x:y(a, b);');
	});

	test('should handle built-in function invocation', () => {
		runAstTest('x(y,z);', 'x(y, z);');
	});
});