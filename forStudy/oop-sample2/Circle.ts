export class Circle implements ICircle {
    private readonly _radius: number;
    constructor(radius:number) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    get area() {
        return this._radius * this._radius * Math.PI;
    }
}