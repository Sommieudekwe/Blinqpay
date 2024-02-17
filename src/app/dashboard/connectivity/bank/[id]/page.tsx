"use client";
import { useEffect } from "react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { useParams } from "next/navigation";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft } from "lucide-react";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast/use-toast";
import { bankList } from "@/app/dashboard/connectivity/constants";
import BankDetailsForm from "../../../../../components/Dashboard/connectivity/details-form";
import { useStore } from "@/context/store";
import BankAPIDetailsForm, {
	BlocDetailsForm,
	BlocDetailsSchemaTypes,
	ConnectionDetailsSchemaTypes,
	MofifyDetailsForm,
	MonniefyDetailsSchemaTypes,
} from "../../../../../components/Dashboard/connectivity/apikey-form";
import apiCAll from "@/lib/apiCall";

export interface IBankDetails {
  name: string;
  apiKey: string;
  phone: string;
  email: string;
  accountNumber: string;
  narration: string;
  accountReference: string;
}
export default function Connectivity() {
  const [isSuccess, setIsSuccess] = React.useState<boolean>(false);
  const [isLoading, setisLoading] = React.useState<boolean>(false);
  const [step, setStep] = React.useState<number>(1);
  const { id } = useParams();
  const { providers, getAllProviders } = useStore();
  const data = providers.filter((provider) => provider.name === id);
  console.log(data);
  const [bankDetails, setBankDetails] = React.useState<IBankDetails>({
    name: String(id).toUpperCase(),
    apiKey: "",
    phone: "",
    email: "",
    accountNumber: "",
    narration: "",
    accountReference: "",
  });
  /*
   *
   *
   *
   *
   */

	async function handleConnectToBank(
		apiVAlues: ConnectionDetailsSchemaTypes | MonniefyDetailsSchemaTypes | BlocDetailsSchemaTypes
	) {
		setisLoading(true);
		const { email } = bankDetails;

		if (id === "MONIEPOINT") {
			// console.log(apiVAlues);
			// const monifyDetails = {
			// 	// @ts-ignore
			// 	apiSecret: apiVAlues?.secret_key,
			// 	narration: apiVAlues?.narration,
			// 	apiKey: apiVAlues?.apiKey,
			// };

			await apiCAll({
				url: "provider/connect/monnify",
				method: "post",
				data: apiVAlues,
				toast: true,
				sCB(res) {
					console.log(res);

					setisLoading(false);
					setIsSuccess(true);
				},
				eCB(res) {
					console.error(res.error);
					setisLoading(false);
				},
			});
		} else if (id === "BLOC") {
			console.log(apiVAlues);
			
			await apiCAll({
				url: "provider/connect/bloc",
				method: "post",
				data: apiVAlues,
				toast: true,
				sCB(res) {
					console.log(res);

					setisLoading(false);
					setIsSuccess(true);
				},
				eCB(res) {
					console.error(res.error);
					setisLoading(false);
				},
			});
		} else {
			await apiCAll({
				url: "provider/connect/kuda",
				method: "post",
				data: {
					...bankDetails,
					email: email.toLowerCase(),
					// @ts-ignore
					apiKey: apiVAlues.apiKey,
					// @ts-ignore
					accountReference: apiVAlues?.accountReference,
					narration: apiVAlues.narration,
				},
				toast: true,
				sCB(res) {
					console.log(res);

          setisLoading(false);
          setIsSuccess(true);
        },
        eCB(res) {
          console.error(res.error);
          setisLoading(false);
        },
      });
    }
  }
  /*
   *
   *
   *
   *
   */
  useEffect(() => {
    getAllProviders();
  }, []);

  if (id === "MONNIFY") {
    return (
      <section className="w-full h-full lg:pt-8">
        <div className="max-w-[35rem] mx-auto rounded-xl bg-milky dark:bg-onboard-bg border border-white py-10 px-4 md:px-[1.875rem] border-opacity-25 mt-16 mb-4 md:mt-[6rem]">
          {data.map((d, i) => (
            <div key={i} className="text-center">
              {d.name}
            </div>
          ))}

          {/* logo */}
          {/* <div className="w-full max-w-[16.25rem] relative h-[3.438rem] mx-auto"> */}
          <div className="w-full max-w-[16.25rem] relative h-[rem] mx-auto">
            {/* <Image src={getBankLogo(id as string)} alt={"bank logo"} fill /> */}
          </div>
          <MofifyDetailsForm
            setStep={setStep}
            handleConnectToBank={handleConnectToBank}
            bankDetails={bankDetails}
            setBankDetails={setBankDetails}
            isLoading={isLoading}
          />
        </div>
        <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
          <DialogContent className="text-center dark:text-white">
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

	if (id === "BLOC") {
		return (
			<section className="w-full h-full lg:pt-8">
				<div className="max-w-[35rem] mx-auto rounded-xl bg-milky dark:bg-onboard-bg border border-white py-10 px-4 md:px-[1.875rem] border-opacity-25 mt-16 mb-4 md:mt-[6rem]">
					{data.map((d, i) => (
						<div key={i} className="text-center">
							{d.name}
						</div>
					))}

					{/* logo */}
					{/* <div className="w-full max-w-[16.25rem] relative h-[3.438rem] mx-auto"> */}
					<div className="w-full max-w-[16.25rem] relative h-[rem] mx-auto">
						{/* <Image src={getBankLogo(id as string)} alt={"bank logo"} fill /> */}
					</div>
					<BlocDetailsForm
						setStep={setStep}
						handleConnectToBank={handleConnectToBank}
						bankDetails={bankDetails}
						setBankDetails={setBankDetails}
						isLoading={isLoading}
					/>
				</div>
				<Dialog open={isSuccess} onOpenChange={setIsSuccess}>
					<DialogContent className="text-center dark:text-white">
						<Image src={"/dashboard/success.svg"} alt="success icon" width={88} height={88} className="mx-auto" />

						<div className="space-y-3 mt-4">
							<p className="opacity-60 font-aeonikRegular text-lg">API Connected</p>
							<p className="font-bold text-3xl">Successfully</p>
						</div>

						<Link href={"/dashboard"} className={cn("w-full mt-[1.938rem]", buttonVariants({ variant: "primary" }))}>
							Go to Dashboard
						</Link>
					</DialogContent>
				</Dialog>
			</section>
		);
	}

	return (
		<section className="w-full h-full lg:pt-16">
			<div className="pagination w-full flex justify-center">
				<div className="w-[18.75rem] flex justify-between">
					<div className={cn("h-1 w-[8.75rem] bg-gray-400 dark:bg-white")}></div>
					<div
						className={cn("h-1 w-[8.75rem] bg-black dark:bg-white", step === 1 ? "opacity-10" : "opacity-100")}
					></div>
				</div>
			</div>

      <div className="max-w-[35rem] mx-auto rounded-xl bg-milky dark:bg-onboard-bg border border-white py-10 px-4 md:px-[1.875rem] border-opacity-25 mt-16 mb-4 md:mt-[6rem]">
        <div>
          {step !== 1 && <ArrowLeft size={36} onClick={() => setStep(1)} />}
        </div>
        {data.map((d, i) => (
          <div key={i} className="text-center">
            {d.name}
          </div>
        ))}

        {/* logo */}
        {/* <div className="w-full max-w-[16.25rem] relative h-[3.438rem] mx-auto"> */}
        <div className="w-full max-w-[16.25rem] relative h-[rem] mx-auto">
          {/* <Image src={getBankLogo(id as string)} alt={"bank logo"} fill /> */}
        </div>

        {step === 1 ? (
          <BankDetailsForm
            setStep={setStep}
            bankDetails={bankDetails}
            setBankDetails={setBankDetails}
          />
        ) : (
          <BankAPIDetailsForm
            setStep={setStep}
            handleConnectToBank={handleConnectToBank}
            bankDetails={bankDetails}
            setBankDetails={setBankDetails}
            isLoading={isLoading}
          />
        )}
      </div>
      <Dialog open={isSuccess} onOpenChange={setIsSuccess}>
        <DialogContent className="text-center dark:text-white">
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
