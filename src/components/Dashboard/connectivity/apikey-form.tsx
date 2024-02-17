"use client";

import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Form, FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form";
import * as yup from "yup";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import React from "react";
import { useToast } from "@/components/ui/toast/use-toast";
import { IBankDetailsProps } from "@/types";
import Link from "next/link";
import { notify } from "@/components/ui/toast";
import { IBankDetails } from "@/app/dashboard/connectivity/bank/[id]/page";

const ConnectionDetailsSchema = yup.object().shape({
	apiKey: yup.string().required("Api key is required!"),
	narration: yup.string().required("Naration is required"),
	agree: yup.boolean().required("Agree to terms"),
	accountReference: yup.string().required("accountReference reference is required"),
});

const MonifyDetailsSchema = yup.object().shape({
	apiKey: yup.string().required("Api key is required!"),
	narration: yup.string().required("Naration is required"),
	agree: yup.boolean().required("Agree to terms"),
	apiSecret: yup.string().required("Secret key is required"),
	accountNumber: yup.string().required("Phone number is required"),
});

const BlocDetailsSchema = yup.object().shape({
	apiSecretKey: yup.string().required("Api secret key is required!"),
	narration: yup.string().required("Naration is required"),
	agree: yup.boolean().required("Agree to terms"),
	apiPublicKey: yup.string().required("Api public key is required"),
});

// const KudaDetailsSchema = yup.object().shape({
//   apiKey: yup.string().required("Api key is required!"),
//   narration: yup.string().required("Naration is required"),
//   agree: yup.boolean().required("Agree to terms"),
//   accountReference: yup
//   .string()
//   .required("accountReference reference is required"),
// });

export type ConnectionDetailsSchemaTypes = yup.InferType<typeof ConnectionDetailsSchema>;

export type MonniefyDetailsSchemaTypes = yup.InferType<typeof MonifyDetailsSchema>;

export type BlocDetailsSchemaTypes = yup.InferType<typeof BlocDetailsSchema>;

interface IBankDetailsForm {
	bankDetails: IBankDetails;
	isLoading: boolean;
	setBankDetails: React.Dispatch<React.SetStateAction<IBankDetails>>;
}

export default function BankAPIDetailsForm({
	isLoading,
	handleConnectToBank,
	setBankDetails,
	bankDetails,
}: IBankDetailsProps & IBankDetailsForm) {
	const defaultValues: ConnectionDetailsSchemaTypes = {
		apiKey: bankDetails.apiKey || "",
		accountReference: bankDetails.accountReference || "",
		narration: bankDetails.narration || "",
		agree: false,
		// secret_key: ""
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
		if (!values.agree) {
			return notify.error("Agree to terms and conditions!iiii");
		}
		//  setBankDetails({
		//             ...bankDetails,
		//             apiKey: values.apiKey,
		//             accountReference: values.accountReference,
		//             narration: values.narration
		//        })
		handleConnectToBank(values);
	}
	/*
	 *
	 *
	 *
	 *
	 */
	console.log(form.formState.errors, "form.errors");

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-[3.375rem] ">
				<div className="space-y-6">
					<FormField
						control={form.control}
						name="apiKey"
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel htmlFor="apiKey">API Key</FormLabel> */}
								<FormControl>
									<Input id="apiKey" placeholder="API Key" {...field} error={form.formState.errors?.apiKey?.message} />
								</FormControl>
								<FormDescription>
									Can’t find your API Key?
									<Link href={"/"} className="text-button-primary">
										Watch this video
									</Link>
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="accountReference"
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel htmlFor="secret_key">API Key</FormLabel> */}
								<FormControl>
									<Input
										id="accountReference"
										placeholder="SVirtual Account accountReference Reference"
										{...field}
										error={form.formState.errors?.accountReference?.message}
									/>
								</FormControl>
								<FormDescription>
									Don’t have a accountReference reference?
									<Link href={"/"} className="text-button-primary">
										Watch this video
									</Link>
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
				<Button isLoading={isLoading} variant={"primary"} className="w-full mt-[3.7rem]">
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
								Terms and conditions guiding this information privacy policy and all will be here and by clicking submit
								you agree to this privacy policy
							</FormDescription>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}

export function MofifyDetailsForm({
	isLoading,
	handleConnectToBank,
	setBankDetails,
	bankDetails,
}: IBankDetailsProps & IBankDetailsForm) {
	const defaultValues: MonniefyDetailsSchemaTypes = {
		apiKey: "",
		narration: "",
		agree: false,
		accountNumber: "",
		apiSecret: "",
	};

	const form = useForm<MonniefyDetailsSchemaTypes>({
		resolver: yupResolver(MonifyDetailsSchema),
		defaultValues,
		mode: "all",
	});
	/*
	 *
	 *
	 *
	 *
	 */
	async function onSubmit(values: MonniefyDetailsSchemaTypes) {
		if (!values.agree) {
			return notify.error("Agree to terms and conditions!");
		}
		handleConnectToBank(values);
	}
	/*
	 *
	 *
	 *
	 *
	 */
	console.log(form.formState.errors, "form.errors");

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-[3.375rem] ">
				<div className="space-y-6">
					<FormField
						control={form.control}
						name="apiKey"
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel htmlFor="apiKey">API Key</FormLabel> */}
								<FormControl>
									<Input id="apiKey" placeholder="API Key" {...field} error={form.formState.errors?.apiKey?.message} />
								</FormControl>
								<FormDescription>
									Can’t find your API Key?
									<Link href={"/"} className="text-button-primary">
										Watch this video
									</Link>
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="apiSecret"
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel htmlFor="secret_key">API Key</FormLabel> */}
								<FormControl>
									<Input
										id="apiSecret"
										placeholder="Secret Key"
										{...field}
										error={form.formState.errors?.apiSecret?.message}
									/>
								</FormControl>

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

					<FormField
						control={form.control}
						name="accountNumber"
						render={({ field }) => (
							<FormItem>
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
				</div>
				<Button isLoading={isLoading} variant={"primary"} className="w-full mt-[3.7rem]">
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
								Terms and conditions guiding this information privacy policy and all will be here and by clicking submit
								you agree to this privacy policy
							</FormDescription>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}

export function BlocDetailsForm({
	isLoading,
	handleConnectToBank,
	setBankDetails,
	bankDetails,
}: IBankDetailsProps & IBankDetailsForm) {
	const defaultValues: BlocDetailsSchemaTypes = {
		apiPublicKey: "",
		narration: "",
		agree: false,
		apiSecretKey: "",
	};

	const form = useForm<BlocDetailsSchemaTypes>({
		resolver: yupResolver(BlocDetailsSchema),
		defaultValues,
		mode: "all",
	});
	/*
	 *
	 *
	 *
	 *
	 */
	async function onSubmit(values: BlocDetailsSchemaTypes) {
		if (!values.agree) {
			return notify.error("Agree to terms and conditions!iiii");
		}
		handleConnectToBank(values);
	}
	/*
	 *
	 *
	 *
	 *
	 */
	// console.log(form.formState.errors, "form.errors");

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="w-full mt-[3.375rem] ">
				<div className="space-y-6">
					<FormField
						control={form.control}
						name="apiPublicKey"
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel htmlFor="apiKey">API Key</FormLabel> */}
								<FormControl>
									<Input
										id="apiPublicKey"
										placeholder="API Key"
										{...field}
										error={form.formState.errors?.apiPublicKey?.message}
									/>
								</FormControl>
								<FormDescription>
									Can’t find your API Public Key?{" "}
									<Link href={"/"} className="text-button-primary">
										Watch this video
									</Link>
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="apiSecretKey"
						render={({ field }) => (
							<FormItem>
								{/* <FormLabel htmlFor="secret_key">API Key</FormLabel> */}
								<FormControl>
									<Input
										id="apiSecretKey"
										placeholder="Secret Key"
										{...field}
										error={form.formState.errors?.apiSecretKey?.message}
									/>
								</FormControl>

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
				<Button isLoading={isLoading} variant={"primary"} className="w-full mt-[3.7rem]">
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
								Terms and conditions guiding this information privacy policy and all will be here and by clicking submit
								you agree to this privacy policy
							</FormDescription>
						</FormItem>
					)}
				/>
			</form>
		</Form>
	);
}
