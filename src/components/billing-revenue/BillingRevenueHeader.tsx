import React from "react";
import { SearchIcon, RefreshIcon, DownloadIcon, SyncIcon } from "./BillingRevenueIcons";

interface BillingRevenueHeaderProps {
  onSearchChange: (query: string) => void;
  onResetFailed: () => void;
  onExportData: () => void;
  onSyncPayments: () => void;
}

export default function BillingRevenueHeader({
  onSearchChange,
  onResetFailed,
  onExportData,
  onSyncPayments
}: BillingRevenueHeaderProps) {
  return (
    <div className="rounded-2xl bg-white px-5 py-4 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="text-base font-bold leading-none tracking-normal text-[#1f2937] font-sans">
          Billing &amp; Revenue
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-9 min-w-[230px] items-center gap-2 rounded-lg border border-[#e8edf5] bg-white px-3 text-[#8b99aa]">
            <SearchIcon />
            <input
              type="search"
              placeholder="Search"
              className="w-full bg-transparent text-xs font-medium outline-none"
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
          <button
            onClick={onResetFailed}
            className="flex h-9 items-center gap-2 rounded-lg bg-[#f5f7fc] px-4 text-xs font-bold text-[#40516a] hover:bg-slate-100 transition-all cursor-pointer"
          >
            <RefreshIcon />
            Reset Failed
          </button>
          <button
            onClick={onExportData}
            className="flex h-9 items-center gap-2 rounded-lg bg-[#edeaff] px-4 text-xs font-bold text-[#5e53fc] hover:bg-[#e2dfff] transition-all cursor-pointer"
          >
            <DownloadIcon />
            Export Data
          </button>
          <button
            onClick={onSyncPayments}
            className="flex h-9 items-center gap-2 rounded-lg bg-[#6557ff] hover:bg-[#5244f0] px-5 text-xs font-bold text-white shadow-[0_8px_18px_rgba(94,83,252,0.22)] transition-all cursor-pointer"
          >
            <SyncIcon />
            Sync Payments
          </button>
        </div>
      </div>
    </div>
  );
}
