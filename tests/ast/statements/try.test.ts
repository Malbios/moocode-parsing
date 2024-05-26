import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for try statements', () => {
	test('should handle default', () => {
		runAstTest('try x(); except ex (E_VARNF) y(); endtry', 'try\n  x();\nexcept ex (E_VARNF)\n  y();\nendtry');
	});

	test('should handle finally', () => {
		runAstTest('try x(); finally y(); endtry', 'try\n  x();\nfinally\n  y();\nendtry');
	});

	test('should handle try except finally', () => {
		runAstTest('try x(); except ex (E_VARNF) y(); finally z(); endtry', 'try\n  x();\nexcept ex (E_VARNF)\n  y();\nfinally\n  z();\nendtry');
	});

	test('should handle multiple errors in one except', () => {
		runAstTest('try x(); except ex (E_VARNF,E_INVIND) y(); endtry', 'try\n  x();\nexcept ex (E_VARNF, E_INVIND)\n  y();\nendtry');
	});

	test('should handle ANY', () => {
		runAstTest('try x(); except ex (ANY) y(); endtry', 'try\n  x();\nexcept ex (ANY)\n  y();\nendtry');
	});

	test('should handle no statements', () => {
		runAstTest('try except ex (ANY) finally endtry', 'try\nexcept ex (ANY)\nfinally\nendtry');
	});

	test('should handle multiple excepts', () => {
		runAstTest('try x(); except ex (E_VARNF) y(); except ex (E_ARGS) z(); endtry', 'try\n  x();\nexcept ex (E_VARNF)\n  y();\nexcept ex (E_ARGS)\n  z();\nendtry');
	});
});