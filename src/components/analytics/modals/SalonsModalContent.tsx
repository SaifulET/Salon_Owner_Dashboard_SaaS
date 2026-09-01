import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon, ArrowDown01Icon, Shop, CreditCardIcon } from "@hugeicons/core-free-icons";
import { ModalContentProps } from "./SalesModalContent";

export default function SalonsModalContent({ onNavigate, onClose }: ModalContentProps) {
  const handleManage = () => {
    onClose();
    onNavigate("salons");
  };

  const handleAnalytics = () => {
    onClose();
    onNavigate("analytics_performance_map");
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-50 pb-4 pr-6">
        <h3 className="text-lg font-bold text-slate-800">New Salons</h3>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5 text-[10px] font-semibold text-slate-500">
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#14b8a6]" /><span>Basic Plan</span></div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#5e53fc]" /><span>Premium Plan</span></div>
            <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /><span>Enterprise plan</span></div>
          </div>
          <div className="relative">
            <select className="appearance-none bg-slate-50 text-[10px] font-bold text-slate-600 border border-slate-100 pl-2 pr-6 py-1 rounded-md cursor-pointer">
              <option>Monthly</option><option>Yearly</option>
            </select>
            <HugeiconsIcon icon={ArrowDown01Icon} size={10} className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
        </div>
      </div>

      <div className="relative w-full h-36">
        <svg viewBox="0 0 500 120" className="w-full h-full">
          <line x1="30" y1="20" x2="480" y2="20" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="30" y1="55" x2="480" y2="55" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="30" y1="90" x2="480" y2="90" stroke="#f1f5f9" strokeWidth="1" />

          {[
            { x: 55, b: 25, p: 20, e: 15, m: "Jan" }, { x: 125, b: 25, p: 18, e: 12, m: "Feb" },
            { x: 195, b: 25, p: 20, e: 17, m: "Mar" }, { x: 265, b: 25, p: 18, e: 14, m: "Apr" },
            { x: 335, b: 25, p: 20, e: 20, m: "May" }, { x: 405, b: 25, p: 20, e: 15, m: "Jun" }
          ].map((bar, i) => (
            <g key={i} className="cursor-pointer hover:opacity-80 transition-all">
              <rect x={bar.x} y={65 - bar.p - bar.e} width="25" height={bar.e} fill="#3b82f6" />
              <rect x={bar.x} y={65 - bar.p} width="25" height={bar.p} fill="#5e53fc" />
              <rect x={bar.x} y={65} width="25" height={bar.b} fill="#14b8a6" />
              <text x={bar.x + 12} y="105" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">{bar.m}</text>
            </g>
          ))}
        </svg>
      </div>

      <div className="flex justify-center gap-2 -mt-3">
        <button className="p-1 rounded-lg border border-slate-100 hover:bg-slate-50 text-slate-400 cursor-pointer"><HugeiconsIcon icon={ArrowLeft01Icon} size={14} /></button>
        <button className="p-1 rounded-lg border border-slate-100 hover:bg-slate-50 text-slate-400 cursor-pointer"><HugeiconsIcon icon={ArrowRight01Icon} size={14} /></button>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-[#5e53fc] rounded-2xl shadow-lg shadow-indigo-100 text-white flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white"><HugeiconsIcon icon={Shop} size={20} /></div>
          <div className="flex flex-col"><span className="text-2xl font-black leading-tight">1650</span><span className="text-[11px] font-bold opacity-80">Total Subscriptions</span></div>
        </div>
        <div className="p-4 bg-[#14b8a6] rounded-2xl shadow-lg shadow-teal-100 text-white flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white"><HugeiconsIcon icon={CreditCardIcon} size={20} /></div>
          <div className="flex flex-col"><span className="text-2xl font-black leading-tight">+8</span><span className="text-[11px] font-bold opacity-80">New Subscriptions</span></div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-4">
        <button onClick={handleManage} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#5e53fc] font-bold rounded-2xl text-xs transition-all cursor-pointer">
          Manage Salons
        </button>
        <button onClick={handleAnalytics} className="px-5 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-2xl text-xs font-semibold shadow-lg shadow-indigo-150 transition-all cursor-pointer">
          View Analytics
        </button>
      </div>
    </div>
  );
}
