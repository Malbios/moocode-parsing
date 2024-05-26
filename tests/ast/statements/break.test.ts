import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for break statements', () => {
	test('should handle break', () => {
		runAstTest('break;');
	});

	test('should handle named break', () => {
		runAstTest('break x;');
	});
});