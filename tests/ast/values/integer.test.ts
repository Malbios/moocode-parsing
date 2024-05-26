import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for integer values', () => {
	test('should handle default', () => {
		runAstTest('a = 4264;');
	});

	test('should handle negative', () => {
		runAstTest('a = -4264;');
	});

	test('should handle zero', () => {
		runAstTest('a = 0;');
	});
});