import React from "react";
import { AutomationEmail } from "./types";

interface SalonAutomationsTableProps {
  emails: AutomationEmail[];
  dateRange: string;
  setDateRange: (val: string) => void;
  source: string;
  setSource: (val: string) => void;
  onOpenSendModal: () => void;
  onViewEmail: (subject: string) => void;
  onResendEmail: (subject: string) => void;
}

export default function SalonAutomationsTable({
  emails,
  dateRange,
  setDateRange,
  source,
  setSource,
  onOpenSendModal,
  onViewEmail,
  onResendEmail
}: SalonAutomationsTableProps) {
  return (
    <div className="bg-white rounded-3xl border border-[#eef2f6] shadow-[0_2px_4px_-1px_rgba(175,182,201,0.08)] flex flex-col p-8 w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h2 className="text-xl font-bold text-slate-800">Email Communications</h2>
        <div className="flex flex-wrap items-center gap-3">
          <select value={dateRange} onChange={(e) => setDateRange(e.target.value)} className="bg-white border border-[#eef2f6] rounded-xl px-3 py-2 text-xs font-semibold text-slate-600 focus:outline-none focus:border-[#5e53fc] cursor-pointer">
            <option value="All Time">All Time</option><option value="Today">Today</option><option value="Last 7 Days">Last 7 Days</option>
          </select>
          <select value={source} onChange={(e) => setSource(e.target.value)} className="bg-white border border-[#eef2f6] rounded-xl px-3 py-2 text-xs font-semibold text-slate-600 focus:outline-none focus:border-[#5e53fc] cursor-pointer">
            <option value="All Sources">All Sources</option><option value="Auto">Auto</option><option value="Manual">Manual</option>
          </select>
          <button onClick={onOpenSendModal} className="flex items-center gap-2 px-5 py-2 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-100 cursor-pointer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg>
            <span>Send Email</span>
          </button>
        </div>
      </div>

      <div className="border border-slate-100 rounded-2xl overflow-x-auto w-full bg-white">
        <table className="w-full min-w-[700px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-[#f5f4ff] border-b border-slate-100 text-slate-600 font-bold uppercase tracking-wider">
              <th className="px-6 py-4">Date</th><th className="px-6 py-4">Subject</th>
              <th className="px-6 py-4">Type</th><th className="px-6 py-4">Source</th>
              <th className="px-6 py-4">Category</th><th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-700 font-semibold">
            {emails.map((e, idx) => (
              <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4 text-slate-500">{e.date}</td>
                <td className="px-6 py-4 text-slate-800 font-bold">{e.subject}</td>
                <td className="px-6 py-4 text-slate-600">{e.type}</td>
                <td className="px-6 py-4 text-slate-500">{e.source}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase ${e.category === "Opened" ? "bg-[#ecfeff] text-[#0891b2]" : "bg-[#f5f3ff] text-[#5e53fc]"}`}>
                    {e.category}
                  </span>
                </td>
                <td className="px-6 py-4 text-center flex items-center justify-center gap-2">
                  <button onClick={() => onViewEmail(e.subject)} className="p-2 bg-[#f2f1ff] text-[#5e53fc] hover:bg-[#e4e2ff] rounded-lg transition-colors inline-flex cursor-pointer" title="View Email Details">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                  </button>
                  <button onClick={() => onResendEmail(e.subject)} className="p-2 bg-[#ecfeff] text-[#0891b2] hover:bg-[#cffafe] rounded-lg transition-colors inline-flex cursor-pointer" title="Resend Email">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.57.57" /></svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
