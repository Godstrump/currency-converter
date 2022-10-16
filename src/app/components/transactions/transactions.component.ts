import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from '../../models/transactions.model';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent implements OnInit {
  displayedColumns: string[] = [
    'ID',
    'From',
    'To',
    'Amount',
    'Currency',
    'CreatedAt',
    'UpdatedAt',
  ];
  transactions: Transaction[] = [
    {
      ID: '1',
      From: 'Godbless',
      To: 'Jennifer',
      Amount: 1.0079,
      Currency: 'NGN',
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
    },
    {
      ID: '2',
      From: 'Godbless',
      To: 'Jennifer',
      Amount: 4.0026,
      Currency: 'USD',
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
    },
    {
      ID: '3',
      From: 'Godbless',
      To: 'Esther',
      Amount: 6.941,
      Currency: 'GBP',
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
    },
    {
      ID: '4',
      From: 'Godbless',
      To: 'Precious',
      Amount: 9.0122,
      Currency: 'USD',
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
    },
    {
      ID: '5',
      From: 'Godbless',
      To: 'Stanley',
      Amount: 10.811,
      Currency: 'GBP',
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
    },
  ];
  dataSource = this.transactions;

  constructor() {}

  ngOnInit(): void {}
}
