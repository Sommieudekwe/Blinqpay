"use client";
import { IBankHistory } from "@/types";
import { cn, formatAmount, formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { PaginationTypes } from "@/components/ui/data-table";

interface TableProps {
  data: IBankHistory[];
  paginationData?: PaginationTypes;
  getPageData?: (page: number) => void;
}

export default function BankHistoryDashboard({
  data,
  paginationData,
  getPageData,
}: TableProps) {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold">Bank History </h3>

      <div className="my-7">
        <Input type="search" placeholder="Search History" />
      </div>
      {data.map((d, index) => (
        <div
          key={index}
          className="border-b border-t dark:border-white dark:border-opacity-25 pt-6 flex justify-between"
        >
          <div className="flex justify-between w-full">
            <div className="space-y-3">
              {/* <p className="opacity-60">{d.orderNumber}</p> */}
              <h3 className="opacity-60">{d.accountName}</h3>
              <p className="opacity-60">{d.accountNumber}</p>
              <p className="opacity-60">[{d.bankName}]</p>
              <p className="opacity-60">&#8358;{formatAmount(d.amount)}</p>
              <p className="opacity-60">{formatDate(d.date)}</p>
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
              <Button className="text-right whitespace-nowrap">
                Get Receipt
              </Button>
            </div>
          </div>
        </div>
      ))}
      {paginationData && (
        // <DataTablePagination table={table} />
        <div className="table-pagination w-auto flex space-x-2 mt-6 pb-4">
          <Button
            disabled={!paginationData.hasPrevious}
            onClick={() =>
              getPageData && getPageData(paginationData.prevPage as number)
            }
            className="capitalize bottom-0"
          >
            prev
          </Button>
          <div className={cn(buttonVariants({ variant: "default" }))}>
            <p className="text-sm">
              {paginationData.currentPage} of {paginationData.pages} pages
            </p>
          </div>

          <Button
            disabled={!paginationData.hasNext}
            onClick={() =>
              getPageData && getPageData(paginationData.next as number)
            }
            className="capitalize"
          >
            next
          </Button>
        </div>
      )}
    </div>
  );
}
