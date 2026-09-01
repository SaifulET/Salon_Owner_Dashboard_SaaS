"use client";

import React, { useState, useMemo } from "react";
import AnalyticsHeader from "../common/AnalyticsHeader";
import dynamic from "next/dynamic";
import MapFilterModal from "./MapFilterModal";
import MapTable from "./MapTable";
import { MetricType, Timeframe } from "./types";
import { defaultRows } from "./mockData";

const ItalyLeafletMap = dynamic(() => import("./ItalyLeafletMap"), {
  ssr: false,
  loading: () => <div className="w-full h-full min-h-[440px] flex items-center justify-center bg-[#EFF4FA]/40 rounded-xl font-sans text-sm text-[#526B7A]">Initializing Map...</div>
});

const metricsList: MetricType[] = ["MRR", "Subscribers", "ARPA", "Customer Churn", "NET MRR Churn", "LTV"];

export default function MapPage({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [activeMetric, setActiveMetric] = useState<MetricType>("MRR");
  const [timeframe, setTimeframe] = useState<Timeframe>("Monthly");
  const [timeframeOpen, setTimeframeOpen] = useState(false);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [planFilter, setPlanFilter] = useState<"All" | "Basic" | "Premium" | "Enterprise">("All");
  const [cityFilter, setCityFilter] = useState<"All cities" | "Rome" | "Milano" | "Bologna">("All cities");
  const [sortOrder, setSortOrder] = useState<"Highest" | "Lowest">("Highest");

  const tfMult = timeframe === "Yearly" ? 12 : timeframe === "2023-2025" ? 36 : 1;

  const rows = useMemo(() => {
    let list = defaultRows.map((r) => ({
      ...r,
      mrr: Math.round(r.mrr * tfMult),
      ltv: Math.round(r.ltv * tfMult)
    }));
    if (cityFilter !== "All cities") list = list.filter((r) => r.city === cityFilter);
    if (planFilter !== "All") list = list.filter((r) => r.plan === planFilter);
    return list.sort((a, b) => (sortOrder === "Highest" ? b.mrr - a.mrr : a.mrr - b.mrr));
  }, [tfMult, cityFilter, planFilter, sortOrder]);

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] animate-in fade-in duration-300 font-sans pb-10">
      <AnalyticsHeader title="Analytics" setActiveTab={setActiveTab} onResync={() => { setActiveMetric("MRR"); setTimeframe("Monthly"); }} />

      <section className="relative w-full rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-5">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-4">
          <div className="flex items-center gap-3 relative">
            <h2 className="text-[16px] font-bold text-[#29343D]">Map {hoveredRegion && <span className="text-slate-400 font-normal ml-1">({hoveredRegion})</span>}</h2>
            <button onClick={() => setFiltersOpen(!filtersOpen)} className="h-9 px-3 text-[12px] font-semibold bg-[#EFF4FA] rounded-[8px] hover:bg-[#E2EAF2] cursor-pointer">
              Filter
            </button>
            <MapFilterModal isOpen={filtersOpen} onClose={() => setFiltersOpen(false)} planFilter={planFilter} setPlanFilter={setPlanFilter} cityFilter={cityFilter} setCityFilter={setCityFilter} sortOrder={sortOrder} setSortOrder={setSortOrder} />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <button onClick={() => setTimeframeOpen(!timeframeOpen)} className="h-9 px-3 text-[12px] font-medium border border-[#EFF4FA] rounded-[8px] bg-white hover:bg-[#F7F9FC] cursor-pointer">
                {timeframe}
              </button>
              {timeframeOpen && (
                <div className="absolute right-0 top-[42px] z-30 w-32 bg-white p-1.5 rounded-xl shadow-xl border border-slate-100">
                  {(["Monthly", "Yearly", "2023-2025"] as Timeframe[]).map((tf) => (
                    <button key={tf} onClick={() => { setTimeframe(tf); setTimeframeOpen(false); }} className={`w-full text-left px-3 py-1.5 text-xs rounded-lg cursor-pointer ${timeframe === tf ? "bg-[#EFF4FA] font-bold" : "hover:bg-[#F7F9FC]"}`}>
                      {tf}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex bg-[#F6F8FB] p-1 rounded-xl gap-1">
              {metricsList.map((m) => (
                <button key={m} onClick={() => setActiveMetric(m)} className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${activeMetric === m ? "bg-white shadow-sm text-[#635BFF]" : "text-[#526B7A] hover:text-[#0A2540]"}`}>
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>

        <ItalyLeafletMap activeMetric={activeMetric} timeframe={timeframe} planFilter={planFilter} cityFilter={cityFilter} onRegionHover={setHoveredRegion} onRegionClick={() => {}} />
      </section>

      <MapTable rows={rows} hoveredRegion={hoveredRegion} />
    </div>
  );
}
