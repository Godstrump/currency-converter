import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Wallet } from '../models/wallet.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  constructor(private firestore: AngularFirestore, private http: HttpClient) {}

  getWallet(userId: string) {
    return this.firestore.doc<Wallet>(`wallets/${userId}`).valueChanges();
  }

  createUserWallet(uid: string, wallet: Wallet) {
    this.firestore.doc(`wallets/${uid}`).set(wallet);
  }

  createUserProfile({ uid, displayName, email }: any) {
    this.firestore.doc(`users/${uid}`).set({ uid, displayName, email });
  }

  selectUserWallet(uid: string) {
    return this.firestore.doc<Wallet>(`wallets/${uid}`).valueChanges();
  }

  getCurrencyRates() {
    return this.http.get(
      'http://data.fixer.io/api/latest?access_key=393d7caa905cea34a2c09f38eeac17b1&from=USD'
    );
  }

  // fetchCurrentRates(from: string, to: string, amount: number) {
  //   return this.http.get(
  //     `http://data.fixer.io/api/latest?access_key=393d7caa905cea34a2c09f38eeac17b1&from=${from}&to=${to}&amount=${amount}`
  //   );
  // }
}
