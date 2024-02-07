/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useEffect } from "react";
import { DataTable, PaginationTypes } from "@/components/ui/data-table";
import { columns } from "./column";
import { bankHistoryData } from "./data";
import BankHistoryDashboard from "@/app/dashboard/bank-history/BankHistoryMobile";
import apiCAll from "@/lib/apiCall";
import { useStore } from "@/context/store";
import EmptyState from "@/components/empty-state";

export default function BankHistory() {
  const [data, setData] = useState([]);
  const [paginationData, setPaginationData] = useState<
    PaginationTypes | undefined
  >();
  // const { connectedBanks, selectedBankId, getAllConnectedBanks } = useStore();
  const selectedBankId =
    typeof window !== "undefined" && localStorage.getItem("selectedBankId");
  const getBankTransactionsHistory = async () => {
    if (selectedBankId !== null) {
      apiCAll({
        method: "get",
        url: `bank/${Number(selectedBankId)}/transactions?page=1&pageSize=50`,
        sCB(res) {
          setData(res.data.data);
          const paginationData: PaginationTypes = res.data.pagination;
          setPaginationData(paginationData);
        },
        eCB(res) {
          console.error(res.error);
        },
      });
    }
  };

  const getMoreBankTransactionsHistory = async (page: number) => {
    if (selectedBankId !== null) {
      apiCAll({
        method: "get",
        url: `bank/${Number(
          selectedBankId
        )}/transactions?page=${page}&pageSize=50`,
        sCB(res) {
          setData(res.data.data);
          const paginationData: PaginationTypes = res.data.pagination;
          setPaginationData(paginationData);
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

  console.log(selectedBankId, data, "whats the issue");

  return (
    <section className="w-full h-full">
      {data.length >= 1 ? (
        <div>
          <div className="hidden lg:block">
            <DataTable
              columns={columns}
              data={data}
              paginationData={paginationData}
              getPageData={getMoreBankTransactionsHistory}
            />
          </div>

          <div className="block lg:hidden">
            <BankHistoryDashboard
              data={data}
              paginationData={paginationData}
              getPageData={getMoreBankTransactionsHistory}
            />
          </div>
        </div>
      ) : (
        <EmptyState label="No transaction history found." />
      )}
    </section>
  );
}
