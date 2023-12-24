"use client";
import { Dialog, DialogContent } from "@radix-ui/react-dialog";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Sell() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>Open</button>
      <div>This is the sell component.</div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className=" text-center text-white">
          <Image
            src={"/dashboard/success.svg"}
            alt="success icon"
            width={88}
            height={88}
            className="mx-auto"
          />

          <div className="space-y-3 mt-4">
            <p className="opacity-60 font-aeonikRegular text-lg">
              API Connected
            </p>

            <p className="font-bold text-3xl">Successfully</p>
          </div>

          <Link
            href={"/dashboard"}
            className={cn(
              "w-full mt-[1.938rem]"
              // buttonVariants({ variant: "primary" })
            )}
          >
            Go to Dashboard
          </Link>
        </DialogContent>
      </Dialog>
    </div>
  );
}
