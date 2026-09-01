import React from "react";
import { SubTab } from "./types";

interface SubscribersStatCardsProps {
  activeTab: SubTab;
}

export default function SubscribersStatCards({ activeTab }: SubscribersStatCardsProps) {
  if (activeTab === "Breakdown") {
    return (
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 w-full">
        <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
          <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Top plan over range</div>
          <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">Premium</div>
        </div>
        <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
          <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Bottom plan over range</div>
          <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">Enterprise</div>
        </div>
        <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
          <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Best performing plan year</div>
          <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">2024</div>
        </div>
        <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
          <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Worst performing plan year</div>
          <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">2023</div>
        </div>
        <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
          <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Total change in all plans</div>
          <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">1,240</div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 w-full">
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Current Customers</div>
        <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">1,696</div>
        <div className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">this month</div>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">MoM change</div>
        <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">79</div>
        <div className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">vs previous month (0.36%)</div>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">YoY change</div>
        <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">79</div>
        <div className="font-semibold text-[13px] text-[#FF6692] text-center mt-1 font-sans">vs previous year (0.53%)</div>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Net New Customers</div>
        <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">79</div>
        <div className="font-semibold text-[13px] text-[#98A4AE] text-center mt-1 font-sans">this month</div>
      </div>
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] text-[#29343D] text-center font-sans">Customer churn</div>
        <div className="font-semibold text-[24px] text-[#29343D] text-center mt-1 font-sans">7.05%</div>
        <div className="font-semibold text-[13px] text-[#36C76C] text-center mt-1 font-sans">this month</div>
      </div>
    </div>
  );
}
