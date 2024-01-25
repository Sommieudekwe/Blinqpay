"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { IProviders } from "@/types";
import apiCAll from "@/lib/apiCall";

interface StoreContextProps {
  isloading: boolean;
  setIsloading: Dispatch<SetStateAction<boolean>>;
  loggedIn: boolean;
  providers: IProviders[];
  getAllProviders: () => void;
}

const StoreContext = createContext<StoreContextProps>({
  isloading: false,
  setIsloading: (): boolean => false,
  loggedIn: false,
  providers: [],
  getAllProviders: () => {},
});

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [isloading, setIsloading] = useState(false);
  const [loggedIn, _setOnce] = useState(false);
  const [providers, setProviders] = useState<IProviders[]>([]);

  async function getAllProviders() {
    setIsloading(true);
    try {
      await apiCAll({
        url: "provider/available",
        method: "get",
        sCB(res) {
          setProviders(res.data);
        },
      });
    } catch (error) {
      console.error(error, "this is the error");
    } finally {
      setIsloading(false);
    }
  }

  return (
    <StoreContext.Provider
      value={{ isloading, setIsloading, loggedIn, providers, getAllProviders }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export default StoreProvider;
