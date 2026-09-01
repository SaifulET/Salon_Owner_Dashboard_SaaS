import React, { useState } from "react";

interface TerminateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (endDate: string) => void;
}

export default function TerminateModal({
  isOpen,
  onClose,
  onConfirm
}: TerminateModalProps) {
  const [endDate, setEndDate] = useState("");
  const [reason, setReason] = useState("");
  const [accessDate, setAccessDate] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(endDate);
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[480px] shadow-2xl p-8 flex flex-col gap-6 relative text-left font-semibold text-xs font-sans text-[#0f172a]">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold tracking-tight">Terminate Contract</h3>
          <p className="text-sm text-[#475569] font-normal mt-1.5">Are you sure you want to terminate this contract?</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-sm">
          <div className="flex flex-col gap-2">
            <label className="text-[#334155] font-semibold text-sm">End Date *</label>
            <input type="date" required value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full h-11 border border-slate-200 rounded-lg px-4 text-sm text-slate-800 focus:outline-none focus:border-[#5e53fc]" />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[#334155] font-semibold text-sm">Reason *</label>
            <input type="text" required placeholder="Reason for termination" value={reason} onChange={(e) => setReason(e.target.value)} className="w-full h-11 border border-slate-200 rounded-lg px-4 text-sm text-slate-800 placeholder:text-slate-450 focus:outline-none focus:border-[#5e53fc]" />
          </div>

          <div className="flex flex-col gap-2 relative">
            <label className="text-[#334155] font-semibold text-sm">Last Access Date</label>
            <div className="relative flex items-center">
              <input type="date" value={accessDate} onChange={(e) => setAccessDate(e.target.value)} className="w-full h-11 border border-slate-200 rounded-lg px-4 pr-10 text-sm text-slate-800 focus:outline-none focus:border-[#5e53fc]" />
              <div className="absolute right-4 pointer-events-none text-slate-500">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 mt-6">
            <button type="button" onClick={onClose} className="px-6 py-2.5 bg-[#f8fafc] hover:bg-[#f1f5f9] text-[#475569] hover:text-[#1e293b] rounded-lg text-sm font-medium transition-all cursor-pointer">Cancel</button>
            <button type="submit" className="px-6 py-2.5 bg-[#fff1f2] hover:bg-[#ffe4e6] text-[#ff4e73] rounded-lg text-sm font-semibold transition-all cursor-pointer">Terminate Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}
