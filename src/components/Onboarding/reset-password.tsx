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
import { Input, PasswordInput } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { useToast } from "@/components/ui/toast/use-toast";
import { IBankDetailsProps } from "@/types";
import Link from "next/link";
import apiCAll from "@/lib/apiCall";
import { useRouter } from "next/navigation";

const Schema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .matches(
      /^(?=.*[A-Z])(?=.*\d).+$/,
      "Password must contain at least one  uppercase and one number"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newPassword"), ""], "Passwords must match"),
});

type SchemaTypes = yup.InferType<typeof Schema>;

interface IResectPassword
{
  credential: { email: string; code: string };
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ResetPassword({ credential, setOpen }: IResectPassword)
{
  const { push } = useRouter();
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const defaultValues: SchemaTypes = {
    newPassword: "",
    confirmPassword: "",
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
    setIsLoading(true)
    const resetDetails = {
      ...credential,
      password: values.newPassword
    }

    await apiCAll({
      url: "/auth/password/reset",
      method: "POST",
      data: resetDetails,
      toast: true,
      sCB(res)
      {

        setIsLoading(false)
        console.log(res);
        setOpen(false)
        return push("/onboarding")

      },
      eCB(res)
      {
        setIsLoading(false)

      },
    })
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
            name="newPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword">New Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    // type="password"

                    id="newPassword"
                    placeholder="8 characters minimum"
                    {...field}
                    error={form.formState.errors?.newPassword?.message}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword">
                  Confirm Password
                </FormLabel>
                <FormControl>
                  <PasswordInput
                    // type="password"
                    id="confirmPassword"
                    placeholder="8 characters minimum"
                    {...field}
                    error={form.formState.errors?.confirmPassword?.message}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button isLoading={isLoading} variant={"primary"} className="w-full mt-[3rem]">
        Reset
        </Button>
      </form>
    </Form>
  );
}
