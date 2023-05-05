export class NameHolder implements INameHolder {
    private _name: string;
    constructor() {
        // ここはなんでも
        this._name = '';
    }

    get name(): string {
        return this._name;
    }
    set name(newValue: string) {
        if (newValue[0] !== newValue[0].toUpperCase()) {
            throw new Error('最初の文字が大文字でなければいけない');
        }
        this._name = newValue;
    }
}