import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

const prodBarData = [
  { month: "Jan", cx: 140, tealH: 30, pinkH: 74, total: "€ 1.4k", threshold: "€ 1.2k", above: "€ 0.2k", date: "January, 2025" },
  { month: "Feb", cx: 270, tealH: 80, pinkH: 34, total: "€ 2.1k", threshold: "€ 1.5k", above: "€ 0.6k", date: "February, 2025" },
  { month: "Mar", cx: 400, tealH: 24, pinkH: 64, total: "€ 1.5k", threshold: "€ 1.3k", above: "€ 0.2k", date: "March, 2025" },
  { month: "Apr", cx: 530, tealH: 84, pinkH: 44, total: "€ 1.7k", threshold: "€ 1.7k", above: "€ 1.7k", date: "April, 2025" },
  { month: "Jun", cx: 710, tealH: 0, pinkH: 74, total: "€ 2.3k", threshold: "€ 1.8k", above: "€ 0.5k", date: "June, 2025" },
  { month: "Jul", cx: 850, tealH: 90, pinkH: 54, total: "€ 2.6k", threshold: "€ 2.0k", above: "€ 0.6k", date: "July, 2025" },
];

export default function DailyProductionChart() {
  const [productionPeriod, setProductionPeriod] = useState("Monthly");
  const [isProdPeriodDropdownOpen, setIsProdPeriodDropdownOpen] = useState(false);
  const [hoveredBarMonth, setHoveredBarMonth] = useState<number | null>(3); // Apr default

  const handleBarTouch = (e: React.TouchEvent<SVGSVGElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const touchX = ((touch.clientX - rect.left) / rect.width) * 1000;

    let closestIdx = 0;
    let minDistance = Infinity;
    prodBarData.forEach((d, i) => {
      const dist = Math.abs(touchX - d.cx);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = i;
      }
    });

    if (minDistance < 80) {
      setHoveredBarMonth(closestIdx);
    }
  };

  return (
    <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col gap-4 font-semibold text-xs font-sans text-left">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-800">Daily Production (Monthly)</h4>
        <div className="relative">
          <button onClick={() => setIsProdPeriodDropdownOpen(!isProdPeriodDropdownOpen)} className="px-3 py-1.5 border border-slate-200 rounded-xl text-[10px] font-bold text-slate-600 bg-white flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer">
            {productionPeriod} <HugeiconsIcon icon={ArrowDown01Icon} size={10} className={`transition-transform duration-200 ${isProdPeriodDropdownOpen ? "rotate-180" : ""}`} />
          </button>
          {isProdPeriodDropdownOpen && (
            <>
              <div className="fixed inset-0 z-10" onClick={() => setIsProdPeriodDropdownOpen(false)}></div>
              <div className="absolute right-0 mt-1.5 w-32 bg-white border border-slate-100 rounded-xl shadow-lg py-1 z-20 text-left text-xs font-semibold text-slate-600">
                {["Monthly", "Yearly"].map((option) => (
                  <button key={option} onClick={() => { setProductionPeriod(option); setIsProdPeriodDropdownOpen(false); }} className={`w-full px-3 py-2 text-left transition-colors cursor-pointer ${productionPeriod === option ? "bg-indigo-50 text-indigo-600 font-bold" : "hover:bg-slate-50 hover:text-slate-800"}`}>{option}</button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <div className="w-full py-2 overflow-x-auto scrollbar-thin">
        <div className="min-w-[800px] md:min-w-0 w-full">
          <svg className="w-full h-[280px]" viewBox="0 0 1000 280" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" onMouseLeave={() => setHoveredBarMonth(null)} onTouchStart={handleBarTouch} onTouchMove={handleBarTouch} style={{ touchAction: "none" }}>
            <text x="32" y="30" textAnchor="end" fontSize="10" fill="#94a3b8" fontWeight="600">€ 3k</text>
            <text x="32" y="80" textAnchor="end" fontSize="10" fill="#94a3b8" fontWeight="600">€ 2.5k</text>
            <text x="32" y="130" textAnchor="end" fontSize="10" fill="#94a3b8" fontWeight="600">€ 2k</text>
            <text x="32" y="180" textAnchor="end" fontSize="10" fill="#94a3b8" fontWeight="600">€ 1.5k</text>
            <text x="32" y="230" textAnchor="end" fontSize="10" fill="#94a3b8" fontWeight="600">€ 1k</text>

            <line x1="42" y1="26" x2="980" y2="26" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="42" y1="76" x2="980" y2="76" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="42" y1="126" x2="980" y2="126" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="42" y1="176" x2="980" y2="176" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="42" y1="226" x2="980" y2="226" stroke="#f1f5f9" strokeWidth="1" />

            {prodBarData.map((d, i) => {
              const isActive = hoveredBarMonth === i;
              const isAnyActive = hoveredBarMonth !== null;
              const opacity = isActive ? 1 : (isAnyActive ? 0.3 : 1);
              return (
                <g key={`bar-${i}`} style={{ opacity, transition: "opacity 0.2s ease" }}>
                  <rect x={d.cx - 60} y="0" width="120" height="260" fill="transparent" style={{ cursor: "pointer" }} onMouseEnter={() => setHoveredBarMonth(i)} onClick={() => setHoveredBarMonth(i)} />
                  {d.tealH > 0 && <rect x={d.cx - 12} y={134 - d.tealH} width="24" height={d.tealH} rx="5" fill="#14b8a6" />}
                  {d.pinkH > 0 && <rect x={d.cx - 12} y={146} width="24" height={d.pinkH} rx="5" fill="#ff6289" />}
                </g>
              );
            })}

            {hoveredBarMonth !== null && (() => {
              const activeBar = prodBarData[hoveredBarMonth];
              return (
                <g style={{ transform: `translate(${activeBar.cx - 72}px, 15px)`, transition: "transform 0.2s ease", pointerEvents: "none" }}>
                  <rect x="0" y="0" width="145" height="72" rx="8" fill="white" stroke="#e5e7eb" strokeWidth="1" />
                  <text x="10" y="18" fontSize="9" fill="#94a3b8" fontWeight="bold">{activeBar.date}</text>
                  <text x="10" y="33" fontSize="8" fill="#374151" fontWeight="650">Total Production</text>
                  <text x="135" y="33" textAnchor="end" fontSize="8" fill="#94a3b8" fontWeight="600">{activeBar.total}</text>
                  <text x="10" y="46" fontSize="8" fill="#14b8a6" fontWeight="650">Threshold</text>
                  <text x="135" y="46" textAnchor="end" fontSize="8" fill="#94a3b8" fontWeight="600">{activeBar.threshold}</text>
                  <text x="10" y="59" fontSize="8" fill="#ff6289" fontWeight="650">Above Threshold</text>
                  <text x="135" y="59" textAnchor="end" fontSize="8" fill="#94a3b8" fontWeight="600">{activeBar.above}</text>
                </g>
              );
            })()}

            {prodBarData.map((d, i) => (
              <text key={`lbl-${i}`} x={d.cx} y="262" textAnchor="middle" fontSize="11" fill={hoveredBarMonth === i ? "#374151" : "#94a3b8"} fontWeight={hoveredBarMonth === i ? "700" : "600"} style={{ transition: "fill 0.2s ease" }}>{d.month}</text>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
