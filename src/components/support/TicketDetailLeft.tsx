import React from "react";
import { Ticket } from "./types";
import { PlusIcon } from "./icons";

interface TicketDetailLeftProps {
  ticket: Ticket;
  onOpenSendEmail: () => void;
  onOpenAddNote: () => void;
  onViewEmail: (email: any) => void;
  onEditNote: (index: number) => void;
}

export default function TicketDetailLeft({ ticket, onOpenSendEmail, onOpenAddNote, onViewEmail, onEditNote }: TicketDetailLeftProps) {
  return (
    <div className="lg:col-span-8 flex flex-col gap-6 text-left">
      <div className="p-6 bg-white border border-[#E0E6EB] rounded-xl shadow-sm flex flex-col gap-4">
        <h3 className="text-sm font-bold text-[#29343D]">Initial Customer Request</h3>
        <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line bg-slate-50 p-4 rounded-lg border border-slate-100">{ticket.initialRequest}</p>
      </div>

      <div className="p-6 bg-white border border-[#E0E6EB] rounded-xl shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#29343D]">Emails Sent ({ticket.emailsSent.length})</h3>
          <button type="button" onClick={onOpenSendEmail} className="px-3.5 py-1.5 bg-[#635BFF] text-white hover:bg-[#4d42eb] text-xs font-bold rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"><PlusIcon /><span>Send Email</span></button>
        </div>
        <div className="flex flex-col gap-3">
          {ticket.emailsSent.map((em, idx) => (
            <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex flex-col gap-2">
              <div className="flex justify-between items-center"><span className="text-xs font-bold text-[#635BFF]">{em.sender}</span><span className="text-[11px] text-slate-400">{em.date}</span></div>
              <p className="text-xs text-slate-700">{em.message}</p>
              <button type="button" onClick={() => onViewEmail(em)} className="text-[11px] font-bold text-[#635BFF] hover:underline self-start mt-1 cursor-pointer">View Details</button>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-white border border-[#E0E6EB] rounded-xl shadow-sm flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-[#29343D]">Internal Notes ({ticket.internalNotes.length})</h3>
          <button type="button" onClick={onOpenAddNote} className="px-3.5 py-1.5 bg-[#EFF4FA] hover:bg-slate-200 text-xs font-bold text-[#0A2540] rounded-lg transition-colors cursor-pointer flex items-center gap-1.5"><PlusIcon /><span>Add Note</span></button>
        </div>
        <div className="flex flex-col gap-3">
          {ticket.internalNotes.map((nt, idx) => (
            <div key={idx} className="p-4 bg-amber-50/60 border border-amber-100 rounded-lg flex flex-col gap-1.5">
              <div className="flex justify-between items-center"><span className="text-xs font-bold text-amber-900">{nt.author}</span><span className="text-[11px] text-amber-700">{nt.daysAgo}</span></div>
              <p className="text-xs text-amber-800">{nt.message}</p>
              <button type="button" onClick={() => onEditNote(idx)} className="text-[11px] font-bold text-amber-700 hover:underline self-start cursor-pointer">Edit Note</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
