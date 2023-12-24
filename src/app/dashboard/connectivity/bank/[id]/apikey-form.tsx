
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
      FormMessage,
} from "@/components/ui/form";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { IBankDetailsProps } from "@/types";

const ConnectionDetailsSchema = yup.object().shape({
      api_key: yup.string().required("Api key is required!"),
      tracking: yup.string().required("Tracking reference is required"),
      narration: yup.string().required("Naration is required"),
      agree: yup.boolean().required("Agree to terms"),

});

type ConnectionDetailsSchemaTypes = yup.InferType<
      typeof ConnectionDetailsSchema
>;

export default function BankAPIDetailsForm({ setStep, handleConnectToBank }: IBankDetailsProps)
{
      const { toast } = useToast();
      const defaultValues: ConnectionDetailsSchemaTypes = {
            api_key: "",
            tracking: "",
            narration: "",
            agree: false
      };

      const form = useForm<ConnectionDetailsSchemaTypes>({
            resolver: yupResolver(ConnectionDetailsSchema),
            defaultValues,
            mode: "all",
      });
      /*
       *
       *
       *
       *
       */
      async function onSubmit(values: ConnectionDetailsSchemaTypes)
      {
            if (!values.agree)
                  return toast({
                        variant: "destructive",
                        title: "Agree to terms and conditions!",
                  });

            handleConnectToBank();
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
                        className="w-full mt-[3.375rem] "
                  >
                        <div className="space-y-6">
                              <FormField
                                    control={form.control}
                                    name="api_key"
                                    render={({ field }) => (
                                          <FormItem>
                                                {/* <FormLabel htmlFor="api_key">API Key</FormLabel> */}
                                                <FormControl>
                                                      <Input
                                                            id="api_key"
                                                            placeholder="API Key"
                                                            {...field}
                                                            error={form.formState.errors?.api_key?.message}
                                                      />
                                                </FormControl>
                                                <FormDescription>
                                                      Can’t find your API Key? Watch this video
                                                </FormDescription>
                                                <FormMessage />
                                          </FormItem>
                                    )}
                              />

                              <FormField
                                    control={form.control}
                                    name="tracking"
                                    render={({ field }) => (
                                          <FormItem>
                                                {/* <FormLabel htmlFor="secret_key">API Key</FormLabel> */}
                                                <FormControl>
                                                      <Input
                                                            id="tracking"
                                                            placeholder="SVirtual Account Tracking Reference"
                                                            {...field}
                                                            error={form.formState.errors?.tracking?.message}
                                                      />
                                                </FormControl>
                                                <FormDescription>
                                                      Don’t have a tracking reference? Generate here
                                                </FormDescription>
                                                <FormMessage />
                                          </FormItem>
                                    )}
                              />

                              <FormField
                                    control={form.control}
                                    name="narration"
                                    render={({ field }) => (
                                          <FormItem>
                                                <FormControl>
                                                      <Input
                                                            id="narration"
                                                            placeholder="Transaction Narration"
                                                            {...field}
                                                            error={form.formState.errors?.narration?.message}
                                                      />
                                                </FormControl>
                                                <FormMessage />
                                          </FormItem>
                                    )}
                              />


                        </div>
                        <Button variant={"primary"} className="w-full mt-[3.7rem]">
                              Submit
                        </Button>
                        <FormField
                              control={form.control}
                              name="agree"
                              render={({ field }) => (
                                    <FormItem className="flex space-x-3 space-y-0 mt-6">
                                          <FormControl>
                                                <Checkbox
                                                      checked={field.value}
                                                      onCheckedChange={field.onChange}
                                                      className="rounded-full bg-button-connect"
                                                />
                                          </FormControl>
                                          <FormDescription className="mt-0">
                                                Terms and conditions guiding this information privacy
                                                policy and all will be here and by clicking submit you
                                                agree to this privacy policy
                                          </FormDescription>
                                    </FormItem>
                              )}
                        />
                  </form>
            </Form>

      );
}
