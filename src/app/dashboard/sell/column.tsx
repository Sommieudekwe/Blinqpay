import { ISell } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { cn, formatAmount } from "@/lib/utils";

export const ISellColumn: ColumnDef<ISell>[] = [
  {
    accessorKey: "id",
    header: "#",
    cell: ({ row }) => row.index + 1,
  },
  {
    accessorKey: "type",
    accessorFn: (row) => row.type,
  },

  {
    accessorKey: "amount",
    cell: ({ row }) => <p>&#8358;{formatAmount(row.original.amount)} USDT</p>,
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
    accessorFn: (row) => row.date,
  },

  {
    accessorKey: "time",
    accessorFn: (row) => row.time,
  },

  {
    accessorKey: "countdown",
    cell: ({ row }) => {
      return (
        <div className="flex gap-x-2">
          <img src="/dashboard/clock.svg" alt="clock" />
          <p>{row.original.countdown}</p>
        </div>
      );
    },
  },

  {
    accessorKey: "info",
    cell: ({ row }) => {
      return (
        <div className="">
          <img src={row.original.info} alt="clock" />
        </div>
      );
    },
  },
];
