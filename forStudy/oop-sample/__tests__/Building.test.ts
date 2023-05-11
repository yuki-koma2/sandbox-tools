import { OfficeBuilding, ResidentialBuilding } from "../Building";

describe('Buildingクラスの継承テスト', function () {
    describe('ResidentialBuildingクラスのテスト', function () {
        it('getRentメソッドのテスト', function () {
            const residentialBuilding = new ResidentialBuilding("Tokyo", 100000, 5);
            expect(residentialBuilding.getBasicRent()).toBe(100000);
        });
        it('getRentメソッドのテスト:4階の場合は4倍', function () {
            const residentialBuilding = new ResidentialBuilding("Tokyo", 100000, 5);
            expect(residentialBuilding.getRentByFloor(4)).toBe(400000);
        });
        it('getAddressメソッドのテスト', function () {
            const residentialBuilding = new ResidentialBuilding("Tokyo", 100000, 5);
            expect(residentialBuilding.getAddress()).toBe("Tokyo");
        });
        it('getRoomCountメソッドのテスト', function () {
            const residentialBuilding = new ResidentialBuilding("Tokyo", 100000, 5);
            expect(residentialBuilding.getRoomCount()).toBe(5);
        });
    });
    describe('OfficeBuildingクラスのテスト', function () {
        it('getAddressメソッドのテスト', function () {
            const officeBuilding = new OfficeBuilding("Osaka", 500000, 10);
            expect(officeBuilding.getAddress()).toBe("Osaka");
        });
        it('getRentメソッドのテスト', function () {
            const officeBuilding = new OfficeBuilding("Osaka", 500000, 10);
            expect(officeBuilding.getBasicRent()).toBe(500000);
        });
        it('基本料金＋階数毎の追加料金:10階の場合は基本料金の10%', function () {
            const officeBuilding = new OfficeBuilding("Osaka", 500000, 10);
            expect(officeBuilding.getRentByFloor(10)).toBe(550000);
        });
        it('基本料金＋階数毎の追加料金:7階の場合は基本料金の7%', function () {
            const officeBuilding = new OfficeBuilding("Osaka", 500000, 10);
            expect(officeBuilding.getRentByFloor(7)).toBe(535000);
        });
    });

});
