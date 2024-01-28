"use client";

import { useRouter } from "next/navigation"

export const useRediret = () => {
      const router = useRouter()

      const redirect = (path: string) => {
            localStorage.clear()
            router.push(path)
      }

      return { redirect }
}