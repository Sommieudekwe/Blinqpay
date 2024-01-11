"use client";

import { Button } from "@/components/ui/button";
import { cn, formatAmount, formatAmount2 } from "@/lib/utils";
import { IDashboard } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const dashboardColumn: ColumnDef<IDashboard>[] = [
  {
    accessorKey: "accountName",
    header: () => <p className="w-40">Account Name</p>,
    accessorFn: (row) => row.accountName,
  },

  {
    accessorKey: "accountNumber",
    header: () => <p className="w-32">Account Number</p>,
    accessorFn: (row) => row.accountNumber,
  },

  {
    accessorKey: "bankName",
    header: () => <p className="w-28">Bank Name</p>,
    cell: ({ row }) => <p className="w-28">{row.original.bankName}</p>,
  },

  {
    accessorKey: "amount",
    header: () => <p className="w-28">Amount</p>,
    cell: ({ row }) => (
      <p className="">{formatAmount2(row.original.amount)}</p>
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
            status === "SUCCESSFULL"
              ? "text-success"
              : status === "FAILED"
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
      return <p className="text-button-primary">{formatAmount2(Number(row.original.rate))}</p>;
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
