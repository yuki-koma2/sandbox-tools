export abstract class AbstractValueObject<T> {
    protected readonly _value: T;

    protected constructor(readonly value: T) {
        this._value = value;
    }

    protected abstract isValid(): boolean;
}