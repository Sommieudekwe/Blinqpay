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
  status: "pending" | "successful" | "failed";
  rate: string;
  amount: number;
}
export interface IbankList {
  [x: string]: string;
}

export interface IBankDetailsProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleConnectToBank: () => void;
}

export interface IOrderHistory {
  id: string;
  orderNumber: number;
  accountName: string;
  // bankName: string;
  accountNumber: number;
  amount: number;
  date: string;
  status: "pending" | "successful" | "failed";
}
