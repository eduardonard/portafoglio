import { ipcMain } from 'electron';
import * as fs from 'fs';
import * as fastcsv from 'fast-csv';
import { Transaction } from '../models/Transaction';

export const registerIpcHandlers = () => {
  ipcMain.on('ipc-example', async (event, arg) => {
    const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
    console.log(msgTemplate(arg));
    event.reply('ipc-example', msgTemplate('pong'));
  });

  ipcMain.handle('load-transactions', async () => {
    const filePath = './assets/transactions_list.csv';
    const transactions: Transaction[] = [];

    return new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(fastcsv.parse({ headers: true }))
        .on('data', (row: any) => {
          transactions.push({
            amount: parseFloat(row.Amount),
            date: row.Date,
            category: row["Category Group Name"],
            sub_category: row.Category,
          });
        })
        .on('end', () => {
          resolve(transactions);
        })
        .on('error', reject);
    });
  });
};

