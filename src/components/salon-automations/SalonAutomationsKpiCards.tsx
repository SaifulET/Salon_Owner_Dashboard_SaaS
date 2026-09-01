import React from "react";

export default function SalonAutomationsKpiCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-[#f5f3ff] rounded-3xl p-6 border border-[#e2dfff]/40 flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-[#5e53fc] text-white flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Mails Sent</span>
          <span className="text-2xl font-black text-slate-850">1,234</span>
        </div>
      </div>

      <div className="bg-[#ecfeff] rounded-3xl p-6 border border-[#cffafe]/40 flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-[#0891b2] text-white flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 21.2L12 14.8 2 21.2V6.8c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v14.4z" />
            <path d="M2 6.8l10 6.4 10-6.4" />
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Opened</span>
          <span className="text-2xl font-black text-slate-850">892</span>
        </div>
      </div>

      <div className="bg-[#f0fdf4] rounded-3xl p-6 border border-[#dcfce7]/40 flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-[#16a34a] text-white flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 12V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9" />
            <polyline points="22 6 12 13 2 6" /><polyline points="16 19 18 21 22 17" />
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Delivered</span>
          <span className="text-2xl font-black text-slate-850">98.5%</span>
        </div>
      </div>

      <div className="bg-[#fff1f2] rounded-3xl p-6 border border-[#ffe4e6]/40 flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-[#ff4e73] text-white flex items-center justify-center shrink-0">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
        <div className="flex flex-col gap-0.5">
          <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Bounced</span>
          <span className="text-2xl font-black text-slate-850">1.5%</span>
        </div>
      </div>
    </div>
  );
}
