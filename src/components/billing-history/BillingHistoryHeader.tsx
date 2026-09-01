import React from "react";

interface BillingHistoryHeaderProps {
  salonName?: string;
  onBack?: () => void;
}

export default function BillingHistoryHeader({ salonName = "Bella Vista Salon", onBack = () => {} }: BillingHistoryHeaderProps) {
  return (
    <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex items-center justify-between w-full">
      <div className="text-base font-bold leading-none tracking-normal text-[#1f2937] font-sans">
        {salonName}
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold">
        <button onClick={onBack} className="p-1.5 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors inline-flex cursor-pointer" title="Back">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </button>
        <span className="text-slate-300">/</span>
        <button onClick={onBack} className="bg-[#e4e2ff] text-[#5e53fc] px-3 py-1 rounded-full text-[10px] font-extrabold transition-all hover:bg-[#d8d5ff] cursor-pointer">
          Salon Beauty
        </button>
      </div>
    </div>
  );
}
