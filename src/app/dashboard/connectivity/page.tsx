"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { bankList } from "./constants";

export default function Connectivity() {
  const router = useRouter();

  const AvailableBanks = ["Binance", "Kuda", "Paxful", "Moniepoint"];
  const AllBanks = ["Providus", "Kuda", "Moniepoint"];

  function handleConnect(bankName: string) {
    if (AllBanks.includes(bankName))
      return router.push(`/dashboard/connectivity/bank/${bankName}`);
    return router.push(`/dashboard/connectivity/wallet/${bankName}`);
  }

  return (
    <section className="w-full h-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 pt-10 lg:pt-20 px-9">
        {bankList.map((bank, index) => (
          <div
            key={index}
            className="w-full p-5 space-y-8 flex flex-col items-center border border-border-connect bg-bank-bg"
          >
            <div className="w-full max-w-[16.25rem] relative h-[3.438rem]">
              <Image src={bank.logo} alt={"bank logo"} fill />
            </div>

            <Button
              onClick={() => handleConnect(bank.name)}
              variant={"outline"}
              disabled={!AvailableBanks.includes(bank.name)}
            >
              {AvailableBanks.includes(bank.name) ? "Connect" : "Comming Soon"}
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
