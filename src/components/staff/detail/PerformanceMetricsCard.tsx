import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export default function PerformanceMetricsCard() {
  const [perfSelectedMonth, setPerfSelectedMonth] = useState("April");
  const [perfSelectedYear, setPerfSelectedYear] = useState(2025);
  const [isPerfMetricDropdownOpen, setIsPerfMetricDropdownOpen] = useState(false);
  const [perfDropdownSubMenu, setPerfDropdownSubMenu] = useState<"month" | "year">("month");

  return (
    <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col text-left font-semibold text-xs font-sans">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Performance Metrics</h4>
        <div className="relative">
          <button onClick={() => setIsPerfMetricDropdownOpen(!isPerfMetricDropdownOpen)} className="px-3 py-1.5 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600 bg-white flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer">
            {perfSelectedMonth}, {perfSelectedYear} <HugeiconsIcon icon={ArrowDown01Icon} size={10} className={`transition-transform duration-200 ${isPerfMetricDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {isPerfMetricDropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsPerfMetricDropdownOpen(false)}></div>
              <div className="absolute right-0 mt-1.5 w-[280px] bg-white border border-slate-100 rounded-2xl shadow-xl p-3 z-20 flex gap-3">
                <div className="flex flex-col gap-1 border-r border-slate-100 pr-3 w-[80px]">
                  <button onClick={() => setPerfDropdownSubMenu("month")} className={`px-2 py-1.5 rounded-lg text-[10px] font-bold text-left transition-colors cursor-pointer ${perfDropdownSubMenu === "month" ? "bg-indigo-50 text-[#5e53fc]" : "text-slate-400 hover:bg-slate-50"}`}>Month</button>
                  <button onClick={() => setPerfDropdownSubMenu("year")} className={`px-2 py-1.5 rounded-lg text-[10px] font-bold text-left transition-colors cursor-pointer ${perfDropdownSubMenu === "year" ? "bg-indigo-50 text-[#5e53fc]" : "text-slate-400 hover:bg-slate-50"}`}>Year</button>
                </div>
                <div className="flex-1">
                  {perfDropdownSubMenu === "month" && (
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between border-b border-slate-50 pb-1.5">
                        <button onClick={() => setPerfSelectedYear(prev => prev - 1)} className="p-1 hover:bg-slate-50 rounded text-slate-400 hover:text-slate-650 cursor-pointer">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="15 18 9 12 15 6" /></svg>
                        </button>
                        <span className="text-[10px] font-bold text-slate-705">{perfSelectedYear}</span>
                        <button onClick={() => setPerfSelectedYear(prev => prev + 1)} className="p-1 hover:bg-slate-50 rounded text-slate-400 hover:text-slate-650 cursor-pointer">
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="9 18 15 12 9 6" /></svg>
                        </button>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5 max-h-[120px] overflow-y-auto pr-0.5">
                        {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m, idx) => {
                          const fullMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                          const fullMonthName = fullMonths[idx];
                          return (
                            <button key={m} onClick={() => { setPerfSelectedMonth(fullMonthName); setIsPerfMetricDropdownOpen(false); }} className={`py-1 rounded text-[10px] font-semibold transition-colors cursor-pointer ${perfSelectedMonth === fullMonthName ? "bg-[#5e53fc] text-white" : "hover:bg-slate-50 text-slate-600"}`}>{m}</button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                  {perfDropdownSubMenu === "year" && (
                    <div className="flex flex-col gap-1 max-h-[140px] overflow-y-auto pr-0.5 text-left">
                      {[2020, 2021, 2022, 2023, 2024, 2025, 2026].map((y) => (
                        <button key={y} onClick={() => { setPerfSelectedYear(y); setPerfDropdownSubMenu("month"); }} className={`w-full px-2.5 py-1.5 rounded text-[10px] font-semibold text-left transition-colors cursor-pointer ${perfSelectedYear === y ? "bg-indigo-50 text-[#5e53fc] font-bold" : "hover:bg-slate-50 text-slate-600"}`}>{y}</button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 text-xs font-semibold">
        <div className="flex items-center justify-between"><span className="text-slate-500">Target Threshold</span><span className="text-slate-850 font-bold">€ 1,700</span></div>
        <div className="flex items-center justify-between"><span className="text-slate-500">Monthly Salary</span><span className="text-slate-850 font-bold">€ 3,200</span></div>
        <div className="flex items-center justify-between"><span className="text-slate-500">Threshold Calculation (20%)</span><span className="text-slate-850 font-bold">€ 1,700</span></div>
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <span className="text-slate-500">Performance Status</span>
          <span className="px-2.5 py-0.5 rounded text-[9px] bg-emerald-50 text-emerald-600 font-extrabold uppercase">Cost Effective</span>
        </div>
      </div>
    </div>
  );
}
