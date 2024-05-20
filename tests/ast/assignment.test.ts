import { expect } from 'chai';
import { suite, test } from 'mocha';

import {
	StringValueNode,
	VariableAssignmentNode
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

	test('should generate VariableAssignmentNode for string to variable assignment', () => {
		const result = generateAst('x = "abc";');

		expect(result).to.have.length(1);

		const variableAssignmentNode = result.at(0) as VariableAssignmentNode;

		expect(variableAssignmentNode).to.exist;
		expect(variableAssignmentNode.variable.name).to.equal('x');

		const stringValue = variableAssignmentNode.value as StringValueNode
		expect(stringValue.value).to.equal('abc');
	});
});