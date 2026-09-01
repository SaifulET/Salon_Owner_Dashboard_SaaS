import React from "react";

export default function TrialsStatCards() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 w-full">
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Current Trials</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">476</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">this month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">MoM change</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">79</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">vs previous month (0.36%)</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">YoY change</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">79</span>
        <span className="font-semibold text-[13px] text-[#FF6692] text-center mt-1 font-sans">vs previous year (0.53%)</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Net New Trials</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">79</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">this month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Trial churn</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">7.05%</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">this month</span>
      </div>
    </div>
  );
}
