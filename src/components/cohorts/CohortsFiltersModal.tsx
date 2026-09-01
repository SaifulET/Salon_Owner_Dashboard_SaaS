import React from "react";

interface CohortsFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  planFilter: "All" | "Basic" | "Premium" | "Enterprise";
  setPlanFilter: (val: "All" | "Basic" | "Premium" | "Enterprise") => void;
  cityFilter: string;
  setCityFilter: (val: string) => void;
}

export default function CohortsFiltersModal({
  isOpen,
  onClose,
  planFilter,
  setPlanFilter,
  cityFilter,
  setCityFilter
}: CohortsFiltersModalProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-11 z-50 w-72 rounded-2xl border border-slate-100 bg-white p-4 shadow-2xl animate-in fade-in duration-150 text-left font-sans flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
        <span className="text-xs font-bold text-slate-800">Filter Options</span>
        <button onClick={onClose} className="text-xs text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-slate-500">Plan</label>
        <div className="grid grid-cols-2 gap-1.5">
          {(["All", "Basic", "Premium", "Enterprise"] as const).map((p) => (
            <button key={p} onClick={() => setPlanFilter(p)} className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold cursor-pointer ${planFilter === p ? "bg-[#635BFF] text-white" : "bg-slate-50 text-slate-600 hover:bg-slate-100"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[11px] font-bold text-slate-500">City</label>
        <select value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} className="h-8 border border-slate-200 rounded-lg px-2 text-xs font-semibold text-slate-700 focus:outline-none">
          <option value="All cities">All cities</option><option value="Rome">Rome</option><option value="Milano">Milano</option><option value="Bologna">Bologna</option>
        </select>
      </div>
    </div>
  );
}
