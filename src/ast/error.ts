import { ErrorListener, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4';
import { DocumentPosition } from './common';

export class NotImplementedError extends Error {
	public constructor(description: string) {
		super(`This has not (yet) been implemented: ${description}`);
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

export class ParsingError extends Error {
	public constructor(code: string, errors: SyntaxError[]) {
		super(`${codeToString(code)}\n\n${errors.map(x => x.toString()).join('\n')}`);
	}
}

function codeToString(code: string): string {
	const lines = code.split('\n');
	const result = new Array<string>();

	for (let i = 0; i < lines.length; i++) {
		result.push(`${i + 1}: ${lines[i]}`);
	}

	return result.join('\n');
}

export class NodeGenerationError extends Error {
	private constructor(message: string) {
		super(message);
	}

	public static fromContext(context: ParserRuleContext) {
		const position = DocumentPosition.fromContext(context);
		const code = context.start.getInputStream().getText(position.start, position.stop);

		return new NodeGenerationError(`could not generate a node from '${nameOf(context)}':\n${position.range}: ${code}`);
	}
}

function nameOf(object: object): string {
	return object?.constructor?.name ?? '<unknown>';
}

export class SyntaxError {
	private _offendingSymbol: Token;
	private _line: number;
	private _column: number;
	private _message: string;
	private _error: RecognitionException | undefined;

	public constructor(offendingSymbol: Token, line: number, column: number, message: string, error?: RecognitionException) {
		this._offendingSymbol = offendingSymbol;
		this._line = line;
		this._column = column;
		this._message = message;
		this._error = error;
	}

	public toString(): string {
		return `${this._line}:${this._column} ${this._message}`;
	}
}

export class SyntaxErrorListener extends ErrorListener<Token> {
	private _errors = new Array<SyntaxError>();

	public get errors(): SyntaxError[] {
		return this._errors;
	}

	public syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
		this._errors.push(new SyntaxError(offendingSymbol, line, column, msg, e));
	}
}