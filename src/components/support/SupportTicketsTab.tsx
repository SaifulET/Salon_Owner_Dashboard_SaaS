import React, { useState } from "react";
import { Ticket } from "./types";
import { EyeIcon, TrashIcon } from "./icons";

interface SupportTicketsTabProps {
  tickets: Ticket[];
  onSelectTicket: (ticket: Ticket) => void;
  onDeleteTicket: (ticketId: string) => void;
}

export default function SupportTicketsTab({ tickets, onSelectTicket, onDeleteTicket }: SupportTicketsTabProps) {
  const [priorityFilter, setPriorityFilter] = useState("All Priority");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  const filteredTickets = tickets.filter((t) => {
    const matchesPriority = priorityFilter === "All Priority" || t.priority === priorityFilter;
    const matchesCategory = categoryFilter === "All Categories" || t.category === categoryFilter;
    return matchesPriority && matchesCategory;
  });

  const getSalonInitials = (name: string) => {
    const words = name.split(" ");
    if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase();
    return name.slice(0, 2).toUpperCase();
  };

  const getPriorityStyle = (p: string) => {
    if (p === "Urgent") return "bg-[#FFE5ED] text-[#FF6692]";
    if (p === "High" || p === "Medium") return "bg-[#FFF9E5] text-[#FFD648]";
    return "bg-[#ECFDFD] text-[#16CDC7]";
  };

  const getStatusStyle = (s: string) => {
    if (s === "Closed") return "bg-[#EBFAF0] text-[#36C76C]";
    if (s === "Waiting") return "bg-[#FFF9E5] text-[#FFD648]";
    return "bg-[#FFE5ED] text-[#FF6692]";
  };

  const getCategoryStyle = (c: string) => {
    if (c === "Technical") return "bg-[#EFF4FA] text-[#635BFF]";
    if (c === "Billing") return "bg-[#EBFAF0] text-[#36C76C]";
    if (c === "Feature Request") return "bg-[#F4F3FF] text-[#635BFF]";
    if (c === "Bug Report") return "bg-[#FFE5ED] text-[#FF6692]";
    return "bg-[#EFF4FA] text-[#526B7A]";
  };

  return (
    <div className="flex flex-col gap-6 text-left w-full font-sans">
      <div className="flex items-end justify-between gap-4">
        <div className="flex items-center gap-6">
          <div className="flex flex-col gap-1.5 items-start">
            <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">PRIORITY</span>
            <select value={priorityFilter} onChange={(e) => setPriorityFilter(e.target.value)} className="h-[38px] px-3.5 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold outline-none cursor-pointer min-w-[140px]">
              {["All Priority", "Urgent", "High", "Medium", "Low"].map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>

          <div className="flex flex-col gap-1.5 items-start">
            <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">CATEGORY</span>
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="h-[38px] px-3.5 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold outline-none cursor-pointer min-w-[150px]">
              {["All Categories", "Technical", "Billing", "Feature Request", "Bug Report", "General"].map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
        </div>

        <span className="text-xs text-[#98A4AE] font-semibold mb-2">Showing {filteredTickets.length} of {tickets.length} tickets</span>
      </div>

      <div className="border border-[#E0E6EB] rounded-xl overflow-x-auto w-full bg-white shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)]">
        <table className="w-full border-collapse text-left text-xs min-w-[900px]">
          <thead>
            <tr className="bg-slate-50/70 border-b border-[#E0E6EB] text-[#98A4AE] font-bold uppercase tracking-wider h-[46px]">
              <th className="px-6 py-3">ID</th><th className="px-6 py-3">ORDER / ISSUE</th><th className="px-6 py-3">SALON</th><th className="px-6 py-3">PRIORITY</th><th className="px-6 py-3">STATUS</th><th className="px-6 py-3">CATEGORY</th><th className="px-6 py-3">ASSIGN TO</th><th className="px-6 py-3">DATE</th><th className="px-6 py-3 text-center">ACTIONS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E0E6EB] text-slate-700 font-semibold">
            {filteredTickets.map((t, idx) => (
              <tr key={t.id} className={`hover:bg-slate-50/50 transition-colors h-[64px] ${idx % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"}`}>
                <td className="px-6 py-4 text-[#98A4AE] font-mono">{t.id}</td>
                <td className="px-6 py-4 text-[#29343D] font-bold max-w-[240px] truncate" title={t.order}>{t.order}</td>
                <td className="px-6 py-4 text-[#29343D] font-bold">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#8B5CF6] text-white font-bold text-[10px] flex items-center justify-center shrink-0">{getSalonInitials(t.salonName)}</div>
                    <span className="truncate">{t.salonName}</span>
                  </div>
                </td>
                <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase ${getPriorityStyle(t.priority)}`}>{t.priority}</span></td>
                <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase ${getStatusStyle(t.status)}`}>{t.status}</span></td>
                <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-[6px] text-[10px] font-bold uppercase ${getCategoryStyle(t.category)}`}>{t.category}</span></td>
                <td className="px-6 py-4 text-[#29343D]">{t.assignTo}</td>
                <td className="px-6 py-4 text-[#98A4AE]">{t.date}</td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button type="button" onClick={() => onSelectTicket(t)} className="p-2 bg-[#F1F2FE] text-[#635BFF] hover:bg-[#e0e2fe] rounded-lg transition-colors cursor-pointer" title="View details"><EyeIcon /></button>
                    <button type="button" onClick={() => onDeleteTicket(t.id)} className="p-2 bg-[#FFE5ED] text-[#FF6692] hover:bg-[#ffd1de] rounded-lg transition-colors cursor-pointer" title="Delete"><TrashIcon /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
