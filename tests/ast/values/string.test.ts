import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for string values', () => {
	test('should handle strings', () => {
		runAstTest('a = "xyz";');
	});

	test('should handle escaped double-quotes', () => {
		runAstTest('a = "x\\"y\\"z";');
	});
});