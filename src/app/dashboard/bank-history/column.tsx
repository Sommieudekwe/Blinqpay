"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { IBankHistory } from "@/types"
import { ColumnDef } from "@tanstack/react-table"


export const columns: ColumnDef<IBankHistory>[] = [
      {
            accessorKey: "id",
            header: "#",
            cell: ({ row }) => row.index + 1
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
            accessorFn: (row) => row.amount,

      },
      {
            accessorKey: "date",
            header: "Date",
            accessorFn: (row) => row.date,

      },
      {
            accessorKey: "status",
            header: "Status",
            cell: ({ row }) =>
            {
                  const { status } = row.original


                  return (
                        <p className={cn('capitalize', status === 'successful' ? "text-green-400" : status === "failed" ? "text-red-400" : "text-white")}
                        >
                              {status}
                        </p>
                  );
            },

      },
      {
            accessorKey: "id",
            header: "",
            cell: ({ row }) =>
            {
                  return (
                        <Button
                        >
                              Get Receipt
                        </Button>
                  );
            },
      },
]
