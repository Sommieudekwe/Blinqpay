import { Button } from "@/components/ui/button";
import Image from "next/image";

const services = [
  {
    name: "Binance",
    icon: "/dashboard/connectivity/binance.svg",
    availability: true,
  },
  {
    name: "Bybit",
    icon: "/dashboard/connectivity/bybit.svg",
    availability: false,
  },
  {
    name: "Remitano",
    icon: "/dashboard/connectivity/remitano.svg",
    availability: false,
  },
  {
    name: "Kuda",
    icon: "/dashboard/connectivity/kuda.svg",
    availability: true,
  },

  {
    name: "Lenco",
    icon: "/dashboard/connectivity/lenco.svg",
    availability: false,
  },
  {
    name: "Providus",
    icon: "/dashboard/connectivity/providus.svg",
    availability: false,
  },
  {
    name: "Paxful",
    icon: "/dashboard/connectivity/paxful.svg",
    availability: true,
  },
  {
    name: "Kucoin",
    icon: "/dashboard/connectivity/kucoin.svg",
    availability: false,
  },
  {
    name: "Moniepoint",
    icon: "/dashboard/connectivity/moniepoint.svg",
    availability: false,
  },
];

export default function Connectivity() {
  return (
    <div className="grid grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-9 pt-20 px-9">
      {services.map((service, index) => (
        <div
          key={index}
          className="p-5 bg-[#0C0A1D] border border-white border-opacity-15 text-center flex flex-col items-center"
        >
          <div>
            <img src={service.icon} alt={service.icon} />
          </div>
          <div className="mt-5">
            <Button className={``} disabled={!service.availability}>
              {service.availability === true ? "Connect" : "Coming Soon"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
