import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';

function runTest(code: string) {
	const ast = generateAst(code);

	const result = ast.map(x => x.toString(false)).join('\n');

	expect(result).to.equal(code);
}

suite('AST tests for shift expressions', () => {
	test('should handle left shift', async () => {
		runTest('a = x << y;');
	});

	test('should handle right shift', async () => {
		runTest('a = x >> y;');
	});

	test('should handle chained', async () => {
		runTest('a = x << y >> z;');
	});
});