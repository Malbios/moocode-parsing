import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';

suite('AST tests for error catcher', () => {
	test('should handle ANY error and no on error expression', async () => {
		const result = generateAst('`move(object, player) ! ANY\';');

		expect(result).to.exist;
	});
});