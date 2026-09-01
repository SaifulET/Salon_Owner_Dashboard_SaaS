import React from "react";
import { salonOptions, operatorOptions, recipientOptions } from "./mockData";

interface AutomationsMailSidebarProps {
  dataRangeFilter: string;
  setDataRangeFilter: (range: string) => void;
  salonFilter: string;
  setSalonFilter: (salon: string) => void;
  operatorFilter: string;
  setOperatorFilter: (operator: string) => void;
  recipientFilter: string;
  setRecipientFilter: (recipient: string) => void;
}

export default function AutomationsMailSidebar({
  dataRangeFilter,
  setDataRangeFilter,
  salonFilter,
  setSalonFilter,
  operatorFilter,
  setOperatorFilter,
  recipientFilter,
  setRecipientFilter
}: AutomationsMailSidebarProps) {
  return (
    <div className="w-full lg:w-[280px] shrink-0 bg-white border border-[#E0E6EB] rounded-[12px] p-6 shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] flex flex-col gap-6 text-left font-sans">
      <h3 className="text-[16px] font-bold text-[#29343D]">Advanced Filters</h3>

      <div className="flex flex-col gap-4">
        {/* DATA RANGE */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">DATA RANGE</span>
          <select value={dataRangeFilter} onChange={(e) => setDataRangeFilter(e.target.value)} className="w-full h-10 px-3.5 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold outline-none cursor-pointer">
            {["All Time", "Today", "Last 7 Days", "Last 30 Days"].map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        {/* SALON */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">SALON</span>
          <select value={salonFilter} onChange={(e) => setSalonFilter(e.target.value)} className="w-full h-10 px-3.5 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold outline-none cursor-pointer">
            {salonOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        {/* OPERATOR */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">OPERATOR</span>
          <select value={operatorFilter} onChange={(e) => setOperatorFilter(e.target.value)} className="w-full h-10 px-3.5 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold outline-none cursor-pointer">
            {operatorOptions.map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </div>

        {/* RECIPIENT */}
        <div className="flex flex-col gap-1.5">
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">RECIPIENT</span>
          <select value={recipientFilter} onChange={(e) => setRecipientFilter(e.target.value)} className="w-full h-10 px-3.5 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold outline-none cursor-pointer">
            {recipientOptions.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
