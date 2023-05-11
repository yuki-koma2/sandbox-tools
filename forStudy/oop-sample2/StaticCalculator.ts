export class StaticCalculator implements IStaticCalculator {
    static add(a:number, b:number) {
        return a + b;
    }
    static multiply(a:number, b:number) {
        return a * b;
    }
}