import React from "react";
import { ModalContentProps } from "./SalesModalContent";

export default function SubscriptionsModalContent({ onNavigate, onClose }: ModalContentProps) {
  const handleManage = () => {
    onClose();
    onNavigate("salons");
  };

  const handleAnalytics = () => {
    onClose();
    onNavigate("analytics_customers_subscribers");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-bold text-slate-800">Total Active Subscriptions</h3>
        <p className="text-xs text-slate-400 mt-0.5">Current MRR breakdown and growth metrics</p>
      </div>

      <div className="grid grid-cols-2 gap-6 items-center my-2">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-xs font-bold text-slate-400">Total</span>
            <span className="text-3xl font-extrabold text-slate-800 leading-none mt-1">44</span>
            <span className="text-[10px] font-bold text-emerald-600 flex items-center mt-1">▲ +9% last month</span>
          </div>

          <div className="flex flex-col gap-2.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Plan categories</span>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer hover:opacity-80 transition-all">
              <span className="w-2.5 h-2.5 rounded-full bg-[#14b8a6]" />
              <span>Basic (25%)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer hover:opacity-80 transition-all">
              <span className="w-2.5 h-2.5 rounded-full bg-[#5e53fc]" />
              <span>Premium (35%)</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 cursor-pointer hover:opacity-80 transition-all">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
              <span>Enterprise (40%)</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="relative w-36 h-36">
            <svg viewBox="0 0 36 36" className="w-full h-full transform -rotate-90">
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#f1f5f9" strokeWidth="3" />
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#14b8a6" strokeWidth="3.2" strokeDasharray="25 75" strokeDashoffset="0" className="cursor-pointer hover:opacity-80 transition-all" />
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#5e53fc" strokeWidth="3.2" strokeDasharray="35 65" strokeDashoffset="-25" className="cursor-pointer hover:opacity-80 transition-all" />
              <circle cx="18" cy="18" r="15.915" fill="transparent" stroke="#3b82f6" strokeWidth="3.2" strokeDasharray="40 60" strokeDashoffset="-60" className="cursor-pointer hover:opacity-80 transition-all" />
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-slate-50 pt-4">
        <button onClick={handleManage} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-[#5e53fc] font-bold rounded-2xl text-xs transition-all cursor-pointer">
          Manage Subscriptions
        </button>
        <button onClick={handleAnalytics} className="px-5 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-2xl text-xs font-semibold shadow-lg shadow-indigo-150 transition-all cursor-pointer">
          View Analytics
        </button>
      </div>
    </div>
  );
}
