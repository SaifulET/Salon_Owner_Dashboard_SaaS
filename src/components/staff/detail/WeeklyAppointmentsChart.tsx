import React, { useState } from "react";

const weeklyData = [
  { day: "Monday", x: 110, y: 128, value: 45 },
  { day: "Tuesday", x: 250, y: 118, value: 40 },
  { day: "Wednesday", x: 390, y: 102, value: 55 },
  { day: "Thursday", x: 530, y: 92, value: 60 },
  { day: "Friday", x: 670, y: 108, value: 50 },
  { day: "Saturday", x: 810, y: 32, value: 125 },
  { day: "Sunday", x: 950, y: 38, value: 120 },
];

export default function WeeklyAppointmentsChart() {
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(1); // Default Tuesday

  const handleActivityTouch = (e: React.TouchEvent<SVGSVGElement>) => {
    if (e.touches.length === 0) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    const touchX = ((touch.clientX - rect.left) / rect.width) * 1000;

    let closestIdx = 0;
    let minDistance = Infinity;
    weeklyData.forEach((d, i) => {
      const dist = Math.abs(touchX - d.x);
      if (dist < minDistance) {
        minDistance = dist;
        closestIdx = i;
      }
    });

    if (minDistance < 80) {
      setHoveredPoint(closestIdx);
    }
  };

  return (
    <div className="flex flex-col gap-4 pt-6 border-t border-slate-100 font-semibold text-xs font-sans">
      <h4 className="text-sm font-bold text-slate-800">Weekly Appointments</h4>

      <div className="w-full py-2 overflow-x-auto scrollbar-thin">
        <div className="min-w-[800px] md:min-w-0 w-full">
          <svg
            className="w-full h-[250px]"
            viewBox="0 0 1000 250"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            onMouseLeave={() => setHoveredPoint(null)}
            onTouchMove={handleActivityTouch}
            onTouchStart={handleActivityTouch}
            style={{ touchAction: "none" }}
          >
            <text x="30" y="22" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">140</text>
            <text x="30" y="62" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">105</text>
            <text x="30" y="102" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">70</text>
            <text x="30" y="142" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">35</text>
            <text x="30" y="182" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">0</text>

            <line x1="40" y1="18" x2="980" y2="18" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="40" y1="58" x2="980" y2="58" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="40" y1="98" x2="980" y2="98" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="40" y1="138" x2="980" y2="138" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="40" y1="178" x2="980" y2="178" stroke="#f1f5f9" strokeWidth="1" />

            <defs>
              <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>

            <path
              d="M 40 128 C 80 120, 140 115, 250 118 C 320 120, 350 125, 390 102 C 430 80, 480 88, 530 92 C 580 96, 620 112, 670 108 C 720 104, 760 48, 810 32 C 860 16, 900 28, 950 38 L 950 178 L 40 178 Z"
              fill="url(#greenGradient)"
              opacity="0.12"
            />

            <path
              d="M 40 128 C 80 120, 140 115, 250 118 C 320 120, 350 125, 390 102 C 430 80, 480 88, 530 92 C 580 96, 620 112, 670 108 C 720 104, 760 48, 810 32 C 860 16, 900 28, 950 38"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {weeklyData.map((d, i) => (
              <g key={`pt-${i}`}>
                <rect x={d.x - 50} y="0" width="100" height="200" fill="transparent" style={{ cursor: "pointer" }} onMouseEnter={() => setHoveredPoint(i)} onClick={() => setHoveredPoint(i)} />
                <circle cx={d.x} cy={d.y} r={hoveredPoint === i ? 6 : 0} fill="#10b981" stroke="white" strokeWidth="2.5" style={{ transition: "r 0.15s ease" }} />
                {hoveredPoint === i && (
                  <line x1={d.x} y1={d.y + 8} x2={d.x} y2="178" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
                )}
              </g>
            ))}

            {hoveredPoint !== null && (() => {
              const activePoint = weeklyData[hoveredPoint];
              return (
                <g style={{ transform: `translate(${activePoint.x - 65}px, ${activePoint.y - 45}px)`, transition: "transform 0.2s ease", pointerEvents: "none" }}>
                  <rect x="0" y="0" width="130" height="36" rx="8" fill="white" stroke="#e2e8f0" strokeWidth="1" />
                  <text x="65" y="14" textAnchor="middle" fontSize="9" fill="#64748b" fontWeight="bold">{activePoint.day}</text>
                  <text x="65" y="27" textAnchor="middle" fontSize="10" fill="#10b981" fontWeight="extrabold">{activePoint.value} Appointments</text>
                </g>
              );
            })()}

            {weeklyData.map((d, i) => (
              <text key={`dl-${i}`} x={d.x} y="198" textAnchor="middle" fontSize="11" fill={hoveredPoint === i ? "#10b981" : "#94a3b8"} fontWeight={hoveredPoint === i ? "700" : "600"} style={{ transition: "fill 0.2s ease" }}>
                {d.day}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}
