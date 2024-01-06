"use client";

import apiCAll from "@/lib/apiCall";
import { saveToken } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { useForm, Form, set } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import * as yup from "yup";
import { OTP } from "../otp-input";
import Link from "next/link";
import { notify } from "@/components/ui/toast";

import ChangePassword from "../Dashboard/settings/edit-password-form";
import ResetPassword from "./reset-password";
import Image from "next/image";
import { Dialog, DialogClose, DialogContent } from "@/components/ui/dialog";
import { Separator } from "../ui/separator";

export default function Otp() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);
  const [code, setCode] = React.useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = React.useState<string>(
    searchParams.get("email") as string
  );

  /*
   *
   *
   *
   *
   */
  async function handleSubmitOTP() {
    setIsLoading(true);
    if (code.length < 6) return notify.error("Code is less that 6 digits!");


    setOpen(true)
    setIsLoading(false)
  }

  async function handleResendCode() {
    setIsLoading(true);
    if (!email || !searchParams.get("email"))
      return notify.error("No email provided!!");

    await apiCAll({
      url: "/auth/verify/email/code/resend",
      method: "POST",
      data: { email },
      toast: true,
      sCB(res) {
        console.log(res);
        setIsLoading(false);
      },
      eCB(res) {
        setIsLoading(false);
      },
    });
  }
  /*
   *
   *
   *
   *
   */
  return (
    <>
      <main className="bg-primary-dashboard text-white p-5 md:p-10 md:w-[30rem] flex flex-col items-center text-left  md:text-center">
        <div>
          <h3 className="text-4xl font-bold">Verify your account</h3>
          <p className="mt-2 opacity-60">
            We sent you a verification code to your mail at fiyin@gmail.com
          </p>
        </div>

        <div className="w-auto mt-[2.625rem]">
          {/* Will need this in the other otp */}
          <OTP code={code} setCode={setCode} error={false} />
        </div>

        <Button
          onClick={handleSubmitOTP}
          isLoading={isLoading}
          variant={"primary"}
          className="w-full py-3 mt-6"
          size={"lg"}
        >
          Verify code
        </Button>

        <div className="mt-12 flex justify-center gap-x-1">
          <span className="text-center block opacity-25">
            Don&apos;t receive code?
          </span>
          <button
            onClick={handleResendCode}
            className="text-[#6E5BFF] block text-center opacity-100"
          >
            Resend Code
          </button>
        </div>
      </main>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className=" text-left text-white">
          <div className="inline-flex justify-between">
            <p className="font-bold text-white text-xl">Change password</p>
            <DialogClose asChild>
              <Image
                src={"/dashboard/settings/x.svg"}
                alt="cancel"
                width={45}
                height={45}
              />
            </DialogClose>
          </div>

          <Separator className="mb-5 mt-3 opacity-40 h-[0.038rem]" />

          <ResetPassword setOpen={setOpen} credential={{ email, code }} />
        </DialogContent>
      </Dialog>
    </>
  );
}
