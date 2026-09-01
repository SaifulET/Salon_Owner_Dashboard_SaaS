import React from "react";
import DashboardIcon from "./DashboardIcon";

interface DashboardTicketsProps {
  onNavigate?: (tab: string) => void;
  onViewSalon?: (id: string) => void;
}

export default function DashboardTickets({ onNavigate, onViewSalon }: DashboardTicketsProps) {
  const tickets = [
    { id: "tick-1", salon: "Bella Vista Salon", issue: "Employee access issues", priority: "High", date: "08/08/2025", salonId: "salon-2" },
    { id: "tick-2", salon: "Bella Vista Salon", issue: "Employee access issues", priority: "High", date: "08/08/2025", salonId: "salon-2" }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold text-slate-800">Tickets</h3>
        <button
          onClick={() => onNavigate && onNavigate("support")}
          className="text-xs font-semibold text-[#635BFF] bg-white border border-[#635BFF] hover:bg-[#635BFF]/5 px-4 py-1.5 rounded-[8px] transition-all duration-200 cursor-pointer"
        >
          View All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {tickets.map((t, idx) => (
          <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-slate-50/30 border border-slate-100 group gap-4 min-h-[72px]">
            <div className="flex flex-col justify-center items-start gap-1 min-h-[52px]">
              <div className="flex items-center gap-2">
                <img src="/BellaVistaSalon.svg" className="w-7 h-7 object-contain shrink-0" alt={t.salon} />
                <span className="text-sm font-semibold text-[#29343D] leading-[19px]">{t.salon}</span>
              </div>
              <span className="text-[11px] font-normal text-[#526B7A] pl-9">{t.issue}</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-between sm:justify-end w-full sm:w-auto">
              <div className="w-[45px] h-[22px] flex items-center justify-center bg-[#FFE5ED] rounded-[6px] shrink-0">
                <span className="text-[13px] font-semibold text-[#FF6692]">{t.priority}</span>
              </div>
              <span className="text-[11px] font-normal text-[#526B7A] w-[70px] text-center">{t.date}</span>
              <button
                onClick={() => onViewSalon && onViewSalon(t.salonId)}
                className="w-[48px] h-[36px] rounded-[8px] bg-[#F1F2FE] text-[#635BFF] hover:opacity-90 flex items-center justify-center transition-opacity shrink-0 cursor-pointer"
              >
                <DashboardIcon src="/viewIcon.svg" size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
