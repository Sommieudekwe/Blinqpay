"use client";
import Image from "next/image";
import Link from "next/link";
import * as yup from "yup";
import { Input, PasswordInput } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Button, buttonVariants } from "../ui/button";
import { cn, saveToken } from "@/lib/utils";
import React from "react";
import apiCAll from "@/lib/apiCall";
import { notify } from "../ui/toast";
import { useRouter } from "next/navigation";

const Schema = yup.object().shape({
  firstName: yup.string().required("First name is required!"),
  lastName: yup.string().required("Last name is required!"),
  referral: yup.string(),
  email: yup.string().required("Email is required!"),
  password: yup
    .string()
    .required("Password is required")
    .min(12, "Password must be at least 8 characters")
    .max(20, "Password cannot exceed 20 characters")
    .matches(/^(?=.*[A-Z])(?=.*\d).+$/, "Password must contain at least one  uppercase and one number"),
  phoneNumber: yup.string().required("Phone number is required"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), ""], "Passwords must match"),
});



type SchemaTypes = yup.InferType<typeof Schema>;

const defaultValues: SchemaTypes = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  confirmPassword: "",
};

export default function Register()
{
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
  async function onSubmit(values: SchemaTypes)
  {

    let requiredValues = {
      lastName: values.lastName,
      firstName: values.firstName,
      email: values.email,
      phone: values.phoneNumber,
      password: values.password,
    };
    try
    {
      setIsLoading(true);

      await apiCAll({
        url: "/auth/create",
        method: "POST",
        data: requiredValues,
        sCB(res)
        {

          if(res.message === "Success"){
            setIsLoading(false);
            router.push("/onboarding");
          }
          
        },
        eCB(res)
        {
          console.log(res.message, "ecb");
          setIsLoading(false);
        },
        toast: true,
      });
    } catch (error)
    {
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
    <div className="lg:grid grid-cols-2 gap-x-20 bg-primary text-white lg:px-24 xl:px-36 min-h-screen items-center pt-4 g:pt-0">
      {/* Illustration */}
      <div className="hidden lg:block">
        <Image src="/onboarding/signup.svg" alt="register" width={517} height={514} />
      </div>

      {/* Get started */}
      <div className="w-full lg:max-w-[35rem] mx-auto lg:rounded-xl lg:bg-onboard-bg lg:border border-white p-5 border-opacity-25">
        <div>
          <h3 className="text-4xl font-bold">Get Started</h3>
          <p className="opacity-60 mt-2">Create an account to start your journey</p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full mt-[3.375rem]"
          >


            <div className="lg:flex gap-x-6 w-full">

              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="firstName" className="text-sm">First Name</FormLabel>
                    <FormControl>
                      <Input
                        id="firstName"
                        placeholder="First name"
                        {...field}
                        error={form.formState.errors?.firstName?.message}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="lastName" className="text-sm">Last Name</FormLabel>
                    <FormControl>
                      <Input
                        id="lastName"
                        placeholder="Last name"
                        {...field}
                        error={form.formState.errors?.lastName?.message}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="mt-6">
                  <FormLabel htmlFor="email" className="text-sm">Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Email"
                      {...field}
                      error={form.formState.errors?.email?.message}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

  
            <div className="gap-6 w-full grid grid-cols-2 mt-6">
              <FormField
                control={form.control}
                name="phoneNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="referral" className="text-sm">Phone Number</FormLabel>

                    <FormControl>
                      <Input
                        id="phoneNumber"
                        placeholder="+234"
                        {...field}
                        error={form.formState.errors?.phoneNumber?.message}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="referral"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel htmlFor="referral" className="text-sm">Referral Code</FormLabel>
                    <FormControl>
                      <Input
                        id="referral"
                        placeholder="(optional)"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="password">Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        // type="password"

                        id="password"
                        placeholder="8 characters minimum"
                        {...field}
                        error={form.formState.errors?.password?.message}
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

            <div className="max-w-[23rem] mx-auto text-center mt-10">
              <span className="opacity-60">By clicking continue, you accept Blinqpay&apos;s</span>
              <span> Terms of Service</span>
              <span className="opacity-60"> and </span>
              <span>Privacy Policy</span>.
            </div>

            <div className="mt-10 text-center space-y-5">
              <div className="w-ful">
                <Button isLoading={isLoading} variant={'primary'} className="w-full py-3" size={'lg'}>
                  Sign Up
                </Button>
              </div>

              <div className="w-full mt-4">
                <Link
                  href="/onboarding"
                  className={cn("w-full", buttonVariants({ variant: "default", size: "lg" }))}
                >
                  Log In
                </Link>
              </div>
            </div>


          </form>
        </Form>

      </div>
    </div>
  );
}
