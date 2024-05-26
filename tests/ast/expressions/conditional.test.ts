import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for conditional expressions', () => {
	test('should handle in', () => {
		runAstTest('a = x in y;');
	});

	test('should handle or', () => {
		runAstTest('a = x || y;');
	});

	test('should handle and', () => {
		runAstTest('a = x && y;');
	});

	test('should handle chained', () => {
		runAstTest('a = w && x in y || z;');
	});
});