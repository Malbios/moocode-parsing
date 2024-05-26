import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for error catcher expressions', () => {
	test('should handle default', () => {
		runAstTest('`x:y() ! E_INVIND => z()\';');
	});

	test('should handle multiple error codes', () => {
		runAstTest('`x:y() ! E_INVIND, E_ARGS => z()\';');
	});

	test('should handle ANY error and no on error expression', () => {
		runAstTest('`move(object, player) ! ANY\';');
	});

	test('should handle chained in try part', () => {
		runAstTest('``me.names ! ANY => me.nume\' ! ANY => "bob"\';');
	});

	test('should handle chained in on-error part', () => {
		runAstTest('`me.names ! ANY => `me.name ! ANY => "yup"\'\';');
	});
});