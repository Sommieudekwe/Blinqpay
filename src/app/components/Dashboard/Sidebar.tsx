import Image from "next/image";

const routes = [
  { name: "Dashboard", icon: "/dashboard/sidebar/dashboard.svg", link: "/" },
  { name: "Sell", icon: "/dashboard/sidebar/sell.svg", link: "/sell" },
  {
    name: "Bank History",
    icon: "/dashboard/sidebar/bank.svg",
    link: "/bank-history",
  },
  {
    name: "Order History",
    icon: "/dashboard/sidebar/order.svg",
    link: "/order-history",
  },
  {
    name: "Connectivity",
    icon: "/dashboard/sidebar/connectivity.svg",
    link: "/connectivity",
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
    link: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 space-y-8">
      {routes.map((route, index) => (
        <div key={index} className="flex items-center gap-6">
          <Image src={route.icon} width={24} height={24} />
          <span className="opacity-70">{route.name}</span>
        </div>
      ))}
    </aside>
  );
}
