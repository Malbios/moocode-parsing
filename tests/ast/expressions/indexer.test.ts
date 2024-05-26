import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for indexer expressions', () => {
	test('should handle variable indexer', () => {
		runAstTest('a = x[y];');
	});

	test('should handle string indexer', () => {
		runAstTest('a = "x"[y];');
	});

	test('should handle chained', () => {
		runAstTest('a = x[y][z];');
	});
});