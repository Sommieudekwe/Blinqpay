"use client";

import Image from "next/image";
import { DataTable, PaginationTypes } from "@/components/ui/data-table";
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

import { SelectConnectedBanks } from "@/components/ui/select";
import EmptyState from "@/components/empty-state";
import { usePathname } from "next/navigation";
import { notify } from "@/components/ui/toast";
import { useStore } from "@/context/store";
import { IDashboard } from "@/types";

type AccountBalance = {
  availableBalance: number;
};

type DashboardSummary = {
  totalTransferCount: number;
  totalTransferAmount: number;
  walletBalance: number;
};

export default function Dashboard() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPayDialogOpen, setIsPayDialogOpen] = useState(false);
  const [isBlurred, setIsBlurred] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [dashboardSummary, setDashboardSummary] =
    useState<DashboardSummary | null>(null);
  const [paginationData, setPaginationData] = useState<
    PaginationTypes | undefined
  >();

  const pathname = usePathname();
  const {
    connectedBanks,
    getAllConnectedBanks,
    selectedBankId,
    setSelectedBankId,
    cachedBalance,
    setCachedBalance,
  } = useStore();
  const [accountBalance, setAccountBalance] = useState<AccountBalance | null>({
    availableBalance: cachedBalance as number,
  });

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const openPayDialog = () => {
    setIsPayDialogOpen(true);
  };

  const handleBlurToggle = () => {
    setIsBlurred((prevIsBlurred) => !prevIsBlurred);
  };

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
        setPendingOrders([]);
        setIsLoading(false);
        setIsDialogOpen(false);
        setPendingOrdersIds([]);
        console.log("Order cancelled");
      },
      eCB(res) {
        console.error(res);
        setIsLoading(false);
        setIsLoading(false);
      },
      toast: true,
    });
  };

  const handlePayAllOrder = async () => {
    setIsLoading(true);
    apiCAll({
      method: "post",
      url: "/order/pay",
      data: { orderIds: pendingOrdersIds },
      sCB(res) {
        setPendingOrders([]);
        setIsLoading(false);
        setIsPayDialogOpen(false);
        setPendingOrdersIds([]);
        console.log("order paid", res.data);
      },
      eCB(res) {
        setIsLoading(false);
        setIsPayDialogOpen(false);
        console.error(res.error);
      },
      toast: true,
    });
  };

  const handleNoConfirmation = () => {
    setPendingOrdersIds([]);
    setIsDialogOpen(false);
    setIsPayDialogOpen(false);
  };

  const getConnectedBanksBalance = async (id: number) => {
    console.log("id:", id);
    apiCAll({
      method: "get",
      url: `/bank/${id}/balance`,
      sCB(res) {
        // setAccountBalance(res.data);
        // setCachedBalance(res.data)

        console.log(res.data);
        if (cachedBalance && res.data.availableBalance === cachedBalance) {
          return;
        } else {
          setAccountBalance(res.data);
          setCachedBalance(res.data.availableBalance);
        }
      },
      eCB(res) {
        console.error(res.error);
      },
    });
  };

  const handleSelectChange = (id: string) => {
    setSelectedBankId(id);
    localStorage.setItem("selectedBankId", id);

    getConnectedBanksBalance(Number(id));
    return id;
  };

  const getMorePendingOrders = async (page: number) => {
    setIsLoading(true);
    try {
      await apiCAll({
        url: "/order/all?page=1&pageSize=10",
        method: "get",
        sCB(res) {
          const orders: IDashboard[] = res.data.data;
          setPendingOrders(orders);
          setPendingOrdersIds(orders.map((order) => order.id));
          const paginationData: PaginationTypes = res.data.pagination;
          setPaginationData(paginationData);
        },
      });
    } catch (error) {
      console.error(error, "this is the error");
    } finally {
      setIsLoading(false);
    }
  };

  // ---------
  useEffect(() => {
    getPendingOrders();
    getAllConnectedBanks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const id = localStorage.getItem("selectedBankId");
    console.log(id, "this is the id currently in the local storage");
    console.log(connectedBanks, "this is the connected banks at this time.");

    if (id) {
      getConnectedBanksBalance(Number(id));
    } else {
      if (connectedBanks.length >= 1) {
        getConnectedBanksBalance(Number(connectedBanks[0].id));
        localStorage.setItem("selectedBankId", String(connectedBanks[0].id));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [connectedBanks, pathname]);

  const getDashboardSummary = async () => {
    apiCAll({
      method: "get",
      url: "order/summary",
      sCB(res) {
        setDashboardSummary(res.data);
        console.log("Dashboard Hiistory", res.data);
      },
      eCB(res) {
        console.error(res.error);
      },
    });
  };

  console.log(connectedBanks);

  useEffect(() => {
    getDashboardSummary();
  }, []);

  return (
    <div className="">
      <div className="lg:flex justify-between">
        <div>
          <p className="flex items-center gap-x-2">
            <span className="opacity-50">Bank Balance</span>
            {/* <Image
              src="/dashboard/banks/kuda.svg"
              alt="kuda.svg"
              className="opacity-100"
              width={30}
              height={20}
            /> */}
          </p>
          <div className="flex items-center gap-2">
            <h2
              className={`text-4xl flex items-center gap-x-2 font-bold ${
                isBlurred ? "blur" : ""
              }`}
            >
              {accountBalance !== null ? (
                <p>&#8358;{formatAmount(accountBalance?.availableBalance)}</p>
              ) : (
                <p>&#8358;0.00</p>
              )}
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
            <SelectConnectedBanks
              placeholder="Select Bank"
              options={connectedBanks}
              className="w-44"
              onChange={handleSelectChange}
              value={connectedBanks[0]?.id?.toString()}
            />
          </div>
        </div>
      </div>

      {/* Transfer details */}
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-x-12 gap-y-5">
          <div className="relative bg-milky dark:bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4">
            <span className="text-3xl absolute right-5 top-0">...</span>

            <h3 className="opacity-50">Total Transfer Count</h3>

            <h4 className="mt-3 text-2xl font-bold">
              {dashboardSummary?.totalTransferCount}
            </h4>
          </div>
          <div className="relative bg-milky dark:bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4">
            <span className="text-3xl absolute right-5 top-0">...</span>

            <h3 className="opacity-50">Total Amount Transferred</h3>

            <h4
              className={`mt-3 text-2xl font-bold ${isBlurred ? "blur" : ""}`}
            >
              {dashboardSummary !== null ? (
                <span>
                  &#8358;
                  {formatAmount(
                    dashboardSummary?.totalTransferAmount as number
                  )}
                </span>
              ) : (
                <span> &#8358;0.00</span>
              )}
            </h4>
          </div>

          <div className="relative bg-milky dark:bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4 flex items-center justify-between">
            <div>
              <h3 className="opacity-50">Wallet Ballance</h3>

              <h4 className="mt-3 text-2xl font-bold">
                {dashboardSummary !== null ? (
                  <span>
                    &#8358;
                    {formatAmount(dashboardSummary?.walletBalance as number)}
                  </span>
                ) : (
                  <span> &#8358;0.00</span>
                )}
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
              className="gap-1 items-center text-gray-500  hidden md:flex"
            >
              <div className="h-6 w-6 rounded-md border-2 flex items-center justify-center border-gray-500">
                <div className={`${isLoading ? "animate-spin" : ""}`}>
                  <RefreshCcw size={12} />
                </div>
              </div>
            </button>
          </div>

          <div className="flex gap-x-1 sm:gap-x-1.5 lg:gap-x-5 col-span-5 justify-end">
            <div>
              <Button
                className="!bg-button-primary text-[.75rem] lg:text-base text-white"
                onClick={() => openPayDialog()}
                disabled={pendingOrders.length === 0}
              >
                Pay all
              </Button>
            </div>
            <div>
              <Button
                className="bg-transparent text-[.75rem] lg:text-base"
                onClick={() => openDialog()}
                disabled={pendingOrders.length === 0}
              >
                Cancel all
              </Button>
            </div>
          </div>
        </div>
        <button
          onClick={getPendingOrders}
          className="flex gap-2 items-center p-2 md:hidden text-black fixed bottom-5 left-1/2 transform -translate-x-1/2 justify-center w-16 h-16 rounded-full bg-onboard-bg dark:bg-gray-900"
        >
          <div className="h-8 w-8 flex items-center justify-center border-white rounded-md">
            <div className={`${isLoading ? "animate-spin" : ""}`}>
              <RefreshCcw size={26} color="white" />
            </div>
          </div>
        </button>
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
              paginationData={paginationData}
              getPageData={getMorePendingOrders}
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
              Are you sure you want to cancel all orders?
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

      <Dialog open={isPayDialogOpen} onOpenChange={setIsPayDialogOpen}>
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
              Are you sure you want to pay all orders?
            </p>

            <Button
              variant="primary"
              className="w-full mt-12"
              onClick={handlePayAllOrder}
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
