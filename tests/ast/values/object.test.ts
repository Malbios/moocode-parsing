import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for object values', () => {
	test('should handle object id', () => {
		runAstTest('a = #123;');
	});

	test('should handle negative object id', () => {
		runAstTest('a = #-2;');
	});
});