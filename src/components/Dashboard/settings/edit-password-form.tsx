
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
import { useToast } from "@/components/ui/use-toast";
import { IBankDetailsProps } from "@/types";
import Link from "next/link";

const Schema = yup.object().shape({
      oldPassword: yup.string().required("Old password is required"),
      newPassword: yup.string()
            .required("Password is required")
            .min(8, "Password must be at least 8 characters")
            .max(20, "Password cannot exceed 20 characters")
            .matches(
                  /^(?=.*[A-Z])(?=.*\d).+$/,
                  "Password must contain at least one  uppercase and one number"
            ),
      confirmPassword: yup.string()
            .required("Confirm password is required")
            .oneOf([yup.ref("newPassword"), ""], "Passwords must match"),

});

type SchemaTypes = yup.InferType<
      typeof Schema
>;

export default function ChangePassword()
{
      const { toast } = useToast();
      const defaultValues: SchemaTypes = {
            oldPassword: "",
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
                                    name="oldPassword"
                                    render={({ field }) => (
                                          <FormItem>
                                                <FormLabel htmlFor="oldPassword">Old Password</FormLabel>
                                                <FormControl>
                                                      <PasswordInput
                                                            // type="password"

                                                            id="oldPassword"
                                                            placeholder="8 characters minimum"
                                                            {...field}
                                                            error={form.formState.errors?.oldPassword?.message}
                                                      />
                                                </FormControl>
                                                <FormMessage />
                                          </FormItem>
                                    )}
                              />

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
                                                <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
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
                        <Button variant={"primary"} className="w-full mt-[3rem]">
                              Save changes
                        </Button>

                  </form>
            </Form>

      );
}
