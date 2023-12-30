"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronUp } from "lucide-react";

type BankOption = {
  name: string;
  img: string;
};

interface DropdownProps {
  options: BankOption[];
}

export default function Dropdown({ options }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<BankOption>(options[0]);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: BankOption) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="">
      <div
        className="flex items-center gap-x-2 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Image src={selectedOption.img} alt="img" width={20} height={20} />
        {selectedOption.name}

        <ChevronUp size={14} />
      </div>

      {isOpen && (
        <div className="space-y-2">
          {options.map((option, index) => (
            <div
              key={index}
              className="text-sm flex items-center gap-x-2 mt-2"
              onClick={() => handleSelect(option)}
            >
              <Image src={option.img} alt="img" width={20} height={20} />
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
