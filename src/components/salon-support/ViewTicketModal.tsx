import React from "react";
import { SupportTicket } from "./types";

interface ViewTicketModalProps {
  ticket: SupportTicket | null;
  onClose: () => void;
}

export default function ViewTicketModal({ ticket, onClose }: ViewTicketModalProps) {
  if (!ticket) return null;

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[440px] shadow-2xl p-6 flex flex-col gap-5 relative animate-in zoom-in-95 duration-200 text-left">
        <div className="flex flex-col gap-1 pb-3 border-b border-slate-100">
          <h3 className="text-lg font-bold text-[#0f172a]">Ticket {ticket.id} Details</h3>
          <p className="text-xs text-slate-400 font-semibold mt-1">Created on {ticket.date}</p>
        </div>

        <div className="flex flex-col gap-4 text-xs font-semibold">
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-bold text-slate-400 uppercase">Subject / Order</span>
            <span className="text-slate-800 text-sm font-extrabold">{ticket.order}</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Priority</span>
              <span className="w-fit px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase bg-amber-50 text-amber-600">
                {ticket.priority}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Status</span>
              <span className="w-fit px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase bg-slate-100 text-slate-600">
                {ticket.status}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Category</span>
              <span className="w-fit px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase bg-indigo-50 text-[#5e53fc]">
                {ticket.category}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Assigned To</span>
              <span className="text-slate-700">{ticket.assignTo}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-150 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
