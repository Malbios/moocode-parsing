import { ParserRuleContext, Token } from 'antlr4';

import { InvalidOperationError } from './error';

export class DocumentPosition {
	private _start: Token;
	private _stop: Token | undefined;

	public get start(): number {
		return this._start.start;
	}

	public get stop(): number {
		return this._stop?.stop ?? 0;
	}

	public get startToken(): Token {
		return this._start;
	}

	public get stopToken(): Token | undefined {
		return this._stop;
	}

	public get range(): string {
		return `${this._start.line}:${this._start.column} - ${this._stop?.line ?? 0}:${this._stop?.column ?? 0}`;
	}

	private constructor(start: Token, stop: Token | undefined) {
		this._start = start;
		this._stop = stop;
	}

	public static fromContext(context: ParserRuleContext): DocumentPosition {
		const start = context.start;
		const stop = context.stop;

		if ((stop?.stop ?? 0) < start.start) {
			throw new InvalidOperationError('stop cannot be before start');
		}

		return new DocumentPosition(start, stop);
	}

	public static fromValues(start: Token, stop: Token | undefined): DocumentPosition {
		if (start.start < 0) {
			throw new InvalidOperationError('start cannot be negative');
		}

		if ((stop?.stop ?? 0) < 0) {
			throw new InvalidOperationError('stop cannot be negative');
		}

		if ((stop?.stop ?? 0) < start.start) {
			throw new InvalidOperationError('stop cannot be before start');
		}

		return new DocumentPosition(start, stop);
	}
}

export function getContextAsText<T extends ParserRuleContext>(context: T): string {
	const input = context.start.getInputStream();
	const stop = context.stop?.stop ?? input.size;

	return input.getText(context.start.start, stop);
}