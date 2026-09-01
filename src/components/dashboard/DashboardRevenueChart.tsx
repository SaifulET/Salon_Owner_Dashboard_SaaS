import React, { useState } from "react";
import DashboardRevenueTooltip from "./DashboardRevenueTooltip";

export default function DashboardRevenueChart() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(4);

  const xMin = 35.13;
  const xMax = 568;
  const yGridLines = [0.35, 45.74, 91.13, 136.52, 181.91, 227.31];
  const yLabels = ["70k", "60k", "50k", "40k", "30k", "20k"];

  const chartPoints = [
    { label: "Jan", val: 30000 }, { label: "Feb", val: 42000 }, { label: "Feb", val: 40000 },
    { label: "Feb", val: 35000 }, { label: "Mar", val: 34324 }, { label: "Apr", val: 38000 },
    { label: "Jun", val: 40000 }, { label: "Jul", val: 43000 }, { label: "Sep", val: 40000 },
    { label: "", val: 35000 }
  ].map((p, idx) => ({
    ...p,
    x: xMin + idx * ((xMax - xMin) / 9),
    y: 227.31 - ((p.val - 20000) / 50000) * 226.96
  }));

  const getSplinePath = (pts: { x: number; y: number }[]) => {
    if (pts.length === 0) return "";
    let d = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i];
      const p1 = pts[i + 1];
      d += ` C ${p0.x + (p1.x - p0.x) / 2} ${p0.y}, ${p0.x + (p1.x - p0.x) / 2} ${p1.y}, ${p1.x} ${p1.y}`;
    }
    return d;
  };

  const handleExport = () => {
    const rows = chartPoints.filter(p => p.label).map(p => `${p.label},${p.val}`);
    const blob = new Blob([["Month,Value (EUR)", ...rows].join("\n")], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "revenue_trend_data.csv";
    link.click();
  };

  return (
    <div className="xl:col-span-2 bg-white flex flex-col transition-all w-full h-[374px] p-6 gap-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] rounded-xl">
      <div className="flex items-center justify-between w-full h-[36px] gap-4">
        <h3 className="font-semibold text-base text-[#29343D] font-sans">Revenue Trend (Last 12 Months)</h3>
        <button onClick={handleExport} className="font-medium border border-[#635BFF] text-[#635BFF] hover:bg-[#635BFF]/5 flex items-center justify-center text-xs rounded-lg px-3 py-2.5 h-[36px] cursor-pointer">
          Export Data
        </button>
      </div>

      <div className="relative h-[264px] w-full select-none">
        {hoveredIndex !== null && <DashboardRevenueTooltip point={chartPoints[hoveredIndex]} hoveredIndex={hoveredIndex} totalPoints={chartPoints.length} />}

        <div className="absolute left-0 top-0 w-[34px] bottom-[36.69px] pointer-events-none select-none">
          {yGridLines.map((y, idx) => (
            <div key={idx} className="absolute text-left text-[#98A4AE] text-[11px]" style={{ top: `${(y / 264) * 100}%`, transform: "translateY(-50%)" }}>
              {yLabels[idx]}
            </div>
          ))}
        </div>

        <div className="absolute left-0 right-0 bottom-0 h-[15.35px] pointer-events-none select-none">
          {chartPoints.map((p, idx) => p.label && (
            <div key={idx} className="absolute text-center text-[#98A4AE] text-[11px]" style={{ left: `${(p.x / 568) * 100}%`, transform: "translateX(-50%)" }}>
              {p.label}
            </div>
          ))}
        </div>

        {hoveredIndex !== null && (
          <div className="absolute rounded-full pointer-events-none w-2 h-2 bg-[#16CDC7] border-2 border-white shadow-sm z-15" style={{ left: `${(chartPoints[hoveredIndex].x / 568) * 100}%`, top: `${(chartPoints[hoveredIndex].y / 264) * 100}%`, transform: "translate(-50%, -50%)" }} />
        )}

        <svg viewBox="0 0 568 264" className="w-full h-full overflow-visible" preserveAspectRatio="none" onMouseLeave={() => setHoveredIndex(4)}>
          {yGridLines.map((y, idx) => <line key={idx} x1="35.13" y1={y} x2="568" y2={y} stroke="#F6F7F9" strokeWidth="0.95" />)}
          {chartPoints.map((p, idx) => <line key={idx} x1={p.x} y1="0.35" x2={p.x} y2="227.31" stroke="#F6F7F9" strokeWidth="0.95" />)}
          <defs><linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#16CDC7" stopOpacity="0.04" /><stop offset="100%" stopColor="#16CDC7" stopOpacity="0.00" /></linearGradient></defs>
          <path d={`${getSplinePath(chartPoints)} L 568 227.31 L 35.13 227.31 Z`} fill="url(#chartGradient)" />
          <path d={getSplinePath(chartPoints)} fill="none" stroke="#16CDC7" strokeWidth="1.9" strokeLinecap="round" />
          {chartPoints.map((p, idx) => (
            <g key={idx}>
              {hoveredIndex === idx && <line x1={p.x} y1="0.35" x2={p.x} y2="227.31" stroke="#16CDC7" strokeWidth="1" strokeDasharray="4 4" />}
              <rect x={p.x - 29.5} y="0.35" width="59" height="227" fill="transparent" className="cursor-pointer" onMouseEnter={() => setHoveredIndex(idx)} />
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
