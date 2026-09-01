import React from "react";
import { SupportTicket } from "./types";

interface SalonSupportTableProps {
  tickets: SupportTicket[];
  onViewTicket: (t: SupportTicket) => void;
  onDeleteTicket: (idx: number) => void;
}

export default function SalonSupportTable({ tickets, onViewTicket, onDeleteTicket }: SalonSupportTableProps) {
  const getPriorityStyle = (priority: string) => {
    switch (priority.toLowerCase()) {
      case "urgent": return "bg-[#ffe4e6] text-[#ff4e73]";
      case "high": return "bg-[#fff1f2] text-[#ff4e73]";
      case "medium": return "bg-[#fffbeb] text-[#d97706]";
      case "low": return "bg-[#f0fdf4] text-[#16a34a]";
      default: return "bg-slate-100 text-slate-650";
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "closed": return "bg-[#ecfeff] text-[#0891b2]";
      case "open": return "bg-[#ffe4e6] text-[#ff4d72]";
      case "waiting": return "bg-[#fffbeb] text-[#d97706]";
      default: return "bg-slate-105 text-slate-650";
    }
  };

  const getCategoryStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case "technical": return "bg-[#fffbeb] text-[#d97706]";
      case "billing": return "bg-[#f0fdf4] text-[#16a34a]";
      case "feature request": return "bg-[#f5f3ff] text-[#5e53fc]";
      case "general": return "bg-[#eff6ff] text-[#2563eb]";
      case "bug report": return "bg-[#fff1f2] text-[#ff4e73]";
      default: return "bg-slate-100 text-slate-600";
    }
  };

  return (
    <div className="border border-slate-100 rounded-2xl overflow-x-auto w-full bg-white">
      <table className="w-full min-w-[800px] border-collapse text-left text-xs">
        <thead>
          <tr className="bg-[#f5f4ff] border-b border-slate-100 text-slate-600 font-bold uppercase tracking-wider">
            <th className="px-6 py-4">ID</th><th className="px-6 py-4">Order</th>
            <th className="px-6 py-4">Priority</th><th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Category</th><th className="px-6 py-4">Assign to</th>
            <th className="px-6 py-4">Date</th><th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700 font-semibold">
          {tickets.map((t, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 text-slate-500">{t.id}</td>
              <td className="px-6 py-4 text-slate-800 font-bold">{t.order}</td>
              <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase whitespace-nowrap ${getPriorityStyle(t.priority)}`}>{t.priority}</span></td>
              <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase whitespace-nowrap ${getStatusStyle(t.status)}`}>{t.status}</span></td>
              <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase whitespace-nowrap ${getCategoryStyle(t.category)}`}>{t.category}</span></td>
              <td className="px-6 py-4 text-slate-500 font-semibold">{t.assignTo}</td>
              <td className="px-6 py-4 text-slate-400 font-semibold">{t.date}</td>
              <td className="px-6 py-4 text-center flex items-center justify-center gap-2">
                <button onClick={() => onViewTicket(t)} className="p-2 bg-[#f2f1ff] text-[#5e53fc] hover:bg-[#e4e2ff] rounded-lg transition-colors inline-flex cursor-pointer" title="View Ticket Details">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                </button>
                <button onClick={() => onDeleteTicket(idx)} className="p-2 bg-[#fff1f2] text-[#ff4e73] hover:bg-[#ffe4e6] rounded-lg transition-colors inline-flex cursor-pointer" title="Delete Ticket">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /></svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
