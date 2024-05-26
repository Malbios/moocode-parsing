import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for additive expressions', () => {
	test('should handle plus', () => {
		runAstTest('a = x + y;');
	});

	test('should handle minus', () => {
		runAstTest('a = x - y;');
	});

	test('should handle chained', () => {
		runAstTest('a = x - y + z;');
	});
});