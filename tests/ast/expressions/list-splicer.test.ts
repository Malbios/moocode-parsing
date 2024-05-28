import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';

function runTest(code: string) {
	const ast = generateAst(code);

	const result = ast.valid.map(x => x?.toString(false)).join('\n');

	expect(result).to.equal(code);
}

suite('AST tests for list splicer expressions', () => {
	test('should handle variable', () => {
		runTest('a = @my_list;');
	});
});