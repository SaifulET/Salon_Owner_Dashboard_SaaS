import React from "react";

interface SalonsHeaderToolbarProps {
  isRefreshing: boolean;
  handleRefresh: () => void;
  handleExport: () => void;
  handleAddSalon: () => void;
}

export default function SalonsHeaderToolbar({
  isRefreshing,
  handleRefresh,
  handleExport,
  handleAddSalon
}: SalonsHeaderToolbarProps) {
  return (
    <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="text-base font-bold leading-none tracking-normal text-[#1f2937] font-sans">Salon Management</div>
        <div className="flex flex-row flex-nowrap items-center gap-2.5 w-full sm:w-auto h-auto justify-between sm:justify-end">
          <button
            onClick={handleRefresh}
            className={`flex items-center gap-2 px-4 py-2 bg-[#EFF4FA] rounded-lg text-xs font-semibold text-[#0A2540] hover:bg-slate-200 transition-all cursor-pointer ${
              isRefreshing ? "opacity-70" : ""
            }`}
          >
            <img src="/syncIcon.svg" alt="Refresh" className={`w-3.5 h-3.5 ${isRefreshing ? "animate-spin" : ""}`} />
            <span>Refresh Data</span>
          </button>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2 bg-[#DDDBFF] rounded-lg text-xs font-semibold text-[#635BFF] hover:bg-[#c9c6ff] transition-all cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Export Data</span>
          </button>
          <button
            onClick={handleAddSalon}
            className="flex items-center gap-2 px-4 py-2 bg-[#635BFF] rounded-lg text-xs font-semibold text-white hover:bg-indigo-750 transition-all cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Add Salon</span>
          </button>
        </div>
      </div>
    </div>
  );
}
