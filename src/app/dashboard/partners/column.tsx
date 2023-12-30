"use client";

import { IPartners } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { cn, formatAmount } from "@/lib/utils";

export const partnersColumn: ColumnDef<IPartners>[] = [
  {
    accessorKey: "accountName",
    header: () => <p className="">Account Name</p>,
    accessorFn: (row) => row.accountName,
  },
  {
    accessorKey: "Amount",
    header: () => <p className="">Amount</p>,
    cell: ({ row }) => <p>&#8358;{formatAmount(row.original.amount)}</p>,
  },
  {
    accessorKey: "status",
    header: () => <p className="">Status</p>,
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
    accessorKey: "date",
    header: () => <p className="">Date</p>,
    accessorFn: (row) => row.date,
  },

  {
    accessorKey: "time",
    header: () => <p className="">Time</p>,
    accessorFn: (row) => row.time,
  },
];
