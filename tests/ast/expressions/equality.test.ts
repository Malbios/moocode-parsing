import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for equality expressions', () => {
	test('should handle equals', () => {
		runAstTest('a = x == y;');
	});

	test('should handle unequals', () => {
		runAstTest('a = x != y;');
	});

	test('should handle chained', () => {
		runAstTest('a = x == y != z;');
	});
});