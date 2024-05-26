import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for expression statements', () => {
	test('should handle assignment', () => {
		runAstTest('a = x;');
	});

	test('should handle verb invocation', () => {
		runAstTest('x:y(z);');
	});

	test('should handle built-in function invocation', () => {
		runAstTest('x(y, z);');
	});
});