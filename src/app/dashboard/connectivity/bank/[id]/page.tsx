"use client";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast/use-toast";
import { bankList } from "@/app/dashboard/connectivity/constants";
import BankDetailsForm from "../../../../../components/Dashboard/connectivity/details-form";
import BankAPIDetailsForm from "../../../../../components/Dashboard/connectivity/apikey-form";

export default function Connectivity() {
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [step, setStep] = React.useState<number>(1);
  const { id } = useParams();
  /*
   *
   *
   *
   *
   */
  function getBankLogo(bankName: string): string {
    const bank = bankList.find((bank) => bank.name === bankName);
    return bank?.logo as string;
  }

  function handleConnectToBank() {
    setIsSuccess(true);
  }
  /*
   *
   *
   *
   *
   */
  return (
    <section className="w-full h-full lg:pt-16">
      <div className="pagination w-full flex justify-center">
        <div className="w-[18.75rem] flex justify-between">
          <div className={cn("h-1 w-[8.75rem] bg-white")}></div>
          <div
            className={cn(
              "h-1 w-[8.75rem] bg-white",
              step === 1 ? "opacity-10" : "opacity-100"
            )}
          ></div>
        </div>
      </div>
      <div className="max-w-[35rem] mx-auto rounded-xl bg-onboard-bg border border-white py-10 px-4 md:px-[1.875rem] border-opacity-25 mt-16 mb-4 md:mt-[6rem]">
        {/* logo */}
        <div className="w-full max-w-[16.25rem] relative h-[3.438rem] mx-auto">
          <Image src={getBankLogo(id as string)} alt={"bank logo"} fill />
        </div>

        {step === 1 ? (
          <BankDetailsForm setStep={setStep} />
        ) : (
          <BankAPIDetailsForm
            setStep={setStep}
            handleConnectToBank={handleConnectToBank}
          />
        )}
      </div>
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="text-center text-white">
          <Image
            src={"/dashboard/success.svg"}
            alt="success icon"
            width={88}
            height={88}
            className="mx-auto"
          />

          <div className="space-y-3 mt-4">
            <p className="opacity-60 font-aeonikRegular text-lg">
              API Connected
            </p>

            <p className="font-bold text-3xl">Successfully</p>
          </div>

          <Link
            href={"/dashboard"}
            className={cn(
              "w-full mt-[1.938rem]",
              buttonVariants({ variant: "primary" })
            )}
          >
            Go to Dashboard
          </Link>
        </DialogContent>
      </Dialog>
    </section>
  );
}
