import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../src';
import { ExpressionStatementNode, PartialVerbInvocationNode, VariableNode, VerbInvocationNode } from '../../src/ast/nodes';

suite('AST tests for partial results', () => {
	test('partial verb invocation', () => {
		const result = generateAst('x:y(');

		expect(result.valid).to.have.length(1);
		expect(result.invalid).to.have.length(0);

		const statement = result.valid[0] as ExpressionStatementNode;
		const partialNode = statement.expression as PartialVerbInvocationNode;

		expect(partialNode.invokedEntity?.toString()).to.equal('x');
		expect(partialNode.verbName).to.equal('y');
	});

	test('partial verb invocation with valid statement before', () => {
		const result = generateAst('a:b(c); d:e(');

		expect(result.valid).to.have.length(2);
		expect(result.invalid).to.have.length(0);

		const statementA = result.valid[0] as ExpressionStatementNode;
		const fullNode = statementA.expression as VerbInvocationNode;

		expect(fullNode.invokedEntity?.toString()).to.equal('a');
		expect(fullNode.verbName).to.equal('b');
		expect(fullNode.verbArguments).to.have.length(1);
		expect((fullNode.verbArguments.at(0) as VariableNode).name).to.equal('c');

		const statementB = result.valid[1] as ExpressionStatementNode;
		const partialNode = statementB.expression as PartialVerbInvocationNode;

		expect(partialNode.invokedEntity?.toString()).to.equal('d');
		expect(partialNode.verbName).to.equal('e');
	});

	test('partial verb invocation with valid statement after', () => {
		const result = generateAst('a:b( c:d(e);');

		expect(result.valid).to.have.length(2);
		expect(result.invalid).to.have.length(0);

		const statementA = result.valid[0] as ExpressionStatementNode;
		const partialNode = statementA.expression as PartialVerbInvocationNode;

		expect(partialNode.invokedEntity?.toString()).to.equal('a');
		expect(partialNode.verbName).to.equal('b');

		const statementB = result.valid[1] as ExpressionStatementNode;
		const fullNode = statementB.expression as VerbInvocationNode;

		expect(fullNode.invokedEntity?.toString()).to.equal('c');
		expect(fullNode.verbName).to.equal('d');
		expect(fullNode.verbArguments).to.have.length(1);
		expect((fullNode.verbArguments.at(0) as VariableNode).name).to.equal('e');
	});

	test('partial verb invocation with valid statements before and after', () => {
		const result = generateAst('a:b(c); d:e( f:g();');

		expect(result.valid).to.have.length(3);
		expect(result.invalid).to.have.length(0);

		const statementA = result.valid[0] as ExpressionStatementNode;
		const fullNodeA = statementA.expression as VerbInvocationNode;

		expect(fullNodeA.invokedEntity?.toString()).to.equal('a');
		expect(fullNodeA.verbName).to.equal('b');
		expect(fullNodeA.verbArguments).to.have.length(1);
		expect((fullNodeA.verbArguments.at(0) as VariableNode).name).to.equal('c');

		const statementB = result.valid[1] as ExpressionStatementNode;
		const partialNode = statementB.expression as PartialVerbInvocationNode;

		expect(partialNode.invokedEntity?.toString()).to.equal('d');
		expect(partialNode.verbName).to.equal('e');

		const statementC = result.valid[2] as ExpressionStatementNode;
		const fullNodeB = statementC.expression as VerbInvocationNode;

		expect(fullNodeB.invokedEntity?.toString()).to.equal('f');
		expect(fullNodeB.verbName).to.equal('g');
		expect(fullNodeB.verbArguments).to.have.length(0);
	});

	test('partial verb invocation with valid statements before and after, and another fully valid statement', () => {
		const result = generateAst('a:b(); c:d( e:f(); g:h();');

		expect(result.valid).to.have.length(4);
		expect(result.invalid).to.have.length(0);

		const statementA = result.valid[0] as ExpressionStatementNode;
		const fullNodeA = statementA.expression as VerbInvocationNode;

		expect(fullNodeA.invokedEntity?.toString()).to.equal('a');
		expect(fullNodeA.verbName).to.equal('b');
		expect(fullNodeA.verbArguments).to.have.length(0);

		const statementB = result.valid[1] as ExpressionStatementNode;
		const partialNode = statementB.expression as PartialVerbInvocationNode;

		expect(partialNode.invokedEntity?.toString()).to.equal('c');
		expect(partialNode.verbName).to.equal('d');

		const statementC = result.valid[2] as ExpressionStatementNode;
		const fullNodeB = statementC.expression as VerbInvocationNode;

		expect(fullNodeB.invokedEntity?.toString()).to.equal('e');
		expect(fullNodeB.verbName).to.equal('f');
		expect(fullNodeB.verbArguments).to.have.length(0);

		const statementD = result.valid[3] as ExpressionStatementNode;
		const fullNodeC = statementD.expression as VerbInvocationNode;

		expect(fullNodeC.invokedEntity?.toString()).to.equal('g');
		expect(fullNodeC.verbName).to.equal('h');
		expect(fullNodeC.verbArguments).to.have.length(0);
	});

	test('partial verb invocation with multiple valid statements before and after', () => {
		const result = generateAst('a:b(); c:d(); e:f( g:h(); i:j();');

		expect(result.valid).to.have.length(5);
		expect(result.invalid).to.have.length(0);

		const statementA = result.valid[0] as ExpressionStatementNode;
		const fullNodeA = statementA.expression as VerbInvocationNode;

		expect(fullNodeA.invokedEntity?.toString()).to.equal('a');
		expect(fullNodeA.verbName).to.equal('b');
		expect(fullNodeA.verbArguments).to.have.length(0);

		const statementB = result.valid[1] as ExpressionStatementNode;
		const fullNodeB = statementB.expression as VerbInvocationNode;

		expect(fullNodeB.invokedEntity?.toString()).to.equal('c');
		expect(fullNodeB.verbName).to.equal('d');
		expect(fullNodeB.verbArguments).to.have.length(0);

		const statementC = result.valid[2] as ExpressionStatementNode;
		const partialNode = statementC.expression as PartialVerbInvocationNode;

		expect(partialNode.invokedEntity?.toString()).to.equal('e');
		expect(partialNode.verbName).to.equal('f');

		const statementD = result.valid[3] as ExpressionStatementNode;
		const fullNodeC = statementD.expression as VerbInvocationNode;

		expect(fullNodeC.invokedEntity?.toString()).to.equal('g');
		expect(fullNodeC.verbName).to.equal('h');
		expect(fullNodeC.verbArguments).to.have.length(0);

		const statementE = result.valid[4] as ExpressionStatementNode;
		const fullNodeD = statementE.expression as VerbInvocationNode;

		expect(fullNodeD.invokedEntity?.toString()).to.equal('i');
		expect(fullNodeD.verbName).to.equal('j');
		expect(fullNodeD.verbArguments).to.have.length(0);
	});
});