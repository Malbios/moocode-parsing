import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for relational expressions', () => {
	test('should handle less than', () => {
		runAstTest('a = x < y;');
	});

	test('should handle greater than', () => {
		runAstTest('a = x > y;');
	});

	test('should handle less or equal', () => {
		runAstTest('a = x <= y;');
	});

	test('should handle greater or equal', () => {
		runAstTest('a = x >= y;');
	});

	test('should handle chained', () => {
		runAstTest('a = v >= w > x < y <= z;');
	});
});