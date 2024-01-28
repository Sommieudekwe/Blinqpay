"use client";

import { useState, useEffect } from "react";
import { DataTable } from "@/components/ui/data-table";
import { columns } from "./column";
import { bankHistoryData } from "./data";
import BankHistoryDashboard from "@/app/dashboard/bank-history/BankHistoryMobile";
import apiCAll from "@/lib/apiCall";
import { useStore } from "@/context/store";

export default function BankHistory() {
  const [data, setData] = useState([]);
  const { connectedBanks, selectedBankId, getAllConnectedBanks } = useStore();
  const getBankTransactionsHistory = async () => {
    if (selectedBankId !== null) {
      console.log("request sent");
      apiCAll({
        method: "get",
        url: `bank/${Number(selectedBankId)}/transactions?page=1&pageSize=5`,
        sCB(res) {
          setData(res.data);
          console.log(res.data);
        },
        eCB(res) {
          console.error(res.error);
        },
      });
    }
  };

  useEffect(() => {
    getBankTransactionsHistory();
  }, [selectedBankId]);

  useEffect(() => {
    getAllConnectedBanks();
  }, []);

  return (
    <section className="w-full h-full">
      <div className="hidden lg:block">
        <DataTable columns={columns} data={data} />
      </div>

      <div className="block lg:hidden">
        <BankHistoryDashboard data={data} />
      </div>
    </section>
  );
}
