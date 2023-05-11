abstract class Vehicle {
    abstract move(): void;
}

// ここにCarクラスを定義してください
export class Car extends Vehicle {
    move(): void {
        console.log('move');
    }
    accelerate(): void {
        console.log('accelerate');
    }
}

// ここにBicycleクラスを定義してください
export class Bicycle extends Vehicle {
    move(): void {
        console.log('move');
    }
    pedal(): void {
        console.log('pedal');
    }
}



