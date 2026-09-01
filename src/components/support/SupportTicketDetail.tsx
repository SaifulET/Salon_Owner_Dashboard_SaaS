import React from "react";
import { ArrowLeft } from "lucide-react";
import { Ticket } from "./types";
import TicketDetailLeft from "./TicketDetailLeft";
import TicketDetailRight from "./TicketDetailRight";

interface SupportTicketDetailProps {
  ticket: Ticket;
  onBack: () => void;
  onUpdateStatus: (id: string, status: Ticket["status"]) => void;
  onUpdatePriority: (id: string, priority: Ticket["priority"]) => void;
  onUpdateAssignee: (id: string, assignee: string) => void;
  onOpenSendEmail: () => void;
  onOpenAddNote: () => void;
  onViewEmail: (email: any) => void;
  onEditNote: (index: number) => void;
}

export default function SupportTicketDetail({
  ticket,
  onBack,
  onUpdateStatus,
  onUpdatePriority,
  onUpdateAssignee,
  onOpenSendEmail,
  onOpenAddNote,
  onViewEmail,
  onEditNote
}: SupportTicketDetailProps) {
  return (
    <div className="flex flex-col gap-6 w-full text-left font-sans animate-in fade-in duration-200">
      <div className="flex items-center justify-between border-b border-[#E0E6EB] pb-4">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="p-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-slate-400">{ticket.id}</span>
            <h2 className="text-lg font-bold text-[#29343D]">{ticket.order}</h2>
          </div>
        </div>
        <button type="button" onClick={() => onUpdateStatus(ticket.id, "Closed")} className="px-4 py-2 bg-rose-50 text-rose-600 hover:bg-rose-100 text-xs font-bold rounded-lg transition-colors cursor-pointer">
          Close Ticket
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">
        <TicketDetailLeft ticket={ticket} onOpenSendEmail={onOpenSendEmail} onOpenAddNote={onOpenAddNote} onViewEmail={onViewEmail} onEditNote={onEditNote} />
        <TicketDetailRight ticket={ticket} onUpdateStatus={(s) => onUpdateStatus(ticket.id, s)} onUpdatePriority={(p) => onUpdatePriority(ticket.id, p)} onUpdateAssignee={(a) => onUpdateAssignee(ticket.id, a)} />
      </div>
    </div>
  );
}
