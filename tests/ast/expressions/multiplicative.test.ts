import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';

function runTest(code: string) {
	const ast = generateAst(code);

	const result = ast.map(x => x.toString(false)).join('\n');

	expect(result).to.equal(code);
}

suite('AST tests for multiplicative expressions', () => {
	test('should handle multiplication', async () => {
		runTest('a = x * y;');
	});

	test('should handle division', async () => {
		runTest('a = x / y;');
	});

	test('should handle modulation', async () => {
		runTest('a = x % z;');
	});

	test('should handle chained', async () => {
		runTest('a = w / x * y % z;');
	});
});