// eslint-disable-next-line no-unused-vars
export type Action<T> = (item: T) => void;

// eslint-disable-next-line no-unused-vars
export type Func<T, TResult> = (item: T) => TResult;

// eslint-disable-next-line no-unused-vars
export type NoInputFunc<T> = () => T;

export interface GenericTestData {
    description: string;
    code: string;
}