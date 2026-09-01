import React from "react";
import { ModalContentProps } from "./SalesModalContent";

export default function ChurnModalContent({ onNavigate, onClose }: ModalContentProps) {
  const handleRedirect = () => {
    onClose();
    onNavigate("analytics_performance_churn");
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-lg font-bold text-slate-800">Monthly Churn Rate</h3>
        <p className="text-xs text-slate-400 mt-0.5">Customer retention and churn metrics</p>
      </div>

      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-extrabold text-slate-800">7%</span>
        <span className="text-xs font-bold text-slate-400">August</span>
        <span className="text-xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full ml-auto">
          Target: &lt; 5%
        </span>
      </div>

      <div className="relative w-full h-40 mt-2">
        <svg viewBox="0 0 500 120" className="w-full h-full">
          <line x1="30" y1="20" x2="480" y2="20" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="30" y1="55" x2="480" y2="55" stroke="#f1f5f9" strokeWidth="1" />
          <line x1="30" y1="90" x2="480" y2="90" stroke="#f1f5f9" strokeWidth="1" />

          <path d="M 55 90 Q 125 70, 195 80 T 335 60 T 425 55 L 425 90 L 55 90 Z" fill="#f43f5e" fillOpacity="0.05" />
          <path d="M 55 90 Q 125 70, 195 80 T 335 60 T 425 55" fill="none" stroke="#f43f5e" strokeWidth="2.5" strokeLinecap="round" className="cursor-pointer hover:stroke-rose-600 transition-all" />

          <circle cx="55" cy="90" r="3.5" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" className="cursor-pointer hover:r-5 transition-all" />
          <circle cx="125" cy="74" r="3.5" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" className="cursor-pointer hover:r-5 transition-all" />
          <circle cx="195" cy="80" r="3.5" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" className="cursor-pointer hover:r-5 transition-all" />
          <circle cx="335" cy="62" r="3.5" fill="#f43f5e" stroke="#fff" strokeWidth="1.5" className="cursor-pointer hover:r-5 transition-all" />
          <circle cx="425" cy="55" r="4.5" fill="#f43f5e" stroke="#fff" strokeWidth="2" className="cursor-pointer hover:r-5 transition-all" />

          <text x="55" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">Apr</text>
          <text x="125" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">May</text>
          <text x="195" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">Jun</text>
          <text x="335" y="108" textAnchor="middle" className="text-[10px] font-semibold text-slate-400 fill-current">Jul</text>
          <text x="425" y="108" textAnchor="middle" className="text-[10px] font-bold text-rose-600 fill-current">Aug</text>
        </svg>
      </div>

      <div className="flex flex-col gap-3.5 mt-2 bg-slate-50/50 p-4 rounded-2xl">
        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Current Monthly Churn</span>
          <span className="bg-rose-50 text-rose-600 px-2.5 py-1 rounded-lg font-extrabold">7.0%</span>
        </div>
        <div className="w-full h-px bg-slate-100" />
        <div className="flex items-center justify-between text-xs font-bold text-slate-600">
          <span>Customer Retention Rate</span>
          <span className="bg-[#e6fcf9] text-[#10b981] px-2.5 py-1 rounded-lg font-extrabold">93.0%</span>
        </div>
      </div>

      <div className="mt-4 flex justify-end">
        <button onClick={handleRedirect} className="px-5 py-2.5 bg-[#5e53fc] hover:bg-[#4a3fdf] text-white rounded-2xl text-xs font-semibold shadow-lg shadow-indigo-150 transition-all cursor-pointer">
          View Analytics
        </button>
      </div>
    </div>
  );
}
