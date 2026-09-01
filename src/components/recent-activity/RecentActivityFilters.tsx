import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon, FilterIcon } from "@hugeicons/core-free-icons";
import DateRangeFilter from "../common/DateRangeFilter";

interface RecentActivityFiltersProps {
  selectedSalon: string;
  setSelectedSalon: (val: string) => void;
  selectedType: string;
  setSelectedType: (val: string) => void;
  currentRange: string;
  onRangeChange: (val: string) => void;
  setCurrentPage: (page: number) => void;
  isSalonDropdownOpen: boolean;
  setIsSalonDropdownOpen: (open: boolean) => void;
  isTypeDropdownOpen: boolean;
  setIsTypeDropdownOpen: (open: boolean) => void;
}

export default function RecentActivityFilters({
  selectedSalon,
  setSelectedSalon,
  selectedType,
  setSelectedType,
  currentRange,
  onRangeChange,
  setCurrentPage,
  isSalonDropdownOpen,
  setIsSalonDropdownOpen,
  isTypeDropdownOpen,
  setIsTypeDropdownOpen
}: RecentActivityFiltersProps) {
  const salons = ["All Salons", "Beauty Wellness Center", "Bella Vista Salon", "Elite Beauty Group S.p.A.", "Glamour Lounge SRL", "Hair Art Studio"];
  const activityTypes = ["All Types", "Subscribed Premium", "Monthly Payment", "New staff", "Upgraded Plan", "Modern Cuts"];

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col md:flex-row items-start md:items-center gap-6 z-20 relative">
      <div className="relative w-full md:w-52">
        <label className="block text-[11px] font-bold text-[#a0aec0] uppercase tracking-wider mb-2">Salons</label>
        <button
          onClick={() => { setIsSalonDropdownOpen(!isSalonDropdownOpen); setIsTypeDropdownOpen(false); }}
          className="flex items-center justify-between w-full bg-white text-slate-700 font-medium text-sm border border-[#eef2f6] rounded-2xl px-4 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:border-[#5e53fc] focus:outline-none transition-all text-left cursor-pointer"
        >
          <span className="truncate">{selectedSalon.replace(" S.p.A.", "").replace(" SRL", "")}</span>
          <HugeiconsIcon icon={ArrowDown01Icon} size={16} className="text-[#a0aec0] ml-2" />
        </button>
        {isSalonDropdownOpen && (
          <div className="absolute left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-30 max-h-60 overflow-y-auto">
            {salons.map((salon) => (
              <button
                key={salon}
                onClick={() => { setSelectedSalon(salon); setIsSalonDropdownOpen(false); setCurrentPage(1); }}
                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  selectedSalon === salon ? "text-[#5e53fc] bg-[#f2f1ff]" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {salon}
              </button>
            ))}
          </div>
        )}
      </div>

      <DateRangeFilter currentRange={currentRange} onRangeChange={(range) => { onRangeChange(range); setCurrentPage(1); }} />

      <div className="relative w-full md:w-52">
        <label className="block text-[11px] font-bold text-[#a0aec0] uppercase tracking-wider mb-2">Type</label>
        <button
          onClick={() => { setIsTypeDropdownOpen(!isTypeDropdownOpen); setIsSalonDropdownOpen(false); }}
          className="flex items-center justify-between w-full bg-white text-slate-700 font-medium text-sm border border-[#eef2f6] rounded-2xl px-4 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:border-[#5e53fc] focus:outline-none transition-all text-left cursor-pointer"
        >
          <span className="truncate">{selectedType}</span>
          <HugeiconsIcon icon={ArrowDown01Icon} size={16} className="text-[#a0aec0] ml-2" />
        </button>
        {isTypeDropdownOpen && (
          <div className="absolute left-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-30">
            {activityTypes.map((type) => (
              <button
                key={type}
                onClick={() => { setSelectedType(type); setIsTypeDropdownOpen(false); setCurrentPage(1); }}
                className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${
                  selectedType === type ? "text-[#5e53fc] bg-[#f2f1ff]" : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        )}
      </div>

      {(selectedSalon !== "All Salons" || selectedType !== "All Types" || currentRange !== "All Time") && (
        <button
          onClick={() => { setSelectedSalon("All Salons"); setSelectedType("All Types"); onRangeChange("All Time"); setCurrentPage(1); }}
          className="mt-6 text-xs font-semibold text-red-500 hover:underline flex items-center gap-1.5 cursor-pointer"
        >
          <HugeiconsIcon icon={FilterIcon} size={14} />
          Reset Filters
        </button>
      )}
    </div>
  );
}
