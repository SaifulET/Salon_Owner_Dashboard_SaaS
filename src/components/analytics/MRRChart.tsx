import React, { useState, useMemo } from "react";
import { ChartTab, ChartMode, PlanType, TimeRange, ChartPoint, PositionedPoint } from "./types";
import { mrrPoints, movementsPoints, breakdownPoints, movementBars, breakdownSeriesList } from "./mockData";
import MRRChartDefs from "./MRRChartDefs";
import MRRChartBars from "./MRRChartBars";
import MRRChartLines from "./MRRChartLines";
import AnalyticsTooltip from "./AnalyticsTooltip";

interface MRRChartProps {
  activeTab: ChartTab;
  chartMode: ChartMode;
  planType: PlanType;
  timeRange: TimeRange;
}

export default function MRRChart({ activeTab, chartMode, planType, timeRange }: MRRChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const isMovements = activeTab === "Movements";

  const baseSeries = useMemo(() => {
    if (activeTab === "Movements") return movementsPoints;
    if (activeTab === "Breakdown") return breakdownPoints;
    return mrrPoints;
  }, [activeTab]);

  const mult = planType === "Basic" ? 0.82 : planType === "Premium" ? 1.08 : planType === "Enterprise" ? 1.2 : 1;
  const series: ChartPoint[] = useMemo(() => baseSeries.map((p) => ({ ...p, value: Math.round(p.value * mult) })), [baseSeries, mult]);

  const breakdownSeries = useMemo(() => breakdownSeriesList.map((s) => ({ ...s, points: s.points.map((v) => Math.round(v * mult)) })), [mult]);

  const rankedBreakdownPlans = useMemo(() => {
    if (activeTab !== "Breakdown" || hoveredIndex === null) return [];
    return breakdownSeries.map((s) => ({ label: s.label, color: s.color, value: s.points[hoveredIndex] })).sort((a, b) => b.value - a.value).slice(0, 4);
  }, [activeTab, hoveredIndex, breakdownSeries]);

  const movementSeries = useMemo(() => movementBars.map((bar) => {
    const newVal = Math.round((bar.segments.find((s) => s.label === "New")?.value || 0) * mult);
    const expVal = Math.round((bar.segments.find((s) => s.label === "Expansion")?.value || 0) * mult);
    const reactVal = Math.round((bar.segments.find((s) => s.label === "Reactivation")?.value || 0) * mult);
    const otherVal = Math.round((bar.segments.find((s) => s.label === "Other")?.value || 0) * mult);
    const contractVal = Math.round((bar.segments.find((s) => s.label === "Contracted")?.value || 0) * mult);
    const churnVal = Math.round((bar.segments.find((s) => s.label === "Churned")?.value || 0) * mult);
    return {
      month: bar.month, New: newVal, Expansion: expVal, Reactivation: reactVal, Other: otherVal, Contracted: contractVal, Churned: churnVal,
      segments: [{ label: "New", value: newVal, color: "#34C759" }, { label: "Expansion", value: expVal, color: "#00C7BE" }, { label: "Reactivation", value: reactVal, color: "#32ADE6" }, { label: "Contracted", value: contractVal, color: "#FFCC00" }, { label: "Churned", value: churnVal, color: "#FF6692" }, { label: "Other", value: otherVal, color: "#F3F3F3" }]
    };
  }), [mult]);

  const W = 1115.87, H = 227.55, PX = 36.42, PY = 0.35, count = series.length;
  const maxVal = Math.max(...series.map((p) => p.value), 1), minVal = Math.min(...series.map((p) => p.value));
  const range = Math.max(maxVal - minVal, 1);

  const getY = (val: number) => {
    if (val >= 0) return val <= 50000 ? 114 - (val / 50000) * (114 - 91.13) : 91.13 - ((val - 50000) / 20000) * (91.13 - 0.35);
    return val >= -20000 ? 114 + (-val / 20000) * (136.52 - 114) : 136.52 + ((-val - 20000) / 40000) * (227.3 - 136.52);
  };

  const pts: PositionedPoint[] = series.map((p, i) => ({ ...p, x: PX + (i * (W - PX * 2)) / (count - 1), y: H - PY - ((p.value - minVal) / range) * (H - PY * 2) }));

  const buildPath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return "";
    const d = [`M ${points[0].x} ${points[0].y}`];
    for (let i = 0; i < points.length - 1; i++) {
      const c = points[i], n = points[i + 1], p = points[i - 1] ?? c, a = points[i + 2] ?? n;
      d.push(`C ${c.x + (n.x - p.x) / 5} ${c.y + (n.y - p.y) / 5}, ${n.x - (a.x - c.x) / 5} ${n.y - (a.y - c.y) / 5}, ${n.x} ${n.y}`);
    }
    return d.join(" ");
  };

  const linePath = buildPath(pts), areaPath = pts.length ? `${linePath} L ${pts[pts.length - 1].x} ${H} L ${pts[0].x} ${H} Z` : "";
  const yLabels = activeTab === "Movements" ? ["70k", "60k", "50k", "-20K", "-40K", "-60K"] : activeTab === "Breakdown" ? ["100k", "80k", "60k", "40k", "20k", "0"] : ["40k", "38k", "35k", "32k", "30k", "28k"];
  const hPt = hoveredIndex !== null ? pts[hoveredIndex] : null, hMov = hoveredIndex !== null ? movementSeries[hoveredIndex] : null;
  const tipX = (isMovements || activeTab === "Breakdown") ? PX + ((hoveredIndex ?? 0) * (W - PX * 2)) / (count - 1) : hPt?.x ?? 0;
  const tipY = isMovements && hMov ? getY((hMov.New || 0) + (hMov.Expansion || 0)) : activeTab === "Breakdown" ? H - PY - (breakdownSeries[0].points[hoveredIndex ?? 0] / 100000) * (H - PY * 2) : hPt?.y ?? 0;
  const barW = Math.min(Math.max(((W - PX * 2) / count) * 0.45, 12), 48);

  return (
    <div className="relative w-full select-none">
      <div className={`relative w-full min-w-0 ${chartMode === "bar" ? "h-[327px]" : "h-[264px]"}`}>
        <div className={`absolute left-0 flex h-[228px] w-[34px] flex-col justify-between items-start ${chartMode === "bar" ? "top-[39px]" : "top-0"}`}>
          {yLabels.map((l) => <span key={l} className="w-[34px] text-[11px] text-center text-[#98A4AE] font-sans">{l}</span>)}
        </div>
        <div className={`absolute left-[35px] right-0 overflow-visible ${chartMode === "bar" ? "top-[32px] h-[263px]" : "top-0 h-[228px]"}`}>
          <svg className="overflow-visible absolute inset-0 h-full w-full pointer-events-none" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
            <MRRChartDefs />
            {isMovements || chartMode === "bar" ? (
              <MRRChartBars isMovements={isMovements} movementSeries={movementSeries} series={series} hoveredIndex={hoveredIndex} barW={barW} PX={PX} W={W} count={count} getY={getY} H={H} PY={PY} maxVal={maxVal} />
            ) : (
              <MRRChartLines activeTab={activeTab} breakdownSeries={breakdownSeries} hoveredIndex={hoveredIndex} tipX={tipX} areaPath={areaPath} linePath={linePath} pts={pts} hPt={hPt} PX={PX} PY={PY} W={W} H={H} buildPath={buildPath} />
            )}
          </svg>
          <div className="absolute inset-0 flex">
            {series.map((_, i) => <div key={i} className="relative flex-1 cursor-crosshair" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} />)}
          </div>
          {hoveredIndex !== null && <AnalyticsTooltip activeTab={activeTab} tipX={tipX} tipY={tipY} hoveredIndex={hoveredIndex} hPt={hPt} hMov={hMov} rankedBreakdownPlans={rankedBreakdownPlans} />}
          <div className="absolute right-0 left-0" style={{ top: chartMode === "bar" ? "279px" : "239px" }}>
            {series.map((p, i) => <span key={i} className={`absolute text-center text-[11px] font-sans ${hoveredIndex === i ? "text-[#16CDC7]" : "text-[#98A4AE]"}`} style={{ left: `${((PX + (i * (W - PX * 2)) / (count - 1)) / W) * 100}%`, transform: "translateX(-50%)", width: "80px" }}>{p.month}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
