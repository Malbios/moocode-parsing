import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';

suite('CST tests for optional target values', () => {
	test('should parse optional target', () => {
		const parser = CommonHelpers.getParser('?abc');
		const result = parser.primary_expression();

		ExpectHelpers.expectSyntaxErrors(parser, 0);

		ExpectHelpers.expectOptionalVariable(result, '?abc');
	});
});