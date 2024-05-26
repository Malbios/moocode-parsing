import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for reference values', () => {
	test('should handle variable', () => {
		runAstTest('a = x_y__z;');
	});

	test('should handle optional target without default value', () => {
		runAstTest('{a, ?b} = c;');
	});

	test('should handle optional target with default value', () => {
		runAstTest('{a, ?b = 1} = c;');
	});

	test('should handle corified object', () => {
		runAstTest('a = $player;');
	});
});