import Image from "next/image";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./bank-history/column";
import { dashboardData } from "./home/data";

export default function Dashboard() {
  return (
    <div className="">
      <div className="flex justify-between">
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
          <h2 className="text-4xl flex items-center gap-x-2">
            &#8358;200,000,000
            <Image
              src="/dashboard/lock.svg"
              alt="lock"
              width={20}
              height={16}
            />
          </h2>
        </div>
        <div className="bg-light-green bg-opacity-10 text-light-green py-3 px-10 rounded-3xl flex items-center gap-x-3">
          <Image src="/dashboard/mark.svg" alt="mark" width={16} height={16} />
          API Activated
        </div>
      </div>

      {/* Transfer details */}
      <div className="grid grid-cols-3 mt-12 gap-x-12">
        <div className="relative bg-input rounded-3xl border border-white border-opacity-25 px-3 py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Total Transfer Count</h3>

          <h4 className="mt-3 text-2xl">5000</h4>
        </div>

        <div className="relative bg-input rounded-3xl border border-white border-opacity-25 px-3 py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Total Amount Transferred</h3>

          <h4 className="mt-3 text-2xl">&#8358;11,000,000</h4>
        </div>

        <div className="relative bg-input rounded-3xl border border-white border-opacity-25 px-3 py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Current Orders</h3>

          <h4 className="mt-3 text-2xl">1000</h4>
        </div>
      </div>


      <section className="w-full h-full">
        <DataTable columns={columns} data={dashboardData} />
      </section>
    </div>
  );
}
