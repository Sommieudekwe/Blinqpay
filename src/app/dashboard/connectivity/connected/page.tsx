"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStore } from "@/context/strore";
import { notify } from "@/components/ui/toast";
import { bankList } from "../constants";
import { useEffect, useState } from "react";
import apiCAll from "@/lib/apiCall";
import { IbankList } from "@/types";

export default function Connected()
{
  const router = useRouter();
  const { loggedIn } = useStore();
  console.log("user logged in?", loggedIn);
  const [data, setData] = useState<IbankList[]>([])
  /*
   *
   *
   *
   *
   */
  async function getConnectedBanl()
  {
    try
    {
      await apiCAll({
        url: "/exchange/all",
        method: "get",
        sCB(res)
        {
          console.log(res);
          const connectedBank = bankList.filter((bank) => res.data.some((connectedBank: any) => bank.name.toUpperCase() === connectedBank.name))
          setData(connectedBank)
        },
      })
    } catch (error)
    {
      console.log(error, "this is the error!!");
    }
  }
  /*
   *
   *
   *
   *
   */
  useEffect(() =>
  {
    getConnectedBanl()
  }, [router])
  /*
 *
 *
 *
 *
 */
  return data.length > 0 ?  (
    <section className="w-full h-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 pt-10 lg:pt-20 px-9">
        {data.map((bank, index) => (
          <div
            key={index}
            className="w-full p-5 space-y-8 flex flex-col items-center border border-border-connect bg-bank-bg"
          >
            <div className="w-full max-w-[16.25rem] relative h-[3.438rem]">
              <Image src={bank.logo} alt={"bank logo"} fill />
            </div>

            <Button
              variant={"outline"}
              disabled={true}
            >
              Connected
            </Button>
          </div>
        ))}
      </div>
    </section>
  ) : null;
}
