"use client";

import Image from "next/image";
import { DataTable } from "@/components/ui/data-table";
import { dashboardColumn } from "./home/column";
import { dashboardData } from "./home/data";
import { Button } from "@/components/ui/button";
import MobileTable from "@/components/Dashboard/DashboardMobileTable";
import { useState } from "react";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
export default function Dashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"cancel" | "pay" | null>(null);

  const openDialog = (type: "cancel" | "pay") => {
    setDialogType(type);
    setIsDialogOpen(true);
  };

  return (
    <div className="">
      <div className="lg:flex justify-between">
        <div>
          <p className="flex items-center gap-x-2">
            <span className="opacity-50">Bank Balance</span>
            <Image
              src="/dashboard/banks/kuda.svg"
              alt="kuda.svg"
              className="opacity-100"
              width={30}
              height={20}
            />
          </p>
          <h2 className="text-4xl flex items-center gap-x-2 font-bold">
            &#8358;200,000,000
            <Image
              src="/dashboard/lock.svg"
              alt="lock"
              width={20}
              height={16}
            />
          </h2>
        </div>
        <div className="bg-light-green bg-opacity-10 text-light-green py-3 px-10 rounded-3xl inline-flex lg:flex items-center gap-x-3 mt-4 lg:mt-0">
          <Image src="/dashboard/mark.svg" alt="mark" width={16} height={16} />
          API Activated
        </div>
      </div>

      {/* Transfer details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-x-12 gap-y-5">
        <div className="relative bg-input rounded-3xl border border-white border-opacity-25 px-3 py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Total Transfer Count</h3>

          <h4 className="mt-3 text-2xl font-bold">5000</h4>
        </div>

        <div className="relative bg-input rounded-3xl border border-white border-opacity-25 px-3 py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Total Amount Transferred</h3>

          <h4 className="mt-3 text-2xl font-bold">&#8358;11,000,000</h4>
        </div>

        <div className="relative bg-input rounded-3xl border border-white border-opacity-25 px-3 py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Current Orders</h3>

          <h4 className="mt-3 text-2xl font-bold">1000</h4>
        </div>
      </div>

      <div className="flex justify-between items-center mt-8 lg:mt-5">
        <h3 className="text-2xl font-bold">Active Orders</h3>

        <div className="flex gap-x-1.5 lg:gap-x-5">
          <div>
            <Button className="bg-button-primary text-[.75rem] lg:text-base">
              Pay all
            </Button>
          </div>
          <div>
            <Button className="bg-transparent text-[.75rem] lg:text-base">
              Cancel all
            </Button>
          </div>
        </div>
      </div>

      {/* Table */}
      <section className="w-full h-full mt-10">
        <div className="hidden lg:block">
          <DataTable columns={dashboardColumn} data={dashboardData} />
        </div>

        <div className="lg:hidden">
          <MobileTable data={dashboardData} onOpenDialog={openDialog} />

          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogContent className="text-center text-white bg-red-500 !z-50">
              {dialogType === "pay" ? (
                <div>Successful</div>
              ) : dialogType === "cancel" ? (
                <div>
                  <Image
                    src="./dashboard/warning.svg"
                    alt="warning"
                    width={88}
                    height={88}
                  />

                  <p>Are you sure you want to cancel this order?</p>
                </div>
              ) : (
                <div>Hello</div>
              )}
            </DialogContent>
          </Dialog>

          {/* {isDialogOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-bold mb-4">Success</h2>
                You are correct
                <button
                  // onClick={onClose}
                  className="mt-4 py-2 px-4 bg-blue-500 text-white rounded"
                >
                  Close Modal
                </button>
              </div>
            </div>
          )} */}
        </div>
      </section>
    </div>
  );
}
