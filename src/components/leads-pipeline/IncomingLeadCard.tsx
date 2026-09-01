import React from "react";
import { Lead } from "./types";
import { EyeIcon, TaskIcon, TrashIconMini } from "./icons";

interface IncomingLeadCardProps {
  lead: Lead;
  isSelected: boolean;
  isSelectionMode: boolean;
  onToggleSelect: (id: string) => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
  onSeeMore: () => void;
  onAddTask: () => void;
  onDelete: () => void;
  onAssignTo: () => void;
}

export default function IncomingLeadCard({
  lead,
  isSelected,
  isSelectionMode,
  onToggleSelect,
  isMenuOpen,
  onToggleMenu,
  onSeeMore,
  onAddTask,
  onDelete,
  onAssignTo
}: IncomingLeadCardProps) {
  const getBadgeStyle = (days: number) => {
    if (days >= 3) return { bg: "bg-[#FFE5ED]", text: "text-[#FF6692]" };
    if (days === 2) return { bg: "bg-[#FFF9E5]", text: "text-[#FFD648]" };
    return { bg: "bg-[#EBFAF0]", text: "text-[#36C76C]" };
  };

  const badgeStyle = getBadgeStyle(lead.receivedDaysAgo);
  const formattedValue = new Intl.NumberFormat("it-IT").format(lead.value) + " €";

  return (
    <div
      className={`box-sizing-border-box flex flex-col justify-center items-start p-[14px] gap-4 w-full sm:w-[363.67px] min-h-[154px] sm:h-[154px] bg-white border rounded-[12px] relative transition-all ${
        isSelected ? "border-[#635BFF] shadow-md bg-slate-50/20" : "border-[#E0E6EB] hover:border-slate-350"
      }`}
    >
      <div className="flex flex-row justify-between items-center w-full">
        <div className="flex items-center gap-2">
          {isSelectionMode && (
            <div
              onClick={() => onToggleSelect(lead.id)}
              className={`w-5 h-5 rounded border flex items-center justify-center cursor-pointer transition-colors ${
                isSelected ? "bg-[#635BFF] border-[#635BFF]" : "border-[#98A4AE]"
              }`}
            >
              {isSelected && (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              )}
            </div>
          )}
          <h4 className="text-[16px] font-bold text-[#29343D] leading-tight font-sans truncate max-w-[180px]">{lead.name}</h4>
        </div>

        <div className="flex items-center gap-2">
          <div className={`flex flex-row justify-center items-center py-0.5 px-2 rounded-[6px] ${badgeStyle.bg}`}>
            <span className={`text-[13px] font-semibold leading-[18px] font-sans ${badgeStyle.text}`}>{lead.receivedDaysAgo}d ago</span>
          </div>

          <div className="relative">
            <button type="button" onClick={onToggleMenu} className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="19" r="1.5" /></svg>
            </button>

            {isMenuOpen && (
              <div className="absolute right-0 top-10 z-30 w-[119px] bg-white shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] rounded-[12px] py-2 border border-slate-100 flex flex-col items-start gap-1 animate-in fade-in zoom-in-95 duration-100">
                <button type="button" onClick={onSeeMore} className="w-full h-[28px] flex items-center gap-2 px-3.5 hover:bg-slate-50 text-left transition-colors text-[14px] font-normal text-[#29343D] font-sans cursor-pointer"><EyeIcon color="#635BFF" /><span>See more</span></button>
                <button type="button" onClick={onAddTask} className="w-full h-[28px] flex items-center gap-2.5 px-3.5 hover:bg-slate-50 text-left transition-colors text-[14px] font-normal text-[#29343D] font-sans cursor-pointer"><TaskIcon color="#46CAEB" /><span>Add task</span></button>
                <button type="button" onClick={onDelete} className="w-full h-[28px] flex items-center gap-2.5 px-3.5 hover:bg-slate-50 text-left transition-colors text-[14px] font-normal text-[#29343D] font-sans cursor-pointer"><TrashIconMini color="#FF6692" /><span>Delete</span></button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-0.5 w-full">
        <span className="text-[13px] font-semibold text-[#29343D] font-sans truncate w-full text-left">{lead.company}</span>
        <span className="text-[12px] font-medium text-[#999999] font-sans">{lead.source} &bull; {formattedValue}</span>
      </div>

      <div className="flex flex-row justify-end items-center w-full mt-auto relative">
        <button type="button" onClick={onAssignTo} className="w-[85px] h-[36px] bg-[#DDDBFF] text-[#635BFF] text-[12px] font-bold rounded-[8px] flex items-center justify-center hover:bg-[#c7c4ff] transition-colors font-sans cursor-pointer">
          Assign to
        </button>
      </div>
    </div>
  );
}
