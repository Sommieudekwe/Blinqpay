"use client";

import { Button } from "@/components/ui/button";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import React from "react";

import { IBankDetailsProps } from "@/types";
import { IBankDetails } from "@/app/dashboard/connectivity/bank/[id]/page";
import { formatPhone } from "@/lib/utils";

const ConnectionDetailsSchema = yup.object().shape({
	email: yup.string().required("Email is required!"),
	accountNumber: yup.string().required("Account is required"),
	phone: yup.string().required("Phone number is required"),
});

type ConnectionDetailsSchemaTypes = yup.InferType<typeof ConnectionDetailsSchema>;

interface IBankDetailsForm {
	bankDetails: IBankDetails;
	setBankDetails:  React.Dispatch<React.SetStateAction<IBankDetails>>;
}

export default function BankDetailsForm({
	setStep,
	bankDetails,
	setBankDetails,
}: Pick<IBankDetailsProps, "setStep"> & IBankDetailsForm) {

	const defaultValues: ConnectionDetailsSchemaTypes = {
		email: "",
		accountNumber: "",
		phone: "",
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

	async function onSubmit(values: ConnectionDetailsSchemaTypes) {
            setBankDetails({
                 ...bankDetails,
                 ...values,
                 phone: formatPhone(values.phone)
            })
            setStep(2);
	}
	/*
	 *
	 *
	 *
	 *
	 */
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-[3.375rem] ">
				<div className="space-y-[1.75rem]">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel htmlFor="api_key">API Key</FormLabel> */}
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

					<FormField
						control={form.control}
						name="accountNumber"
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel htmlFor="secret_key">API Key</FormLabel> */}
								<FormControl>
									<Input
										id="accountNumber"
										placeholder="Account Number"
										{...field}
										error={form.formState.errors?.accountNumber?.message}
									/>
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input
										id="phoneNumber"
										placeholder="Phone Number"
										{...field}
										error={form.formState.errors?.phone?.message}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<Button variant={"primary"} className="w-full mt-[3rem]">
					Next
				</Button>
			</form>
		</Form>
	);
}
