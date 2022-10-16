export interface Currency {
  currency: string;
  balance: number;
}

export interface Wallet {
  id?: string;
  userId: string;
  currencies: Currency[];
  createdAt?: Date;
  updatedAt?: Date;
}
