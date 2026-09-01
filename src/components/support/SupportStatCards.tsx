import React from "react";
import { Ticket as TicketIcon, HelpCircle, Clock, CheckCircle2 } from "lucide-react";
import { Ticket } from "./types";

interface SupportStatCardsProps {
  tickets: Ticket[];
}

export default function SupportStatCards({ tickets }: SupportStatCardsProps) {
  const totalTickets = tickets.length;
  const openTickets = tickets.filter((t) => t.status === "Open").length;
  const waitingTickets = tickets.filter((t) => t.status === "Waiting").length;
  const closedTickets = tickets.filter((t) => t.status === "Closed").length;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full text-left font-sans">
      {/* Total Tickets */}
      <div className="box-sizing-border-box flex flex-col justify-between p-6 bg-[#F4F3FF] border border-[#E0E6EB] rounded-[12px] h-[134px] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#635BFF] text-white flex items-center justify-center">
            <TicketIcon className="w-4 h-4" />
          </div>
          <span className="text-[14px] font-semibold text-[#29343D]">Total Tickets</span>
        </div>
        <span className="text-[28px] font-bold text-[#29343D] leading-none">{totalTickets}</span>
      </div>

      {/* Open Tickets */}
      <div className="box-sizing-border-box flex flex-col justify-between p-6 bg-[#FFF0F5] border border-[#E0E6EB] rounded-[12px] h-[134px] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FF6692] text-white flex items-center justify-center font-bold text-sm">
            <HelpCircle className="w-4 h-4" />
          </div>
          <span className="text-[14px] font-semibold text-[#29343D]">Open Tickets</span>
        </div>
        <span className="text-[28px] font-bold text-[#29343D] leading-none">{openTickets}</span>
      </div>

      {/* Waiting For Customer */}
      <div className="box-sizing-border-box flex flex-col justify-between p-6 bg-[#FFF9E5] border border-[#E0E6EB] rounded-[12px] h-[134px] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#FFD648] text-white flex items-center justify-center">
            <Clock className="w-4 h-4" />
          </div>
          <span className="text-[14px] font-semibold text-[#29343D]">Waiting For Customer</span>
        </div>
        <span className="text-[28px] font-bold text-[#29343D] leading-none">{waitingTickets}</span>
      </div>

      {/* Closed Tickets */}
      <div className="box-sizing-border-box flex flex-col justify-between p-6 bg-[#ECFDFD] border border-[#E0E6EB] rounded-[12px] h-[134px] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#16CDC7] text-white flex items-center justify-center">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <span className="text-[14px] font-semibold text-[#29343D]">Closed Tickets</span>
        </div>
        <span className="text-[28px] font-bold text-[#29343D] leading-none">{closedTickets}</span>
      </div>
    </div>
  );
}
