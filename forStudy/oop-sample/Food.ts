class Food {
    private readonly name: string;
    private readonly price: number;

    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price;
    }
}

// ここにMainDishクラスを定義してください
export class MainDish extends Food {
    constructor(name: string, price: number) {
        super(name, price);
    }

    taste(): string {
        return "delicious";
    }
}

// ここにSideDishクラスを定義してください

export class SideDish extends Food {
    constructor(name: string, price: number) {
        super(name, price);
    }

    isVegetarian(): boolean {
        return true;
    }
}

