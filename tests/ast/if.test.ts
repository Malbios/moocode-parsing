import { expect } from 'chai';
import { suite, test } from 'mocha';

import { generateAst } from '../../src/ast/generator';
import { BooleanValueNode, ElseNode, IfStatementNode, ReturnStatementNode } from '../../src/ast/nodes';
import { expectParsingError } from '../test-utils/expectations';

suite('AST tests for if statements', () => {
	test('should throw error if semicolon is missing in if-body', () => {
		const code = `
if (true)
	return
endif
`;
		expectParsingError(() => generateAst(code));
	});

	test('should throw error if if-conditions is empty', () => {
		const code = `
if ()
	return;
endif
`;
		expectParsingError(() => generateAst(code));
	});

	test('should generate node with if-conditions and if-body', () => {
		const code = `
if (true)
	return;
endif
`;
		const result = generateAst(code);

		expect(result).to.have.length(1);

		const ifStatementNode = result.at(0) as IfStatementNode;

		const booleanValueNode = ifStatementNode.if.conditions as BooleanValueNode;
		expect(booleanValueNode.value).to.equal(true);

		expect(ifStatementNode.if.body).to.have.length(1);
		const returnStatement = ifStatementNode.if.body.at(0) as ReturnStatementNode;
		expect(returnStatement.expression).not.to.exist;

		expect(ifStatementNode.elseifs).to.have.length(0);
		expect(ifStatementNode.else).not.to.exist;
	});

	test('should generate node with empty body', () => {
		const code = `
if (true)
endif
`;
		const result = generateAst(code);

		expect(result).to.have.length(1);

		const ifStatementNode = result.at(0) as IfStatementNode;

		expect(ifStatementNode.if.conditions).to.exist;
		expect(ifStatementNode.if.body).to.have.length(0);
		expect(ifStatementNode.elseifs).to.have.length(0);
		expect(ifStatementNode.else).not.to.exist;
	});

	test('should throw error if semicolon is missing in else-body', () => {
		const code = `
if (true)
else
	return
endif
`;
		expectParsingError(() => generateAst(code));
	});

	test('should generate node with else-body', () => {
		const code = `
if (true)
else
	return false;
endif
`;
		const result = generateAst(code);

		expect(result).to.have.length(1);

		const ifStatementNode = result.at(0) as IfStatementNode;

		expect(ifStatementNode.if.conditions).to.exist;
		expect(ifStatementNode.if.body).to.have.length(0);
		expect(ifStatementNode.elseifs).to.have.length(0);

		const elseNode = ifStatementNode.else as ElseNode;

		expect(elseNode.body).to.have.length(1);
		const returnStatement = elseNode.body.at(0) as ReturnStatementNode;
		const booleanValueNode = returnStatement.expression as BooleanValueNode;
		expect(booleanValueNode.value).to.equal(false);
	});

	test('should generate node with empty else-body', () => {
		const code = `
if (true)
else
endif
`;
		const result = generateAst(code);

		expect(result).to.have.length(1);

		const ifStatementNode = result.at(0) as IfStatementNode;

		expect(ifStatementNode.if.conditions).to.exist;
		expect(ifStatementNode.if.body).to.have.length(0);
		expect(ifStatementNode.elseifs).to.have.length(0);

		const elseNode = ifStatementNode.else as ElseNode;

		expect(elseNode.body).to.have.length(0);
	});
});