"use client";

import { cn, formatAmount, capitalizeFirstLetter } from "@/lib/utils";
import { IDashboard } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import PayModal from "./payModal";
import CancelModal from "./cancelModal";
import { Pencil } from "lucide-react";

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
    cell: ({ row }) => {
      const { accountNumber, meta } = row.original;
      return (
        <p>
          {accountNumber}
          {meta !== null && (
            <span>
              <Pencil />
            </span>
          )}
        </p>
      );
    },
  },

  {
    accessorKey: "bankName",
    header: () => <p className="w-28">Bank Name</p>,
    cell: ({ row }) => {
      const { bankName, meta } = row.original;
      return (
        <p className="w-28">
          {capitalizeFirstLetter(bankName)}
          {meta !== null && (
            <span>
              <Pencil />
            </span>
          )}
        </p>
      );
    },
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
    cell: ({ row }) => {
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
    cell: ({ row }) => {
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
    cell: ({ row }) => {
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
    cell: ({ row }) => {
      const { id } = row.original;
      return (
        <div className="w-28 text-center">
          <CancelModal orderId={id} />
        </div>
      );
    },
  },
];
