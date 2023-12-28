import { DataTable } from "@/components/ui/data-table";
import { columns } from "./column";
import { orderHistoryData } from "./data";
import OrderHistoryMobileTable from "@/app/dashboard/order-history/OrderHistoryMobileTable";

export default function OrderHistory() {
  return (
    <section className="w-full h-full">
      <div className="hidden lg:block">
        <DataTable columns={columns} data={orderHistoryData} />
      </div>

      <div className="block lg:hidden">
        <OrderHistoryMobileTable data={orderHistoryData} />
      </div>
    </section>
  );
}
