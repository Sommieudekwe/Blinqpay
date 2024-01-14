"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { hasToken } from "@/lib/utils";
import { notify } from "@/components/ui/toast";

const Home = () => {
  const router = useRouter();
  const pathname = usePathname();
  /*
   *
   *
   *
   *
   */
  function protectedRuteHandler() {
    notify.warn("checking user validity!");
    if (pathname.includes("/dashboard") && !hasToken())
      return router.push("/auth");
    return router.push("/dashboard");
  }
  /*
   *
   *
   *
   *
   */
  React.useEffect(() => {
    protectedRuteHandler();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router]);

  return null;
};

export default Home;
