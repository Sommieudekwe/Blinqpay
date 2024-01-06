import { ISell } from "@/types";
import { cn, formatAmount } from "@/lib/utils";

interface TableProps {
  data: ISell[];
}

export default function SellMobileTable({ data }: TableProps) {
  return (
    <div className="w-full mt-7">
      {data.map((d, index) => (
        <div
          key={index}
          className="border-b border-t border-white border-opacity-25 py-6 flex justify-between"
        >
          <div className="flex justify-between w-full">
            <div className="space-y-3">
              <h3 className="opacity-60">{d.type}</h3>
              <p className="opacity-60">&#8358;{formatAmount(d.amount)}</p>
              <p className="opacity-60">{d.date}</p>
              <p className="opacity-60">{d.time}</p>
              <p className="opacity-60">{d.countdown}</p>
              <img src={d.info} alt="info" />
            </div>

            <div>
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
          </div>
        </div>
      ))}
    </div>
  );
}
