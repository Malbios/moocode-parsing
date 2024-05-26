import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for empty statements', () => {
	test('should handle empty', () => {
		runAstTest(';');
	});
});