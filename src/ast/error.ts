import { ErrorListener, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4';
import { ContextPosition, getContextAsText } from './common';

export class NotImplementedError extends Error {
	private constructor(context?: ParserRuleContext, description?: string) {
		let message = 'This has not (yet) been implemented!';

		if (description) {
			message = `${message}\n${description}`;
		}

		if (context) {
			message = `${message}\n${getContextAsText(context)}`;
		}

		super(message);
	}

	public static new(): NotImplementedError {
		return new NotImplementedError();
	}

	public static withContext(context: ParserRuleContext): NotImplementedError {
		return new NotImplementedError(context);
	}

	public static withDescription(description: string): NotImplementedError {
		return new NotImplementedError(undefined, description);
	}

	public static withContextAndDescription(context: ParserRuleContext, description: string): NotImplementedError {
		return new NotImplementedError(context, description);
	}
}

export class ArgumentError extends Error {
	public constructor(argumentName: string, position?: ContextPosition) {
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

export class NodeGenerationError extends Error {
	private constructor(message: string) {
		super(message);
	}

	public static fromContext(context: ParserRuleContext) {
		const position = ContextPosition.fromContext(context);
		const code = context.start.getInputStream().getText(position.start, position.stop);

		return new NodeGenerationError(`could not generate a node from '${nameOf(context)}':\n${position.range}: ${code}`);
	}
}

function nameOf(object: object): string {
	return object?.constructor?.name ?? '<unknown>';
}

export class SyntaxError<T> {
	private _offendingSymbol: T;
	private _line: number;
	private _column: number;
	private _message: string;
	private _error: RecognitionException | undefined;

	public constructor(offendingSymbol: T, line: number, column: number, message: string, error?: RecognitionException) {
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

export class ParserErrorListener extends ErrorListener<Token> {
	private _errors = new Array<SyntaxError<Token>>();

	public get errors() {
		return this._errors;
	}

	public syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
		this._errors.push(new SyntaxError(offendingSymbol, line, column, msg, e));
	}
}

export class LexerErrorListener extends ErrorListener<number> {
	private _errors = new Array<SyntaxError<number>>();

	public get errors() {
		return this._errors;
	}

	public syntaxError(recognizer: Recognizer<number>, offendingSymbol: number, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
		this._errors.push(new SyntaxError(offendingSymbol, line, column, msg, e));
	}
}

export class ContextWithError extends ParserRuleContext {
	private _contexts: ParserRuleContext[] = [];

	public get position(): ContextPosition {
		if (this._contexts.length < 1) {
			return ContextPosition.default;
		}

		return ContextPosition.fromValues(this._contexts[0].start, this._contexts[this._contexts.length - 1].stop);
	}

	public get text(): string {
		return this._contexts[0].start.getInputStream().getText(this.position.start, this.position.stop);
	}

	public add(context: ParserRuleContext) {
		this._contexts.push(context);
	}
}