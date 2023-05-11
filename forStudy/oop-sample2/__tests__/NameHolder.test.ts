import { NameHolder } from "../NameHolder";

describe('NameHolderの振る舞いテスト', function () {
    test('NameHolder getter and setter', () => {
        const nameHolder = new NameHolder();
        nameHolder.name = 'Alice';
        expect(nameHolder.name).toBe('Alice');

    });
    test('NameHolder getter and setter', () => {
        const nameHolder = new NameHolder();
        expect(() => {
                nameHolder.name = 'alice';
            }
        ).toThrowError('最初の文字が大文字でなければいけない');
    });
});
