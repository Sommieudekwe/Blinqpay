"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

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
}

const UsersContext = createContext<userStoreContextProps | undefined>(
  undefined
);

const UsersProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<userProps | null>(null);

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
  return (
    <UsersContext.Provider
      value={{
        user,
        getUser,
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
