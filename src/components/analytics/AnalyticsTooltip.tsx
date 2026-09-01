import React from "react";
import { ChartTab } from "./types";

interface AnalyticsTooltipProps {
  activeTab: ChartTab;
  tipX: number;
  tipY: number;
  hoveredIndex: number;
  hPt: { month: string; value: number } | null;
  hMov: any;
  rankedBreakdownPlans: { label: string; color: string; value: number }[];
}

export default function AnalyticsTooltip({
  activeTab,
  tipX,
  tipY,
  hoveredIndex,
  hPt,
  hMov,
  rankedBreakdownPlans
}: AnalyticsTooltipProps) {
  const isMovements = activeTab === "Movements";
  const isBreakdown = activeTab === "Breakdown";

  return (
    <div
      className="pointer-events-none absolute z-30 transition-all duration-150 text-left font-sans"
      style={{
        left: `${(tipX / 1115.87) * 100}%`,
        top: isMovements ? `${tipY - 180}px` : isBreakdown ? `${tipY - 140}px` : `${tipY - 70}px`,
        transform: "translateX(-50%)"
      }}
    >
      <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-3 min-w-[160px] text-xs">
        <div className="font-bold text-slate-800 border-b border-slate-100 pb-1.5 mb-2">
          {hPt?.month || hMov?.month || `Month ${hoveredIndex + 1}`}
        </div>

        {activeTab === "MRR" && (
          <div className="flex items-center justify-between gap-4">
            <span className="text-slate-500 font-medium">MRR:</span>
            <span className="font-bold text-[#5e53fc]">€ {hPt?.value.toLocaleString()}</span>
          </div>
        )}

        {isMovements && hMov && (
          <div className="flex flex-col gap-1 text-[11px]">
            {hMov.segments.map((s: any) => (
              <div key={s.label} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} />
                  <span className="text-slate-600">{s.label}:</span>
                </div>
                <span className="font-bold text-slate-800">€ {s.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}

        {isBreakdown && (
          <div className="flex flex-col gap-1 text-[11px]">
            {rankedBreakdownPlans.map((p) => (
              <div key={p.label} className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
                  <span className="text-slate-600 truncate max-w-[90px]">{p.label}:</span>
                </div>
                <span className="font-bold text-slate-800">€ {p.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
