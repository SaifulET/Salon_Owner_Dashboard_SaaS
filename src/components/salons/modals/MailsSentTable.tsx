import React from "react";

export interface EmailDetail {
  date: string;
  subject: string;
  type: string;
  source: string;
  category: string;
}

interface MailsSentTableProps {
  emails: EmailDetail[];
  onViewEmail: (email: EmailDetail) => void;
  onResendEmail: (subject: string) => void;
}

export default function MailsSentTable({ emails, onViewEmail, onResendEmail }: MailsSentTableProps) {
  return (
    <div className="border border-slate-100 rounded-2xl overflow-hidden w-full bg-white">
      <table className="w-full border-collapse text-left text-xs">
        <thead>
          <tr className="bg-[#f5f4ff] border-b border-slate-100 text-slate-650 font-bold uppercase tracking-wider">
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Subject</th>
            <th className="px-6 py-4">Type</th>
            <th className="px-6 py-4">Source</th>
            <th className="px-6 py-4">Category</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700 font-semibold">
          {emails.map((item, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 text-slate-500">{item.date}</td>
              <td className="px-6 py-4 text-slate-850 font-bold">{item.subject}</td>
              <td className="px-6 py-4">{item.type}</td>
              <td className="px-6 py-4">{item.source}</td>
              <td className="px-6 py-4">
                <span
                  className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wide ${
                    item.category === "Opened" ? "bg-[#f0fdf4] text-[#16a34a]" : "bg-[#eff6ff] text-[#2563eb]"
                  }`}
                >
                  {item.category}
                </span>
              </td>
              <td className="px-6 py-4 text-center flex items-center justify-center gap-2">
                <button
                  onClick={() => onViewEmail(item)}
                  className="p-2 bg-[#f2f1ff] text-[#5e53fc] hover:bg-[#e4e2ff] rounded-lg transition-colors inline-flex cursor-pointer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
                <button
                  onClick={() => onResendEmail(item.subject)}
                  className="p-2 bg-[#ecfeff] text-[#0891b2] hover:bg-[#cffafe] rounded-lg transition-colors inline-flex cursor-pointer"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.57.57" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
