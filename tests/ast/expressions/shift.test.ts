import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for shift expressions', () => {
	test('should handle left shift', () => {
		runAstTest('a = x << y;');
	});

	test('should handle right shift', () => {
		runAstTest('a = x >> y;');
	});

	test('should handle chained', () => {
		runAstTest('a = x << y >> z;');
	});
});