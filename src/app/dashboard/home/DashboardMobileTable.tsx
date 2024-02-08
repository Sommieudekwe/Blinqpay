"use client";

import { IDashboard } from "@/types";
import { useState } from "react";
import { cn, formatAmount, capitalizeFirstLetter } from "@/lib/utils";
import { Input } from "../../../components/ui/input";
import CancelModal from "./cancelModal";
import PayModal from "./payModal";
import { Pencil } from "lucide-react";

interface TableProps {
  data: IDashboard[];
  // onOpenDialog: (type: "pay" | "cancel", orderId?: number) => void;
}

export default function MobileTable({ data }: TableProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalType, setModalType] = useState<"pay" | "cancel" | null>(null);
  // const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="my-7">
        <Input type="search" placeholder="Search History" className="" />
      </div>
      {data.map((d, index) => (
        <div
          key={index}
          className="border-b border-t dark:border-white dark:border-opacity-25 py-6 flex justify-between"
        >
          <div className="space-y-3">
            <h3 className="opacity-60">
              {capitalizeFirstLetter(d.accountName)}
            </h3>
            <p className="opacity-60">
              {d.accountNumber}
              {d.meta !== null && (
                <span>
                  <Pencil />
                </span>
              )}
            </p>
            <p className="opacity-60">
              {capitalizeFirstLetter(d.bankName)}{" "}
              {d.meta !== null && (
                <span>
                  <Pencil />
                </span>
              )}
            </p>
            <p className="opacity-60">&#8358;{formatAmount(d.amount)}</p>
            <p className="text-rate">&#8358;{formatAmount(d.rate)}</p>
            <p
              className={cn(
                "capitalize rounded-3xl px-2.5 py-1 text-sm",
                d.status === "successful"
                  ? "text-success bg-success bg-opacity-10 inline-flex"
                  : d.status === "failed"
                  ? "text-failed bg-failed bg-opacity-10 inline-flex"
                  : "text-pending bg-pending bg-opacity-10 inline-flex"
              )}
            >
              {d.meta.error !== null ? (
                <span>{d.meta.error}</span>
              ) : (
                <span>{d.status}</span>
              )}
            </p>
          </div>

          <div className="inline-flex flex-col space-y-2">
            <PayModal orderId={d.id} />
            <CancelModal orderId={d.id} />
          </div>
        </div>
      ))}
    </div>
  );
}
