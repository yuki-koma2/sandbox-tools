// このクラスは、privateプロパティ_balanceとpublicメソッドdeposit、withdraw、およびgetBalanceを持ちます。
// また、privateメソッドupdateBalanceを作成し、入金および出金処理を行います。
export class BankAccount implements IBankAccount {
    private _balance: number;
    constructor() {
        this._balance = 0;
    }

    deposit(amount: number): void {
        this.updateBalance(amount);
    }
    withdraw(amount: number): void {
        this.updateBalance(-amount);
    }
    getBalance(): number {
        return this._balance;
    }

    private updateBalance(amount: number): void {
        this._balance += amount;
    }
}