import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/user.model';
import { Wallet } from '../models/wallet.model';
import { TransactionService } from './transaction.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  // userData$: Observable<firebase.User>
  isUserSignedIn = false;
  constructor(
    private angularFireAuth: AngularFireAuth,
    private firestore: AngularFirestore,
    private transactionService: TransactionService
  ) {}

  async signUpWithEmail(userCredentials: User, password: string) {
    const { email, displayName } = userCredentials;

    let userData = { email, displayName };

    this.angularFireAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        res.user?.updateProfile({
          displayName: `${displayName}`,
        });
        const wallet: Wallet = {
          id: '',
          userId: res.user!.uid,
          currencies: [
            {
              currency: 'NGN',
              balance: 0,
            },
            {
              currency: 'USD',
              balance: 1000,
            },
            {
              currency: 'EUR',
              balance: 0,
            },
          ],
          createdAt: new Date(),
        };
        // create the user profil
        this.transactionService.createUserProfile({
          uid: `users/${res.user?.uid}`,
          ...userData,
        });

        // create the user wallet
        this.transactionService.createUserWallet(
          `wallets/${res.user?.uid}`,
          wallet
        );

        // sign the user in after registration
        this.signIn(res.user!.email!, password);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  /* Sign in */
  signIn(email: string, password: string) {
    this.angularFireAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log('Youre in!', res);
        this.isUserSignedIn = !this.isUserSignedIn;
        console.log(this.isUserSignedIn);
      })
      .catch((err) => {
        console.log('Something went wrong:', err.message);
      });
  }

  signOut() {
    this.angularFireAuth.signOut().catch((err) => {
      console.log('Sign out gone wrong', err.message);
    });
  }

  getCurrentUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = this.angularFireAuth.onAuthStateChanged(
        (userAuth) => {
          console.log(userAuth);
          unsubscribe;
          resolve(userAuth);
        },
        reject
      );
    });
  }

  getUsers() {
    return this.firestore.collection<User>('users').valueChanges();
  }
}
