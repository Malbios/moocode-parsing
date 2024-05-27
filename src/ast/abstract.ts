

import { ParseTree } from 'antlr4';
import MoocodeParserVisitor from '../grammar/generated/MoocodeParserVisitor';
import { ContextPosition } from './common';
import { ArgumentError, InvalidOperationError, NotImplementedError } from './error';

export abstract class BaseNode {
	protected _position: ContextPosition;

	public get position() {
		return this._position;
	}

	public constructor(position: ContextPosition) {
		if (!position) {
			throw new ArgumentError('position');
		}

		this._position = position;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return this.position.range;
	}
}

export abstract class LiteralNode<T> extends BaseNode {
	private _valueText: string | undefined;

	protected _value: T | undefined;

	public get value() {
		return this._value;
	}

	public constructor(position: ContextPosition, value: T, valueText: string | undefined) {
		super(position);

		this._valueText = valueText;

		this._value = value;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return this._valueText ?? '';
	}
}

export abstract class ReferenceNode extends BaseNode {
	protected _name: string | undefined;

	public get name() {
		return this._name;
	}

	public constructor(position: ContextPosition, name: string | undefined) {
		super(position);

		this._name = name;
	}

	public toString(): string {
		throw NotImplementedError.new();
	}
}

export abstract class TwoPartNode<T extends BaseNode> extends BaseNode {
	protected _separator = '';

	protected _left: T | undefined;
	protected _right: T | undefined;

	public get left() {
		return this._left;
	}

	public get right() {
		return this._right;
	}

	public constructor(position: ContextPosition, left: T | undefined, right: T | undefined) {
		super(position);

		this._left = left;
		this._right = right;
	}

	public toString(lineInfo = true): string {
		return `${this._left?.toString(lineInfo)} ${this._separator} ${this._right?.toString(lineInfo)}`;
	}
}

export abstract class WrappedNode<T extends BaseNode> extends BaseNode {
	protected _value: T | undefined;

	public get value() {
		return this._value;
	}

	public constructor(position: ContextPosition, value: T | undefined) {
		super(position);

		this._value = value;
	}

	public toString(): string {
		throw NotImplementedError.new();
	}
}

export class FlowControlStatementNode<T extends BaseNode> extends BaseNode {
	protected _depth: number;

	private _value: T | undefined;

	public get value() {
		return this._value;
	}

	public constructor(depth: number, position: ContextPosition, value?: T | undefined) {
		super(position);

		this._depth = depth;

		this._value = value;
	}

	public toString(lineInfo = true): string {
		const base = lineInfo ? ` (${super.toString()})` : '';

		let value = '';
		if (this._value) {
			value = ` ${this._value.toString()}`;
		}

		return `${value};${base}`;
	}
}

export abstract class MoocodeVisitor<T extends BaseNode> extends MoocodeParserVisitor<T | undefined> {
	public override visit(tree: ParseTree): T | undefined {
		const result = super.visit(tree);

		if (!Array.isArray(result)) {
			return result;
		}

		if (result.length < 2) {
			return result.at(0) as (T | undefined);
		}

		if (result.length === 2 && result.at(1) === undefined) {
			return result.at(0) as (T | undefined);
		}

		throw new InvalidOperationError('unexpected visitor result');
	}
}