import { ParserRuleContext, Token } from 'antlr4';

import { InvalidOperationError } from './error';

export enum ErrorCode {
	E_NONE,
	E_TYPE,
	E_DIV,
	E_PERM,
	E_PROPNF,
	E_VERBNF,
	E_VARNF,
	E_INVIND,
	E_RECMOVE,
	E_MAXREC,
	E_RANGE,
	E_ARGS,
	E_NACC,
	E_INVARG,
	E_QUOTA,
	E_FLOAT,
	E_FILE,
	E_EXEC,
	E_INTRPT
};

export class ContextPosition {
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
		const start = `${this._start.line}:${this._start.column}`;
		const stopLine = this._stop?.line ?? 0;

		let stopColumn = this._stop?.column ?? 0;
		if (this._stop) {
			stopColumn += this._stop.getInputStream().getText(this._stop.start, this._stop.stop).length;
		}

		const stop = `${stopLine}:${stopColumn}`;

		return `${start} - ${stop}`;
	}

	private constructor(start: Token, stop: Token | undefined) {
		this._start = start;
		this._stop = stop;
	}

	public toString(): string {
		return this.range;
	}

	public static fromContext(context: ParserRuleContext): ContextPosition {
		const start = context.start;
		const stop = context.stop;

		if ((stop?.stop ?? 0) < start.start) {
			throw new InvalidOperationError('stop cannot be before start');
		}

		return new ContextPosition(start, stop);
	}

	public static fromValues(start: Token, stop: Token | undefined): ContextPosition {
		if (start.start < 0) {
			throw new InvalidOperationError('start cannot be negative');
		}

		if ((stop?.stop ?? 0) < 0) {
			throw new InvalidOperationError('stop cannot be negative');
		}

		if ((stop?.stop ?? 0) < start.start) {
			throw new InvalidOperationError('stop cannot be before start');
		}

		return new ContextPosition(start, stop);
	}
}

export function getContextAsText<T extends ParserRuleContext>(context: T): string {
	const input = context.start.getInputStream();
	const stop = context.stop?.stop ?? input.size;

	return input.getText(context.start.start, stop);
}