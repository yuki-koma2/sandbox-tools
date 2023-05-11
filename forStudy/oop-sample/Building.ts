class Building {
    private readonly address: string;
    private readonly avrRent: number;
    constructor( address: string, rent: number) {
        this.address = address;
        this.avrRent = rent;
    }


    getAddress(): string {
        return this.address;
    }

    getBasicRent(): number {
        return this.avrRent;
    }

    getRentByFloor(floor: number): number {
        return this.getBasicRent() * floor;
    }
}

// ここにResidentialBuildingクラスを定義してください

export class ResidentialBuilding extends Building {
    private readonly roomCount: number;
    constructor(address: string, rent: number, roomCount: number) {
        super(address, rent);
        this.roomCount = roomCount;
    }

    getRoomCount(): number {
        return this.roomCount;
    }
}

// ここにOfficeBuildingクラスを定義してください
export class OfficeBuilding extends Building {
    floor: number;

    constructor(address: string, rent: number,floor: number) {
        super(address, rent);
        this.floor = floor;
    }


    override getRentByFloor(floor: number): number {
        return this.getBasicRent() * (1 + floor / 100);
    }
}