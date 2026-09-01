import React from "react";
import { sourceOptions, statusOptions, categoryOptions } from "./mockData";

interface AutomationsMailTopFiltersProps {
  activeTypeTab: "All" | "Email" | "SMS" | "WhatsApp";
  setActiveTypeTab: (type: "All" | "Email" | "SMS" | "WhatsApp") => void;
  sourceFilter: string;
  setSourceFilter: (source: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  categoryFilter: string;
  setCategoryFilter: (category: string) => void;
}

export default function AutomationsMailTopFilters({
  activeTypeTab,
  setActiveTypeTab,
  sourceFilter,
  setSourceFilter,
  statusFilter,
  setStatusFilter,
  categoryFilter,
  setCategoryFilter
}: AutomationsMailTopFiltersProps) {
  const types: Array<"All" | "Email" | "SMS" | "WhatsApp"> = ["All", "Email", "SMS", "WhatsApp"];

  return (
    <div className="box-sizing-border-box flex flex-col lg:flex-row justify-between lg:items-center p-6 bg-white border border-[#E0E6EB] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] rounded-[12px] w-full gap-4 font-sans text-left">
      {/* Left Types */}
      <div className="flex items-center gap-3">
        <span className="text-[12px] font-bold text-[#98A4AE] uppercase tracking-wider">TYPE:</span>
        <div className="flex items-center gap-2">
          {types.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setActiveTypeTab(t)}
              className={`h-9 px-4 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                activeTypeTab === t
                  ? "border border-[#635BFF] text-[#635BFF] bg-white shadow-xs"
                  : "border border-transparent text-[#29343D] hover:bg-slate-50"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Right Dropdowns */}
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-col gap-1 items-start">
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">SOURCES</span>
          <select value={sourceFilter} onChange={(e) => setSourceFilter(e.target.value)} className="h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold outline-none cursor-pointer min-w-[120px]">
            {sourceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1 items-start">
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">STATUS</span>
          <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold outline-none cursor-pointer min-w-[120px]">
            {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div className="flex flex-col gap-1 items-start">
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">CATEGORY</span>
          <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold outline-none cursor-pointer min-w-[140px]">
            {categoryOptions.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
      </div>
    </div>
  );
}
