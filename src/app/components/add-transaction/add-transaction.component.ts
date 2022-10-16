import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { Currency, Wallet } from 'src/app/models/wallet.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TransactionService } from 'src/app/services/transaction.service';
import { Utility } from 'src/app/utility.utils';
@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css'],
})
export class AddTransactionComponent extends Utility implements OnInit {
  wallet: Wallet | any;
  currencies: Currency[] = [];
  users: User[] = [];
  transactionForm: FormGroup = new FormGroup({
    currencyFrom: new FormControl('USD', [Validators.required]),
    from: new FormControl('', [Validators.required]),
    to: new FormControl('', [Validators.required]),
    currencyTo: new FormControl('USD', [Validators.required]),
    createAt: new FormControl('', [Validators.required]),
    updatedAt: new FormControl('', [Validators.required]),
    amount: new FormControl(0, [Validators.required]),
    currency: new FormControl('', [Validators.required]),
  });
  currencyTypes = ['USD', 'EUR', 'NGN'];
  currencyRates: any = {};
  fromEventVar = '';
  toEventVar = '';
  base = 'USD';
  eur = 'EUR';
  from: number = 0;
  to: number = 0;

  constructor(
    private authService: AuthenticationService,
    private transactionService: TransactionService
  ) {
    super();
  }

  ngOnInit(): void {
    this.fetchUsers();
    this.fetchRates();
  }

  fetchUsers() {
    this.authService.getUsers().subscribe((users) => {
      if (users.length) {
        this.users = users;
      }
    });
  }

  fetchRates() {
    this.transactionService.getCurrencyRates().subscribe((data: any) => {
      console.log(data);
      this.currencyRates = data.rates;
    });
  }

  receiveSelectedOutput(fromEvent: string = '', toEvent: string = '') {
    if (this.amount <= 0) return;
    if (fromEvent.length > 3 || fromEvent.length < 3) return;

    const rates = this.currencyRates;
    const base = 'USD';
    this.toEventVar = toEvent;
    this.from = +(rates[fromEvent] / rates[base]).toFixed(6);
    if (toEvent) {
      if (toEvent.length > 3 || toEvent.length < 3) return;
      this.to = +(rates[toEvent] / rates[base]).toFixed(6);
    }
  }

  baseCalculation(amount: number, to: number) {
    const baseCalculation = amount * to;
    return baseCalculation;
  }

  convertRates(from: number, to: number) {
    if (to !== 0) {
      return +this.baseCalculation(this.amount, to) / from;
    }
    return from ? from : 0.0;
  }

  selectUser(uid: string) {
    this.transactionService.selectUserWallet(uid).subscribe((wallet) => {
      this.wallet = wallet;
    });
  }

  get amount() {
    return this.transactionForm.value.amount;
  }

  submit(): void {
    if (this.transactionForm.invalid) return;
  }
}
