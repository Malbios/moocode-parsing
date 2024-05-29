import { ParserRuleContext, TerminalNode, Token } from 'antlr4';


export enum ErrorCode {
	ANY,
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
	private static _default = new ContextPosition(new Token(), undefined);

	private _start: Token | undefined;
	private _stop: Token | undefined;

	public get start() {
		return this._start?.start ?? -1;
	}

	public get stop() {
		return this._stop?.stop ?? -1;
	}

	public get startToken() {
		return this._start;
	}

	public get stopToken() {
		return this._stop;
	}

	public get range(): string {
		const start = `${this._start?.line ?? -1}:${this._start?.column ?? -1}`;
		const stopLine = this._stop?.line ?? -1;

		let stopColumn = this._stop?.column ?? -1;
		if (this._stop) {
			stopColumn += this._stop.getInputStream().getText(this._stop.start, this._stop.stop).length;
		}

		const stop = `${stopLine}:${stopColumn}`;

		return `${start} - ${stop}`;
	}

	private constructor(start: Token | undefined, stop: Token | undefined) {
		this._start = start;
		this._stop = stop;
	}

	public toString(): string {
		return this.range;
	}

	public static get default() {
		return ContextPosition._default;
	}

	public static fromContext(context: ParserRuleContext): ContextPosition {
		const start = context.start;
		const stop = context.stop;

		return new ContextPosition(start, stop);
	}

	public static fromValues(start: Token | undefined, stop: Token | undefined): ContextPosition {
		return new ContextPosition(start, stop);
	}
}

export function getContextAsText<T extends ParserRuleContext>(context: T | undefined): string {
	if (!context) {
		return '';
	}

	const input = context.start.getInputStream();
	const stop = context.stop?.stop ?? input.size;

	return input.getText(context.start.start, stop);
}

export function is(context: ParserRuleContext | undefined, tokenType: number): boolean {
	const terminalNode = context as unknown as TerminalNode;
	if (!terminalNode) {
		return false;
	}

	return terminalNode.symbol.type == tokenType;
}