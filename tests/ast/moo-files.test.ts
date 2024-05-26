import { expect } from 'chai';
import { readFileSync } from 'fs';
import { suite, test } from 'mocha';
import { generateAst } from '../../src';

function runTest(filePath: string) {
	const fileContent = readFileSync(filePath, 'utf8');
	const result = generateAst(fileContent);

	expect(result).to.exist;

	// console.log();
	// console.log(result.map(x => x.toString(false)).join('\n'));
}

suite('AST tests for moo files', () => {
	test('should create a valid AST from file 1', async () => {
		runTest('./tests/moo-files/1.moo');
	});

	test('should create a valid AST from file 2', async () => {
		runTest('./tests/moo-files/2.moo');
	});

	test('should create a valid AST from file 3', async () => {
		runTest('./tests/moo-files/3.moo');
	});

	test('should create a valid AST from file 4', async () => {
		runTest('./tests/moo-files/4.moo');
	});

	test('should create a valid AST from file 5', async () => {
		runTest('./tests/moo-files/5.moo');
	});
});