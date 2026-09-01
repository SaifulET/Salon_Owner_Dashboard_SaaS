import React, { useState, useMemo } from "react";
import { ChartMode, TimeRange, ChartPoint, PositionedPoint } from "./types";
import { ltvPoints } from "./mockData";

interface LTVChartProps {
  timeRange: TimeRange;
  chartMode: ChartMode;
}

export default function LTVChart({ timeRange, chartMode }: LTVChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const series = useMemo(() => {
    if (timeRange === "Monthly") return ltvPoints;
    if (timeRange === "Yearly") {
      return [
        { month: "2020", value: 35000 }, { month: "2021", value: 42000 },
        { month: "2022", value: 48000 }, { month: "2023", value: 50000 },
        { month: "2024", value: 55000 }, { month: "2025", value: 59000 },
      ];
    }
    return [{ month: "2023", value: 50000 }, { month: "2024", value: 55000 }, { month: "2025", value: 59000 }];
  }, [timeRange]);

  const count = series.length;
  const W = 1115.87, H = 227.55, PX = 36.42, PY = 0.35;
  const yLabels = ["70k", "60k", "50k", "40k", "30k", "20k"];

  const getY = (val: number) => H - PY - ((val - 20000) / 50000) * (H - PY * 2);

  const pts: PositionedPoint[] = series.map((p, i) => ({
    ...p,
    x: PX + (i * (W - PX * 2)) / Math.max(count - 1, 1),
    y: getY(p.value)
  }));

  const buildPath = (points: { x: number; y: number }[]) => {
    if (points.length < 2) return "";
    const d = [`M ${points[0].x} ${points[0].y}`];
    for (let i = 0; i < points.length - 1; i++) {
      const c = points[i], n = points[i + 1], p = points[i - 1] ?? c, a = points[i + 2] ?? n;
      d.push(`C ${c.x + (n.x - p.x) / 5} ${c.y + (n.y - p.y) / 5}, ${n.x - (a.x - c.x) / 5} ${n.y - (a.y - c.y) / 5}, ${n.x} ${n.y}`);
    }
    return d.join(" ");
  };

  const linePath = buildPath(pts);
  const hPt = hoveredIndex !== null ? pts[hoveredIndex] : null;
  const tipX = hPt?.x ?? 0, tipY = hPt?.y ?? 0;
  const barW = Math.min(Math.max(((W - PX * 2) / count) * 0.45, 12), 48);

  return (
    <div className="relative w-full select-none">
      <div className={`relative w-full min-w-0 ${chartMode === "bar" ? "h-[327px]" : "h-[264px]"}`}>
        <div className={`absolute left-0 flex h-[228px] w-[34px] flex-col justify-between items-start ${chartMode === "bar" ? "top-[39px]" : "top-0"}`}>
          {yLabels.map((l) => <span key={l} className="w-[34px] text-[11px] text-center text-[#98A4AE] font-sans">{l}</span>)}
        </div>
        <div className={`absolute left-[35px] right-0 overflow-visible ${chartMode === "bar" ? "top-[32px] h-[263px]" : "top-0 h-[228px]"}`}>
          <svg className="overflow-visible pointer-events-none absolute inset-0 h-full w-full" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
            {chartMode === "bar" ? (
              series.map((point, i) => {
                const cx = PX + (i * (W - PX * 2)) / Math.max(count - 1, 1);
                const bx = cx - barW / 2;
                const bh = Math.max(((point.value - 20000) / 50000) * (H - PY * 2), 8);
                return <rect key={i} x={bx} y={H - PY - bh} width={barW} height={bh} fill={hoveredIndex === i ? "#16CDC7" : "#EFF4FA"} rx={4} />;
              })
            ) : (
              <>
                <path d={linePath} fill="none" stroke="#16CDC7" strokeWidth="1.89919" strokeLinecap="round" strokeLinejoin="round" />
                {pts.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r={2.75} fill="#16CDC7" stroke="#FFFFFF" strokeWidth="1.89919" opacity={hoveredIndex === i ? 1 : 0} />)}
                {hPt && <line x1={hPt.x} y1={PY} x2={hPt.x} y2={H - PY} stroke="#16CDC7" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />}
              </>
            )}
          </svg>
          <div className="absolute inset-0 flex">
            {series.map((_, i) => <div key={i} className="relative flex-1 cursor-crosshair" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} />)}
          </div>
          {hoveredIndex !== null && (
            <div className="pointer-events-none absolute z-30 flex flex-col items-start p-2 bg-white shadow-xl rounded-lg border border-slate-100 min-w-[100px]" style={{ left: `${(tipX / W) * 100}%`, top: `${tipY - 50}px`, transform: "translateX(-50%)" }}>
              <span className="text-[11px] font-bold text-slate-800">{series[hoveredIndex]?.month} 03, 2025</span>
              <span className="text-[11px] font-semibold text-[#16CDC7]">LTV: € {Math.round((series[hoveredIndex]?.value || 0) / 1000)}k</span>
            </div>
          )}
          <div className="absolute right-0 left-0" style={{ top: chartMode === "bar" ? "279px" : "239px" }}>
            {series.map((p, i) => <span key={i} className={`absolute text-center text-[11px] font-sans ${hoveredIndex === i ? "text-[#16CDC7]" : "text-[#98A4AE]"}`} style={{ left: `${((PX + (i * (W - PX * 2)) / Math.max(count - 1, 1)) / W) * 100}%`, transform: "translateX(-50%)", width: "80px" }}>{p.month}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
