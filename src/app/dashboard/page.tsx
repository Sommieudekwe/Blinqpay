"use client";

import Image from "next/image";
import { DataTable } from "@/components/ui/data-table";
import { dashboardColumn } from "./home/column";
// import { dashboardData } from "./home/data";
import { Button } from "@/components/ui/button";
import MobileTable from "@/app/dashboard/home/DashboardMobileTable";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { getToken, hasToken } from "@/lib/utils";
import Dropdown from "@/components/Dashboard/Dropdown";
import { formatAmount } from "@/lib/utils";
import apiCAll from "@/lib/apiCall";
import { IDashboard } from "@/types";

const availableBanks = [
  { label: "Kuda bank", value: "Kuda bank", img: "/dashboard/banks/kuda.svg" },
  {
    label: "Moniepoint",
    value: "Moniepoint",
    img: "/dashboard/banks/kuda.svg",
  },
  {
    label: "Access bank",
    value: "Access bank",
    img: "/dashboard/banks/kuda.svg",
  },
  { label: "First bank", value: "Firstbank", img: "/dashboard/banks/kuda.svg" },
];
import Select from "@/components/ui/select";
import EmptyState from "@/components/empty-state";

export default function Dashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogType, setDialogType] = useState<"cancel" | "pay" | null>(null);
  const [isBlurred, setIsBlurred] = useState(false);
  const [cancelOrderId, setCancelOrderId] = useState<number | null>(null);
  const [pendingOrders, setPendingOrders] = useState<IDashboard[]>([]);

  const openDialog = (type: "cancel" | "pay" | null, orderId?: number) => {
    if (type === "cancel" && orderId) {
      setCancelOrderId(orderId);
    }

    setDialogType(type);
    setIsDialogOpen(true);
  };

  // console.log(hasToken(), getToken(), 'HERE ARE THE TOKENS FROM THE COOKIES!!');

  const handleBlurToggle = () => {
    setIsBlurred((prevIsBlurred) => !prevIsBlurred);
  };

  // console.log(hasToken(), getToken(), 'HERE ARE THE TOKENS FROM THE COOKIES!!');

  // order/all?q=ademide&page=1&pageSize=10
  async function getPendingOrders() {
    try {
      await apiCAll({
        url: "/order/all?page=1&pageSize=10",
        method: "get",
        sCB(res) {
          setPendingOrders(res.data.data);
        },
      });
      9899;
    } catch (error) {
      console.log(error, "this is the error");
    }
  }

  useEffect(() => {
    getPendingOrders();
  }, []);

  console.log(pendingOrders);

  async function handleCancelPendingOrder() {
    try {
      await apiCAll({
        url: `/order/${cancelOrderId}/cancel`,
        method: "post",
        sCB(res) {
          console.log("order cancelled", res.data);
          setPendingOrders((prevPendingOrders) =>
            // Pending orders need to be updated, since filter creates a new array, we need to set the pendingorders back to the newly created array

            prevPendingOrders.filter((oId) => cancelOrderId !== oId.id)
          );
          setIsDialogOpen(false);
          // Remove order from pending orders
        },
      });
    } catch (error) {
      console.error(error, "Can't cancel pending order");
    }
    console.log(`Order with ID ${cancelOrderId} has been cancelled`);
  }

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
          <div className="flex items-center gap-2">
            <h2
              className={`text-4xl flex items-center gap-x-2 font-bold ${
                isBlurred ? "blur" : ""
              }`}
            >
              &#8358;200,000,000
            </h2>
            <Image
              src={isBlurred ? "/dashboard/eye.svg" : "/dashboard/lock.svg"}
              alt="lock"
              width={20}
              height={16}
              onClick={handleBlurToggle}
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <p className="opacity-60 mb-2 ">Available Banks</p>
          </div>
          <div className="text-center">
            <Select
              placeholder={availableBanks[0].label}
              options={availableBanks}
              className="w-44"
            />
            {/* <Dropdown options={availableBanks} /> */}
          </div>
        </div>
      </div>

      {/* Transfer details */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-x-12 gap-y-5">
        <div className="relative bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Total Transfer Count</h3>

          <h4 className="mt-3 text-2xl font-bold">5000</h4>
        </div>
        <div className="relative bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Total Amount Transferred</h3>

          <h4 className={`mt-3 text-2xl font-bold ${isBlurred ? "blur" : ""}`}>
            &#8358;11,000,000
          </h4>
        </div>

        <div className="relative bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4 flex items-center justify-between">
          <div>
            <h3 className="opacity-50">Wallet Ballance</h3>

            <h4 className="mt-3 text-2xl font-bold">
              &#8358;{formatAmount(10000)}
            </h4>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 mt-8 lg:mt-5 items-center">
        <h3 className=" sm:text-2xl col-span-2 font-bold">
          {pendingOrders.length} Active Orders
        </h3>

        <div className="flex gap-x-1.5 lg:gap-x-5 col-span-3 justify-end">
          <div>
            <Button className="bg-button-primary text-[.75rem] lg:text-base">
              Pay all
            </Button>
          </div>
          <div>
            <Button
              className="bg-transparent text-[.75rem] lg:text-base"
              onClick={() => openDialog(null)}
            >
              Cancel all
            </Button>
          </div>
        </div>
      </div>

      {/* Search icon */}
      <div></div>

      {/* Table */}
      {pendingOrders.length >= 1 ? (
        <section className="w-full h-full mt-10">
          <div className="hidden lg:block">
            <DataTable
              columns={dashboardColumn}
              data={pendingOrders}
              emptyStateLabel="No active orders yet."
            />
          </div>

          <div className="lg:hidden">
            <MobileTable data={pendingOrders} onOpenDialog={openDialog} />

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="text-center text-white">
                {dialogType === "pay" ? (
                  <div>Successful</div>
                ) : dialogType === "cancel" ? (
                  <div className="flex flex-col items-center">
                    <Image
                      src="./dashboard/warning.svg"
                      alt="warning"
                      width={88}
                      height={88}
                      className="flex justify-center"
                    />

                    <p className="mt-5 font-medium text-lg lg:text-2xl">
                      Are you sure you want to cancel this order?
                    </p>

                    <Button
                      variant="primary"
                      className="w-full mt-12"
                      onClick={handleCancelPendingOrder}
                    >
                      Yes
                    </Button>
                    <Button className="w-full mt-5">No</Button>
                  </div>
                ) : dialogType === null ? (
                  <div className="flex flex-col items-center">
                    <Image
                      src="./dashboard/warning.svg"
                      alt="warning"
                      width={88}
                      height={88}
                      className="flex justify-center"
                    />

                    <p className="mt-5 font-medium text-lg lg:text-2xl">
                      Are you sure you want to cancel all order?
                    </p>

                    <Button
                      variant="primary"
                      className="w-full mt-12"
                      onClick={() =>
                        console.log("All order has been cancelled")
                      }
                    >
                      Yes
                    </Button>
                    <Button className="w-full mt-5">No</Button>
                  </div>
                ) : null}
              </DialogContent>
            </Dialog>
          </div>
        </section>
      ) : (
        <div className="mt-10">
          <EmptyState label="No pending order." />
        </div>
      )}
    </div>
  );
}
