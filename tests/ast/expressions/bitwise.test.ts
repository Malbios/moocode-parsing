import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';

function runTest(code: string) {
	const ast = generateAst(code);

	const result = ast.map(x => x.toString(false)).join('\n');

	expect(result).to.equal(code);
}

suite('AST tests for bitwise expressions', () => {
	test('should handle inclusive or', async () => {
		runTest('a = x |. y;');
	});

	test('should handle exclusive or', async () => {
		runTest('a = x ^. y;');
	});

	test('should handle and', async () => {
		runTest('a = x &. y;');
	});

	test('should handle chained', async () => {
		runTest('a = w &. x |. y ^. z;');
	});
});