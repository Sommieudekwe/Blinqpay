"use client";

import { IDashboard } from "@/types";
import { useState } from "react";
import { cn, formatAmount, capitalizeFirstLetter } from "@/lib/utils";
import { Input } from "../../../components/ui/input";
import CancelModal from "./cancelModal";
import PayModal from "./payModal";
import { Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TableProps {
  data: IDashboard[];
  onDataChange: (updatedData: IDashboard[]) => void;
}

export default function MobileTable({ data, onDataChange }: TableProps) {
  const [editableAmountIndex, setEditableAmountIndex] = useState(-1);
  const [editableBankIndex, setEditableBankIndex] = useState<number>(-1);
  const [editedNumber, setEditedNumber] = useState<string>("");
  const [editedBankName, setEditedBankName] = useState<string | "">("");

  const handleAccountEdit = (index: number, initialNumber: string) => {
    setEditableAmountIndex(index);
    setEditedNumber(initialNumber);
  };

  // save new number and send to backend to update the order through its id
  const handleSaveAmount = (index: number) => {
    const newData = [...data];
    newData[index].accountNumber = editedNumber;
    onDataChange(newData);
    // send the new number to the backend (make api call)
    setEditableAmountIndex(-1);
  };

  const handleBankEdit = (index: number, initialBankName: string) => {
    setEditableBankIndex(index);
    setEditedBankName(initialBankName);
  };

  const handleSaveBank = (index: number) => {
    const newData = [...data];
    newData[index].bankName = editedBankName;
    onDataChange(newData);
    // send the new number to the backend (make api call)
    setEditableBankIndex(-1);
  };

  const handleCancel = () => {
    setEditableAmountIndex(-1);
    setEditedNumber("");
    setEditableBankIndex(-1);
    setEditedBankName("");
  };

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
            <div>
              {editableAmountIndex === index ? (
                <>
                  <Input
                    type="number"
                    value={editedNumber}
                    onChange={(e) => setEditedNumber(e.target.value)}
                  />
                  <div className="mt-2 space-x-2">
                    <Button onClick={() => handleSaveAmount(index)}>
                      Save
                    </Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                  </div>
                </>
              ) : (
                <>
                  <p className="opacity-60 flex items-center gap-1">
                    {d.accountNumber}
                    {d.meta !== null && (
                      <span>
                        <Pencil
                          onClick={() =>
                            handleAccountEdit(index, d.accountNumber)
                          }
                          size={16}
                        />
                      </span>
                    )}
                  </p>
                </>
              )}
            </div>

            <div>
              {editableBankIndex === index ? (
                <>
                  <Input
                    type="text"
                    value={editedBankName}
                    onChange={(e) => setEditedBankName(e.target.value)}
                  />
                  <div className="mt-2 space-x-2">
                    <Button onClick={() => handleSaveBank(index)}>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                  </div>
                </>
              ) : (
                <>
                  <p className="opacity-60 flex items-center gap-1">
                    {capitalizeFirstLetter(d.bankName)}
                    {d.meta !== null && (
                      <span>
                        <Pencil
                          size={16}
                          onClick={() => handleBankEdit(index, d.bankName)}
                        />
                      </span>
                    )}
                  </p>
                </>
              )}
            </div>

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
              {d.meta !== null ? (
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

      {/* {data.map((d, index) => (
        <div
          key={index}
          className="border-b border-t dark:border-white dark:border-opacity-25 py-6 flex justify-between"
        >
          <div className="space-y-3">
            <h3 className="opacity-60">
              {capitalizeFirstLetter(d.accountName)}
            </h3>
            <div>
              {editableIndex === index ? (
                <>
                  <Input
                    type="number"
                    value={editedNumber}
                    onChange={(e) => setEditedNumber(e.target.value)}
                  />
                  <div className="mt-2 space-x-2">
                    <Button onClick={() => handleSave(index)}>Save</Button>
                    <Button onClick={handleCancel}>Cancel</Button>
                  </div>
                </>
              ) : (
                <>
                  <p className="opacity-60 flex items-center gap-1">
                    {d.accountNumber}
                    {d.meta !== null && (
                      <span>
                        <Pencil
                          onClick={() => handleEdit(index, d.accountNumber)}
                          size={16}
                        />
                      </span>
                    )}
                  </p>
                </>
              )}
            </div>

            <p className="opacity-60 flex items-center gap-1">
              {capitalizeFirstLetter(d.bankName)}
              {d.meta !== null && (
                <span>
                  <Pencil size={16} />
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
              {d.meta !== null ? (
                <span>{d.meta?.error}</span>
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
      ))} */}
    </div>
  );
}
