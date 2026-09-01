import React from "react";

export default function LTVStatCards() {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5 w-full">
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] leading-[18px] text-[#29343D] text-center font-sans">Current Year LTV</div>
        <div className="font-semibold text-[24px] leading-[29px] text-[#29343D] text-center mt-1 font-sans">€ 255</div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] leading-[18px] text-[#29343D] text-center font-sans">YoY change</div>
        <div className="font-semibold text-[24px] leading-[29px] text-[#29343D] text-center mt-1 font-sans">€ 45</div>
        <div className="font-semibold text-[13px] leading-[18px] text-center mt-1 text-[#FF6692] font-sans">vs previous year (3%)</div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] leading-[18px] text-[#29343D] text-center font-sans">Current Year ARPA</div>
        <div className="font-semibold text-[24px] leading-[29px] text-[#29343D] text-center mt-1 font-sans">€ 210</div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] leading-[18px] text-[#29343D] text-center font-sans">Current Year Churn</div>
        <div className="font-semibold text-[24px] leading-[29px] text-[#29343D] text-center mt-1 font-sans">(20%)</div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] leading-[18px] text-[#29343D] text-center font-sans">Average LTV</div>
        <div className="font-semibold text-[24px] leading-[29px] text-[#29343D] text-center mt-1 font-sans">€ 1,250</div>
      </div>
    </div>
  );
}
