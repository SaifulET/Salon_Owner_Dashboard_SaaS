import React from "react";

export default function CohortsStatCards() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 w-full text-left">
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Current Retention Rate</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">82.9%</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">this month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">MoM change</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">+2.1%</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">vs previous month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">YoY change</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">+5.4%</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">vs previous year</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Highest Retention Plan</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">Premium</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">91.2% retention</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Avg Lifetime / Cohort</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">14.2 mo</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">Across all salons</span>
      </div>
    </div>
  );
}
