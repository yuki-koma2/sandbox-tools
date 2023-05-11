import { Circle } from "../Circle";

test('Circle private, readonly, constructor, getter', () => {
    const circle = new Circle(5);
    expect(circle.radius).toBe(5);
    expect(circle.area).toBeCloseTo(78.54, 2);
});