import Image from "next/image";
import { Button } from "../ui/button";

export default function TabSignUp() {
  return (
    <div className="border border-white bg-[#03001E] relative border-opacity-20 rounded-[55px] w-full p-8 md:p-12 lg:p-28 flex flex-col lg:flex-row justify-between items-center gap-y-12">
      <div className="max-w-xl">
        <h1 className="text-2xl lg:text-3xl font-bold">
          Open a Blinqpay in less than a minute
        </h1>
        <p className="text-lg mt-6">
          No hassle, no stress. Instantly get an account seamlessly process your
          fiat order automatically. No KYC required.
        </p>

        {/* <Button variant="primary" className="mt-10 w-60">
          Learn More
        </Button> */}

        <button className="px-8 mt-10 md:px-16 py-2 md:py-3 rounded-[30px] relative bg-[#4A33FB] text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600">
          <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
          <span className="relative z-20">Top gradient</span>
        </button>
      </div>

      <div>
        <Image
          src="/landing/signup.svg"
          alt="signup"
          width={360}
          height={360}
        />
      </div>
    </div>
  );
}
