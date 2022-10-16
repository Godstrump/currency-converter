export interface Transaction {
  ID: string;
  From: string;
  To: string;
  Amount: number;
  Currency: string;
  CreatedAt: Date;
  UpdatedAt: Date;
}
