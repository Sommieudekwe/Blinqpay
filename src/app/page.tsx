"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  /*
   *
   *
   *
   *
   */
  function protectedRuteHandler() {
    // logic ro redirect none authenticated user.
  }
  /*
   *
   *
   *
   *
   */
  React.useEffect(() => {
    router.push("/onboarding");
  }, [router]);

  return null;
};

export default Home;
