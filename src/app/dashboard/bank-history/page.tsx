import { DataTable } from "@/components/ui/data-table";
import { columns } from "./column";
import { bankHistoryData } from "./data";
import BankHistoryDashboard from "@/app/dashboard/bank-history/BankHistoryMobile";

export default function BankHistory() {

  return (
    <section className="w-full h-full">
      <div className="hidden lg:block">
        <DataTable columns={columns} data={bankHistoryData} />
      </div>

      <div className="block lg:hidden">
        <BankHistoryDashboard data={bankHistoryData} />
      </div>
    </section>
  );
}
