import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for float values', () => {
	test('should handle float', () => {
		runAstTest('a = 1.3;');
	});

	test('should handle no value after decimal', () => {
		runAstTest('a = 13.;');
	});

	test('should handle e', () => {
		runAstTest('a = 6.425e2;');
	});

	test('should handle e right after decimal point', () => {
		runAstTest('a = 6.e5;');
	});

	test('should handle no leading digits', () => {
		runAstTest('a = .435;');
	});

	test('should handle e+', () => {
		runAstTest('a = 1.03e+4;');
	});

	test('should handle e-', () => {
		runAstTest('a = .84e-2;');
	});

	test('should handle negative', () => {
		runAstTest('a = -72.153;');
	});

	test('should handle zero', () => {
		runAstTest('a = 0.0;');
	});
});