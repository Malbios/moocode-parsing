import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';

function runTest(code: string) {
	const ast = generateAst(code);

	const result = ast.map(x => x.toString(false)).join('\n');

	expect(result).to.equal(code);
}

suite('AST tests for relational expressions', () => {
	test('should handle less than', async () => {
		runTest('a = x < y;');
	});

	test('should handle greater than', async () => {
		runTest('a = x > y;');
	});

	test('should handle less or equal', async () => {
		runTest('a = x <= y;');
	});

	test('should handle greater or equal', async () => {
		runTest('a = x >= y;');
	});

	test('should handle chained', async () => {
		runTest('a = v >= w > x < y <= z;');
	});
});