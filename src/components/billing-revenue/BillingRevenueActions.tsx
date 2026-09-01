import React from "react";
import { DownloadIcon } from "./BillingRevenueIcons";

interface BillingRevenueActionsProps {
  failedCount: number;
  onOpenFailedModal: () => void;
  onRetryAllFailed: () => void;
  onReviewPending: () => void;
  onOpenReportModal: () => void;
}

export default function BillingRevenueActions({
  failedCount,
  onOpenFailedModal,
  onRetryAllFailed,
  onReviewPending,
  onOpenReportModal
}: BillingRevenueActionsProps) {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
      <section className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-sm font-bold text-[#253143]">Recent Failed Payments</div>
            <p className="mt-1 text-xs text-[#9aa7b8]">{failedCount || 1} payments require attention</p>
          </div>
          <button
            onClick={onOpenFailedModal}
            className="rounded-lg border border-[#635bff] px-4 py-2 text-[11px] font-bold text-[#635bff] hover:bg-[#635bff]/5 transition-all cursor-pointer"
          >
            View Details
          </button>
        </div>
        <button
          onClick={onRetryAllFailed}
          className="mt-12 h-10 w-full rounded-lg bg-[#ddd8ff] hover:bg-[#cec7ff] text-xs font-bold text-[#635bff] transition-all cursor-pointer"
        >
          Retry All Failed Payments
        </button>
      </section>

      <section className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
        <div className="text-sm font-bold">Pending Payments</div>
        <p className="mt-1 text-xs text-[#9aa7b8]">8 payments in progress</p>
        <button
          onClick={onReviewPending}
          className="mt-12 h-10 w-full rounded-lg bg-[#edf3fa] hover:bg-[#e0eaf5] text-xs font-bold text-[#40516a] transition-all cursor-pointer"
        >
          Review Pending Payments
        </button>
      </section>

      <section className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
        <div className="text-sm font-bold">Billing Records Report</div>
        <p className="mt-1 text-xs text-[#9aa7b8]">Export detailed financial reports</p>
        <button
          onClick={onOpenReportModal}
          className="mt-12 flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-[#edf3fa] hover:bg-[#e0eaf5] text-xs font-bold text-[#40516a] transition-all cursor-pointer"
        >
          <DownloadIcon />
          Generate Report
        </button>
      </section>
    </div>
  );
}
