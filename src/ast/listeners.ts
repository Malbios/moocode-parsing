import { ErrorListener, RecognitionException, Recognizer, Token } from 'antlr4';

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