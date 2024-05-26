import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for boolean values', () => {
	test('should handle true', () => {
		runAstTest('a = true;');
	});

	test('should handle false', () => {
		runAstTest('a = x(false);');
	});
});