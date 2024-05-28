import { Expression, InvalidStatementNode, Statement } from './ast/nodes';

export type Action<T> = (item: T) => void;

export type Func<T, TResult> = (item: T) => TResult;

export interface SyntaxError {
	line: number;
	column: number;
	message: string;
}

export interface Ast {
	valid: Statement[];
	invalid: InvalidStatementNode[];
	lexerErrors: SyntaxError[];
	parserErrors: SyntaxError[];
}

export interface ParsedExpression {
	expression: Expression | undefined;
	lexerErrors: SyntaxError[];
	parserErrors: SyntaxError[];
}