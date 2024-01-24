"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { bankList } from "./constants";
import { useStore } from "@/context/store";
import { notify } from "@/components/ui/toast";
import apiCAll from "@/lib/apiCall";
import { IProviders } from "@/types";

export default function Connectivity() {
  const router = useRouter();
  // const AvailableBanks = ["Binance", "Kuda", "Paxful", "Moniepoint"];
  // const AllBanks = ["Providus", "Kuda", "Moniepoint"];
  const { loggedIn } = useStore();
  console.log("user logged in?", loggedIn);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [availableProviders, setAvailableProviders] = useState<IProviders[]>(
    []
  );

  function handleConnect(bankName: string) {
    // if (AllBanks.includes(bankName))
    //   return router.push(`/dashboard/connectivity/bank/${bankName}`);
    // return router.push(`/dashboard/connectivity/wallet/${bankName}`);
  }

  async function getAllProviders() {
    setIsLoading(true);
    try {
      await apiCAll({
        url: "provider/available",
        method: "get",
        sCB(res) {
          setAvailableProviders(res.data);
        },
      });
    } catch (error) {
      console.error(error, "this is the error");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllProviders();
  }, []);

  return (
    <section className="w-full h-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 pt-10 lg:pt-20 px-9">
        {/* {bankList.map((bank, index) => (
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
        ))} */}
        {availableProviders.map((providers, i) => (
          <div
            key={i}
            className="w-full p-5 space-y-8 flex flex-col items-center border border-border-connect bg-bank-bg"
          >
            <div className="w-full max-w-[16.25rem] relative h-[3.438rem]">
              {/* Addd bank image */}
              {/* <Image src={bank.logo} alt={"bank logo"} fill /> */}
            </div>
            <div>{providers.name}</div>
            <Button
              // onClick={() => handleConnect(bank.name)}
              variant={"outline"}
              disabled={
                providers.status === "COMING_SOON" ||
                providers.status === "ACTIVE"
              }
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
