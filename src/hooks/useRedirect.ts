"use client";

import { useRouter } from "next/navigation";

export const useRediret = () => {
  const router = useRouter();

  const redirect = (path: string) => {
    // localStorage.clear();
    localStorage.removeItem("selectedBankId");
    router.push(path);
  };

  return { redirect };
};
