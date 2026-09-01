import React from "react";

export default function ChurnStatCards() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 w-full">
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Current Churn Rate</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">3.72%</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">this month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">MoM change</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">€ 297</span>
        <span className="font-semibold text-[13px] text-[#FF6692] text-center mt-1 font-sans">vs previous month (3.72%)</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">YoY change</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">€ 1,290</span>
        <span className="font-semibold text-[13px] text-[#FF6692] text-center mt-1 font-sans">vs previous year (3.72%)</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Total Net Churn</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">€ 2,450</span>
        <span className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">this month</span>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[147px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <span className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Customer Churn Rate</span>
        <span className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">2.15%</span>
        <span className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">Target: &lt; 3%</span>
      </div>
    </div>
  );
}
