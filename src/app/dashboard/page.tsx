import Image from "next/image";
import { DataTable } from "@/components/ui/data-table";
import { dashboardColumn } from "./home/column";
import { dashboardData } from "./home/data";
import { Button } from "@/components/ui/button";
import MobileTable from "@/components/Dashboard/DashboardMobileTable";

export default function Dashboard() {
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
          <MobileTable data={dashboardData} />
        </div>
      </section>
    </div>
  );
}
