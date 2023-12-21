import { DataTable } from "@/components/ui/data-table";
import { columns } from "./column";
import { bankHistoryData } from "./data";

export default function BankHistory()
{
  return <section className="w-full h-full p-[50px]">
    <DataTable columns={columns} data={bankHistoryData} />
  </section>;
}

