import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';
import { InvalidStatementNode } from '../../../src/ast/nodes';

suite('AST partial tests for various errors', () => {
	test('should handle invalid assignment', () => {
		const result = generateAst('$stuff.blob.bla:sthisia();\n$\nvar = 0.0;');

		expect(result.valid).to.have.length(1);
		expect(result.invalid).to.have.length(1);
		expect(result.lexerErrors).to.have.length(0);
		expect(result.parserErrors).to.have.length(0);

		const invalidStatement = result.invalid[0] as InvalidStatementNode;

		expect(invalidStatement.toString(false)).to.equal('$\nvar = 0.0;');
		expect(invalidStatement.position.start).to.equal(27);
		expect(invalidStatement.position.stop).to.equal(38);
		expect(invalidStatement.error?.message).to.contain('could not generate a node from \'AssignmentContext\'');
	});
});