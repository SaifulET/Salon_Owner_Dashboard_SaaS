import React from "react";
import { ChevronDownIcon } from "./BillingRevenueIcons";

interface FilterButtonProps {
  id: "status" | "plan" | "time";
  value: string;
  options: string[];
  openFilter: "status" | "plan" | "time" | null;
  setOpenFilter: (filter: "status" | "plan" | "time" | null) => void;
  onSelect: (value: string) => void;
  showNotice: (message: string) => void;
}

export default function BillingRevenueFilterButton({
  id,
  value,
  options,
  openFilter,
  setOpenFilter,
  onSelect,
  showNotice
}: FilterButtonProps) {
  return (
    <div className="relative">
      <button
        onClick={() => setOpenFilter(openFilter === id ? null : id)}
        className="flex h-9 min-w-[92px] items-center justify-between gap-2 rounded-lg border border-[#e9eef6] bg-white px-3 text-[11px] font-semibold text-[#67768a] transition-colors hover:bg-[#f7f9fc] cursor-pointer"
      >
        <span>{value}</span>
        <ChevronDownIcon />
      </button>
      {openFilter === id && (
        <div className="absolute right-0 top-10 z-40 w-28 rounded-lg border border-[#edf1f6] bg-white py-2 text-left shadow-xl">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => {
                onSelect(option);
                setOpenFilter(null);
                showNotice(`${option} filter applied`);
              }}
              className="block w-full px-3 py-1.5 text-left text-[11px] font-medium text-[#526174] hover:bg-[#f5f7fb] cursor-pointer"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
