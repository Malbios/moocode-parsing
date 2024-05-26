import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for fork statements', () => {
	test('should handle default', () => {
		runAstTest('fork (1) x(); endfork', 'fork (1)\n  x();\nendfork');
	});

	test('should handle multiple statements', () => {
		runAstTest('fork (1) x(); y(); z(); endfork', 'fork (1)\n  x();\n  y();\n  z();\nendfork');
	});

	test('should handle variable', () => {
		runAstTest('fork (var) x(); endfork', 'fork (var)\n  x();\nendfork');
	});

	test('should handle nested', () => {
		runAstTest('fork (1) fork (2) x(); endfork endfork', 'fork (1)\n  fork (2)\n    x();\n  endfork\nendfork');
	});
});