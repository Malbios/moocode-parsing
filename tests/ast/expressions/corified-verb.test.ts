import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for corified verb invocation expressions', () => {
	test('should handle call without arguments', () => {
		runAstTest('$x();');
	});

	test('should handle call with argument', () => {
		runAstTest('$x(y);');
	});

	test('should handle call with multiple arguments', () => {
		runAstTest('$x(y,z);', '$x(y, z);');
	});
});