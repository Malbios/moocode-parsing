import { suite, test } from 'mocha';
import { runAstTest } from '../../test-utils/common';

suite('AST tests for error values', () => {
	test('should handle ANY', () => {
		runAstTest('a = ANY;');
	});

	test('should handle E_NONE', () => {
		runAstTest('a = E_NONE;');
	});

	test('should handle E_TYPE', () => {
		runAstTest('a = E_TYPE;');
	});

	test('should handle E_TYPE', () => {
		runAstTest('a = E_TYPE;');
	});

	test('should handle E_DIV', () => {
		runAstTest('a = E_DIV;');
	});

	test('should handle E_PERM', () => {
		runAstTest('a = E_PERM;');
	});

	test('should handle E_PROPNF', () => {
		runAstTest('a = E_PROPNF;');
	});

	test('should handle E_VERBNF', () => {
		runAstTest('a = E_VERBNF;');
	});

	test('should handle E_VARNF', () => {
		runAstTest('a = E_VARNF;');
	});

	test('should handle E_INVIND', () => {
		runAstTest('a = E_INVIND;');
	});

	test('should handle E_RECMOVE', () => {
		runAstTest('a = E_RECMOVE;');
	});

	test('should handle E_MAXREC', () => {
		runAstTest('a = E_MAXREC;');
	});

	test('should handle E_RANGE', () => {
		runAstTest('a = E_RANGE;');
	});

	test('should handle E_ARGS', () => {
		runAstTest('a = E_ARGS;');
	});

	test('should handle E_NACC', () => {
		runAstTest('a = E_NACC;');
	});

	test('should handle E_INVARG', () => {
		runAstTest('a = E_INVARG;');
	});

	test('should handle E_QUOTA', () => {
		runAstTest('a = E_QUOTA;');
	});

	test('should handle E_FLOAT', () => {
		runAstTest('a = E_FLOAT;');
	});

	test('should handle E_FILE', () => {
		runAstTest('a = E_FILE;');
	});

	test('should handle E_EXEC', () => {
		runAstTest('a = E_EXEC;');
	});

	test('should handle E_INTRPT', () => {
		runAstTest('a = E_INTRPT;');
	});
});