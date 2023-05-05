import { Car } from "../Car";

describe('Carの振る舞いテスト', function () {

    test('Car private, readonly, constructor, getter, setter', () => {
        const car = new Car('Toyota', 'Red');
        expect(car.brand).toBe('Toyota');
        expect(car.color).toBe('Red');
        car.color = 'Blue';
        expect(car.color).toBe('Blue');
    });
    test('moveメソッドは定義されていない', () => {
        const car = new Car('Toyota', 'Red');
        expect(() => {
            // @ts-ignore
            car.move();
        }).toThrowError('moveメソッドが定義されていない');
    });
});
