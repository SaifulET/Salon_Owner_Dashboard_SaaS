import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const trendPoints = [
  { year: "2019", x: 100, y: 68, color: "#10b981", status: "Above Threshold", value: "€ 2.5k" },
  { year: "2020", x: 240, y: 62, color: "#10b981", status: "Above Threshold", value: "€ 1.7k" },
  { year: "2021", x: 380, y: 70, color: "#10b981", status: "Above Threshold", value: "€ 2.4k" },
  { year: "2022", x: 520, y: 78, color: "#10b981", status: "Above Threshold", value: "€ 2.2k" },
  { year: "2023", x: 660, y: 124, color: "#f43f5e", status: "Below Threshold", value: "€ 1.7k" },
  { year: "2024", x: 800, y: 48, color: "#10b981", status: "Above Threshold", value: "€ 2.8k" },
  { year: "2025", x: 940, y: 54, color: "#10b981", status: "Above Threshold", value: "€ 2.6k" },
];

export default function ProductionTrendsChart() {
  const [trendsPeriod, setTrendsPeriod] = useState("Yearly");
  const [isTrendsPeriodDropdownOpen, setIsTrendsPeriodDropdownOpen] = useState(false);
  const [hoveredTrendYear, setHoveredTrendYear] = useState<number | null>(null);

  const handleTrendTouch = (e: React.TouchEvent<SVGSVGElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const touchX = ((touch.clientX - rect.left) / rect.width) * 1000;

    let closestIdx = 0;
    let minDistance = Infinity;
    trendPoints.forEach((p, i) => {
      const dist = Math.abs(touchX - p.x);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = i;
      }
    });

    if (minDistance < 80) {
      setHoveredTrendYear(closestIdx);
    }
  };

  return (
    <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col gap-4 font-semibold text-xs font-sans text-left">
      <div className="flex items-center justify-between">
        <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Production Trends (Yearly)</h4>
        <div className="relative">
          <button onClick={() => setIsTrendsPeriodDropdownOpen(!isTrendsPeriodDropdownOpen)} className="px-3 py-1.5 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600 bg-white flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer">
            {trendsPeriod} <HugeiconsIcon icon={ArrowDown01Icon} size={10} className={`transition-transform duration-200 ${isTrendsPeriodDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {isTrendsPeriodDropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsTrendsPeriodDropdownOpen(false)}></div>
              <div className="absolute right-0 mt-1.5 w-32 bg-white border border-slate-100 rounded-xl shadow-lg py-1 z-20 text-left text-xs font-semibold text-slate-600">
                {["Yearly", "Custom Range"].map((option) => (
                  <button key={option} onClick={() => { setTrendsPeriod(option); setIsTrendsPeriodDropdownOpen(false); }} className={`w-full px-3 py-2 text-left transition-colors cursor-pointer ${trendsPeriod === option ? "bg-indigo-50 text-indigo-600 font-bold" : "hover:bg-slate-50 hover:text-slate-800"}`}>{option}</button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-full py-2 overflow-x-auto scrollbar-thin">
        <div className="min-w-[800px] md:min-w-0 w-full">
          <svg className="w-full h-[250px]" viewBox="0 0 1000 250" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" onMouseLeave={() => setHoveredTrendYear(null)} onTouchStart={handleTrendTouch} onTouchMove={handleTrendTouch} style={{ touchAction: "none" }}>
            <defs>
              <linearGradient id="trendGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="58%" stopColor="#10b981" />
                <stop offset="66%" stopColor="#f43f5e" />
                <stop offset="75%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#10b981" />
              </linearGradient>
            </defs>

            <text x="32" y="32" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 3.0k</text>
            <text x="32" y="72" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 2.5k</text>
            <text x="32" y="112" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 2.0k</text>
            <text x="32" y="152" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 1.5k</text>
            <text x="32" y="192" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 1.0k</text>
            <text x="32" y="232" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 0.5k</text>

            <line x1="42" y1="28" x2="980" y2="28" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="42" y1="68" x2="980" y2="68" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="42" y1="108" x2="980" y2="108" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="42" y1="148" x2="980" y2="148" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="42" y1="188" x2="980" y2="188" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="42" y1="228" x2="980" y2="228" stroke="#f1f5f9" strokeWidth="1" />

            <path d="M 100 68 C 170 65, 170 62, 240 62 C 310 62, 310 70, 380 70 C 450 70, 450 78, 520 78 C 590 78, 590 124, 660 124 C 730 124, 730 48, 800 48 C 870 48, 870 54, 940 54" fill="none" stroke="url(#trendGradient)" strokeWidth="3.5" strokeLinecap="round" />

            {trendPoints.map((p, i) => (
              <g key={`trend-${i}`}>
                <rect x={p.x - 50} y="0" width="100" height="240" fill="transparent" style={{ cursor: "pointer" }} onMouseEnter={() => setHoveredTrendYear(i)} onClick={() => setHoveredTrendYear(i)} />
                <circle cx={p.x} cy={p.y} r={hoveredTrendYear === i ? 6 : 4} fill={p.color} stroke="white" strokeWidth="2" style={{ transition: "r 0.2s ease" }} />
              </g>
            ))}

            {hoveredTrendYear !== null && (() => {
              const activeTrend = trendPoints[hoveredTrendYear];
              return (
                <g style={{ transform: `translate(${activeTrend.x - 75}px, ${activeTrend.y - 45}px)`, transition: "transform 0.2s ease", pointerEvents: "none" }}>
                  <rect x="0" y="0" width="150" height="32" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="75" y="12" textAnchor="middle" fontSize="8" fill="#94a3b8" fontWeight="bold">August 24, {activeTrend.year}</text>
                  <text x="8" y="24" textAnchor="start" fontSize="8" fill={activeTrend.color} fontWeight="bold">{activeTrend.status}</text>
                  <text x="142" y="24" textAnchor="end" fontSize="9" fill="#374151" fontWeight="extrabold">{activeTrend.value}</text>
                </g>
              );
            })()}

            {trendPoints.map((p, i) => (
              <text key={`xl-${i}`} x={p.x} y="245" textAnchor="middle" fontSize="11" fill={hoveredTrendYear === i ? "#374151" : "#94a3b8"} fontWeight={hoveredTrendYear === i ? "700" : "600"} style={{ transition: "fill 0.2s ease" }}>{p.year}</text>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
