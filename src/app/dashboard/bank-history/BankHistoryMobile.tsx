"use client";
import { IBankHistory } from "@/types";
import { cn, formatAmount, formatDate, formatTime } from "@/lib/utils";
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
              <p
                className={`opacity-60 ${
                  d.type === "debit"
                    ? "text-failed"
                    : d.type === "credit"
                    ? "text-success"
                    : "text-pending"
                }`}
              >
                {d.type === "debit" ? "-" : d.type === "credit" ? "+" : ""}
                &#8358;{formatAmount(d.amount)}
              </p>
              <p className="opacity-60 space-x-2">
                <span>{formatDate(d.date)}</span>
                <span>{formatTime(d.date)}</span>
              </p>
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
        <div className="table-pagination w-auto flex space-x-2 pb-4 mt-4">
          <Button
            disabled={!paginationData.hasPrevious}
            onClick={() =>
              getPageData && getPageData(paginationData.prevPage as number)
            }
            className="capitalize bottom-0 rounded-full"
          >
            {"<"}
          </Button>
          {[1, 2, 3, 4, 5].map((page, index) => (
            <Button
              key={index}
              onClick={() => getPageData && getPageData(page)}
              className="rounded-full"
              variant={paginationData.page === page ? "primary" : "default"}
            >
              {page}
            </Button>
          ))}

          {paginationData.page && paginationData.page > 5 && (
            <Button className="rounded-full" variant={"primary"}>
              {paginationData.page}
            </Button>
          )}

          <Button
            disabled={!paginationData.hasNext}
            onClick={() =>
              getPageData && getPageData(paginationData.next as number)
            }
            className="rounded-full"
          >
            {">"}
          </Button>
          {/* {paginationData.lastPage && (
            <Button
              onClick={() =>
                getPageData && getPageData(paginationData.lastPage as number)
              }
              className="capitalize"
            >
              last page
            </Button>
          )} */}
        </div>
      )}
    </div>
  );
}
