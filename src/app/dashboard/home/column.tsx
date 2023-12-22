"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IDashboard } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IDashboard>[] = [
  {
    accessorKey: "accountName",
    header: "Account Name",
    accessorFn: (row) => row.accountName,
  },

  {
    accessorKey: "accountNumber",
    header: "Account Number",
    accessorFn: (row) => row.accountNumber,
  },

  {
    accessorKey: "bankName",
    header: "Bank Name",
    accessorFn: (row) => row.bankName,
  },

  {
    accessorKey: "amount",
    header: "Amount",
    accessorFn: (row) => row.amount,
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;
      return (
        <p
          className={cn(
            "capitalize",
            status === "Successful"
              ? "text-green-400"
              : status === "Failed"
              ? "text-red-400"
              : "text-white"
          )}
        >
          {status}
        </p>
      );
    },
  },

  {
    accessorKey: "rate",
    header: "Rate",
    accessorFn: (row) => row.rate,
  },

  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="float-right">
          <Button className="text-right">Pay now</Button>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: "Action",
    cell: ({ row }) => {
      return (
        <div className="float-right">
          <Button className="text-right">Cancel</Button>
        </div>
      );
    },
  },
];
