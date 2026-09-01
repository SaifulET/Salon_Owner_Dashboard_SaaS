"use client";

import React, { useState, useMemo } from "react";
import AnalyticsHeader from "../common/AnalyticsHeader";
import LTVChart from "./LTVChart";
import LTVStatCards from "./LTVStatCards";
import LTVTable from "./LTVTable";
import { ChartMode, TimeRange } from "./types";
import { timeRangeOptions, tableRows } from "./mockData";

export default function LTVPage({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [chartMode, setChartMode] = useState<ChartMode>("line");
  const [timeRange, setTimeRange] = useState<TimeRange>("Yearly");
  const [timeRangeOpen, setTimeRangeOpen] = useState(false);

  const currentTableRows = useMemo(() => {
    if (timeRange === "Monthly") {
      return [
        { year: "Jan 2025", ltv: "€ 1,210", deltaAmt: "€ 40", deltaPct: "(2.5%)", arpa: "€ 205", churn: "(18%)" },
        { year: "Feb 2025", ltv: "€ 1,220", deltaAmt: "€ 41", deltaPct: "(2.6%)", arpa: "€ 206", churn: "(18%)" },
        { year: "Mar 2025", ltv: "€ 1,230", deltaAmt: "€ 42", deltaPct: "(2.7%)", arpa: "€ 207", churn: "(18.5%)" },
        { year: "Apr 2025", ltv: "€ 1,240", deltaAmt: "€ 43", deltaPct: "(2.8%)", arpa: "€ 208", churn: "(19%)" },
        { year: "May 2025", ltv: "€ 1,250", deltaAmt: "€ 45", deltaPct: "(3%)", arpa: "€ 210", churn: "(20%)" },
      ];
    }
    if (timeRange === "2023-2025") {
      return tableRows.filter((r) => ["2023", "2024", "2025"].includes(r.year));
    }
    return tableRows;
  }, [timeRange]);

  const handleExport = () => {
    const csvContent = "Year,LTV,Delta Amount,Delta Percentage,ARPA,Churn\n2025,€ 4,187,-,-,€ 255,12.5%\n";
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csvContent], { type: "text/csv;charset=utf-8;" }));
    link.download = "ltv_report.csv";
    link.click();
  };

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] animate-in fade-in duration-300 font-sans pb-10">
      <AnalyticsHeader title="Analytics" setActiveTab={setActiveTab} onResync={() => setTimeRange("Yearly")} />

      <section className="relative w-full rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-[16px] font-semibold leading-[22px] text-[#29343D]">Salon's Customer Lifetime Value</h2>
          <div className="flex flex-wrap items-center gap-3">
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

        <LTVChart timeRange={timeRange} chartMode={chartMode} />
        <LTVStatCards />
      </section>

      <LTVTable rows={currentTableRows} />
    </div>
  );
}
