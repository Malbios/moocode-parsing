import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for corified verb invocations', () => {
	test('should parse invocation with one argument', () => {
		const parser = CommonHelpers.getParser('$thing(me)');
		const result = parser.expression();

		ExpectHelpers.expectSyntaxErrors(parser, 0);

		const corifiedVerbInvocation = ParsingHelpers.getCorifiedVerbInvocation(result);

		ExpectHelpers.expectCorifiedObject(corifiedVerbInvocation?.corified_value(), '$thing');

		const invocationArguments = corifiedVerbInvocation?._arguments;

		expect(invocationArguments?.expression_list()).to.have.length(1);

		ExpectHelpers.expectIdentifier(invocationArguments?.expression(0), 'me');
	});

	test('should parse invocation with multiple arguments', () => {
		const parser = CommonHelpers.getParser('$thing(me, not)');
		const result = parser.expression();

		ExpectHelpers.expectSyntaxErrors(parser, 0);

		const corifiedVerbInvocation = ParsingHelpers.getCorifiedVerbInvocation(result);

		ExpectHelpers.expectCorifiedObject(corifiedVerbInvocation?.corified_value(), '$thing');

		const invocationArguments = corifiedVerbInvocation?._arguments;

		expect(invocationArguments?.expression_list()).to.have.length(2);

		ExpectHelpers.expectIdentifier(invocationArguments?.expression(0), 'me');
		ExpectHelpers.expectIdentifier(invocationArguments?.expression(1), 'not');
	});

	test('should parse invocation with no arguments', () => {
		const parser = CommonHelpers.getParser('$thing()');
		const result = parser.expression();

		ExpectHelpers.expectSyntaxErrors(parser, 0);

		const corifiedVerbInvocation = ParsingHelpers.getCorifiedVerbInvocation(result);

		ExpectHelpers.expectCorifiedObject(corifiedVerbInvocation?.corified_value(), '$thing');

		expect(corifiedVerbInvocation?._arguments).to.not.exist;
	});
});