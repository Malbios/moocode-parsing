import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for bitwise expressions', () => {
	test('should handle inclusive or', () => {
		runAstTest('a = x |. y;');
	});

	test('should handle exclusive or', () => {
		runAstTest('a = x ^. y;');
	});

	test('should handle and', () => {
		runAstTest('a = x &. y;');
	});

	test('should handle chained', () => {
		runAstTest('a = w &. x |. y ^. z;');
	});
});