import React, { useState } from "react";
import EmailDetailModal from "./EmailDetailModal";
import MailsSentTable, { EmailDetail } from "./MailsSentTable";

interface MailsSentModalProps {
  isOpen: boolean;
  onClose: () => void;
  salonName: string;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function MailsSentModal({ isOpen, onClose, salonName, triggerToast }: MailsSentModalProps) {
  const [modalMailRange, setModalMailRange] = useState("All Time");
  const [modalMailSource, setModalMailSource] = useState("All Sources");
  const [viewingEmail, setViewingEmail] = useState<EmailDetail | null>(null);

  if (!isOpen) return null;

  const emailsList: EmailDetail[] = [
    { date: "08/08/2025 13:59", subject: "Payment expired", type: "Email", source: "Auto", category: "Opened" },
    { date: "08/08/2025 13:59", subject: "Credit card update", type: "Email", source: "Auto", category: "Opened" },
    { date: "08/08/2025 13:59", subject: "Invoice reminder", type: "Email", source: "Auto", category: "Sent" },
    { date: "08/08/2025 13:59", subject: "Welcome to SalonFlow", type: "Email", source: "Auto", category: "Sent" },
    { date: "08/08/2025 13:59", subject: "Premium features update", type: "Email", source: "Auto", category: "Sent" }
  ];

  const filteredEmails = emailsList.filter(item => modalMailSource === "All Sources" || item.source === modalMailSource);

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[960px] shadow-2xl p-8 flex flex-col gap-6 relative animate-in zoom-in-95 duration-200 text-left">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 p-1.5 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h3 className="text-xl font-bold text-[#0f172a] tracking-tight font-sans">Mails Sent - {salonName}</h3>

        <div className="flex items-center gap-4">
          <div className="flex flex-col gap-1.5 min-w-[150px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Data Range</span>
            <select
              value={modalMailRange}
              onChange={(e) => setModalMailRange(e.target.value)}
              className="w-full bg-white border border-[#eef2f6] rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-750 focus:outline-none focus:border-[#5e53fc]"
            >
              <option value="All Time">All Time</option>
              <option value="Last 7 Days">Last 7 Days</option>
              <option value="Last 30 Days">Last 30 Days</option>
            </select>
          </div>

          <div className="flex flex-col gap-1.5 min-w-[150px]">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Source</span>
            <select
              value={modalMailSource}
              onChange={(e) => setModalMailSource(e.target.value)}
              className="w-full bg-white border border-[#eef2f6] rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#5e53fc]"
            >
              <option value="All Sources">All Sources</option>
              <option value="Auto">Auto</option>
              <option value="Manual">Manual</option>
            </select>
          </div>
        </div>

        <MailsSentTable
          emails={filteredEmails}
          onViewEmail={(email) => setViewingEmail(email)}
          onResendEmail={(subj) => triggerToast(`Resending email: "${subj}"`, "success")}
        />

        <div className="flex justify-end">
          <button
            onClick={() => triggerToast("Loading more mails...", "info")}
            className="px-6 py-2.5 bg-[#f2f1ff] hover:bg-[#e4e2ff] text-[#5e53fc] rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
          >
            View More
          </button>
        </div>
      </div>

      <EmailDetailModal viewingEmail={viewingEmail} onClose={() => setViewingEmail(null)} />
    </div>
  );
}
