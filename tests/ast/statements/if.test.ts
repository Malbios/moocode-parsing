import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../../src';
import { BooleanNode, ElseNode, IfStatementNode, ReturnStatementNode } from '../../../src/ast/nodes';
import { expectParsingError } from '../../test-utils/expectations';

suite('AST tests for if statements', () => {
	test('should throw error if there are no conditions', () => {
		const code = `
if ()
	return;
endif
`;
		expectParsingError(() => generateAst(code));
	});

	test('should throw error if semicolon is missing in if-body', () => {
		const code = `
if (true)
	return
endif
`;
		expectParsingError(() => generateAst(code));
	});

	test('should handle if-conditions and if-body', () => {
		const code = `
if (true)
	return;
endif
`;
		const result = generateAst(code);
		expect(result).to.have.length(1);

		const ifStatementNode = result.at(0) as IfStatementNode;

		const booleanValueNode = ifStatementNode.if.conditions as BooleanNode;
		expect(booleanValueNode.value).to.equal(true);

		expect(ifStatementNode.if.body).to.have.length(1);

		const returnStatement = ifStatementNode.if.body.at(0) as ReturnStatementNode;
		expect(returnStatement.value).not.to.exist;
		expect(ifStatementNode.elseifs).to.have.length(0);
		expect(ifStatementNode.else).not.to.exist;
	});

	test('should handle empty if-body', () => {
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

	test('should handle else-body', () => {
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
		const booleanValueNode = returnStatement.value as BooleanNode;
		expect(booleanValueNode.value).to.equal(false);
	});

	test('should handle empty else-body', () => {
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

	test('should handle elseif', () => {
		const code = `
if (true)
elseif (false)
	return true;
endif
`;
		const result = generateAst(code);
		expect(result).to.have.length(1);

		const ifStatementNode = result.at(0) as IfStatementNode;
		expect(ifStatementNode.if.conditions).to.exist;
		expect(ifStatementNode.if.body).to.have.length(0);
		expect(ifStatementNode.elseifs).to.have.length(1);

		const elseIfNode = ifStatementNode.elseifs.at(0);
		expect(elseIfNode?.conditions).to.exist;
		expect(elseIfNode?.body).to.have.length(1);

		const returnNode = elseIfNode?.body.at(0) as ReturnStatementNode;
		const returnValue = returnNode.value as BooleanNode;
		expect(returnValue.value).to.equal(true);

		expect(ifStatementNode.else).not.to.exist;
	});

	test('should handle empty elseif', () => {
		const code = `
if (true)
elseif (false)
endif
`;
		const result = generateAst(code);
		expect(result).to.have.length(1);

		const ifStatementNode = result.at(0) as IfStatementNode;
		expect(ifStatementNode.if.conditions).to.exist;
		expect(ifStatementNode.if.body).to.have.length(0);
		expect(ifStatementNode.elseifs).to.have.length(1);

		const elseIfNode = ifStatementNode.elseifs.at(0);
		expect(elseIfNode?.conditions).to.exist;
		expect(elseIfNode?.body).to.have.length(0);

		expect(ifStatementNode.else).not.to.exist;
	});

	test('should handle multiple elseifs', () => {
		const code = `
if (true)
elseif (false)
elseif (true)
elseif (false)
endif
`;
		const result = generateAst(code);
		expect(result).to.have.length(1);

		const ifStatementNode = result.at(0) as IfStatementNode;
		expect(ifStatementNode.if.conditions).to.exist;
		expect(ifStatementNode.if.body).to.have.length(0);
		expect(ifStatementNode.elseifs).to.have.length(3);

		const elseIfNodeA = ifStatementNode.elseifs.at(0);
		expect(elseIfNodeA?.conditions).to.exist;
		expect(elseIfNodeA?.body).to.have.length(0);

		const elseIfNodeB = ifStatementNode.elseifs.at(1);
		expect(elseIfNodeB?.conditions).to.exist;
		expect(elseIfNodeB?.body).to.have.length(0);

		const elseIfNodeC = ifStatementNode.elseifs.at(2);
		expect(elseIfNodeC?.conditions).to.exist;
		expect(elseIfNodeC?.body).to.have.length(0);

		expect(ifStatementNode.else).not.to.exist;
	});

	test('should handle if, elseif and else', () => {
		const code = `
if (true)
	return;
elseif (false)
	return;
else
	return;
endif
`;
		const result = generateAst(code);
		expect(result).to.have.length(1);

		const ifStatementNode = result.at(0) as IfStatementNode;
		expect(ifStatementNode.if.conditions).to.exist;
		expect(ifStatementNode.if.body).to.have.length(1);

		const ifReturn = ifStatementNode.if.body.at(0) as ReturnStatementNode;
		expect(ifReturn).to.exist;
		expect(ifReturn.value).to.not.exist;

		expect(ifStatementNode.elseifs).to.have.length(1);

		const elseIfNode = ifStatementNode.elseifs.at(0);
		expect(elseIfNode?.conditions).to.exist;
		expect(elseIfNode?.body).to.have.length(1);

		const elseifReturn = elseIfNode?.body.at(0) as ReturnStatementNode;
		expect(elseifReturn).to.exist;
		expect(elseifReturn.value).to.not.exist;

		expect(ifStatementNode.else?.body).to.have.length(1);

		const elseNode = ifStatementNode.else as ElseNode;
		expect(elseNode.body).to.have.length(1);

		const elseReturn = elseNode.body.at(0) as ReturnStatementNode;
		expect(elseReturn).to.exist;
		expect(elseReturn.value).to.not.exist;
	});
});