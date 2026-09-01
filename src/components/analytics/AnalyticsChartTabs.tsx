import React from "react";
import { ChartTab } from "./types";
import { DownloadIcon } from "./AnalyticsIcons";

interface AnalyticsChartTabsProps {
  activeTab: ChartTab;
  setActiveTab: (tab: ChartTab) => void;
  onExport: () => void;
}

export default function AnalyticsChartTabs({ activeTab, setActiveTab, onExport }: AnalyticsChartTabsProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4 w-full">
      <div className="flex items-center gap-6">
        {(["MRR", "Movements", "Breakdown"] as ChartTab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-bold pb-1 transition-all cursor-pointer relative ${
              activeTab === tab
                ? "text-[#5e53fc] after:absolute after:bottom-[-17px] after:left-0 after:right-0 after:h-0.5 after:bg-[#5e53fc]"
                : "text-slate-400 hover:text-slate-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <button
        onClick={onExport}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 text-xs font-semibold transition-all cursor-pointer"
      >
        <DownloadIcon />
        <span>Export CSV</span>
      </button>
    </div>
  );
}
