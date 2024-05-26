import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for property access expressions', () => {
	test('should handle literal accessor', () => {
		runAstTest('a = x.y;');
	});

	test('should handle computed accessor', () => {
		runAstTest('a = x.(y);');
	});

	test('should handle chained accessor', () => {
		runAstTest('a = x.(y).z;');
	});
});