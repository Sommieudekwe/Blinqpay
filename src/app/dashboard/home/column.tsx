"use client";

import { Button } from "@/components/ui/button";
import { cn, formatAmount, capitalizeFirstLetter } from "@/lib/utils";
import { IDashboard } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const dashboardColumn: ColumnDef<IDashboard>[] = [
  {
    accessorKey: "accountName",
    header: () => <p className="w-40">Account Name</p>,
    accessorFn: (row) => capitalizeFirstLetter(row.accountName),
  },

  {
    accessorKey: "accountNumber",
    header: () => <p className="w-32">Account Number</p>,
    accessorFn: (row) => row.accountNumber,
  },

  {
    accessorKey: "bankName",
    header: () => <p className="w-28">Bank Name</p>,
    cell: ({ row }) => (
      <p className="w-28">{capitalizeFirstLetter(row.original.bankName)}</p>
    ),
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
      const { status } = row.original;
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
          {status}
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
      return (
        <div className="">
          <Button className="text-right font-normal">Pay now</Button>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-center w-28">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="w-28 text-center">
          <Button className="text-cancel border border-cancel border-opacity-25">
            Cancel
          </Button>
        </div>
      );
    },
  },
];
