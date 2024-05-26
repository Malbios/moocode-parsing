import { expect } from 'chai';
import { suite, test } from 'mocha';

import CommonHelpers from '../../test-utils/common';
import ExpectHelpers from '../../test-utils/expectations';
import ParsingHelpers from '../../test-utils/parsing';

suite('CST tests for fork statements', () => {
    test('should parse a fork statement', () => {
        const code = `
fork (1)
    return "yep";
endfork
`;
        const parser = CommonHelpers.getParser(code);
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const forkStatement = ParsingHelpers.getForkStatement(result);

        ExpectHelpers.expectInteger(forkStatement?._schedule, '1');

        const forkedStatements = forkStatement?.statements();

        expect(forkedStatements?.statement_list()).to.have.length(1);

        const returnStatement = ParsingHelpers.getNonEmptyReturn(forkedStatements?.statement(0));

        ExpectHelpers.expectString(returnStatement, '"yep"');
    });

    test('should parse a fork statement with multiple forked statements', () => {
        const code = `
fork (56.3)
    return "1";
    return "2";
    return "3";
endfork
`;
        const parser = CommonHelpers.getParser(code);
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const forkStatement = ParsingHelpers.getForkStatement(result);

        ExpectHelpers.expectFloat(forkStatement?._schedule, '56.3');

        const forkedStatements = forkStatement?.statements().statement_list();

        expect(forkedStatements).to.have.length(3);

        const returnStatement1 = ParsingHelpers.getNonEmptyReturn(forkedStatements?.at(0));

        ExpectHelpers.expectString(returnStatement1, '"1"');

        const returnStatement2 = ParsingHelpers.getNonEmptyReturn(forkedStatements?.at(1));

        ExpectHelpers.expectString(returnStatement2, '"2"');

        const returnStatement3 = ParsingHelpers.getNonEmptyReturn(forkedStatements?.at(2));

        ExpectHelpers.expectString(returnStatement3, '"3"');
    });
});