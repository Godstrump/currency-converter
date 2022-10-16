import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AddTransactionComponent } from './components/add-transaction/add-transaction.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularMaterialModule } from './material/material.module';
import { SignoutComponent } from './components/signout/signout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputComponent } from './components/input/input.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { ButtonComponent } from './components/button/button.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DropwdownComponent } from './components/dropwdown/dropwdown.component';

const { firebaseConfig } = environment;

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TransactionsComponent,
    AddTransactionComponent,
    WalletComponent,
    SignupComponent,
    SigninComponent,
    SignoutComponent,
    InputComponent,
    ButtonComponent,
    DashboardComponent,
    DropwdownComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
