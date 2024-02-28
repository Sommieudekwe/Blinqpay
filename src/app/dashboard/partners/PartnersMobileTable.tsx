"use client";

import { IPartners } from "@/types";
import { cn, formatAmount } from "@/lib/utils";

interface TableProps {
  data: IPartners[];
}

export default function PartnersMobileTable({ data }: TableProps) {
  return (
    <div className="w-full">
      {data.map((d, index) => (
        <div key={index} className="py-4 flex justify-between">
          <div className="space-y-3">
            <h3 className="opacity-60">{d.accountName}</h3>
            <p className="opacity-60">{d.amount}</p>
            <p className="opacity-60">&#8358;{formatAmount(d.amount)}</p>
            <p className="opacity-60">{d.time}</p>
          </div>

          <div>
            <p className="capitalize rounded-3xl px-2.5 py-1 text-sm text-success inline-flex bg-success bg-opacity-10 ">
              Commission
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// className={cn(
//   "capitalize rounded-3xl px-2.5 py-1 text-sm",
//   d.status === "successful"
//     ? "text-success bg-success bg-opacity-10 inline-flex"
//     : d.status === "failed"
//     ? "text-failed bg-failed bg-opacity-10 inline-flex"
//     : "text-pending bg-pending bg-opacity-10 inline-flex"
// )}
