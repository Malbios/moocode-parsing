import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';

function runTest(code: string) {
	const ast = generateAst(code);

	const result = ast.map(x => x.toString(false)).join('\n');

	expect(result).to.equal(code);
}

suite('AST tests for conditional expressions', () => {
	test('should handle in', async () => {
		runTest('a = x in y;');
	});

	test('should handle or', async () => {
		runTest('a = x || y;');
	});

	test('should handle and', async () => {
		runTest('a = x && y;');
	});

	test('should handle chained', async () => {
		runTest('a = w && x in y || z;');
	});
});