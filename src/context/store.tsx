"use client";
import { useEffect } from "react";
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
  connectedBanks: IProviders[];
  getAllConnectedBanks: () => void;
  selectedBankId: string | null;
  setSelectedBankId: Dispatch<SetStateAction<string | null>>;
}

const StoreContext = createContext<StoreContextProps>({
  isloading: false,
  setIsloading: (): boolean => false,
  loggedIn: false,
  providers: [],
  getAllProviders: () => {},
  connectedBanks: [],
  getAllConnectedBanks: () => {},
  selectedBankId: "",
  setSelectedBankId: (): string | null => "",
});

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [isloading, setIsloading] = useState(false);
  const [loggedIn, _setOnce] = useState(false);
  const [providers, setProviders] = useState<IProviders[]>([]);
  const [connectedBanks, setAllConnectedBanks] = useState<IProviders[]>([]);
  const [selectedBankId, setSelectedBankId] = useState<string | null>(null);

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

  const getAllConnectedBanks = async () => {
    apiCAll({
      method: "get",
      url: "provider/banks",
      sCB(res) {
        setAllConnectedBanks(res.data);
      },
      eCB(res) {
        console.error(res.error);
      },
    });
  };

  return (
    <StoreContext.Provider
      value={{
        isloading,
        setIsloading,
        loggedIn,
        providers,
        getAllProviders,
        connectedBanks,
        getAllConnectedBanks,
        selectedBankId,
        setSelectedBankId,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export default StoreProvider;
