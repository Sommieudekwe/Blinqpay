"use client";
import { IDashboard } from "@/types";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import apiCAll from "@/lib/apiCall";

interface OrdersContextProps {
  pendingOrders: IDashboard[];
  getPendingOrders: () => void;
  setPendingOrders: Dispatch<SetStateAction<IDashboard[]>>;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  pendingOrdersIds: number[];
  setPendingOrdersIds: Dispatch<SetStateAction<number[]>>;
}

const OrdersContext = createContext<OrdersContextProps | undefined>(undefined);

const OrdersProvider = ({ children }: { children: React.ReactNode }) => {
  const [pendingOrders, setPendingOrders] = useState<IDashboard[]>([]);
  const [pendingOrdersIds, setPendingOrdersIds] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getPendingOrders = async () => {
    setIsLoading(true);
    try {
      await apiCAll({
        url: "/order/all?page=1&pageSize=10",
        method: "get",
        sCB(res) {
          const orders: IDashboard[] = res.data.data;
          setPendingOrders(orders);
          setPendingOrdersIds(orders.map((order) => order.id));
        },
      });
    } catch (error) {
      console.error(error, "this is the error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <OrdersContext.Provider
      value={{
        pendingOrders,
        getPendingOrders,
        setPendingOrders,
        isLoading,
        setIsLoading,
        pendingOrdersIds,
        setPendingOrdersIds,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

// create hook to access the context
const useOrders = () => {
  const context = useContext(OrdersContext);
  if (!context) {
    throw new Error("useOrders must be used within an OrdersProvider");
  }

  return context;
};

export { OrdersProvider, useOrders };
