import { Component, Input, OnInit } from '@angular/core';
import { Wallet } from '../../models/wallet.model';
@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css'],
})
export class WalletComponent implements OnInit {
  displayedColumns: string[] = ['balance', 'currency'];
  @Input() dataSource: Wallet | any;

  constructor() {}

  ngOnInit(): void {
    console.log('data source', this.dataSource);
  }
}
