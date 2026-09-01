import React, { useState, useMemo } from "react";
import { ChartMode, TimeRange, ChartPoint, PositionedPoint } from "./types";
import { cashflowPoints } from "./mockData";

interface CashflowChartProps {
  timeRange: TimeRange;
  chartMode: ChartMode;
}

export default function CashflowChart({ timeRange, chartMode }: CashflowChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const series = useMemo(() => {
    if (timeRange === "Monthly") return cashflowPoints;
    return [{ month: "2023", value: 150000 }, { month: "2024", value: 190000 }, { month: "2025", value: 238391 }];
  }, [timeRange]);

  const count = series.length;
  const W = 1115.87, H = 227.55, PX = 36.42, PY = 0.35;
  const yLabels = ["250K", "200K", "150K", "100K", "50K", "0"];

  const getY = (val: number) => H - PY - (val / 250000) * (H - PY * 2);

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
  const hPt = hoveredIndex !== null && series[hoveredIndex].value > 0 ? pts[hoveredIndex] : null;
  const tipX = hPt?.x ?? 0, tipY = hPt?.y ?? 0;
  const barW = Math.min(Math.max(((W - PX * 2) / (count - 1)) * 0.45, 12), 48);

  const tooltipSegments = [
    { label: "Monthly plans", value: "€ 32K", color: "#34C759" },
    { label: "Yearly plans", value: "€ 32K", color: "#00C7BE" },
    { label: "Metered", value: "€ 32K", color: "#33ADE5" },
    { label: "One-time", value: "€ 32K", color: "#FFCC00" },
    { label: "Discounts", value: "€ 32K", color: "#FF6692" },
    { label: "Refunds", value: "€ 32K", color: "#644B45" },
    { label: "Fees", value: "€ 32K", color: "#5655D2" },
    { label: "Taxes", value: "€ 32K", color: "#007AFE" },
    { label: "FX loss", value: "€ 32K", color: "#EEEFEF" },
  ];

  return (
    <div className="relative w-full select-none">
      <div className="relative w-full min-w-0 h-[264px]">
        <div className="absolute left-0 flex h-[228px] w-[34px] flex-col justify-between items-start top-0">
          {yLabels.map((l) => <span key={l} className="w-[34px] text-[11px] text-center text-[#98A4AE] font-sans">{l}</span>)}
        </div>
        <div className="absolute left-[35px] right-0 overflow-visible top-0 h-[228px]">
          <svg className="overflow-visible pointer-events-none absolute inset-0 h-full w-full" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none">
            {chartMode === "bar" ? (
              series.map((point, i) => {
                if (point.value === 0) return null;
                const cx = PX + (i * (W - PX * 2)) / (count - 1);
                const bh = (point.value / 250000) * (H - PY * 2);
                return <rect key={i} x={cx - barW / 2} y={H - PY - bh} width={barW} height={bh} fill="#007AFE" rx={8} opacity={hoveredIndex === i ? 1 : 0.85} />;
              })
            ) : (
              <>
                <path d={linePath} fill="none" stroke="#007AFE" strokeWidth="1.89919" strokeLinecap="round" strokeLinejoin="round" />
                {pts.map((p, i) => p.value > 0 && <circle key={i} cx={p.x} cy={p.y} r={2.75} fill="#007AFE" stroke="#FFFFFF" strokeWidth="1.89919" opacity={hoveredIndex === i ? 1 : 0} />)}
                {hPt && <line x1={hPt.x} y1={PY} x2={hPt.x} y2={H - PY} stroke="#007AFE" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />}
              </>
            )}
          </svg>
          <div className="absolute inset-0 flex">
            {series.map((_, i) => <div key={i} className="relative flex-1 cursor-crosshair" onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} />)}
          </div>
          {hPt && (
            <div className="pointer-events-none absolute z-30 flex flex-col p-3.5 w-[190px] bg-white shadow-xl border border-slate-100 rounded-xl" style={{ left: `${Math.min(Math.max((tipX / W) * 100, 15), 80)}%`, top: "0px", transform: "translateX(-50%)" }}>
              <span className="font-bold text-[13px] text-[#29343D] mb-2">{series[hoveredIndex!]?.month} 03, 2025</span>
              <div className="flex flex-col gap-1 w-full">
                {tooltipSegments.map((s) => (
                  <div key={s.label} className="flex items-center justify-between text-[11px]">
                    <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: s.color }} /><span className="text-[#29343D]">{s.label}</span></div>
                    <span className="font-semibold text-[#98A4AE]">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          <div className="absolute right-0 left-0 top-[239px]">
            {series.map((p, i) => <span key={i} className={`absolute text-center text-[11px] font-sans ${hoveredIndex === i ? "text-[#007AFE] font-semibold" : "text-[#98A4AE]"}`} style={{ left: `${((PX + (i * (W - PX * 2)) / Math.max(count - 1, 1)) / W) * 100}%`, transform: "translateX(-50%)", width: "80px" }}>{p.month}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
