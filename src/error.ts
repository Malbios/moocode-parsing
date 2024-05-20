import { SyntaxError } from './ast/listeners';
import { DocumentPosition } from './common';

export class NotImplementedError extends Error {
	public constructor() {
		super('This has not been implemented yet!');
	}
}

export class ArgumentError extends Error {
	public constructor(argumentName: string, position?: DocumentPosition) {
		if (!position) {
			super(`invalid argument: '${argumentName}'`);
		} else {
			super(`invalid argument: '${argumentName}' at ${position.range}`);
		}
	}
}

export class InvalidOperationError extends Error {
	public constructor(message: string) {
		super(message);
	}
}

function syntaxErrorToString(error: SyntaxError): string {
	return `${error.line}:${error.column} ${error.message}`;
}

function codeToString(code: string): string {
	const lines = code.split('\n');
	const result = new Array<string>();

	for (let i = 0; i < lines.length; i++) {
		result.push(`${i + 1}: ${lines[i]}`);
	}

	return result.join('\n');
}

export class ParsingError extends Error {
	public constructor(code: string, errors: SyntaxError[]) {
		super(`= ParsingError ====\n${codeToString(code)}\n\n${errors.map(x => syntaxErrorToString(x)).join('\n')}\n===================`);
	}
}

export class NodeGenerationError extends Error {
	public constructor() {
		super('could not generate expected node');
	}
}