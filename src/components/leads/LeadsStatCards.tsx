import React from "react";

export default function LeadsStatCards() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 w-full">
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Total Leads</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">108</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">↑ 12% vs last month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Active Trials</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">72</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">↑ 8% vs last month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Converted to Paid</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">54</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">↑ 15% vs last month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Lead-to-Trial Rate</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">66.7%</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">Avg: 62%</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Trial-to-Paid Rate</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">75.0%</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">Avg: 70%</span>
      </div>
    </div>
  );
}
