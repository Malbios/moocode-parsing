import { expect } from 'chai';
import { suite, test } from 'mocha';
import { generateAst } from '../../src';
import { InvalidStatement } from '../../src/ast/nodes';

suite('AST tests for partial results', () => {
	test('partial verb invocation', () => {
		const result = generateAst('x:y(');

		expect(result).to.have.length(1);
		expect(result[0] instanceof InvalidStatement).to.be.true;

		const invalidStatement = result[0] as InvalidStatement;
		expect(invalidStatement.toString(false)).to.equal('x:y(');
	});

	test('partial verb invocation with valid statement before', () => {
		const result = generateAst('x(); x:y(');

		expect(result).to.have.length(2);
		expect(result[0]?.toString(false)).to.equal('x();');
		expect(result[1] instanceof InvalidStatement).to.be.true;

		const invalidStatement = result[1] as InvalidStatement;
		expect(invalidStatement.toString(false)).to.equal('x:y(');
	});

	test('partial verb invocation with valid statement after', () => {
		const result = generateAst('x:y( y();');

		expect(result).to.have.length(2);
		expect(result[1]?.toString(false)).to.equal('y();');
		expect(result[0] instanceof InvalidStatement).to.be.true;

		const invalidStatement = result[0] as InvalidStatement;
		expect(invalidStatement.toString(false)).to.equal('x:y(');
	});

	test('partial verb invocation with valid statements before and after', () => {
		const result = generateAst('x(); x:y( y();');

		expect(result).to.have.length(3);
		expect(result[0]?.toString(false)).to.equal('x();');
		expect(result[2]?.toString(false)).to.equal('y();');
		expect(result[1] instanceof InvalidStatement).to.be.true;

		const invalidStatement = result[1] as InvalidStatement;
		expect(invalidStatement.toString(false)).to.equal('x:y(');
	});

	test('partial verb invocation with valid statements before and after, and another fully valid statement', () => {
		const result = generateAst('x(); a:b( y(); z();');

		expect(result).to.have.length(4);
		expect(result[0]?.toString(false)).to.equal('x();');
		expect(result[2]?.toString(false)).to.equal('y();');
		expect(result[3]?.toString(false)).to.equal('z();');
		expect(result[1] instanceof InvalidStatement).to.be.true;

		const invalidStatement = result[1] as InvalidStatement;
		expect(invalidStatement.toString(false)).to.equal('a:b(');
	});

	test('partial verb invocation with multiple valid statements before and after', () => {
		const result = generateAst('w(); x(); a:b( y(); z();');

		expect(result).to.have.length(5);
		expect(result[0]?.toString(false)).to.equal('w();');
		expect(result[1]?.toString(false)).to.equal('x();');
		expect(result[3]?.toString(false)).to.equal('y();');
		expect(result[4]?.toString(false)).to.equal('z();');
		expect(result[2] instanceof InvalidStatement).to.be.true;

		const invalidStatement = result[2] as InvalidStatement;
		expect(invalidStatement.toString(false)).to.equal('a:b(');
	});
});