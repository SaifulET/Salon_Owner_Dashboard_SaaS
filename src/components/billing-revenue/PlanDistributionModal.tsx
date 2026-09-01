import React from "react";
import { AnalyticsIcon } from "./BillingRevenueIcons";
import { distributionMonths, distributionYears } from "./mockData";

interface PlanDistributionModalProps {
  view: "monthly" | "yearly";
  setView: (view: "monthly" | "yearly") => void;
  onClose: () => void;
  onAnalytics: () => void;
}

export default function PlanDistributionModal({
  view,
  setView,
  onClose,
  onAnalytics
}: PlanDistributionModalProps) {
  const labels = view === "monthly" ? distributionMonths : distributionYears;
  const axis = view === "monthly" ? ["EUR300.000", "EUR250.000", "EUR200.000", "EUR150.000", "EUR100.000", "EUR50.000"] : ["EUR3.0M", "EUR2.5M", "EUR2.0M", "EUR1.5M", "EUR1.0M", "EUR0.5M"];

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/35 p-4 backdrop-blur-sm">
      <div className="flex max-h-[92vh] w-full max-w-[980px] flex-col rounded-2xl bg-white p-5 shadow-2xl sm:p-6 overflow-hidden">
        <div className="flex items-start justify-between gap-4 border-b border-[#edf1f6] pb-4">
          <div>
            <h2 className="text-[17px] font-bold text-[#253143]">Plan Distribution</h2>
            <p className="mt-1 text-[12px] font-medium text-[#9aa7b8]">Revenue breakdown by subscription plan</p>
          </div>
          <button onClick={onClose} className="rounded-lg p-1 text-[#263241] hover:bg-slate-100 hover:text-[#635bff] cursor-pointer" aria-label="Close">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pr-1 py-4">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap items-center gap-5">
                <span className="flex items-center gap-2 text-[12px] font-semibold text-[#526174]"><span className="h-2 w-2 rounded-full bg-[#c9f3ee]" />Basic Plan</span>
                <span className="flex items-center gap-2 text-[12px] font-semibold text-[#526174]"><span className="h-2 w-2 rounded-full bg-[#d9d5f6]" />Premium Plan</span>
                <span className="flex items-center gap-2 text-[12px] font-semibold text-[#526174]"><span className="h-2 w-2 rounded-full bg-[#635bff]" />Enterprise Plan</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setView("monthly")} className={`h-9 rounded-lg border px-5 text-[12px] font-semibold transition-all cursor-pointer ${view === "monthly" ? "border-[#635bff] bg-[#f5f4ff] text-[#635bff]" : "border-[#edf1f6] text-[#253143] hover:bg-slate-50"}`}>Monthly View</button>
                <button onClick={() => setView("yearly")} className={`h-9 rounded-lg border px-5 text-[12px] font-semibold transition-all cursor-pointer ${view === "yearly" ? "border-[#635bff] bg-[#f5f4ff] text-[#635bff]" : "border-[#edf1f6] text-[#253143] hover:bg-slate-50"}`}>Yearly View</button>
              </div>
            </div>

            <div className="overflow-x-auto overflow-y-hidden pb-2">
              <div className="mt-4 grid min-w-[640px] grid-cols-[76px_1fr] gap-4">
                <div className="flex h-[230px] flex-col justify-between pt-1 text-[11px] font-medium text-[#a6b2c0]">{axis.map((label) => <span key={label}>{label}</span>)}</div>
                <div className="relative h-[230px] border-l border-[#e9eef6]">
                  <div className="absolute inset-0 flex flex-col justify-between">{axis.map((label) => <div key={label} className="h-px bg-[#edf1f6]" />)}</div>
                  <div className="relative z-10 grid h-full grid-cols-6 items-end gap-6 px-5">
                    {labels.map((label) => (
                      <div key={label} className="flex h-full flex-col items-center justify-end gap-3">
                        <div className="flex h-[210px] w-full max-w-[126px] flex-col-reverse overflow-hidden rounded-t-md">
                          <div className="flex h-[20%] items-center justify-center bg-[#cbf3f0] text-[12px] font-bold text-[#253143]">20%</div>
                          <div className="flex h-[32%] items-center justify-center bg-[#dddaf6] text-[12px] font-bold text-[#253143]">32%</div>
                          <div className="flex h-[48%] items-center justify-center bg-[#635bff] text-[12px] font-bold text-white">48%</div>
                        </div>
                        <span className="text-[11px] font-medium text-[#a6b2c0]">{label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[["Basic Plan", "20%", "text-[#00c9c9]"], ["Premium Plan", "32%", "text-[#8275f6]"], ["Enterprise Plan", "48%", "text-[#635bff]"]].map(([name, value, color]) => (
                <div key={name} className="rounded-xl border border-[#edf1f6] bg-white px-5 py-4 shadow-[0_4px_12px_rgba(17,31,56,0.04)]">
                  <div className="text-[12px] font-semibold text-[#8b99aa]">{name}</div>
                  <div className={`mt-2 text-[26px] font-extrabold ${color}`}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end border-t border-[#edf1f6] pt-4">
          <button onClick={onAnalytics} className="flex h-11 items-center gap-2 rounded-lg bg-[#635bff] hover:bg-[#5244f0] px-7 text-[13px] font-bold text-white shadow-[0_8px_18px_rgba(94,83,252,0.22)] cursor-pointer">
            <AnalyticsIcon />View Analytics
          </button>
        </div>
      </div>
    </div>
  );
}
