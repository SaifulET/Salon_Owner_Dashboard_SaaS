"use client";

import React, { useState, useMemo } from "react";
import AnalyticsHeader from "../common/AnalyticsHeader";
import CohortsStatCards from "./CohortsStatCards";
import CohortsFiltersModal from "./CohortsFiltersModal";
import CohortsTable from "./CohortsTable";
import { TabType, TimeRange } from "./types";
import { timeRangeOptions, cohortMonthlyData } from "./mockData";

export default function CohortsPage({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [activeSubTab, setActiveSubTab] = useState<TabType>("Net MRR Retention");
  const [timeRange, setTimeRange] = useState<TimeRange>("Monthly");
  const [timeRangeOpen, setTimeRangeOpen] = useState(false);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [planFilter, setPlanFilter] = useState<"All" | "Basic" | "Premium" | "Enterprise">("All");
  const [cityFilter, setCityFilter] = useState("All cities");

  const filteredData = useMemo(() => {
    let list = cohortMonthlyData;
    if (planFilter !== "All") list = list.filter((r) => r.plan === planFilter);
    if (cityFilter !== "All cities") list = list.filter((r) => r.city === cityFilter);
    return list;
  }, [planFilter, cityFilter]);

  const handleExport = () => {
    const csvContent = "Cohort,MRR,Plan,City,M+1\nAug 2024,€ 19,866,Premium,Rome,82.9%\n";
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csvContent], { type: "text/csv;charset=utf-8;" }));
    link.download = "cohorts_report.csv";
    link.click();
  };

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] animate-in fade-in duration-300 font-sans pb-10">
      <AnalyticsHeader title="Analytics" setActiveTab={setActiveTab} onResync={() => setTimeRange("Monthly")} />

      <section className="relative w-full rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div className="flex flex-col gap-3">
            <h2 className="text-[16px] font-semibold leading-[22px] text-[#29343D]">Cohorts Retention</h2>
            <div className="flex items-center gap-6 border-b border-[#F0F4F8]">
              {(["Net MRR Retention", "Subscriber Retention"] as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveSubTab(tab)}
                  className={`pb-3 text-[13px] font-medium transition-colors cursor-pointer relative ${
                    activeSubTab === tab ? "text-[#635BFF] after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#635BFF]" : "text-[#7A8897] hover:text-[#253143]"
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

            <div className="relative">
              <button onClick={() => setFiltersOpen(!filtersOpen)} className="inline-flex h-9 items-center gap-2 rounded-[8px] border border-[#EFF4FA] bg-white px-3 text-[12px] font-medium text-[#0A2540] hover:bg-[#F7F9FC] cursor-pointer">
                Filter
              </button>
              <CohortsFiltersModal isOpen={filtersOpen} onClose={() => setFiltersOpen(false)} planFilter={planFilter} setPlanFilter={setPlanFilter} cityFilter={cityFilter} setCityFilter={setCityFilter} />
            </div>

            <button onClick={handleExport} className="inline-flex h-9 items-center rounded-[8px] border border-[#635BFF] bg-white px-4 text-[12px] font-medium text-[#635BFF] hover:bg-[#F1F2FE] cursor-pointer">
              Export Data
            </button>
          </div>
        </div>

        <CohortsStatCards />
      </section>

      <CohortsTable data={filteredData} activeSubTab={activeSubTab} />
    </div>
  );
}
