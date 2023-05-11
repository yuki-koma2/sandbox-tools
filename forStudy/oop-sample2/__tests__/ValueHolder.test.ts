import { ValueHolder } from "../ValueHolder";
describe('ValueHolderの振る舞い', () => {
    test('ValueHolder getter and setter', () => {
        const valueHolder = new ValueHolder();
        valueHolder.value = 10;
        expect(valueHolder.value).toBe(10);
    });
});

