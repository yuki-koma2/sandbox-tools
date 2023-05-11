// 次のinterfaceに従って、クラスBankAccountを作成してください。このクラスは、privateプロパティ_balanceとpublicメソッドdeposit、withdraw、およびgetBalanceを持ちます。また、privateメソッドupdateBalanceを作成し、入金および出金処理を行います。
interface IBankAccount {
    deposit(amount: number): void;
    withdraw(amount: number): void;
    getBalance(): number;
}
