import { Transaction } from '../../../main/models/Transaction';


// Define the Wallet class that holds the transactions
class Wallet {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
    this.loadTransactions();
  }

  // Method to load transactions from the CSV file
  async loadTransactions(): Promise<void> {
    const transactions = await window.electron.walletAPI.loadTransactions();
    console.log('Transactions loaded:', transactions);

    this.transactions = transactions;
  }

  getBalance(): number {
    return Math.round(this.transactions.reduce((acc, transaction) => {
      return acc + transaction.amount;
    }, 0) * 100) / 100;
  }

  // Add a transaction to the wallet
  addTransaction(transaction: Transaction): void {
    this.transactions.push(transaction);
  }

  // Get all transactions from the wallet
  getTransactions(): Transaction[] {
    return this.transactions;
  }

  // Optional: Print all transactions in a readable format
  printTransactions(): void {
    console.log('Transactions in Wallet:');
    this.transactions.forEach((transaction, index) => {
      console.log(`${index + 1}. ${transaction.date} | ${transaction.sub_category} | $${transaction.amount}`);
    });
  }
}

// Example of creating a new wallet and loading transactions from a CSV file
export const myWallet = new Wallet();

