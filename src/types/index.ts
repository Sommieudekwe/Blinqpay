import { ConnectionDetailsSchemaTypes } from "@/components/Dashboard/connectivity/apikey-form";

export interface IRoutes {
  name: string;
  icon: () => React.ReactElement<React.SVGProps<SVGSVGElement>>;
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
  id: number;
  accountName: string;
  accountNumber: string;
  bankName: string;
  status: "pending" | "successful" | "failed";
  rate: number;
  amount: number;
  createdAt: string;
  orderNumber: number;
}
export interface IbankList {
  [x: string]: string;
}

export interface IBankDetailsProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  handleConnectToBank: (apiVAlues: ConnectionDetailsSchemaTypes) => void;
}

export interface IOrderHistory {
  id: string;
  orderNumber: number;
  accountName: string;
  bankName: string;
  accountNumber: number;
  amount: number;
  createdAt: string;
  status: "PENDING" | "SUCCESSFULL" | "FAILED";
}

export type ResponsTypes = Promise<{
  error: boolean;
  serverResponse: {
    [key: string]: any;
  };
}>;

export interface NotifyProps {
  title:
    | string
    | (string &
        React.ReactElement<
          unknown,
          string | React.JSXElementConstructor<unknown>
        >)
    | (string & Iterable<React.ReactNode>)
    | (string & React.ReactPortal)
    | undefined;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export interface NotifyVariant {
  error: (title: NotifyProps["title"], action?: NotifyProps["action"]) => void;
  warn: (title: NotifyProps["title"], action?: NotifyProps["action"]) => void;
  success: (
    title: NotifyProps["title"],
    action?: NotifyProps["action"]
  ) => void;
}

export interface IPartners {
  accountName: string;
  amount: number;
  status: "pending" | "successful" | "failed";
  date: string;
  time: string;
}

export interface ISell {
  type: string;
  amount: number;
  status: "pending" | "successful" | "failed";
  date: string;
  time: string;
  countdown: string;
  info: string;
}

export interface IProviders {
  createdAt: string;
  id: number;
  name: string;
  status: "ACTIVE" | "COMING_SOON" | null;
  type: "BANK" | null | "EXCHANGE";
  updatedAt: string;
}
