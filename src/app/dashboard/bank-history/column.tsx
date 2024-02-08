"use client";

import { Button } from "@/components/ui/button";
import { cn, formatAmount, formatDate } from "@/lib/utils";
import { IBankHistory } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IBankHistory>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "accountName",
    header: "Account Name",
    accessorFn: (row) => row.accountName,
  },
  {
    accessorKey: "bankName",
    header: "Bank Name",
    accessorFn: (row) => row.bankName,
  },

  {
    accessorKey: "accountNumber",
    header: "Account Number",
    accessorFn: (row) => row.accountNumber,
  },

  {
    accessorKey: "amount",
    header: "Amount (NGN)",
    cell: ({ row }) => {
      const { type } = row.original;
      return (
        <p
          className={`${
            type === "debit"
              ? "text-failed"
              : type === "credit"
              ? "text-success"
              : "text-pending"
          }`}
        >
          &#8358;{formatAmount(row.original.amount)}
        </p>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <p>{formatDate(row.original.date)}</p>,
  },
  {
    accessorKey: "id",
    header: "",
    meta: {
      align: "right",
    },
    cell: ({ row }) => {
      return (
        <div className="float-right">
          <Button className="text-right">Get Receipt</Button>
        </div>
      );
    },
  },
];
