"use client"

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./column";
// import { orderHistoryData } from "./data";
import OrderHistoryMobileTable from "@/app/dashboard/order-history/OrderHistoryMobileTable";
import apiCAll from "@/lib/apiCall";
import { useEffect, useState } from "react";
import { IOrderHistory } from "@/types";

export default function OrderHistory()
{
  const [data, setData] = useState<IOrderHistory[]>([])


  async function getOrders()
  {
    try
    {
      await apiCAll({
        url: "/order/all?q=ademide&page=1&pageSize=10",
        method: "get",
        sCB(res)
        {
          setData(res.data.data)
          
        },
      })
    } catch (error)
    {
      console.log(error, "this is the error!!");
    }

  }



  useEffect(() =>
  {
    getOrders()

  }, [])


  return (
    <section className="w-full h-full">
      <div className="hidden lg:block">
        <DataTable columns={columns} data={data} />
      </div>

      <div className="block lg:hidden">
        <OrderHistoryMobileTable data={data} />
      </div>
    </section>
  );
}
