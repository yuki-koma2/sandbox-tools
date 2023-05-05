import { StaticCalculator } from "../StaticCalculator";

test('StaticCalculator static methods', () => {
    expect(StaticCalculator.add(2, 3)).toBe(5);
    expect(StaticCalculator.multiply(2, 3)).toBe(6);
});