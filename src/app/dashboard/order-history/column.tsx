"use client";

import { Button } from "@/components/ui/button";
import { cn, formatAmount, formatDate, formatTime } from "@/lib/utils";
import { IOrderHistory } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<IOrderHistory>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => row.index + 1,
  },

  {
    accessorKey: "orderNumber",
    header: "Order Number",
    accessorFn: (row) => row.orderNumber,
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
    cell: ({ row }) => <p>&#8358;{formatAmount(row.original.amount)}</p>,
  },

  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { status } = row.original;
      return <p className={cn("capitalize text-success")}>{status}</p>;
    },
  },

  {
    accessorKey: "date",
    header: "Date",
    // accessorFn: (row) => <p>{formatDate(row.createdAt)}</p>,
    cell: ({ row }) => <p>{formatDate(row.original.createdAt)} {formatTime(row.original.createdAt)}</p>,
  },
];
