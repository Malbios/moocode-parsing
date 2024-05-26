import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for for statements', () => {
	test('should handle default', () => {
		runAstTest('for x in ({1}) y(); endfor', 'for x in ({1})\n  y();\nendfor');
	});

	test('should handle key variable', () => {
		runAstTest('for x,y in ({1}) z(); endfor', 'for x, y in ({1})\n  z();\nendfor');
	});

	test('should handle range', () => {
		runAstTest('for o in [#0..max_object()] a(o); endfor', 'for o in [#0..max_object()]\n  a(o);\nendfor');
	});

	test('should handle nested', () => {
		runAstTest('for x in ({1}) for y in ({2}) z(x, y); endfor endfor', 'for x in ({1})\n  for y in ({2})\n    z(x, y);\n  endfor\nendfor');
	});
});