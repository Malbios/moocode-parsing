import { ParseTree } from 'antlr4';

import MoocodeParserVisitor from '../grammar/generated/MoocodeParserVisitor';

import { ContextPosition } from './common';
import { ArgumentError, NotImplementedError } from './error';

export abstract class BaseNode {
	protected _position: ContextPosition;

	public get position(): ContextPosition {
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
	private _valueText: string;

	protected _value: T;

	public get value(): T {
		return this._value;
	}

	public constructor(position: ContextPosition, value: T, valueText: string) {
		super(position);

		this._valueText = valueText;

		this._value = value;
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	public toString(lineInfo = true): string {
		return this._valueText;
	}
}

export abstract class ReferenceNode extends BaseNode {
	protected _name: string;

	public get name(): string {
		return this._name;
	}

	public constructor(position: ContextPosition, name: string) {
		super(position);

		if (!name) {
			throw new ArgumentError('name', position);
		}

		this._name = name;
	}

	public toString(): string {
		throw NotImplementedError.new();
	}
}

export abstract class TwoPartNode<T extends BaseNode> extends BaseNode {
	protected _separator = '';

	protected _left: T;
	protected _right: T;

	public constructor(position: ContextPosition, left: T, right: T) {
		super(position);

		this._left = left;
		this._right = right;
	}

	public toString(lineInfo = true): string {
		return `${this._left.toString(lineInfo)} ${this._separator} ${this._right.toString(lineInfo)}`;
	}
}

export abstract class WrappedNode<T extends BaseNode> extends BaseNode {
	protected _value: T;

	public get value(): T {
		return this._value;
	}

	public constructor(position: ContextPosition, value: T) {
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

	public get value(): T | undefined {
		return this._value;
	}

	public constructor(depth: number, position: ContextPosition, value?: T) {
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

export abstract class SingleValueVisitor<T extends BaseNode> extends MoocodeParserVisitor<T> {
	public override visit(tree: ParseTree): T {
		const result = super.visit(tree);

		if (!Array.isArray(result)) {
			return result;
		}

		const resultArray = result as T[];
		const actualResult = resultArray.at(0);

		return actualResult as T;
	}
}