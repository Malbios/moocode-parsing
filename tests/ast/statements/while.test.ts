import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for while statements', () => {
	test('should handle default', () => {
		runAstTest('while (true) x(); endwhile', 'while (true)\n  x();\nendwhile');
	});

	test('should handle name', () => {
		runAstTest('while namo (true) x(); endwhile', 'while namo (true)\n  x();\nendwhile');
	});
});