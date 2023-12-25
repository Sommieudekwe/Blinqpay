"use client";

import { cn } from "@/lib/utils";
import { IRoutes } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const routes: IRoutes[] = [
  {
    name: "Dashboard",
    icon: "/dashboard/sidebar/dashboard.svg",
    link: "/dashboard",
  },
  {
    name: "Sell",
    icon: "/dashboard/sidebar/sell.svg",
    link: "/dashboard/sell",
  },
  {
    name: "Bank History",
    icon: "/dashboard/sidebar/bank.svg",
    link: "/dashboard/bank-history",
  },
  {
    name: "Order History",
    icon: "/dashboard/sidebar/order.svg",
    link: "/dashboard/order-history",
  },
  {
    name: "Connectivity",
    icon: "/dashboard/sidebar/connectivity.svg",
    link: "/dashboard/connectivity",
  },
  {
    name: "Subscription",
    icon: "/dashboard/sidebar/subscription.svg",
    link: "subscription",
  },
  {
    name: "Partners",
    icon: "/dashboard/sidebar/partners.svg",
    link: "/partners",
  },
  {
    name: "Settings",
    icon: "/dashboard/sidebar/settings.svg",
    link: "/dashboard/settings",
  },
];

interface SidebarProps {
  setOpen?: (value: boolean) => void;
}

export default function Sidebar({ setOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-auto lg:w-64 space-y-8 pt-5">
      <div>
        <div className="text-3xl font-bold hidden lg:block">BlinqPay</div>
      </div>

      {routes.map((route, index) => (
        <Link
          href={route.link}
          key={index}
          className={"flex items-center gap-6"}
          onClick={() => setOpen?.(false)}
        >
          <Image src={route.icon} width={24} height={24} alt="icon" />
          <span
            className={cn(
              "opacity-70",
              pathname === route.link || pathname.includes(route.link)
                ? "text-button-primary"
                : ""
            )}
          >
            {route.name}
          </span>
        </Link>
      ))}
    </aside>
  );
}
