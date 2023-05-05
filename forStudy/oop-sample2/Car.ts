export class Car implements ICar {
    private readonly _brand: string;
    private _color: string;

    constructor(brand:string, color:string) {
        this._brand = brand;
        this._color = color;
    }
    get brand() {
        return this._brand;
    }
    get color() {
        return this._color;
    }
    set color(newValue) {
        this._color = newValue;
    }
}