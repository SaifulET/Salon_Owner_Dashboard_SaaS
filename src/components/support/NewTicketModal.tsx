import React, { useState } from "react";
import { Ticket } from "./types";
import { CloseIcon } from "./icons";

interface NewTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (ticket: Ticket) => void;
}

export default function NewTicketModal({ isOpen, onClose, onCreate }: NewTicketModalProps) {
  const [salonName, setSalonName] = useState("Bella Forma Hair Salon");
  const [order, setOrder] = useState("");
  const [priority, setPriority] = useState<Ticket["priority"]>("Medium");
  const [category, setCategory] = useState("Technical");
  const [assignTo, setAssignTo] = useState("Maria Rodriguez");
  const [initialRequest, setInitialRequest] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!order.trim() || !initialRequest.trim()) return;

    onCreate({
      id: `#${Math.floor(1000 + Math.random() * 9000)}`,
      order,
      salonName,
      priority,
      status: "Open",
      category,
      assignTo,
      date: new Date().toLocaleDateString("en-US"),
      initialRequest,
      emailsSent: [],
      internalNotes: []
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl w-[550px] max-w-full flex flex-col gap-4 p-6 text-left border border-[#E0E6EB]">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-lg text-[#29343D]">Create Support Ticket</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><CloseIcon /></button>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div><label className="text-slate-400 block text-[11px] mb-1">Salon Name *</label><input type="text" value={salonName} onChange={(e) => setSalonName(e.target.value)} required className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs outline-none" /></div>
          <div><label className="text-slate-400 block text-[11px] mb-1">Issue / Order Title *</label><input type="text" value={order} onChange={(e) => setOrder(e.target.value)} required placeholder="e.g. Card reader failure" className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs outline-none" /></div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Priority</label>
            <select value={priority} onChange={(e) => setPriority(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              {["Urgent", "High", "Medium", "Low"].map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              {["Technical", "Billing", "General"].map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div className="col-span-2">
            <label className="text-slate-400 block text-[11px] mb-1">Assign To</label>
            <select value={assignTo} onChange={(e) => setAssignTo(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              {["Maria Rodriguez", "Roberto Marini", "Dr. Marco Rossi", "Anna Bianchi", "Francesca Neri"].map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
          <div className="col-span-2"><label className="text-slate-400 block text-[11px] mb-1">Initial Request Details *</label><textarea rows={3} value={initialRequest} onChange={(e) => setInitialRequest(e.target.value)} required placeholder="Describe the customer problem..." className="w-full p-2.5 border border-[#E0E6EB] rounded-lg text-xs outline-none resize-none" /></div>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer">Cancel</button>
          <button type="submit" className="px-5 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">Create Ticket</button>
        </div>
      </form>
    </div>
  );
}
