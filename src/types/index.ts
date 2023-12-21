export interface IRoutes {
      name: string;
      icon: string;
      link: string;
    }
    

    export type IBankHistory = {
      id: string
      amount: number
      status: "pending" | "successful" | "failed"
      accountName: string
      bankName: string
      accountNumber: string
      date: string
      no?: number
}
