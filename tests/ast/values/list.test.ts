import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for list values', () => {
	test('should handle empty list', () => {
		runAstTest('a = {};');
	});

	test('should handle list', () => {
		runAstTest('a = {x, y, z};');
	});

	test('should handle nested list', () => {
		runAstTest('a = {x, {y, z}};');
	});
});