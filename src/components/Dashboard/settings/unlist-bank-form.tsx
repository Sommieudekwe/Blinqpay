
"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import
{
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
import { useToast } from "@/components/ui/use-toast";
import { IBankDetailsProps } from "@/types";
import Link from "next/link";
import { Textarea } from "@/components/ui/textarea";

const Schema = yup.object().shape({
      bankName: yup.string().required("Bank name is required"),
      reason: yup.string(),

});

type SchemaTypes = yup.InferType<
      typeof Schema
>;

export default function UnlistBank()
{
      const { toast } = useToast();
      const defaultValues: SchemaTypes = {
            bankName: "",
            reason: "",
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
      async function onSubmit(values: SchemaTypes)
      {
            console.log(values)
      }
      /*
       *
       *
       *
       *
       */
      return (

            <Form {...form}>
                  <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full"
                  >
                        <div className="space-y-3">
                              <FormField
                                    control={form.control}
                                    name="bankName"
                                    render={({ field }) => (
                                          <FormItem>
                                                <FormLabel htmlFor="bankName">Type Bank Name</FormLabel>
                                                <FormControl>
                                                      <Input
                                                            id="bankName"
                                                            placeholder="Bank Name"
                                                            {...field}
                                                            error={form.formState.errors?.bankName?.message}
                                                      />
                                                </FormControl>
                                                <FormMessage />
                                          </FormItem>
                                    )}
                              />

                              <FormField
                                    control={form.control}
                                    name="reason"
                                    render={({ field }) => (
                                          <FormItem>
                                                <FormLabel htmlFor="accountNunmber">Reason</FormLabel>
                                                <FormControl>

                                                      <Textarea
                                                            className="resize-none"
                                                            {...field}
                                                            id="accountName"
                                                            placeholder="Add a Reason"
                                                            {...field}
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
