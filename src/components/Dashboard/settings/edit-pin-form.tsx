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
import { Input, PasswordInput } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { IBankDetailsProps } from "@/types";
import Link from "next/link";

const Schema = yup.object().shape({
  oldPin: yup.string().required("Old pin is required"),
  newPin: yup
    .string()
    .required("Password is required")
    .min(4, "Password must be at least 4 characters")
    .max(5, "Password cannot exceed 5 characters"),

  confirmPin: yup
    .string()
    .required("Confirm Pin is required")
    .oneOf([yup.ref("newPin"), ""], "Passwords must match"),
});

type SchemaTypes = yup.InferType<typeof Schema>;

export default function ChangePin() {
  const { toast } = useToast();
  const defaultValues: SchemaTypes = {
    oldPin: "",
    newPin: "",
    confirmPin: "",
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
            name="oldPin"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="oldPin">Old Pin</FormLabel>
                <FormControl>
                  <PasswordInput
                    // type="password"

                    id="oldPin"
                    placeholder="8 characters minimum"
                    {...field}
                    error={form.formState.errors?.oldPin?.message}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="newPin"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPin">New Pin</FormLabel>
                <FormControl>
                  <PasswordInput
                    // type="password"

                    id="newPin"
                    placeholder="8 characters minimum"
                    {...field}
                    error={form.formState.errors?.newPin?.message}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPin"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPin">Confirm Pin</FormLabel>
                <FormControl>
                  <PasswordInput
                    // type="password"
                    id="confirmPin"
                    placeholder="8 characters minimum"
                    {...field}
                    error={form.formState.errors?.confirmPin?.message}
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
