import { readFileSync } from 'fs';
import { suite, test } from 'mocha';
import { generateAst } from '../../src';

suite('AST tests for moo files', () => {
	test('should create a valid AST from file 1', async () => {
		const fileContent = readFileSync('./tests/moo-files/1.moo', 'utf8');
		const result = generateAst(fileContent);

		console.log(result.map(x => x.toString()).join('\n'));
	});

	test('should create a valid AST from file 2', async () => {
		const fileContent = readFileSync('./tests/moo-files/2.moo', 'utf8');
		const result = generateAst(fileContent);

		console.log(result.map(x => x.toString()).join('\n'));
	});

	test('should create a valid AST from file 3', async () => {
		const fileContent = readFileSync('./tests/moo-files/3.moo', 'utf8');
		const result = generateAst(fileContent);

		console.log(result.map(x => x.toString()).join('\n'));
	});

	test('should create a valid AST from file 4', async () => {
		const fileContent = readFileSync('./tests/moo-files/3.moo', 'utf8');
		const result = generateAst(fileContent);

		console.log(result.map(x => x.toString()).join('\n'));
	});

	test('should create a valid AST from file 5', async () => {
		const fileContent = readFileSync('./tests/moo-files/3.moo', 'utf8');
		const result = generateAst(fileContent);

		console.log(result.map(x => x.toString()).join('\n'));
	});
});