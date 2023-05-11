export class ValueHolder implements IValueHolder {
    private _value: number;
    constructor() {
        // ここはなんでも
        this._value = 0;
    }

    get value(): number {
        return this._value;
    }
    set value(newValue: number) {
        this._value = newValue;
    }
}