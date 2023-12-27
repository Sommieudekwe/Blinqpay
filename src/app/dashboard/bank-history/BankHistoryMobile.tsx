"use client";
import { IBankHistory } from "@/types";
import { cn, formatAmount } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface TableProps {
  data: IBankHistory[];
}

export default function BankHistoryDashboard({ data }: TableProps) {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold">Order History </h3>

      <div className="my-7">
        <Input type="search" placeholder="Search History" />
      </div>
      {data.map((d, index) => (
        <div
          key={index}
          className="border-b border-t border-white border-opacity-25 py-6 flex justify-between"
        >
          <div className="flex justify-between w-full">
            <div className="space-y-3">
              {/* <p className="opacity-60">{d.orderNumber}</p> */}
              <h3 className="opacity-60">{d.accountName}</h3>
              <p className="opacity-60">{d.accountNumber}</p>
              <p className="opacity-60">&#8358;{formatAmount(d.amount)}</p>
              <p className="opacity-60">{d.date}</p>
              <p
                className={cn(
                  "capitalize rounded-3xl py-1 text-sm",
                  d.status === "successful"
                    ? "text-success bg-opacity-10 inline-flex"
                    : d.status === "failed"
                    ? "text-failed bg-opacity-10 inline-flex"
                    : "text-pending bg-opacity-10 inline-flex"
                )}
              >
                {d.status}
              </p>
            </div>

            <div className="">
              <Button className="text-right">Get Receipt</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
