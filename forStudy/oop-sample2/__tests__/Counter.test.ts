import { Counter } from "../Counter";

test('Counter private, public methods', () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    expect(counter.getCount()).toBe(2);
});