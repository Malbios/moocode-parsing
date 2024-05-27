import { expect } from 'chai';
import { readFileSync } from 'fs';
import { suite, test } from 'mocha';
import { generateAst } from '../../src';

function runTest(filePath: string) {
	const fileContent = readFileSync(filePath, 'utf8');
	const result = generateAst(fileContent);

	expect(result).to.exist;
}

suite('AST tests for moo files', () => {
	test('should create a valid AST from file 1', () => {
		runTest('./tests/moo-files/1.moo');
	});

	test('should create a valid AST from file 2', () => {
		runTest('./tests/moo-files/2.moo');
	});

	test('should create a valid AST from file 3', () => {
		runTest('./tests/moo-files/3.moo');
	});

	test('should create a valid AST from file 4', () => {
		runTest('./tests/moo-files/4.moo');
	});

	test('should create a valid AST from file 5', () => {
		runTest('./tests/moo-files/5.moo');
	});
});