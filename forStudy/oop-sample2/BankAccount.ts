export class BankAccount implements IBankAccount {

    private _balance: number;

    constructor() {
        this._balance = 0;
    }
    
    deposit(amount: number): void {
        this._balance += amount;
    }

    withdraw(amount: number): void {
        this._balance -= amount;
    }

    getBalance(): number {
        return this._balance;
    }
}