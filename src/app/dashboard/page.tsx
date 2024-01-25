"use client";

import Image from "next/image";
import { DataTable } from "@/components/ui/data-table";
import { dashboardColumn } from "./home/column";
import { Button } from "@/components/ui/button";
import MobileTable from "@/app/dashboard/home/DashboardMobileTable";
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { formatAmount } from "@/lib/utils";
import apiCAll from "@/lib/apiCall";
import { useOrders } from "@/context/pendingOrder";
import { Icons } from "@/components/icons";
import { RefreshCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import Combobox from "@/components/ui/combobox";

import Select from "@/components/ui/select";
import EmptyState from "@/components/empty-state";

export default function Dashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [connectedBanks, setAllConnectedBanks] = useState([]);
  const [selectedBank, setSelectedBank] = useState();
  const [accountBalance, setAccountBalance] = useState(null);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  // console.log(hasToken(), getToken(), 'HERE ARE THE TOKENS FROM THE COOKIES!!');

  const handleBlurToggle = () => {
    setIsBlurred((prevIsBlurred) => !prevIsBlurred);
  };

  // console.log(hasToken(), getToken(), 'HERE ARE THE TOKENS FROM THE COOKIES!!');

  // Get store values
  const {
    pendingOrders,
    getPendingOrders,
    isLoading,
    pendingOrdersIds,
    setPendingOrdersIds,
    setPendingOrders,
  } = useOrders();

  const handleCancelAllOrder = async () => {
    setIsLoading(true);
    apiCAll({
      method: "post",
      url: "/order/cancel",
      data: { orderIds: pendingOrdersIds },
      sCB(res) {
        console.log(res, "All order has been cancelled");
        setPendingOrders([]);
        setIsLoading(false);
        setIsDialogOpen(false);
        setPendingOrdersIds([]);
      },
      eCB(res) {
        console.error(res);
        setIsLoading(false);
        setIsLoading(false);
      },
      toast: true,
    });
  };

  const getAllConnectedBanks = async () => {
    apiCAll({
      method: "get",
      url: "provider/banks",
      sCB(res) {
        setAllConnectedBanks(res.data);
      },
      eCB(res) {
        console.error(res.error);
      },
    });
  };

  const handleNoConfirmation = () => {
    setPendingOrdersIds([]);
    setIsDialogOpen(false);
  };

  const getConnectedBanksBalance = async (id: number) => {
    apiCAll({
      method: "get",
      url: `bank/${id}/balance`,
      sCB(res) {
        setAccountBalance(res.data);
        console.log(res.data);
      },
      eCB(res) {
        console.error(res.error);
      },
    });
  };

  const handleSelectChange = (selectedValue: any) => {
    // if (typeof selectedValue === "string") {
    // } else {
    //   setSelectedBank(selectedValue);
    //   console.log(selectedValue);
    // }

    // getConnectedBanksBalance(selectedValue.id);
    console.log(selectedValue);
  };

  useEffect(() => {
    getPendingOrders();
    getAllConnectedBanks();
  }, []);

  console.log(accountBalance);

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
            <div onClick={handleBlurToggle}>
              {isBlurred ? (
                <div>
                  <Icons.Eye stroke="white" className="dark:block hidden" />
                  <Icons.Eye stroke="black" className="block dark:hidden" />
                </div>
              ) : (
                <div>
                  <Icons.Lock stroke="white" className="dark:block hidden" />
                  <Icons.Lock stroke="black" className="block dark:hidden" />
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="flex items-center">
            <p className="opacity-60 mb-2">Available Banks</p>
          </div>
          <div className="text-center">
            {/* <Select
              placeholder={sample[0].name}
              options={sample}
              className="w-44"
              onChange={handleSelectChange}
            /> */}
            <Combobox />
          </div>
        </div>
      </div>

      {/* Transfer details */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-x-12 gap-y-5">
          <div className="relative bg-milky dark:bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4">
            <span className="text-3xl absolute right-5 top-0">...</span>

            <h3 className="opacity-50">Total Transfer Count</h3>

            <h4 className="mt-3 text-2xl font-bold">5000</h4>
          </div>
          <div className="relative bg-milky dark:bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4">
            <span className="text-3xl absolute right-5 top-0">...</span>

            <h3 className="opacity-50">Total Amount Transferred</h3>

            <h4
              className={`mt-3 text-2xl font-bold ${isBlurred ? "blur" : ""}`}
            >
              &#8358;11,000,000
            </h4>
          </div>

          <div className="relative bg-milky dark:bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4 flex items-center justify-between">
            <div>
              <h3 className="opacity-50">Wallet Ballance</h3>

              <h4 className="mt-3 text-2xl font-bold">
                &#8358;{formatAmount(10000)}
              </h4>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-8 mt-8 lg:mt-5 items-center">
          <div className="flex items-center gap-2 col-span-3">
            <h3 className="sm:text-2xl font-bold whitespace-nowrap">
              <span>{pendingOrders.length} Active Orders</span>
            </h3>
            <button
              onClick={getPendingOrders}
              className="gap-1 items-center text-gray-500 flex"
            >
              <div className="h-5 w-5 rounded-md border-2 flex items-center justify-center border-gray-500">
                <div className={`${isLoading ? "animate-spin" : ""}`}>
                  <RefreshCcw size={12} />
                </div>
              </div>
            </button>
          </div>

          <div className="flex gap-x-1 sm:gap-x-1.5 lg:gap-x-5 col-span-5 justify-end">
            <div>
              <Button className="!bg-button-primary text-[.75rem] lg:text-base text-white">
                Pay all
              </Button>
            </div>
            <div>
              <Button
                className="bg-transparent text-[.75rem] lg:text-base"
                onClick={() => openDialog()}
              >
                Cancel all
              </Button>
            </div>
          </div>
        </div>
        {/* <button
          onClick={getPendingOrders}
          className="gap-1 grid grid-cols-2 items-center text-blue-600 mt-5 md:hidden"
        >
          <p>refresh</p>
          <div className="h-6 w-6 border flex items-center justify-center border-blue-600 rounded-md">
            <div className={`${isLoading ? "animate-spin" : ""}`}>
              <RefreshCcw size={12} />
            </div>
          </div>
        </button> */}
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
            <MobileTable data={pendingOrders} />
          </div>
        </section>
      ) : (
        <div className="mt-10">
          <EmptyState label="No pending order." />
        </div>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="text-center text-white">
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
              onClick={handleCancelAllOrder}
              isLoading={loading}
            >
              Yes
            </Button>
            <Button className="w-full mt-5" onClick={handleNoConfirmation}>
              No
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
