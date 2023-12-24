import { IDashboard } from "@/types";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

interface TableProps {
  data: IDashboard[];
}

export default function MobileTable({ data }: TableProps) {
  return (
    <div className="w-full">
      {data.map((d, index) => (
        <div
          key={index}
          className="border-b border-t border-white border-opacity-25 py-6 flex justify-between"
        >
          <div className="space-y-2">
            <h3 className="opacity-60">{d.accountName}</h3>
            <p className="opacity-60">{d.accountNumber}</p>
            <p className="opacity-60">{d.bankName}</p>
            <p className="">&#8358;{d.amount}</p>
            <p className="text-rate">&#8358;{d.rate}</p>
            <p
              className={cn(
                "capitalize rounded-3xl px-2.5 py-1 text-sm",
                d.status === "Successful"
                  ? "text-success bg-success bg-opacity-10 inline-flex"
                  : d.status === "Failed"
                  ? "text-failed bg-failed bg-opacity-10 inline-flex"
                  : "text-pending bg-pending bg-opacity-10 inline-flex"
              )}
            >
              {d.status}
            </p>
          </div>

          <div className="inline-flex flex-col space-y-2">
            <Button>Pay now</Button>
            <Button className="text-cancel border border-cancel border-opacity-25">
              Cancel
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
