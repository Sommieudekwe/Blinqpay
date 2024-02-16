"use client";

import { IOrderHistory } from "@/types";
import { cn, formatAmount, formatDate } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";
import { PaginationTypes } from "@/components/ui/data-table";

interface TableProps {
  data: IOrderHistory[];
  paginationData?: PaginationTypes;
  getPageData?: (page: number) => void;
}

export default function OrderHistoryMobileTable({
  data,
  paginationData,
  getPageData,
}: TableProps) {
  return (
    <div className="w-full">
      <h3 className="text-xl font-semibold">Order History </h3>

      <div className="my-7">
        <Input type="search" placeholder="Search History" />
      </div>
      {data.map((d, index) => (
        <div
          key={index}
          className="border-b border-t dark:border-white dark:border-opacity-25 py-6 flex justify-between"
        >
          <div className="space-y-3">
            <p className="opacity-60">{d.orderNumber}</p>
            <h3 className="opacity-60">{d.accountName}</h3>
            <p className="opacity-60">
              {d.accountNumber} [ {d.bankName} ]
            </p>
            <p className="opacity-60">&#8358;{formatAmount(d.amount)}</p>
            <p className="opacity-60">{formatDate(d.createdAt)}</p>
          </div>
          <div>
            <p
              className={cn(
                "capitalize rounded-3xl px-2.5 py-1 text-sm text-success bg-success bg-opacity-10"
              )}
            >
              Paid
            </p>
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
          {
            [1, 2, 3, 4, 5].map((page, index) => (
              <Button
                key={index}
                onClick={() => getPageData && getPageData(page)}
                className="rounded-full"
                variant={paginationData.page === page ? "primary" : "default"}
              >
                {page}
              </Button>
            ))
          }

          {
            paginationData.page &&  (paginationData.page > 5) && (
              <Button
               
                className="rounded-full"
                variant={"primary"}
              >
                {paginationData.page}
              </Button>
            )
          }

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
