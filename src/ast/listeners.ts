import { ErrorListener, RecognitionException, Recognizer, Token } from 'antlr4';

export interface SyntaxError {
	offendingSymbol: Token;
	line: number;
	column: number;
	message: string;
	error: RecognitionException | undefined;
}

export class SyntaxErrorListener extends ErrorListener<Token> {
	private _errors = new Array<SyntaxError>();

	public get errors(): SyntaxError[] {
		return this._errors;
	}

	public syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
		this._errors.push({ offendingSymbol: offendingSymbol, line: line, column: column, message: msg, error: e });
	}
}