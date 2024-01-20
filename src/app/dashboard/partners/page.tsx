"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { partnersColumn } from "./column";
import { partnersData } from "./data";
import PartnersMobileTable from "./PartnersMobileTable";

export default function Partners() {
  const [isBlurred, setIsBlurred] = useState(false);
  const handleBlurToggle = () => {
    setIsBlurred((prevIsBlurred) => !prevIsBlurred);
  };
  return (
    <div>
      <div className="lg:flex justify-between gap-x-8 items-center grid grid-cols-2">
        <h1 className="text-lg md:text-2xl font-bold">
          Dashboard for Blinqpay Partners
        </h1>

        <Button variant="primary" className="">
          Copy referral link
        </Button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-x-12 gap-y-5">
        <div className="relative bg-milky dark:bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Number of users</h3>

          <h4 className="mt-3 text-2xl font-bold">200</h4>
        </div>
        <div className="relative bg-milky dark:bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <h3 className="opacity-50">Revenue</h3>

          <h4 className="mt-3 text-2xl font-bold flex items-center gap-x-2">
            <p className={`${isBlurred ? "blur" : ""}`}>&#8358;11,000,000</p>

            <Image
              src={isBlurred ? "/dashboard/eye.svg" : "/dashboard/lock.svg"}
              alt="lock"
              width={20}
              height={16}
              onClick={handleBlurToggle}
            />
          </h4>
        </div>

        <div className="relative bg-milky dark:bg-input rounded-3xl border border-white border-opacity-25 px-3 py-3 xl:py-4">
          <span className="text-3xl absolute right-5 top-0">...</span>

          <div>
            <div>
              <h3 className="opacity-50">Available balance</h3>
              <h4 className="mt-3 text-2xl font-bold">100</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full mt-10">
        <div className="flex justify-between items-center mt-8 lg:mt-5">
          <h3 className="text-2xl font-bold">History</h3>
        </div>

        <div className="hidden lg:block">
          <DataTable columns={partnersColumn} data={partnersData} />
        </div>
        <div className="lg:hidden">
          <PartnersMobileTable data={partnersData} />
        </div>
      </div>
    </div>
  );
}
