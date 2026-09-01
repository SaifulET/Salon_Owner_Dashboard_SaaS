import React from "react";
import DashboardIcon from "./DashboardIcon";

interface DashboardHeaderProps {
  isRefreshing: boolean;
  onRefresh: () => void;
  onNavigate?: (tab: string) => void;
}

export default function DashboardHeader({ isRefreshing, onRefresh, onNavigate }: DashboardHeaderProps) {
  return (
    <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-base font-bold leading-none tracking-normal text-[#1f2937]">Dashboard</div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onRefresh}
            className={`flex items-center gap-2 px-4 py-2.5 bg-white border border-[#eef2f6] hover:bg-slate-50 rounded-2xl text-xs font-semibold text-slate-600 transition-all shadow-sm ${
              isRefreshing ? "opacity-75" : ""
            }`}
          >
            <DashboardIcon
              src="/syncIcon.svg"
              size={14}
              className={`${isRefreshing ? "animate-spin" : ""}`}
            />
            Refresh Data
          </button>

          <button
            onClick={() => onNavigate && onNavigate("salons")}
            className="px-5 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-2xl text-xs font-semibold tracking-wide shadow-lg shadow-indigo-150 transition-all duration-150"
          >
            View All Salons
          </button>
        </div>
      </div>
    </div>
  );
}
