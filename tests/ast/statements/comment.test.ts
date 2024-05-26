import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for comment statements', () => {
	test('should handle comment', () => {
		runAstTest('"a = x + y";');
	});

	test('should handle comment with escaped double-quote', () => {
		runAstTest('"a = \\"x\\" + y";');
	});

	test('should handle empty comment', () => {
		runAstTest('"";');
	});
});