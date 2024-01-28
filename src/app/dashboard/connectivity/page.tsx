"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { bankList } from "./constants";
import { useStore } from "@/context/store";

export default function Connectivity() {
  const router = useRouter();
  // const AvailableBanks = ["Binance", "Kuda", "Paxful", "Moniepoint"];
  // const AllBanks = ["Providus", "Kuda", "Moniepoint"];
  const { loggedIn, getAllProviders, providers } = useStore();
  console.log("user logged in?", loggedIn);

  function handleConnect(
    type: "BANK" | "EXCHANGE" | null | undefined,
    bankName?: string,
    id?: number
  ) {
    if (type === "BANK") {
      return router.push(`/dashboard/connectivity/bank/${bankName}`);
    }
    return router.push(`/dashboard/connectivity/wallet/${bankName}`);
  }

  useEffect(() => {
    getAllProviders();
  }, []);

  console.log(providers);

  return (
    <section className="w-full h-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 pt-10 lg:pt-20 px-9">
        {providers.map((providers, i) => (
          <div
            key={i}
            className="w-full p-5 space-y-8 flex flex-col items-center border dark:border-border-connect bg-milky dark:bg-bank-bg "
          >
            <div className="w-full max-w-[16.25rem] relative h-[3.438rem]">
              {/* Addd bank image */}
              {/* <Image src={bank.logo} alt={"bank logo"} fill /> */}
            </div>
            <div>{providers.name}</div>
            <Button
              onClick={() =>
                handleConnect(providers.type, providers.name, providers.id)
              }
              variant={"outline"}
              disabled={
                providers.status === "COMING_SOON" ||
                providers.status === "ACTIVE"
              }
              className="bg-gray-300"
            >
              {providers.status === "ACTIVE"
                ? "Connected"
                : providers.status === "COMING_SOON"
                ? "Coming Soon"
                : "Connect"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
