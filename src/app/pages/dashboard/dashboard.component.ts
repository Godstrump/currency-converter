import { Component, OnInit } from '@angular/core';
import { Wallet, Currency } from 'src/app/models/wallet.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  currencies: Currency[] = [];
  wallet: Wallet | any;
  constructor(
    private authService: AuthenticationService,
    private transactionService: TransactionService
  ) {}

  ngOnInit(): void {
    this.authService.getCurrentUser().then((user: any) => {
      if (user) {
        this.transactionService.getWallet(user.uid).subscribe((wallet) => {
          if (wallet) {
            const { currencies } = wallet;
            this.currencies = currencies;
            this.wallet = wallet;
          }
        });
      }
    });
  }

  newTRt() {
    console.log('reaching here');
  }
}
