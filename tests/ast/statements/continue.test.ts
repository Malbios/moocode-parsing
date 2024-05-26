import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for continue statements', () => {
	test('should handle continue', () => {
		runAstTest('continue;');
	});

	test('should handle named continue', () => {
		runAstTest('continue y;');
	});
});