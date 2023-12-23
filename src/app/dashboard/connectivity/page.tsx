"use client"

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { bankList } from "./constants";


export default function Connectivity()
{

  const router = useRouter()


  const AvailableBanks = ["Binance", "Kuda", "Paxful"]

  function handleConnect(bankName: string)
  {
    return router.push(`/dashboard/connectivity/${bankName}`)
  }


  return (
    <section className="w-full h-full">

      <div className="w-full grid grid-cols-3 gap-6 mt-[6.15rem]">
        {
          bankList.map((bank, index) => (
            <div key={index} className="w-full p-5 space-y-8 flex flex-col items-center border border-border-connect bg-bank-bg">
              <div className="w-full max-w-[16.25rem] relative h-[3.438rem]">
                <Image src={bank.logo} alt={"bank logo"} fill />
              </div>

              <Button onClick={() => handleConnect(bank.name)} variant={'outline'} disabled={!AvailableBanks.includes(bank.name)}>
                {AvailableBanks.includes(bank.name) ? "Connect" : "Comming Soon"}
              </Button>
            </div>
          ))
        }
      </div>

    </section>
  );
}
