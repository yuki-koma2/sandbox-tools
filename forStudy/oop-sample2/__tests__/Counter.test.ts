import { Counter } from "../Counter";

describe('Counter', function () {
    test('Counter private, public methods', () => {
        const counter = new Counter();
        counter.increment();
        counter.increment();
        expect(counter.getCount()).toBe(2);
    });
    test('２つのcounter インスタンスを作成しても状態が混在しない', () => {
        const counter1 = new Counter();
        const counter2 = new Counter();
        counter1.increment();
        counter2.increment();
        expect(counter1.getCount()).toBe(1);
        expect(counter2.getCount()).toBe(1);
    });
    test('Counter インスタンスを作成せずにincrementメソッドを呼び出すとエラー', () => {
        // @ts-ignore
        expect(() => Counter.increment()).toThrowError();
    });
    test('Counterに直接countをセットしようとするとエラー', () => {
        const counter = new Counter();
        // @ts-ignore
        expect(() => counter._count = 100).toThrowError();
    });
});
