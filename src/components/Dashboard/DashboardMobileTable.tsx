"use client";

import { IDashboard } from "@/types";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogOverlay } from "@radix-ui/react-dialog";
import Image from "next/image";

interface TableProps {
  data: IDashboard[];
}

export default function MobileTable({ data }: TableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<"pay" | "cancel" | null>(null);
  // const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleOpenModal = (type: "pay" | "cancel") => {
    setModalType(type);
    // setSelectedId(id);
    setIsOpen(true);
    console.log(isOpen);
  };

  return (
    <div className="w-full">
      {data.map((d, index) => (
        <div
          key={index}
          className="border-b border-t border-white border-opacity-25 py-6 flex justify-between"
        >
          <div className="space-y-2">
            <h3 className="opacity-60">{d.accountName}</h3>
            <p className="opacity-60">{d.accountNumber}</p>
            <p className="opacity-60">{d.bankName}</p>
            <p className="">&#8358;{d.amount}</p>
            <p className="text-rate">&#8358;{d.rate}</p>
            <p
              className={cn(
                "capitalize rounded-3xl px-2.5 py-1 text-sm",
                d.status === "Successful"
                  ? "text-success bg-success bg-opacity-10 inline-flex"
                  : d.status === "Failed"
                  ? "text-failed bg-failed bg-opacity-10 inline-flex"
                  : "text-pending bg-pending bg-opacity-10 inline-flex"
              )}
            >
              {d.status}
            </p>
          </div>

          <div className="inline-flex flex-col space-y-2">
            <Button onClick={() => handleOpenModal("pay")}>Pay now</Button>
            <Button
              className="text-cancel border border-cancel border-opacity-25"
              onClick={() => handleOpenModal("cancel")}
            >
              Cancel
            </Button>
          </div>
        </div>
      ))}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* <DialogOverlay /> */}
        <DialogContent className="text-center text-white">
          {modalType === "pay" ? (
            <div>Successful</div>
          ) : modalType === "cancel" ? (
            <div>
              <Image
                src="./dashboard/warning.svg"
                alt="warning"
                width={88}
                height={88}
              />

              <p>Are you sure you want to cancel this order?</p>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
