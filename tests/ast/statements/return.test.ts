import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for return statements', () => {
	test('should handle empty return', () => {
		runAstTest('return;');
	});

	test('should handle return with value', () => {
		runAstTest('return 12;');
	});
});