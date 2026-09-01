import React from "react";

export default function MRRChartDefs() {
  return (
    <defs>
      <linearGradient id="area-fill" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#16CDC7" stopOpacity="0.04" />
        <stop offset="100%" stopColor="#16CDC7" stopOpacity="0" />
      </linearGradient>
      <linearGradient id="bar-new" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#22D4D0" /><stop offset="100%" stopColor="#17A8A5" />
      </linearGradient>
      <linearGradient id="bar-expand" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#7B74FF" /><stop offset="100%" stopColor="#5850E8" />
      </linearGradient>
      <linearGradient id="bar-churn" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#FF7DA0" /><stop offset="100%" stopColor="#F04472" />
      </linearGradient>
      <filter id="bar-shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#00000015" />
      </filter>
    </defs>
  );
}
