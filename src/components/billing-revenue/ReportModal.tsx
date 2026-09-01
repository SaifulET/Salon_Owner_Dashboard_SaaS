import React, { useState } from "react";
import { ChevronDownIcon } from "./BillingRevenueIcons";

interface ReportModalProps {
  onClose: () => void;
  onExport: (format: string) => void;
}

export default function ReportModal({ onClose, onExport }: ReportModalProps) {
  const [formatOpen, setFormatOpen] = useState(false);
  const [format, setFormat] = useState("PDF");
  const [plan, setPlan] = useState("All");
  const [status, setStatus] = useState("All Status");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/35 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[360px] rounded-xl bg-white p-5 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[14px] font-bold text-[#253143]">Billing Records Report</h2>
            <p className="mt-2 text-[11px] font-semibold text-[#526174]">Export detailed financial reports</p>
          </div>
          <button onClick={onClose} aria-label="Close report" className="p-1 text-[#253143] hover:text-rose-500 cursor-pointer">×</button>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4">
          <label className="text-[10px] font-semibold text-[#9aa7b8]">
            Data Range
            <div className="mt-2 flex h-9 w-full items-center justify-between rounded-lg border border-[#edf1f6] px-3 text-[10px] text-[#526174]">
              <span>Last 7 days</span><span>▣</span>
            </div>
          </label>
          <label className="text-[10px] font-semibold text-[#9aa7b8]">
            Status
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-2 h-9 w-full rounded-lg border border-[#edf1f6] px-3 text-[10px] text-[#253143] cursor-pointer"
            >
              <option>All Status</option><option>Failed</option><option>Paid</option><option>Pending</option><option>Refunded</option>
            </select>
          </label>
        </div>

        <div className="mt-5 text-[10px] font-semibold text-[#9aa7b8]">Plan</div>
        <div className="mt-2 grid grid-cols-4 gap-2">
          {["All", "Basic", "Premium", "Enterprise"].map((item) => (
            <button
              key={item}
              onClick={() => setPlan(item)}
              className={`h-9 rounded-lg border text-[10px] font-semibold cursor-pointer ${
                plan === item ? "border-[#635bff] text-[#635bff] bg-indigo-50/40" : "border-[#edf1f6] text-[#253143]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="mt-20 flex justify-end">
          <span className="sr-only">Selected format: {format}. Status: {status}. Plan: {plan}</span>
          <div className="relative">
            <button
              onClick={() => setFormatOpen(!formatOpen)}
              className="flex h-10 items-center gap-2 rounded-lg bg-[#635bff] hover:bg-[#5244f0] px-5 text-[11px] font-bold text-white cursor-pointer"
            >
              Export <ChevronDownIcon />
            </button>
            {formatOpen && (
              <div className="absolute right-0 top-11 w-20 rounded-lg bg-white py-2 shadow-xl border border-slate-100 z-10">
                {["PDF", "CSV", "XML"].map((item) => (
                  <button
                    key={item}
                    onClick={() => { setFormat(item); setFormatOpen(false); onExport(item); }}
                    className="block w-full px-4 py-2 text-left text-[11px] hover:bg-[#f5f7fb] cursor-pointer"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
