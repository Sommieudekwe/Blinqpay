export interface IRoutes {
  name: string;
  icon: string;
  link: string;
}

export interface IBankHistory {
  id: string;
  amount: number;
  status: "pending" | "successful" | "failed";
  accountName: string;
  bankName: string;
  accountNumber: string;
  date: string;
  no?: number;
}

export interface IDashboard {
  accountName: string;
  accountNumber: string;
  bankName: string;
  status: "Pending" | "Successful" | "Failed";
  rate: string;
  amount: string;
}
