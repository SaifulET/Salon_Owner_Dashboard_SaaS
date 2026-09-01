import React from "react";
import { PlanType } from "./types";

interface AnalyticsStatCardsProps {
  planType: PlanType;
}

export default function AnalyticsStatCards({ planType }: AnalyticsStatCardsProps) {
  const mult = planType === "Basic" ? 0.82 : planType === "Premium" ? 1.08 : planType === "Enterprise" ? 1.2 : 1;
  const mrrVal = Math.round(37500 * mult);
  const arpuVal = Math.round(542 * mult);
  const ltvVal = Math.round(3588 * mult);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] leading-[18px] text-[#29343D] text-center font-sans">Monthly Recurring Revenue</div>
        <div className="font-semibold text-[24px] leading-[29px] text-[#29343D] text-center mt-1 font-sans">€ {mrrVal.toLocaleString()}</div>
        <div className="font-semibold text-[13px] leading-[18px] text-center mt-1 text-[#10B981] font-sans">+11.6% from last month</div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] leading-[18px] text-[#29343D] text-center font-sans">Total ARPU</div>
        <div className="font-semibold text-[24px] leading-[29px] text-[#29343D] text-center mt-1 font-sans">€ {arpuVal}</div>
        <div className="font-semibold text-[13px] leading-[18px] text-center mt-1 text-[#10B981] font-sans">+4.2% from last month</div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] leading-[18px] text-[#29343D] text-center font-sans">Lifetime Value</div>
        <div className="font-semibold text-[24px] leading-[29px] text-[#29343D] text-center mt-1 font-sans">€ {ltvVal.toLocaleString()}</div>
        <div className="font-semibold text-[13px] leading-[18px] text-center mt-1 text-[#10B981] font-sans">+8.1% from last month</div>
      </div>

      <div className="flex flex-col justify-center items-center p-6 gap-1 h-[129px] bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex-1 min-w-0">
        <div className="font-semibold text-[13px] leading-[18px] text-[#29343D] text-center font-sans">Monthly Churn Rate</div>
        <div className="font-semibold text-[24px] leading-[29px] text-[#29343D] text-center mt-1 font-sans">7%</div>
        <div className="font-semibold text-[13px] leading-[18px] text-center mt-1 text-[#98A4AE] font-sans">Target: &lt; 5%</div>
      </div>
    </div>
  );
}
