import { DefaultErrorStrategy, ErrorListener, Parser, ParserRuleContext, RecognitionException, Recognizer, Token } from 'antlr4';
import { SyntaxError as ISyntaxError } from '../interfaces';
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

export class SyntaxError implements ISyntaxError {
	private _line: number;
	private _column: number;
	private _message: string;

	public get line() {
		return this._line;
	}

	public get column() {
		return this._column;
	}

	public get message() {
		return this._message;
	}

	public constructor(line: number, column: number, message: string) {
		this._line = line;
		this._column = column;
		this._message = message;
	}

	public toString(): string {
		return `${this._line}:${this._column} ${this._message}`;
	}
}

export class ParserErrorListener extends ErrorListener<Token> {
	private _errors = new Array<SyntaxError>();

	public get errors() {
		return this._errors;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
		this._errors.push(new SyntaxError(line, column, msg));
	}
}

export class LexerErrorListener extends ErrorListener<number> {
	private _errors = new Array<SyntaxError>();

	public get errors() {
		return this._errors;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public syntaxError(recognizer: Recognizer<number>, offendingSymbol: number, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
		this._errors.push(new SyntaxError(line, column, msg));
	}
}

export class MergedContext extends ParserRuleContext {
	public constructor(contexts: ParserRuleContext[]) {
		if (contexts.length < 1) {
			throw new InvalidOperationError('cannot create merged context from no contexts');
		}

		super(undefined, contexts[0].invokingState);

		this.children = contexts;
	}

	public getText(): string {
		const firstChild = this.children?.at(0) as ParserRuleContext;
		const lastChild = this.children?.at(this.children.length - 1) as ParserRuleContext;

		const inputStream = firstChild?.start.getInputStream();
		if (!inputStream) {
			return '';
		}

		const stop = lastChild.stop?.stop ?? inputStream.size;

		return inputStream.getText(firstChild.start.start, stop);
	}
}

export class CustomErrorStrategy extends DefaultErrorStrategy {
	getMissingSymbol(recognizer: Parser): Token {
		return recognizer.getCurrentToken();
	}
}