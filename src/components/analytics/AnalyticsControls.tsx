import React from "react";
import { PlanType, TimeRange, ChartMode, FilterStage } from "./types";
import { planTypeOptions, timeRangeOptions, salonOptions, cityOptions } from "./mockData";
import { FilterIcon, LineChartIcon, BarChartIcon, CloseIcon } from "./AnalyticsIcons";
import AnalyticsFilterModal from "./AnalyticsFilterModal";

interface AnalyticsControlsProps {
  planType: PlanType;
  setPlanType: (val: PlanType) => void;
  timeRange: TimeRange;
  setTimeRange: (val: TimeRange) => void;
  chartMode: ChartMode;
  setChartMode: (val: ChartMode) => void;
  selectedSalon: string;
  setSelectedSalon: (val: string) => void;
  selectedCity: string;
  setSelectedCity: (val: string) => void;
  selectedFilter: string | null;
  setSelectedFilter: (val: string | null) => void;
  isFilterOpen: boolean;
  setIsFilterOpen: (val: boolean) => void;
  filterStage: FilterStage;
  setFilterStage: (val: FilterStage) => void;
}

export default function AnalyticsControls({
  planType,
  setPlanType,
  timeRange,
  setTimeRange,
  chartMode,
  setChartMode,
  selectedSalon,
  setSelectedSalon,
  selectedCity,
  setSelectedCity,
  selectedFilter,
  setSelectedFilter,
  isFilterOpen,
  setIsFilterOpen,
  filterStage,
  setFilterStage
}: AnalyticsControlsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 w-full">
      <div className="flex flex-wrap items-center gap-3">
        <select value={selectedSalon} onChange={(e) => setSelectedSalon(e.target.value)} className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 focus:border-[#5e53fc] focus:outline-none cursor-pointer">
          {salonOptions.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)} className="h-9 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-700 focus:border-[#5e53fc] focus:outline-none cursor-pointer">
          {cityOptions.map((c) => <option key={c} value={c}>{c}</option>)}
        </select>
        <div className="flex items-center rounded-lg border border-slate-200 bg-white p-0.5">
          {planTypeOptions.map((p) => (
            <button key={p} onClick={() => setPlanType(p)} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${planType === p ? "bg-[#f2f1ff] text-[#5e53fc]" : "text-slate-500 hover:text-slate-800"}`}>
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <button onClick={() => { setIsFilterOpen(!isFilterOpen); setFilterStage("root"); }} className={`flex h-9 items-center gap-2 rounded-lg border px-3 text-xs font-semibold transition-colors cursor-pointer ${selectedFilter ? "border-[#5e53fc] bg-[#f2f1ff] text-[#5e53fc]" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}>
            <FilterIcon />
            <span>{selectedFilter || "Filter"}</span>
            {selectedFilter && (
              <span onClick={(e) => { e.stopPropagation(); setSelectedFilter(null); }} className="hover:text-rose-600 ml-1">
                <CloseIcon />
              </span>
            )}
          </button>
          <AnalyticsFilterModal isOpen={isFilterOpen} filterStage={filterStage} selectedFilter={selectedFilter} setFilterStage={setFilterStage} setSelectedFilter={setSelectedFilter} onClose={() => setIsFilterOpen(false)} />
        </div>

        <div className="flex items-center rounded-lg border border-slate-200 bg-white p-0.5">
          {timeRangeOptions.map((t) => (
            <button key={t} onClick={() => setTimeRange(t)} className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${timeRange === t ? "bg-[#f2f1ff] text-[#5e53fc]" : "text-slate-500 hover:text-slate-800"}`}>
              {t}
            </button>
          ))}
        </div>

        <div className="flex items-center rounded-lg border border-slate-200 bg-white p-0.5">
          <button onClick={() => setChartMode("line")} className={`p-1.5 rounded-md transition-all cursor-pointer ${chartMode === "line" ? "bg-[#f2f1ff] text-[#5e53fc]" : "text-slate-400 hover:text-slate-700"}`} title="Line Chart">
            <LineChartIcon />
          </button>
          <button onClick={() => setChartMode("bar")} className={`p-1.5 rounded-md transition-all cursor-pointer ${chartMode === "bar" ? "bg-[#f2f1ff] text-[#5e53fc]" : "text-slate-400 hover:text-slate-700"}`} title="Bar Chart">
            <BarChartIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
