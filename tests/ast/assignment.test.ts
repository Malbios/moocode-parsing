import { expect } from 'chai';
import { suite, test } from 'mocha';

import {
	BooleanValueNode,
	FloatValueNode,
	IntegerValueNode,
	StringValueNode,
	VariableAssignmentNode,
	VariableNode
} from '../../src/ast/nodes';

import { generateAst } from '../../src/ast/generator';
import { expectParsingError } from '../test-utils/expectations';

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

		const variableAssignmentNode = result.at(0) as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as StringValueNode
		expect(valueNode.value).to.equal('abc');
	});

	test('should generate VariableAssignmentNode for float literal to variable assignment', () => {
		const result = generateAst('x = 1.2;');
		expect(result).to.have.length(1);

		const variableAssignmentNode = result.at(0) as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as FloatValueNode
		expect(valueNode.value).to.equal(1.2);
	});

	test('should generate VariableAssignmentNode for integer literal to variable assignment', () => {
		const result = generateAst('x = 1438;');
		expect(result).to.have.length(1);

		const variableAssignmentNode = result.at(0) as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as IntegerValueNode
		expect(valueNode.value).to.equal(1438);
	});

	test('should generate VariableAssignmentNode for bool literal to variable assignment', () => {
		const result = generateAst('x = true;');
		expect(result).to.have.length(1);

		const variableAssignmentNode = result.at(0) as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as BooleanValueNode
		expect(valueNode.value).to.equal(true);
	});

	test('should generate VariableAssignmentNode for variable to variable assignment', () => {
		const result = generateAst('x = tree;');
		expect(result).to.have.length(1);

		const variableAssignmentNode = result.at(0) as VariableAssignmentNode;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const valueNode = variableAssignmentNode.value as VariableNode
		expect(valueNode.name).to.equal('tree');
	});
});