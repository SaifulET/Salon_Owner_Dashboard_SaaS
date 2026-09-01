import React from "react";
import { ChartTab, BreakdownSeriesItem, PositionedPoint } from "./types";

interface MRRChartLinesProps {
  activeTab: ChartTab;
  breakdownSeries: BreakdownSeriesItem[];
  hoveredIndex: number | null;
  tipX: number;
  areaPath: string;
  linePath: string;
  pts: PositionedPoint[];
  hPt: PositionedPoint | null;
  PX: number;
  PY: number;
  W: number;
  H: number;
  buildPath: (pts: { x: number; y: number }[]) => string;
}

export default function MRRChartLines({
  activeTab,
  breakdownSeries,
  hoveredIndex,
  tipX,
  areaPath,
  linePath,
  pts,
  hPt,
  PX,
  PY,
  W,
  H,
  buildPath
}: MRRChartLinesProps) {
  if (activeTab === "Breakdown") {
    return (
      <>
        {breakdownSeries.map((s) => {
          const seriesPts = s.points.map((val, i) => ({
            x: PX + (i * (W - PX * 2)) / Math.max(s.points.length - 1, 1),
            y: H - PY - (val / 100000) * (H - PY * 2)
          }));
          const pathD = buildPath(seriesPts);
          return (
            <g key={s.label}>
              <path d={pathD} fill="none" stroke={s.color} strokeWidth="1.89919" strokeLinecap="round" strokeLinejoin="round" />
              {hoveredIndex !== null && seriesPts[hoveredIndex] && (
                <circle cx={seriesPts[hoveredIndex].x} cy={seriesPts[hoveredIndex].y} r={2.75} fill={s.color} stroke="#FFFFFF" strokeWidth="1.89919" />
              )}
            </g>
          );
        })}
        {hoveredIndex !== null && (
          <line x1={tipX} y1={PY} x2={tipX} y2={H - PY} stroke="#98A4AE" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
        )}
      </>
    );
  }

  return (
    <>
      <path d={areaPath} fill="url(#area-fill)" />
      <path d={linePath} fill="none" stroke="#16CDC7" strokeWidth="1.89919" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={2.75} fill="#16CDC7" stroke="#FFFFFF" strokeWidth="1.89919" opacity={hoveredIndex === i ? 1 : 0} style={{ transition: "opacity 0.15s" }} />
      ))}
      {hPt && (
        <line x1={hPt.x} y1={PY} x2={hPt.x} y2={H - PY} stroke="#16CDC7" strokeWidth="1" strokeDasharray="4 3" opacity="0.5" />
      )}
    </>
  );
}
