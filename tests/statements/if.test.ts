import { suite, test } from 'mocha';
import { expect } from 'chai';

import CommonHelpers from '../test-utils/common';
import ExpectHelpers from '../test-utils/expectations';
import ParsingHelpers from '../test-utils/parsing';

suite('if statement tests', () => {
    test('should parse an if statement', () => {
        const code = `
if (1)
    return 2;
endif
`;
        const parser = CommonHelpers.getParser(code);
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const ifStatement = ParsingHelpers.getIfStatement(result);

        ExpectHelpers.expectInteger(ifStatement?._conditions, '1');

        expect(ifStatement?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(ifStatement?._body.statement(0));
        ExpectHelpers.expectInteger(ifStatement?._body.statement(0), '2');

        expect(ifStatement?.elseif_list()).to.have.length(0);

        expect(ifStatement?.else_()).not.to.exist;
    });

    test('should parse an if else statement', () => {
        const code = `
if (1)
    return 2;
else
    return 3;
endif
`;
        const parser = CommonHelpers.getParser(code);
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const ifStatement = ParsingHelpers.getIfStatement(result);

        ExpectHelpers.expectInteger(ifStatement?._conditions, '1');

        expect(ifStatement?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(ifStatement?._body.statement(0));
        ExpectHelpers.expectInteger(ifStatement?._body.statement(0), '2');

        expect(ifStatement?.elseif_list()).to.have.length(0);

        expect(ifStatement?.else_()._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(ifStatement?.else_()._body.statement(0));
        ExpectHelpers.expectInteger(ifStatement?.else_()._body.statement(0), '3');
    });

    test('should parse an if elseif statement', () => {
        const code = `
if (1)
    return 2;
elseif (3)
    return 4;
endif
`;
        const parser = CommonHelpers.getParser(code);
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const ifStatement = ParsingHelpers.getIfStatement(result);

        ExpectHelpers.expectInteger(ifStatement?._conditions, '1');

        expect(ifStatement?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(ifStatement?._body.statement(0));
        ExpectHelpers.expectInteger(ifStatement?._body.statement(0), '2');

        expect(ifStatement?.elseif_list()).to.have.length(1);

        const firstElseIf = ifStatement?.elseif(0);

        ExpectHelpers.expectInteger(firstElseIf?._conditions, '3');

        expect(firstElseIf?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(firstElseIf?._body.statement(0));
        ExpectHelpers.expectInteger(firstElseIf?._body.statement(0), '4');

        expect(ifStatement?.else_()).not.to.exist;
    });

    test('should parse an if elseif else statement', () => {
        const code = `
if (1)
    return 2;
elseif (3)
    return 4;
else
    return 5;
endif
`;
        const parser = CommonHelpers.getParser(code);
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const ifStatement = ParsingHelpers.getIfStatement(result);

        ExpectHelpers.expectInteger(ifStatement?._conditions, '1');

        expect(ifStatement?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(ifStatement?._body.statement(0));
        ExpectHelpers.expectInteger(ifStatement?._body.statement(0), '2');

        expect(ifStatement?.elseif_list()).to.have.length(1);

        const firstElseIf = ifStatement?.elseif(0);

        ExpectHelpers.expectInteger(firstElseIf?._conditions, '3');

        expect(firstElseIf?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(firstElseIf?._body.statement(0));
        ExpectHelpers.expectInteger(firstElseIf?._body.statement(0), '4');

        expect(ifStatement?.else_()._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(ifStatement?.else_()._body.statement(0));
        ExpectHelpers.expectInteger(ifStatement?.else_()._body.statement(0), '5');
    });

    test('should parse an if elseif elseif else statement', () => {
        const code = `
if (1)
    return 2;
elseif (3)
    return 4;
elseif (5)
    return 6;
else
    return 7;
endif
`;
        const parser = CommonHelpers.getParser(code);
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const ifStatement = ParsingHelpers.getIfStatement(result);

        ExpectHelpers.expectInteger(ifStatement?._conditions, '1');

        expect(ifStatement?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(ifStatement?._body.statement(0));
        ExpectHelpers.expectInteger(ifStatement?._body.statement(0), '2');

        expect(ifStatement?.elseif_list()).to.have.length(2);

        const firstElseIf = ifStatement?.elseif(0);

        ExpectHelpers.expectInteger(firstElseIf?._conditions, '3');

        expect(firstElseIf?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(firstElseIf?._body.statement(0));
        ExpectHelpers.expectInteger(firstElseIf?._body.statement(0), '4');

        const secondElseIf = ifStatement?.elseif(1);

        ExpectHelpers.expectInteger(secondElseIf?._conditions, '5');

        expect(secondElseIf?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(secondElseIf?._body.statement(0));
        ExpectHelpers.expectInteger(secondElseIf?._body.statement(0), '6');

        expect(ifStatement?.else_()._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectNonEmptyReturn(ifStatement?.else_()._body.statement(0));
        ExpectHelpers.expectInteger(ifStatement?.else_()._body.statement(0), '7');
    });

    test('should parse a multiline if statement', () => {
        const code = `
if (true)
    return;
    return;
    return;
endif
`;

        const parser = CommonHelpers.getParser(code);
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const ifStatement = ParsingHelpers.getIfStatement(result);

        ExpectHelpers.expectBool(ifStatement?._conditions, 'true');

        expect(ifStatement?._body.statement_list()).to.have.length(3);

        ExpectHelpers.expectEmptyReturn(ifStatement?._body.statement(0));
        ExpectHelpers.expectEmptyReturn(ifStatement?._body.statement(1));
        ExpectHelpers.expectEmptyReturn(ifStatement?._body.statement(2));

        expect(ifStatement?.elseif_list()).to.have.length(0);

        expect(ifStatement?.else_()).not.to.exist;
    });

    test('should parse a nested if statement', () => {
        const code = `
if (true)
    if (false)
        return;
    endif
endif
`;

        const parser = CommonHelpers.getParser(code);
        const result = parser.statement();

        ExpectHelpers.expectSyntaxErrors(parser, 0);

        const ifStatement = ParsingHelpers.getIfStatement(result);

        ExpectHelpers.expectBool(ifStatement?._conditions, 'true');

        expect(ifStatement?._body.statement_list()).to.have.length(1);

        const innerIfStatement = ParsingHelpers.getIfStatement(ifStatement?._body.statement(0));

        ExpectHelpers.expectBool(innerIfStatement?._conditions, 'false');

        expect(innerIfStatement?._body.statement_list()).to.have.length(1);

        ExpectHelpers.expectEmptyReturn(innerIfStatement?._body.statement(0));

        expect(innerIfStatement?.elseif_list()).to.have.length(0);

        expect(innerIfStatement?.else_()).not.to.exist;

        expect(ifStatement?.elseif_list()).to.have.length(0);

        expect(ifStatement?.else_()).not.to.exist;
    });
});