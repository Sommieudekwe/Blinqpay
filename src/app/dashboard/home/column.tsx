"use client";

import { cn, formatAmount, capitalizeFirstLetter } from "@/lib/utils";
import { IDashboard } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import PayModal from "./payModal";
import CancelModal from "./cancelModal";
import { Pencil } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import apiCAll from "@/lib/apiCall";
import { useOrders } from "@/context/pendingOrder";

export const dashboardColumn: ColumnDef<IDashboard>[] = [
  {
    accessorKey: "accountName",
    header: () => <p className="w-40">Account Name</p>,
    accessorFn: (row) => capitalizeFirstLetter(row.accountName),
  },

  {
    accessorKey: "accountNumber",
    header: () => <p className="w-32">Account Number</p>,
    // accessorFn: (row) => row.accountNumber,
    cell: ({ row }) =>  <AccountNumber rowData={row.original}/>,
  },

  {
    accessorKey: "bankName",
    header: () => <p className="w-28">Bank Name</p>,
    cell: ({ row }) => <BankName rowData={row.original}/>
   
  },

  {
    accessorKey: "amount",
    header: () => <p className="w-28">Amount</p>,
    cell: ({ row }) => (
      <p className="">&#8358;{formatAmount(row.original.amount)}</p>
    ),
  },

  {
    accessorKey: "status",
    header: () => <p className="w-28 text-">Status</p>,
    cell: ({ row }) =>
    {
      const { status, meta } = row.original;
      return (
        <p
          className={cn(
            "capitalize",
            status === "successful"
              ? "text-success"
              : status === "failed"
                ? "text-failed"
                : "text-pending"
          )}
        >
          {meta?.error !== null ? (
            <span>{meta?.error}</span>
          ) : (
            <span>{status}</span>
          )}
        </p>
      );
    },
  },

  {
    accessorKey: "rate",
    header: () => <p className="w-28">Rate</p>,
    // accessorFn: (row) => row.rate,
    cell: ({ row }) =>
    {
      return (
        <p className="text-button-primary">
          &#8358;{formatAmount(row.original.rate)}
        </p>
      );
    },
  },

  {
    accessorKey: "action",
    header: () => <div className="w-28">Action</div>,
    cell: ({ row }) =>
    {
      const { id } = row.original;
      return (
        <div className="w-28">
          <PayModal orderId={id} />
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center w-28">Action</div>,
    cell: ({ row }) =>
    {
      const { id } = row.original;
      return (
        <div className="w-28 text-center">
          <CancelModal orderId={id} />
        </div>
      );
    },
  },
];

export type HandleEditTypes = {
  newBankName?: string,
  newAccountNumber?: string,
  orderId: string

}

async function handleEditDetails({newBankName, newAccountNumber, orderId}: HandleEditTypes, cb: () => void ) {
  console.log(newBankName, newAccountNumber);
  
  try {
    await apiCAll({
      url: `/order/${orderId}`,
      method: "PATCH",
      data: {
        bankName: newBankName,
        accountNumber: newAccountNumber
      },
      toast: true,
      sCB: () => {
        cb()
      }
    })
  } catch (error) {
    
  }
}


function AccountNumber({rowData}:{ rowData: any}){
  const { accountNumber, meta, id } = rowData;
  const [isEditing, setIsEdditing] = useState(false)
  const [newAccount, setNewAccount] = useState('')
  const {
    getPendingOrders,
  } = useOrders();
  function handleSubmit() {
    handleEditDetails({orderId: id, newAccountNumber: newAccount}, getPendingOrders)
    console.log(newAccount);
    setIsEdditing(false)
  }
  return (
    <div className="flex space-x-2">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="">
        <input className=" w-auto bg-transparent border-b border-gray-500 focus:border-b focus:outline-none focus:border-gray-500 placeholder:text-gray-600"
          type=""
          placeholder={accountNumber}
          onChange={(e) => setNewAccount(e.target.value)}
          value={newAccount}
          />
          </form>
      ) : (
        <>
          <p>
            {accountNumber}
          </p>
          {meta !== null && (
            <button onClick={() => setIsEdditing(!isEditing)}>
              <Pencil className="w-4 h-4" />
            </button>
          )}
        </>)
      }
    </div>
  );
}

function BankName({rowData}:{ rowData: any}){
  const { bankName, meta, id } = rowData;
  const [isEditing, setIsEdditing] = useState(false)
  const [newBankName, setNewBankName] = useState('')
  const {
    getPendingOrders,
  } = useOrders();
  function handleSubmit() {
    handleEditDetails({newBankName, orderId: id}, getPendingOrders)
    console.log(newBankName);
    setIsEdditing(false)
  }
  return (
    <div className="flex space-x-2">
      {isEditing ? (
        <form onSubmit={handleSubmit} className="w-auto">
        <input className=" w-16 bg-transparent border-b border-gray-500 focus:border-b focus:outline-none focus:border-gray-500 placeholder:text-gray-600"
          type=""
          placeholder={bankName}
          onChange={(e) => setNewBankName(e.target.value)}
          value={newBankName}
          />
          </form>
      ) : (
        <>
          <p>
          {capitalizeFirstLetter(bankName)}
          </p>
          {meta !== null && (
            <button onClick={() => setIsEdditing(!isEditing)}>
              <Pencil className="w-4 h-4" />
            </button>
          )}
        </>)
      }
    </div>
  );
}