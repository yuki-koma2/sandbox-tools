import { MainDish, SideDish } from "../Food";

describe('foodを継承したクラスのテスト', function () {
    describe('MainDishクラスのテスト', function () {
        it('tasteメソッドのテスト', function () {
            const mainDish = new MainDish("Steak", 2000);
            expect(mainDish.taste()).toBe("delicious");
        });
        it('getPriceメソッドのテスト', function () {
            const mainDish = new MainDish("Steak", 2000);
            expect(mainDish.getPrice()).toBe(2000);
        });

    });
    describe('SideDishクラスのテスト', function () {
        it('isVegetarianメソッドのテスト', function () {
            const sideDish = new SideDish("Salad", 500);
            expect(sideDish.isVegetarian()).toBe(true);
        });
        it('getPriceメソッドのテスト', function () {
            const sideDish = new SideDish("Salad", 500);
            expect(sideDish.getPrice()).toBe(500);
        });

    });
});