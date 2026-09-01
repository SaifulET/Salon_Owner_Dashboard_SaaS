import React from "react";

export default function ARPAStatCards() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 w-full">
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Current ARPA</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">€ 255</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">this month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">MoM change</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">€ 476</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">vs previous month (4%)</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">YoY change</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">€ 376</span>
        <span className="font-semibold text-[13px] text-[#FF6692] text-center mt-1 font-sans">vs previous year (4%)</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Total Revenue</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">€ 476k</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">this month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Top Salon vs Bottom</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">€ 821</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">Min: € 321</span>
      </div>
    </div>
  );
}
