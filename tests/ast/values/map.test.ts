import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for map values', () => {
	test('should handle map', () => {
		runAstTest('a = ["1" -> 2];');
	});

	test('should handle nested map', () => {
		runAstTest('a = [15 -> [4 -> [x -> "yes"]]];');
	});
});