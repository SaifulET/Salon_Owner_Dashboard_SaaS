import React, { useState } from "react";
import { SupportTicket } from "./types";

interface NewTicketModalProps {
  isOpen: boolean;
  totalTickets: number;
  onClose: () => void;
  onCreate: (ticket: SupportTicket) => void;
}

export default function NewTicketModal({ isOpen, totalTickets, onClose, onCreate }: NewTicketModalProps) {
  const [newOrder, setNewOrder] = useState("");
  const [newPriority, setNewPriority] = useState("Medium");
  const [newCategory, setNewCategory] = useState("General");
  const [newAssignTo, setNewAssignTo] = useState("Maria Rodriguez");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newOrder) return;
    const newT: SupportTicket = {
      id: `#${String(totalTickets + 1).padStart(3, "0")}`,
      order: newOrder,
      priority: newPriority,
      status: "Open",
      category: newCategory,
      assignTo: newAssignTo,
      date: new Date().toLocaleDateString("en-GB")
    };
    onCreate(newT);
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[440px] shadow-2xl p-6 flex flex-col gap-5 relative animate-in zoom-in-95 duration-200 text-left">
        <h3 className="text-lg font-bold text-[#0f172a]">Create Support Ticket</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
          <div className="flex flex-col gap-1.5">
            <label className="text-[#334155] font-semibold text-xs">Subject / Order *</label>
            <input type="text" required value={newOrder} onChange={(e) => setNewOrder(e.target.value)} placeholder="Employee access issues" className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc]" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[#334155] font-semibold text-xs">Priority</label>
            <select value={newPriority} onChange={(e) => setNewPriority(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] bg-white text-xs font-semibold">
              <option value="Urgent">Urgent</option><option value="High">High</option><option value="Medium">Medium</option><option value="Low">Low</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[#334155] font-semibold text-xs">Category</label>
            <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] bg-white text-xs font-semibold">
              <option value="Technical">Technical</option><option value="Billing">Billing</option><option value="Feature Request">Feature Request</option><option value="General">General</option><option value="Bug Report">Bug Report</option><option value="Other">Other</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[#334155] font-semibold text-xs">Assign To</label>
            <input type="text" value={newAssignTo} onChange={(e) => setNewAssignTo(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc]" />
          </div>
          <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
            <button type="button" onClick={onClose} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 rounded-xl text-xs font-bold transition-all cursor-pointer">Cancel</button>
            <button type="submit" className="px-5 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-150 cursor-pointer">Create Ticket</button>
          </div>
        </form>
      </div>
    </div>
  );
}
