import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';
import { ExpressionStatementNode, InvalidStatementNode, VariableNode, VerbInvocationNode } from '../../../src/ast/nodes';

suite('AST partial tests for verb invocations', () => {
	test('should handle partial', () => {
		const result = generateAst('x:y(');

		expect(result.valid).to.have.length(0);
		expect(result.invalid).to.have.length(1);
		expect(result.lexerErrors).to.have.length(0);
		expect(result.parserErrors).to.have.length(1);

		const invalidStatement = result.invalid[0] as InvalidStatementNode;

		expect(invalidStatement.toString(false)).to.equal('x:y(');
		expect(result.parserErrors[0].line).to.equal(1);
		expect(result.parserErrors[0].column).to.equal(4);
		expect(result.parserErrors[0].message).to.contain('mismatched input \'<EOF>\'');
	});

	test('should handle partial with valid statement before', () => {
		const result = generateAst('a:b(c); d:e(');

		expect(result.valid).to.have.length(1);
		expect(result.invalid).to.have.length(1);
		expect(result.lexerErrors).to.have.length(0);
		expect(result.parserErrors).to.have.length(1);

		const statementA = result.valid[0] as ExpressionStatementNode;
		const fullNode = statementA.expression as VerbInvocationNode;

		expect(fullNode.invokedEntity?.toString()).to.equal('a');
		expect(fullNode.name).to.equal('b');
		expect(fullNode.arguments).to.have.length(1);
		expect((fullNode.arguments.at(0) as VariableNode).name).to.equal('c');

		const invalidStatement = result.invalid[0] as InvalidStatementNode;

		expect(invalidStatement.toString(false)).to.equal('d:e(');
		expect(result.parserErrors[0].line).to.equal(1);
		expect(result.parserErrors[0].column).to.equal(12);
		expect(result.parserErrors[0].message).to.contain('mismatched input \'<EOF>\'');
	});

	test('should handle partial with valid statement after', () => {
		const result = generateAst('a:b( c:d(e);');

		expect(result.valid).to.have.length(0);
		expect(result.invalid).to.have.length(1);
		expect(result.lexerErrors).to.have.length(0);
		expect(result.parserErrors).to.have.length(1);

		const invalidStatement = result.invalid[0] as InvalidStatementNode;

		expect(invalidStatement.toString(false)).to.equal('a:b( c:d(e);');
		expect(result.parserErrors[0].line).to.equal(1);
		expect(result.parserErrors[0].column).to.equal(11);
		expect(result.parserErrors[0].message).to.contain('missing \')\' at \';\'');
	});

	test('should handle partial with valid statements before and after', () => {
		const result = generateAst('a:b(c); d:e( f:g();');

		expect(result.valid).to.have.length(1);
		expect(result.invalid).to.have.length(1);
		expect(result.lexerErrors).to.have.length(0);
		expect(result.parserErrors).to.have.length(1);

		const statementA = result.valid[0] as ExpressionStatementNode;
		const fullNodeA = statementA.expression as VerbInvocationNode;

		expect(fullNodeA.invokedEntity?.toString()).to.equal('a');
		expect(fullNodeA.name).to.equal('b');
		expect(fullNodeA.arguments).to.have.length(1);
		expect((fullNodeA.arguments.at(0) as VariableNode).name).to.equal('c');

		const invalidStatement = result.invalid[0] as InvalidStatementNode;

		expect(invalidStatement.toString(false)).to.equal('d:e( f:g();');
		expect(result.parserErrors[0].line).to.equal(1);
		expect(result.parserErrors[0].column).to.equal(18);
		expect(result.parserErrors[0].message).to.contain('missing \')\' at \';\'');
	});

	test('should handle partial with valid statements before and after, and another fully valid statement', () => {
		const result = generateAst('a:b(); c:d( e:f(); g:h();');

		expect(result.valid).to.have.length(2);
		expect(result.invalid).to.have.length(1);
		expect(result.lexerErrors).to.have.length(0);
		expect(result.parserErrors).to.have.length(1);

		const statementA = result.valid[0] as ExpressionStatementNode;
		const fullNodeA = statementA.expression as VerbInvocationNode;

		expect(fullNodeA.invokedEntity?.toString()).to.equal('a');
		expect(fullNodeA.name).to.equal('b');
		expect(fullNodeA.arguments).to.have.length(0);

		const invalidStatement = result.invalid[0] as InvalidStatementNode;

		expect(invalidStatement.toString(false)).to.equal('c:d( e:f();');
		expect(result.parserErrors[0].line).to.equal(1);
		expect(result.parserErrors[0].column).to.equal(17);
		expect(result.parserErrors[0].message).to.contain('missing \')\' at \';\'');

		const statementD = result.valid[1] as ExpressionStatementNode;
		const fullNodeC = statementD.expression as VerbInvocationNode;

		expect(fullNodeC.invokedEntity?.toString()).to.equal('g');
		expect(fullNodeC.name).to.equal('h');
		expect(fullNodeC.arguments).to.have.length(0);
	});

	test('should handle partial with multiple valid statements before and after', () => {
		const result = generateAst('a:b(); c:d(); e:f( g:h(); i:j();');

		expect(result.valid).to.have.length(3);
		expect(result.invalid).to.have.length(1);
		expect(result.lexerErrors).to.have.length(0);
		expect(result.parserErrors).to.have.length(1);

		const statementA = result.valid[0] as ExpressionStatementNode;
		const fullNodeA = statementA.expression as VerbInvocationNode;

		expect(fullNodeA.invokedEntity?.toString()).to.equal('a');
		expect(fullNodeA.name).to.equal('b');
		expect(fullNodeA.arguments).to.have.length(0);

		const statementB = result.valid[1] as ExpressionStatementNode;
		const fullNodeB = statementB.expression as VerbInvocationNode;

		expect(fullNodeB.invokedEntity?.toString()).to.equal('c');
		expect(fullNodeB.name).to.equal('d');
		expect(fullNodeB.arguments).to.have.length(0);

		const invalidStatement = result.invalid[0] as InvalidStatementNode;

		expect(invalidStatement.toString(false)).to.equal('e:f( g:h();');
		expect(result.parserErrors[0].line).to.equal(1);
		expect(result.parserErrors[0].column).to.equal(24);
		expect(result.parserErrors[0].message).to.contain('missing \')\' at \';\'');

		const statementE = result.valid[2] as ExpressionStatementNode;
		const fullNodeD = statementE.expression as VerbInvocationNode;

		expect(fullNodeD.invokedEntity?.toString()).to.equal('i');
		expect(fullNodeD.name).to.equal('j');
		expect(fullNodeD.arguments).to.have.length(0);
	});
});