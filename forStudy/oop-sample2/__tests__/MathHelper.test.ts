import { MathHelper } from "../MathHelper";

test('MathHelper static methods', () => {
    expect(MathHelper.sum(3, 7)).toBe(10);
    expect(MathHelper.product(3, 7)).toBe(21);
});