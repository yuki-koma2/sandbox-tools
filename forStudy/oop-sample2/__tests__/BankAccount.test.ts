import { BankAccount } from "../BankAccount";

test('BankAccount private, public methods', () => {
    const bankAccount = new BankAccount();
    bankAccount.deposit(1000);
    bankAccount.withdraw(200);
    expect(bankAccount.getBalance()).toBe(800);
});