import React from "react";
import { FilterStage } from "./types";
import { rootFilters, planFilters } from "./mockData";
import { ChevronRightIcon, CloseIcon } from "./AnalyticsIcons";

interface AnalyticsFilterModalProps {
  isOpen: boolean;
  filterStage: FilterStage;
  selectedFilter: string | null;
  setFilterStage: (stage: FilterStage) => void;
  setSelectedFilter: (filter: string | null) => void;
  onClose: () => void;
}

export default function AnalyticsFilterModal({
  isOpen,
  filterStage,
  selectedFilter,
  setFilterStage,
  setSelectedFilter,
  onClose
}: AnalyticsFilterModalProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-11 z-50 w-72 rounded-2xl border border-slate-100 bg-white p-3 shadow-2xl animate-in fade-in zoom-in-95 duration-150 text-left">
      <div className="flex items-center justify-between px-3 py-2 border-b border-slate-100 mb-2">
        <span className="text-xs font-bold text-slate-800">
          {filterStage === "root" ? "Filter by" : "Select Plan"}
        </span>
        <button onClick={onClose} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer">
          <CloseIcon />
        </button>
      </div>

      <div className="max-h-64 overflow-y-auto flex flex-col gap-1 pr-1">
        {filterStage === "root" ? (
          rootFilters.map((f) => (
            <button
              key={f}
              onClick={() => {
                if (f === "Plan") setFilterStage("plan");
                else {
                  setSelectedFilter(f);
                  onClose();
                }
              }}
              className="flex items-center justify-between w-full px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#5e53fc] rounded-xl transition-colors cursor-pointer"
            >
              <span>{f}</span>
              <ChevronRightIcon />
            </button>
          ))
        ) : (
          <>
            <button
              onClick={() => setFilterStage("root")}
              className="text-[11px] font-bold text-[#5e53fc] hover:underline px-3 py-1 text-left cursor-pointer"
            >
              ← Back to categories
            </button>
            {planFilters.map((pf) => (
              <button
                key={pf}
                onClick={() => {
                  setSelectedFilter(pf);
                  onClose();
                }}
                className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-[#5e53fc] rounded-xl transition-colors cursor-pointer"
              >
                {pf}
              </button>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
