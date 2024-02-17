import Image from "next/image";
import { Button } from "../ui/button";

export default function Dashboard() {
  return (
    <div className="border border-white border-opacity-20 rounded-[55px] w-full p-8 md:p-12 lg:p-28 flex flex-col lg:flex-row justify-between items-center">
      <div className="max-w-xl">
        <h1 className="text-2xl md:text-3xl font-bold">
          Connect to top exchanges and Banks
        </h1>
        <p className="text-lg mt-6">
          Connect to exchanges like binance, kucoin,paxful, noones, remitano,
          bybit and banks to start making automated fiat payments. Trading has
          never been this easy and instant.
        </p>

        <Button variant="primary" className="mt-10 w-60">
          Learn More
        </Button>
      </div>

      <div>
        <Image
          src="/landing/dashboard.svg"
          alt="signup"
          width={360}
          height={360}
        />
      </div>
    </div>
  );
}
