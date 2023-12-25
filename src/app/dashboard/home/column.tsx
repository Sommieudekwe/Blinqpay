"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { IDashboard } from "@/types";
import { ColumnDef } from "@tanstack/react-table";

export const dashboardColumn: ColumnDef<IDashboard>[] = [
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
              ? "text-success"
              : status === "Failed"
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
    header: "Rate",
    // accessorFn: (row) => row.rate,
    cell: ({row}) => {
      return <p className="text-button-primary">{row.original.rate}</p>
    }
  },

  {
    accessorKey: "action",
    header: () => <div className="text-center">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <Button className="text-right font-normal">Pay now</Button>
        </div>
      );
    },
  },
  {
    accessorKey: "action",
    header: () => <div className="text-right">Action</div>,
    cell: ({ row }) => {
      return (
        <div className="text-right">
          <Button className="text-cancel border border-cancel border-opacity-25">
            Cancel
          </Button>
        </div>
      );
    },
  },
];
