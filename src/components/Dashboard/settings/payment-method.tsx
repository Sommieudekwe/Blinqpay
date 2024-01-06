"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { useToast } from "@/components/ui/toast/use-toast";
import { IBankDetailsProps } from "@/types";
import Link from "next/link";
import Select from "@/components/ui/select";

const Schema = yup.object().shape({
  bankName: yup.string().required("Bank name is required"),
  accountName: yup.string().required("Account name is required"),
  accountNunmber: yup.string().required("Account number is required"),
});

type SchemaTypes = yup.InferType<typeof Schema>;

const Banks = [
  {
    label: "Kuda",
    value: "kuda",
  },
  {
    label: "Moniepoint",
    value: "Moniepoint",
  },

  {
    label: "Providus Bank",
    value: "Providus Bank",
  },
];

export default function PayMethodForm() {
  const { toast } = useToast();
  const defaultValues: SchemaTypes = {
    bankName: "",
    accountName: "",
    accountNunmber: "",
  };
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
    console.log(values);
  }
  /*
   *
   *
   *
   *
   */
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="bankName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="bankName">Bank Name</FormLabel>
                <FormControl>
                  {/* <Input
                        id="bankName"
                        placeholder="Bank Name"
                        {...field}
                        error={form.formState.errors?.bankName?.message}
                  /> */}
                  <Select
                    onChange={field.onChange}
                    value={field.value}
                    placeholder={"Choose"}
                    options={Banks}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountName"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="accountNunmber">Account Number</FormLabel>
                <FormControl>
                  <Input
                    id="accountName"
                    placeholder="Account Number"
                    {...field}
                    error={form.formState.errors?.accountName?.message}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="accountNunmber"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="accountNunmber">Account Number</FormLabel>
                <FormControl>
                  <Input
                    id="accountNunmber"
                    placeholder="Account Number"
                    {...field}
                    error={form.formState.errors?.accountNunmber?.message}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button variant={"primary"} className="w-full mt-[3rem]">
          Save changes
        </Button>
      </form>
    </Form>
  );
}
