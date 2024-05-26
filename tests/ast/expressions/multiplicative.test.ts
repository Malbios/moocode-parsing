import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for multiplicative expressions', () => {
	test('should handle multiplication', () => {
		runAstTest('a = x * y;');
	});

	test('should handle division', () => {
		runAstTest('a = x / y;');
	});

	test('should handle modulation', () => {
		runAstTest('a = x % z;');
	});

	test('should handle chained', () => {
		runAstTest('a = w / x * y % z;');
	});
});