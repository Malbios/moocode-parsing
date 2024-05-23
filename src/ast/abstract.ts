import { ParseTree } from 'antlr4';

import MoocodeParserVisitor from '../grammar/generated/MoocodeParserVisitor';

import { ContextPosition } from './common';
import { ArgumentError } from './error';

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

	public toString(): string {
		return this.position.range;
	}
}

export abstract class LiteralNode<T> extends BaseNode {
	protected _value: T;

	public get value(): T {
		return this._value;
	}

	public constructor(position: ContextPosition, value: T) {
		super(position);

		this._value = value;
	}

	public toString(): string {
		return `${JSON.stringify(this._value)}`;
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
}

export abstract class TwoPartNode<T1 extends BaseNode, T2 extends BaseNode> extends BaseNode {
	protected _left: T1;
	protected _right: T2;

	public left(): T1 {
		return this._left;
	}

	public right(): T2 {
		return this._right;
	}

	public constructor(position: ContextPosition, left: T1, right: T2) {
		super(position);

		this._left = left;
		this._right = right;
	}
}

export abstract class WrappedNode<T extends BaseNode> extends BaseNode {
	protected _value: T;

	public value(): T {
		return this._value;
	}

	public constructor(position: ContextPosition, value: T) {
		super(position);

		this._value = value;
	}
}

export class FlowControlStatementNode<T extends BaseNode> extends BaseNode {
	private _value: T | undefined;

	public get value(): T | undefined {
		return this._value;
	}

	public constructor(position: ContextPosition, value?: T) {
		super(position);

		this._value = value;
	}

	public toString(): string {
		const base = super.toString();

		let value = '';
		if (this._value) {
			value = ` ${this._value.toString()}`;
		}

		return `${value}; (${base})`;
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