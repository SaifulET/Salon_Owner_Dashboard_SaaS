import React from "react";
import { Ticket } from "./types";
import { salonContacts } from "./mockData";

interface TicketDetailRightProps {
  ticket: Ticket;
  onUpdateStatus: (status: Ticket["status"]) => void;
  onUpdatePriority: (priority: Ticket["priority"]) => void;
  onUpdateAssignee: (assignee: string) => void;
}

export default function TicketDetailRight({ ticket, onUpdateStatus, onUpdatePriority, onUpdateAssignee }: TicketDetailRightProps) {
  const contact = salonContacts[ticket.salonName] || { name: ticket.assignTo, email: "contact@salon.com" };

  return (
    <div className="lg:col-span-4 flex flex-col gap-6 text-left">
      <div className="p-6 bg-white border border-[#E0E6EB] rounded-xl shadow-sm flex flex-col gap-4">
        <h3 className="text-sm font-bold text-[#29343D]">Salon Details</h3>
        <div className="flex flex-col gap-3 text-xs">
          <div><span className="text-slate-400 block text-[11px]">Salon Name</span><span className="font-bold text-[#29343D]">{ticket.salonName}</span></div>
          <div><span className="text-slate-400 block text-[11px]">Manager / Requester</span><span className="font-semibold text-slate-700">{contact.name}</span></div>
          <div><span className="text-slate-400 block text-[11px]">Email</span><span className="font-semibold text-[#635BFF]">{contact.email}</span></div>
        </div>
      </div>

      <div className="p-6 bg-white border border-[#E0E6EB] rounded-xl shadow-sm flex flex-col gap-4">
        <h3 className="text-sm font-bold text-[#29343D]">Ticket Properties</h3>
        <div className="flex flex-col gap-3 text-xs">
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Status</label>
            <select value={ticket.status} onChange={(e) => onUpdateStatus(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-bold outline-none cursor-pointer">
              {["Open", "Waiting", "Closed"].map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Priority</label>
            <select value={ticket.priority} onChange={(e) => onUpdatePriority(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-bold outline-none cursor-pointer">
              {["Urgent", "High", "Medium", "Low"].map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Assignee</label>
            <select value={ticket.assignTo} onChange={(e) => onUpdateAssignee(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-bold outline-none cursor-pointer">
              {["Maria Rodriguez", "Roberto Marini", "Dr. Marco Rossi", "Anna Bianchi", "Francesca Neri"].map((a) => <option key={a} value={a}>{a}</option>)}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
