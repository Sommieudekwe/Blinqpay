"use client";

import apiCAll from "@/lib/apiCall";
import { saveToken } from "@/lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import * as yup from "yup";

const Schema = yup.object().shape({
  email: yup.string().required("Email is required!"),
});

type SchemaTypes = yup.InferType<typeof Schema>;

const defaultValues: SchemaTypes = {
  email: "",
};

export default function ForgetPassword() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const router = useRouter();

  const form = useForm<SchemaTypes>({
    resolver: yupResolver(Schema),
    defaultValues,
    mode: "all",
  });
  /*
   *
   *
   *
   *
   */
  async function onSubmit(values: SchemaTypes) {
    try {
      setIsLoading(true);

      await apiCAll({
        url: "/auth/password/forgot",
        method: "POST",
        data: values,
        sCB(res) {
          console.log(res);
          setIsLoading(false);
          router.push(`/auth/otp?email=${values.email}`);
        },
        eCB(res) {
          console.log(res.message, "ecb");
          setIsLoading(false);
        },
        toast: true,
      });
    } catch (error) {
      console.log(error, "==> error");
    }
  }
  /*
   *
   *
   *
   *
   */
  return (
    <main className="bg-primary-dashboard text-white p-5 md:p-10 md:w-[35rem] shadow-xl">
      <div>
        <h3 className="text-2xl md:text-4xl">Find your BlinqPag account</h3>
        <p className="mt-2 opacity-60">
          Enter the email, phone number, or username associated with your
          account to change your password.
        </p>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full mt-[3.2rem]"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email" className="text-sm">
                  Email
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-auth-input"
                    type="email"
                    id="email"
                    placeholder="Email or Phone Number"
                    {...field}
                    error={form.formState.errors?.email?.message}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="mt-16 lg:mt-[7.813rem]">
            <Button
              isLoading={isLoading}
              variant={"primary"}
              className="w-full py-3"
              size={"lg"}
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}
