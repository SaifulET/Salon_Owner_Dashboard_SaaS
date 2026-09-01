import React from "react";
import DailyProductionChart from "./DailyProductionChart";
import ProductionTrendsChart from "./ProductionTrendsChart";
import PerformanceMetricsCard from "./PerformanceMetricsCard";
import OperationStatisticsCard from "./OperationStatisticsCard";

export default function ProductionTab() {
  return (
    <div className="flex flex-col gap-6 w-full text-left font-semibold text-xs font-sans">
      <DailyProductionChart />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-slate-100 rounded-3xl p-5 bg-gradient-to-tr from-slate-50/40 to-slate-50 flex flex-col gap-1.5">
          <span className="text-[#5e53fc] text-[9px] font-extrabold uppercase">Monthly Turnover</span>
          <span className="text-2xl font-black text-slate-800 mt-1">€ 8,500</span>
        </div>
        <div className="border border-slate-100 rounded-3xl p-5 bg-gradient-to-tr from-slate-50/40 to-slate-50 flex flex-col gap-1.5">
          <span className="text-slate-500 text-[9px] font-extrabold uppercase">Target Threshold</span>
          <span className="text-2xl font-black text-slate-800 mt-1">€ 6,400</span>
        </div>
        <div className="border border-slate-100 rounded-3xl p-5 bg-gradient-to-tr from-slate-50/40 to-slate-50 flex flex-col gap-2.5">
          <span className="text-emerald-600 text-[9px] font-extrabold uppercase block">Performance</span>
          <span className="text-2xl font-black text-slate-800">133%</span>
          <span className="px-2.5 py-0.5 rounded text-[8px] bg-emerald-50 text-emerald-600 font-extrabold uppercase w-fit">Cost Effective</span>
        </div>
      </div>

      <ProductionTrendsChart />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PerformanceMetricsCard />
        <OperationStatisticsCard />
      </div>
    </div>
  );
}
