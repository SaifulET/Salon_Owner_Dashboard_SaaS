import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export default function OperationStatisticsCard() {
  const [opsPeriod, setOpsPeriod] = useState("Last Month");
  const [isOpsPeriodDropdownOpen, setIsOpsPeriodDropdownOpen] = useState(false);

  return (
    <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col text-left font-semibold text-xs font-sans">
      <div className="flex items-center justify-between mb-5">
        <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Operation Statics</h4>
        <div className="relative">
          <button onClick={() => setIsOpsPeriodDropdownOpen(!isOpsPeriodDropdownOpen)} className="px-3 py-1.5 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600 bg-white flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer">
            {opsPeriod} <HugeiconsIcon icon={ArrowDown01Icon} size={10} className={`transition-transform duration-200 ${isOpsPeriodDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {isOpsPeriodDropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsOpsPeriodDropdownOpen(false)}></div>
              <div className="absolute right-0 mt-1.5 w-32 bg-white border border-slate-100 rounded-xl shadow-lg py-1 z-20 text-left text-xs font-semibold text-slate-600 animate-in fade-in slide-in-from-top-2 duration-150">
                {["Last Month", "Last Year", "Custom Range"].map((option) => (
                  <button key={option} onClick={() => { setOpsPeriod(option); setIsOpsPeriodDropdownOpen(false); }} className={`w-full px-3 py-2 text-left transition-colors cursor-pointer ${opsPeriod === option ? "bg-indigo-50 text-indigo-600 font-bold" : "hover:bg-slate-50 hover:text-slate-800"}`}>{option}</button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 text-xs font-semibold">
        <div className="flex items-center justify-between"><span className="text-slate-500">Completed Appointments</span><span className="text-slate-850 font-bold">38</span></div>
        <div className="flex items-center justify-between"><span className="text-slate-500">Revenue Appointment</span><span className="text-slate-850 font-bold">€ 223.68</span></div>
        <div className="flex items-center justify-between"><span className="text-slate-500">Working Days</span><span className="text-slate-850 font-bold">3</span></div>
        <div className="flex items-center justify-between pt-2 border-t border-slate-50">
          <span className="text-slate-500">Performance Status</span>
          <span className="text-slate-850 font-extrabold">€ 2,833.33</span>
        </div>
      </div>
    </div>
  );
}
