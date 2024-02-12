"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
import { notify } from "@/components/ui/toast";

import apiCAll from "@/lib/apiCall";

type userProps = {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};

interface userStoreContextProps {
  user: userProps | null;
  getUser: () => void;
  toggleState: boolean;
  toggle: () => void;
}

const UsersContext = createContext<userStoreContextProps | undefined>(
  undefined
);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userProps | null>(null);
  const [toggleState, setToggleState] = useState<boolean>(false);

  const getUser = async () => {
    apiCAll({
      url: "/auth",
      method: "get",
      sCB(res) {
        setUser(res.data);
      },
      eCB(res) {
        console.error(res.error);
      },
    });
  };

  useEffect(() => {
    const storedToggleState = localStorage.getItem("toggleState");
    if (storedToggleState !== null) {
      setToggleState(JSON.parse(storedToggleState));
    }
  }, []);

  const toggle = () => {
    const newToggleState = !toggleState;
    setToggleState(newToggleState);
    localStorage.setItem("toggleState", JSON.stringify(newToggleState));
    if (toggleState) {
      notify.success("Autopay enabled");
    } else {
      notify.error("Autopay disabled");
    }
  };
  return (
    <UsersContext.Provider
      value={{
        user,
        getUser,
        toggle,
        toggleState,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error("useUser must be used within a UsersProvider");
  }

  return context;
};

export { UsersProvider, useUser };
