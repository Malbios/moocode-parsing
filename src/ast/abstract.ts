import { ParseTree, ParserRuleContext } from 'antlr4';

import MoocodeParserVisitor from '../grammar/generated/MoocodeParserVisitor';

import { DocumentPosition } from './common';
import { ArgumentError } from './error';

export abstract class BaseNode {
	protected _position: DocumentPosition;

	public get position(): DocumentPosition {
		return this._position;
	}

	public constructor(position: DocumentPosition) {
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

	public constructor(position: DocumentPosition, value: T) {
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

	public constructor(position: DocumentPosition, name: string) {
		super(position);

		if (!name) {
			throw new ArgumentError('name', position);
		}

		this._name = name;
	}
}

export abstract class TwoPartNode extends BaseNode {
	protected _left: BaseNode;
	protected _right: BaseNode;

	public left(): BaseNode {
		return this._left;
	}

	public right(): BaseNode {
		return this._right;
	}

	public constructor(context: ParserRuleContext, left: BaseNode, right: BaseNode) {
		super(DocumentPosition.fromContext(context));

		this._left = left;
		this._right = right;
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