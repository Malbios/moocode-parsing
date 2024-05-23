import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';
import { BooleanNode, ExpressionStatementNode, FloatNode, IntegerNode, ListAssignmentNode, PropertyAccessor, PropertyAccessorNode, PropertyAssignmentNode, StringNode, VariableAssignmentNode, VariableNode } from '../../../src/ast/nodes';
import { expectParsingError } from '../../test-utils/expectations';

suite('AST tests for assignments', () => {
	test('should throw error if semicolon is missing', () => {
		expectParsingError(() => generateAst('x = "abc"'));
	});

	test('should throw error if equals is missing', () => {
		expectParsingError(() => generateAst('x "abc";'));
	});

	test('should generate VariableAssignmentNode for string literal to variable assignment', () => {
		const result = generateAst('x = "abc";');
		expect(result).to.have.length(1);

		const statementNode = result.at(0) as ExpressionStatementNode;
		const variableAssignmentNode = statementNode.expression as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as StringNode
		expect(valueNode.value).to.equal('abc');
	});

	test('should generate VariableAssignmentNode for float literal to variable assignment', () => {
		const result = generateAst('x = 1.2;');
		expect(result).to.have.length(1);

		const statementNode = result.at(0) as ExpressionStatementNode;
		const variableAssignmentNode = statementNode.expression as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as FloatNode
		expect(valueNode.value).to.equal(1.2);
	});

	test('should generate VariableAssignmentNode for integer literal to variable assignment', () => {
		const result = generateAst('x = 1438;');
		expect(result).to.have.length(1);

		const statementNode = result.at(0) as ExpressionStatementNode;
		const variableAssignmentNode = statementNode.expression as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as IntegerNode
		expect(valueNode.value).to.equal(1438);
	});

	test('should generate VariableAssignmentNode for bool literal to variable assignment', () => {
		const result = generateAst('x = true;');
		expect(result).to.have.length(1);

		const statementNode = result.at(0) as ExpressionStatementNode;
		const variableAssignmentNode = statementNode.expression as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as BooleanNode
		expect(valueNode.value).to.equal(true);
	});

	test('should generate VariableAssignmentNode for variable to variable assignment', () => {
		const result = generateAst('x = tree;');
		expect(result).to.have.length(1);

		const statementNode = result.at(0) as ExpressionStatementNode;
		const variableAssignmentNode = statementNode.expression as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as VariableNode;
		expect(valueNode.name).to.equal('tree');
	});

	test('should generate ListAssignmentNode for variable to list of variables assignment', () => {
		const result = generateAst('{a, b, c} = args;');
		expect(result).to.have.length(1);

		const statementNode = result.at(0) as ExpressionStatementNode;
		const listAssignmentNode = statementNode.expression as ListAssignmentNode;
		expect(listAssignmentNode.list.elements).to.have.length(3);

		const variableNodeA = listAssignmentNode.list.elements.at(0) as VariableNode;
		expect(variableNodeA.name).to.equal('a');

		const variableNodeB = listAssignmentNode.list.elements.at(1) as VariableNode;
		expect(variableNodeB.name).to.equal('b');

		const variableNodeC = listAssignmentNode.list.elements.at(2) as VariableNode;
		expect(variableNodeC.name).to.equal('c');

		const valueNode = listAssignmentNode.value as VariableNode
		expect(valueNode.name).to.equal('args');
	});

	test('should generate PropertyAssignmentNode for property to property assignment', () => {
		const result = generateAst('bob.name = smurf.surname;');
		expect(result).to.have.length(1);

		const statementNode = result.at(0) as ExpressionStatementNode;
		const propertyAssignmentNode = statementNode.expression as PropertyAssignmentNode;

		const targetProperty = propertyAssignmentNode.property as PropertyAccessorNode;
		expect(targetProperty.propertyName).to.equal('name');

		const targetPropertyObject = targetProperty.accessedEntity as VariableNode;
		expect(targetPropertyObject.name).to.equal('bob');

		const valueProperty = propertyAssignmentNode.value as PropertyAccessor;
		expect(valueProperty.propertyName).to.equal('surname');

		const valuePropertyObject = valueProperty.accessedEntity as VariableNode;
		expect(valuePropertyObject.name).to.equal('smurf');
	});
});