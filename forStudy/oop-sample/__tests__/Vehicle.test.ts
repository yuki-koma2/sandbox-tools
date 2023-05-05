import { Bicycle, Car } from "../Vehicle";

describe('Vehicleクラスの継承テスト', function () {
    describe('Carクラスのテスト', function () {
        it('accelerateメソッドのテスト', function () {
            const car = new Car();
            expect(car.accelerate).toBeDefined()
        });
        it('moveメソッドのテスト', function () {
            const car = new Car();
            expect(car.move).toBeDefined()
        });
    });
    describe('Bicycleクラスのテスト', function () {
        it('pedalメソッドのテスト', function () {
            const bicycle = new Bicycle();
            expect(bicycle.pedal).toBeDefined()
        });
        it('moveメソッドのテスト', function () {
            const bicycle = new Bicycle();
            expect(bicycle.move).toBeDefined()
        });
    });

});