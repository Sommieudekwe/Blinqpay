"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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
import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast/use-toast";
import { bankList } from "@/app/dashboard/connectivity/constants";

const ConnectionDetailsSchema = yup.object().shape({
  api_key: yup.string().required("Api key is required!"),
  secret_key: yup.string().required("Secret key is required"),
  user_id: yup.string().required("UserID is required"),
  agree: yup.boolean().required("Agree to terms"),
});

type ConnectionDetailsSchemaTypes = yup.InferType<
  typeof ConnectionDetailsSchema
>;

export default function Connectivity() {
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const { id } = useParams();
  const { toast } = useToast();
  const defaultValues: ConnectionDetailsSchemaTypes = {
    api_key: "",
    secret_key: "",
    user_id: "",
    agree: false,
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
  function getBankLogo(bankName: string): string {
    const bank = bankList.find((bank) => bank.name === bankName);
    return bank?.logo as string;
  }

  async function onSubmit(values: ConnectionDetailsSchemaTypes) {
    if (!values.agree)
      return toast({
        variant: "destructive",
        title: "Agree to terms and conditions!",
      });

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
      <div className="max-w-[35rem] mx-auto rounded-xl bg-onboard-bg border border-white py-10 mb-4 px-4 md:px-[1.875rem] border-opacity-25">
        {/* logo */}
        <div className="w-full max-w-[16.25rem] relative h-[3.438rem] mx-auto">
          <Image src={getBankLogo(id as string)} alt={"bank logo"} fill />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mt-[3.375rem] "
          >
            <div className="space-y-[1.75rem]">
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

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="secret_key"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel htmlFor="secret_key">API Key</FormLabel> */}
                    <FormControl>
                      <Input
                        id="secret_key"
                        placeholder="Secret Key"
                        {...field}
                        error={form.formState.errors?.secret_key?.message}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="user_id"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        id="user_id"
                        placeholder="User ID"
                        {...field}
                        error={form.formState.errors?.user_id?.message}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem className="flex space-x-3 space-y-0">
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
            </div>
            <Button variant={"primary"} className="w-full mt-[4rem]">
              Submit
            </Button>
            <p className="font-medium text-typography text-center mt-6">
              Can’t find your secret key, API Key or User ID?{" "}
              <Link href={"/"} className="text-button-primary">
                Watch this
              </Link>
            </p>
          </form>
        </Form>
      </div>

      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className=" text-center text-white">
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
