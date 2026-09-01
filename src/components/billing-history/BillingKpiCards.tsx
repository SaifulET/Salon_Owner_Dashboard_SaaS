import React from "react";

export default function BillingKpiCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-[#f5f3ff] rounded-3xl p-6 border border-[#e2dfff]/40 flex items-center gap-5">
        <div className="w-11 h-11 rounded-full bg-[#5e53fc] text-white flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" ry="2" />
            <line x1="12" y1="4" x2="12" y2="20" />
            <line x1="2" y1="12" x2="22" y2="12" />
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Current Plan Cost</span>
          <span className="text-2xl font-black text-slate-850">EUR 299</span>
        </div>
      </div>

      <div className="bg-[#fff1f2] rounded-3xl p-6 border border-[#ffe4e6]/40 flex items-center gap-5">
        <div className="w-11 h-11 rounded-full bg-[#ff4e73] text-white flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Next Billing Date</span>
          <span className="text-2xl font-black text-slate-850">August 22, 2025</span>
        </div>
      </div>

      <div className="bg-[#ecfeff] rounded-3xl p-6 border border-[#cffafe]/40 flex items-center gap-5">
        <div className="w-11 h-11 rounded-full bg-[#0891b2] text-white flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
            <polyline points="17 6 23 6 23 12" />
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Annual Value</span>
          <span className="text-2xl font-black text-slate-850">EUR 3,588</span>
        </div>
      </div>
    </div>
  );
}
