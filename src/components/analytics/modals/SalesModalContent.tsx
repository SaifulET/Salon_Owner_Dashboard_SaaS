import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

export interface ModalContentProps {
  onNavigate: (tab: string) => void;
  onClose: () => void;
}

export default function SalesModalContent({ onNavigate, onClose }: ModalContentProps) {
  const handleRedirect = () => {
    onClose();
    onNavigate("analytics_revenue_mrr_arr");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-bold text-slate-800">Monthly Processed Sales</h3>
        <p className="text-xs text-slate-400 mt-0.5">Current MRR breakdown and growth metrics</p>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-extrabold text-slate-800">€ 23,850</span>
        <span className="text-xs font-bold text-slate-400">August</span>
        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full ml-auto">
          +12.5% from last month
        </span>
      </div>

      <div className="relative w-full h-40 mt-2">
        <svg viewBox="0 0 500 120" className="w-full h-full">
          <line x1="30" y1="20" x2="480" y2="20" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="30" y1="55" x2="480" y2="55" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="30" y1="90" x2="480" y2="90" stroke="#f1f5f9" strokeWidth="1" />

          <rect x="55" y="55" width="22" height="35" rx="3" fill="#14b8a6" fillOpacity="0.1" className="cursor-pointer hover:fill-opacity-30 transition-all" />
          <rect x="115" y="60" width="22" height="30" rx="3" fill="#14b8a6" fillOpacity="0.1" className="cursor-pointer hover:fill-opacity-30 transition-all" />
          <rect x="175" y="40" width="22" height="50" rx="3" fill="#14b8a6" fillOpacity="0.1" className="cursor-pointer hover:fill-opacity-30 transition-all" />
          <rect x="235" y="45" width="22" height="45" rx="3" fill="#14b8a6" fillOpacity="0.1" className="cursor-pointer hover:fill-opacity-30 transition-all" />
          <rect x="295" y="65" width="22" height="25" rx="3" fill="#14b8a6" fillOpacity="0.1" className="cursor-pointer hover:fill-opacity-30 transition-all" />
          <rect x="355" y="50" width="22" height="40" rx="3" fill="#14b8a6" fillOpacity="0.1" className="cursor-pointer hover:fill-opacity-30 transition-all" />
          <rect x="415" y="30" width="22" height="60" rx="3" fill="#14b8a6" className="cursor-pointer hover:opacity-85 transition-all" />

          <text x="66" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">February</text>
          <text x="126" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">March</text>
          <text x="186" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">April</text>
          <text x="246" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">May</text>
          <text x="306" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">June</text>
          <text x="366" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">July</text>
          <text x="426" y="108" textAnchor="middle" className="text-[10px] font-bold text-[#14b8a6] fill-current">Aug</text>
        </svg>
      </div>

      <div className="flex justify-center gap-2 -mt-2">
        <button className="p-1 rounded-lg border border-slate-100 hover:bg-slate-50 text-slate-400 cursor-pointer">
          <HugeiconsIcon icon={ArrowLeft01Icon} size={14} />
        </button>
        <button className="p-1 rounded-lg border border-slate-100 hover:bg-slate-50 text-slate-400 cursor-pointer">
          <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
        </button>
      </div>

      <div className="flex flex-col gap-3.5 mt-2 bg-slate-50/50 p-4 rounded-2xl">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Annual Recurring Revenue</span>
          <span className="bg-[#e6fcf9] text-[#10b981] px-2.5 py-1 rounded-lg font-extrabold">€ 286.200</span>
        </div>
        <div className="w-full h-px bg-slate-100" />
        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Average per Salon</span>
          <span className="bg-[#e6fcf9] text-[#10b981] px-2.5 py-1 rounded-lg font-extrabold">€ 542</span>
        </div>
        <div className="w-full h-px bg-slate-100" />
        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Active Subscriptions</span>
          <span className="bg-slate-100 text-slate-500 px-2.5 py-1 rounded-lg font-extrabold">44</span>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button
          onClick={handleRedirect}
          className="px-5 py-2.5 bg-[#5e53fc] hover:bg-[#4a3fdf] text-white rounded-2xl text-xs font-semibold shadow-lg shadow-indigo-150 transition-all cursor-pointer"
        >
          View Analytics
        </button>
      </div>
    </div>
  );
}
