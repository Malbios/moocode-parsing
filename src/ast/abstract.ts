import { ParseTree } from 'antlr4';

import MoocodeParserVisitor from '../grammar/generated/MoocodeParserVisitor';

import { ArgumentError } from '../error';
import { DocumentPosition } from './../common';

export abstract class BaseNode {
	private _position: DocumentPosition;

	public get position(): DocumentPosition {
		return this._position;
	}

	public constructor(position: DocumentPosition) {
		if (!position) {
			throw new ArgumentError('position');
		}

		this._position = position;
	}
}

export abstract class LiteralNode<T> extends BaseNode {
	private _value: T;

	public get value(): T {
		return this._value;
	}

	public constructor(position: DocumentPosition, value: T) {
		super(position);

		this._value = value;
	}

	public toString(): string {
		return JSON.stringify(this._value);
	}
}

export abstract class ReferenceNode extends BaseNode {
	private _name: string;

	public get name(): string {
		return this._name;
	}

	public constructor(position: DocumentPosition, name: string) {
		super(position);

		if (!name) {
			throw new ArgumentError('name', position);
		}

		this._name = name;
	}

	public toString(): string {
		return this._name.toString();
	}
}

export abstract class SingleValueVisitor<T> extends MoocodeParserVisitor<T> {
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