import React from "react";

interface Point {
  label: string;
  val: number;
  x: number;
  y: number;
}

interface DashboardRevenueTooltipProps {
  point: Point;
  hoveredIndex: number;
  totalPoints: number;
}

export default function DashboardRevenueTooltip({ point, hoveredIndex, totalPoints }: DashboardRevenueTooltipProps) {
  const scaleFactor = 96000 / 34324;
  const displayVal = point.val * scaleFactor;

  const formatK = (val: number, precision: number = 0) => {
    const kVal = val / 1000;
    return kVal.toFixed(precision).replace(".", ",");
  };

  const totalRevenueK = formatK(displayVal, 0);
  const basicValK = formatK(displayVal * 0.20, 1);
  const premiumValK = formatK(displayVal * 0.32, 1);
  const enterpriseValK = formatK(displayVal * 0.48, 0);

  const leftPercent = (point.x / 568) * 100;
  let leftStyle = `${leftPercent}%`;
  let transformStyle = "translateX(-50%)";

  if (hoveredIndex === 0) {
    leftStyle = "35.13px";
    transformStyle = "translateX(0)";
  } else if (hoveredIndex === totalPoints - 1) {
    leftStyle = "100%";
    transformStyle = "translateX(-100%)";
  }

  const topPos = point.y - 180.37 - 12;

  return (
    <div
      className="absolute z-20 bg-white pointer-events-none transition-all duration-150 ease-out flex flex-col justify-between"
      style={{
        width: "190.58px",
        height: "180.37px",
        left: leftStyle,
        top: `${topPos}px`,
        transform: transformStyle,
        boxShadow: "0px 3.79837px 45.5805px -11.3951px rgba(10, 37, 64, 0.14)",
        borderRadius: "7.59675px",
        padding: "3.8px 11.4px 7.6px",
        border: "0.949594px solid #E0E6EB"
      }}
    >
      <div className="flex items-center justify-between" style={{ height: "27.4px" }}>
        <div className="flex items-center gap-[7.6px]">
          <div className="w-[7.6px] h-[7.6px] bg-[#16CDC7] rounded-full shrink-0" />
          <span className="text-[#29343D] font-semibold" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px" }}>
            Total gross revenue
          </span>
        </div>
        <span className="text-[#98A4AE] font-semibold text-right" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px" }}>
          € {totalRevenueK}K
        </span>
      </div>

      <div className="flex flex-col justify-center gap-[7.6px]" style={{ height: "50.99px" }}>
        <div className="flex items-center justify-between">
          <span className="text-[#29343D] font-semibold" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px" }}>Basic</span>
          <span className="text-[#29343D] font-semibold" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px" }}>20%</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="relative flex-1 bg-[#F6F7F9] rounded-full" style={{ height: "6px" }}>
            <div className="absolute left-0 top-0 bottom-0 bg-[#DAD8FF] rounded-full" style={{ width: "72.2%" }} />
          </div>
          <span className="text-[#98A4AE] font-semibold text-right shrink-0" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px", width: "45px" }}>
            € {basicValK}K
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-[7.6px]" style={{ height: "50.99px" }}>
        <div className="flex items-center justify-between">
          <span className="text-[#29343D] font-semibold" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px" }}>Basic</span>
          <span className="text-[#29343D] font-semibold" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px" }}>32%</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="relative flex-1 bg-[#F6F7F9] rounded-full" style={{ height: "6px" }}>
            <div className="absolute left-0 top-0 bottom-0 bg-[#D2F4F2] rounded-full" style={{ width: "72.2%" }} />
          </div>
          <span className="text-[#98A4AE] font-semibold text-right shrink-0" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px", width: "45px" }}>
            € {premiumValK}K
          </span>
        </div>
      </div>

      <div className="flex flex-col justify-center gap-[7.6px]" style={{ height: "50.99px" }}>
        <div className="flex items-center justify-between">
          <span className="text-[#29343D] font-semibold" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px" }}>Basic</span>
          <span className="text-[#29343D] font-semibold" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px" }}>48%</span>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="relative flex-1 bg-[#F6F7F9] rounded-full" style={{ height: "6px" }}>
            <div className="absolute left-0 top-0 bottom-0 bg-[#6C63FF] rounded-full" style={{ width: "72.2%" }} />
          </div>
          <span className="text-[#98A4AE] font-semibold text-right shrink-0" style={{ fontFamily: "'Manrope', sans-serif", fontSize: "12px", lineHeight: "16px", width: "45px" }}>
            € {enterpriseValK}K
          </span>
        </div>
      </div>
    </div>
  );
}
