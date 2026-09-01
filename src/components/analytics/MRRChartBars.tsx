import React from "react";
import { ChartPoint } from "./types";

interface MRRChartBarsProps {
  isMovements: boolean;
  movementSeries: any[];
  series: ChartPoint[];
  hoveredIndex: number | null;
  barW: number;
  PX: number;
  W: number;
  count: number;
  getY: (val: number) => number;
  H: number;
  PY: number;
  maxVal: number;
}

export default function MRRChartBars({
  isMovements,
  movementSeries,
  series,
  hoveredIndex,
  barW,
  PX,
  W,
  count,
  getY,
  H,
  PY,
  maxVal
}: MRRChartBarsProps) {
  const pointsToRender = isMovements ? movementSeries : series;

  return (
    <>
      {pointsToRender.map((point, i) => {
        const cx = PX + (i * (W - PX * 2)) / Math.max(count - 1, 1);
        const bx = cx - barW / 2;
        const isHov = hoveredIndex === i;

        if (isMovements) {
          const mp = point as any;
          const newVal = mp.New || 0;
          const expVal = mp.Expansion || 0;
          const reactVal = mp.Reactivation || 0;
          const contractVal = Math.abs(mp.Contracted || 0);
          const churnVal = Math.abs(mp.Churned || 0);
          const otherVal = Math.abs(mp.Other || 0);

          const segmentsToDraw = [
            { label: "New", yStart: getY(reactVal + expVal), yEnd: getY(reactVal + expVal + newVal), color: "#34C759" },
            { label: "Expansion", yStart: getY(reactVal), yEnd: getY(reactVal + expVal), color: "#00C7BE" },
            { label: "Reactivation", yStart: getY(0), yEnd: getY(reactVal), color: "#32ADE6" },
            { label: "Contracted", yStart: getY(0), yEnd: getY(-contractVal), color: "#FFCC00" },
            { label: "Churned", yStart: getY(-contractVal), yEnd: getY(-contractVal - churnVal), color: "#FF6692" },
            { label: "Other", yStart: getY(-contractVal - churnVal), yEnd: getY(-contractVal - churnVal - otherVal), color: "#F3F3F3" }
          ];

          return (
            <g key={i} opacity={isHov ? 1 : 0.88} filter={isHov ? "url(#bar-shadow)" : undefined}>
              {segmentsToDraw.map((seg) => {
                const yMin = Math.min(seg.yStart, seg.yEnd);
                const yMax = Math.max(seg.yStart, seg.yEnd);
                const height = Math.max(yMax - yMin, 0.5);
                if (height <= 1 && seg.yStart === seg.yEnd) return null;
                const rx = (seg.label === "New" && newVal > 0) || (seg.label === "Other" && otherVal > 0) ? 4 : 0;
                return <rect key={seg.label} x={bx} y={yMin} width={barW} height={height} fill={seg.color} rx={rx} />;
              })}
            </g>
          );
        } else {
          const sp = point as ChartPoint;
          const bh = Math.max((sp.value / maxVal) * (H - PY * 2), 8);
          const by = H - PY - bh;
          const isMarch = i === 2;
          return (
            <g key={i} opacity={isHov ? 1 : hoveredIndex !== null ? 0.65 : 0.9} filter={isHov ? "url(#bar-shadow)" : undefined}>
              <rect x={bx} y={by} width={barW} height={bh} fill={isHov ? "#16CDC7" : isMarch ? "#16CDC7" : "#EFF4FA"} rx={4} />
            </g>
          );
        }
      })}
    </>
  );
}
