"use client";

import React, { useState } from "react";
import AnalyticsHeader from "../common/AnalyticsHeader";
import LeadsChart from "./LeadsChart";
import LeadsStatCards from "./LeadsStatCards";
import LeadsTable from "./LeadsTable";
import { ChartMode, SubTab, TimeRange } from "./types";
import { timeRangeOptions, performanceMetricsRows } from "./mockData";

export default function LeadsPage({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [chartMode, setChartMode] = useState<ChartMode>("line");
  const [activeTab, setActiveTabTab] = useState<SubTab>("New Leads");
  const [timeRange, setTimeRange] = useState<TimeRange>("Monthly");
  const [timeRangeOpen, setTimeRangeOpen] = useState(false);

  const handleExport = () => {
    const csvContent = "Period,Leads,Trials,Converted\nMar 2025,108,72,54\nApr 2025,108,72,54\n";
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csvContent], { type: "text/csv;charset=utf-8;" }));
    link.download = "leads_report.csv";
    link.click();
  };

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] animate-in fade-in duration-300 font-sans pb-10">
      <AnalyticsHeader title="Analytics" setActiveTab={setActiveTab} onResync={() => setTimeRange("Monthly")} />

      <section className="relative w-full rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-[16px] font-semibold leading-[22px] text-[#29343D]">Leads & Conversions</h2>
            <div className="flex items-center gap-6 border-b border-[#F0F4F8]">
              {(["New Leads", "Lead-to-trial conversion", "Lead-to-paid conversion"] as SubTab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTabTab(tab)}
                  className={`pb-3 text-[13px] font-medium transition-colors cursor-pointer relative ${
                    activeTab === tab ? "text-[#635BFF] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#635BFF]" : "text-[#7A8897] hover:text-[#253143]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <button onClick={() => setTimeRangeOpen(!timeRangeOpen)} className="inline-flex h-9 items-center gap-2 rounded-[8px] border border-[#EFF4FA] bg-white px-3 text-[12px] font-medium text-[#0A2540] hover:bg-[#F7F9FC] cursor-pointer">
                {timeRange}
              </button>
              {timeRangeOpen && (
                <div className="absolute right-0 top-[42px] z-30 w-[140px] rounded-xl bg-white p-1.5 shadow-xl border border-slate-100">
                  {timeRangeOptions.map((opt) => (
                    <button key={opt} onClick={() => { setTimeRange(opt); setTimeRangeOpen(false); }} className={`flex h-8 w-full items-center rounded-lg px-3 text-[12px] font-medium cursor-pointer ${timeRange === opt ? "bg-[#EFF4FA] text-[#0A2540]" : "text-[#0A2540] hover:bg-[#F7F9FC]"}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button onClick={() => setChartMode((m) => (m === "line" ? "bar" : "line"))} className="inline-flex h-9 items-center gap-2 rounded-[8px] border border-[#EFF4FA] bg-white px-3 text-[12px] font-medium text-[#0A2540] hover:bg-[#F7F9FC] cursor-pointer">
              Change View
            </button>

            <button onClick={handleExport} className="inline-flex h-9 items-center rounded-[8px] border border-[#635BFF] bg-white px-4 text-[12px] font-medium text-[#635BFF] hover:bg-[#F1F2FE] cursor-pointer">
              Export Data
            </button>
          </div>
        </div>

        <LeadsChart timeRange={timeRange} chartMode={chartMode} activeTab={activeTab} />
        <LeadsStatCards />
      </section>

      <LeadsTable rows={performanceMetricsRows} />
    </div>
  );
}
