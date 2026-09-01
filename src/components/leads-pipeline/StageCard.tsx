import React from "react";
import { PipelineStage } from "./types";
import { CustomSwitch } from "./icons";

interface StageCardProps {
  stage: PipelineStage;
  index: number;
  type: "Ongoing" | "Completed";
  onToggleNotification: (checked: boolean) => void;
  onOpenDropdown: () => void;
  isDropdownOpen: boolean;
  onEditStage: () => void;
  onDeleteStage: () => void;
  onEditNotification: () => void;
}

export default function StageCard({
  stage,
  index,
  onToggleNotification,
  onOpenDropdown,
  isDropdownOpen,
  onEditStage,
  onDeleteStage,
  onEditNotification
}: StageCardProps) {
  return (
    <div className="box-sizing-border-box flex flex-col sm:flex-row sm:items-center p-5 gap-4 bg-white border border-[#E0E6EB] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] rounded-lg w-full min-h-[95px] sm:h-[95px] justify-between relative">
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col items-start gap-1">
          <span className="text-[18px] font-semibold text-[#29343D] font-sans">
            Stage {index}
          </span>
          <div className={`flex flex-row items-center py-[5px] px-2.5 gap-2.5 rounded-[999px] ${stage.badgeBg}`}>
            <span className="text-[12px] font-medium leading-[16px] font-sans">{stage.label}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-3 justify-between sm:justify-end w-full sm:w-auto">
        <div className="flex flex-row items-center gap-2">
          <CustomSwitch checked={stage.notifiedWhenLeadEnters} onChange={onToggleNotification} />
          <span className="text-[12px] text-[#98A4AE] font-medium leading-[16px] w-[84px] font-sans text-left">
            Notified when lead enters
          </span>
        </div>

        <div className="relative">
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onOpenDropdown(); }}
            className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-[#29343D] transition-colors cursor-pointer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="5" r="1.5" /><circle cx="12" cy="19" r="1.5" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 top-10 z-50 w-[190px] bg-white shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] rounded-[12px] py-2 border border-[#E0E6EB] flex flex-col items-start gap-1 animate-in fade-in zoom-in-95 duration-100">
              <button
                type="button"
                onClick={onEditNotification}
                className="w-full h-[32px] flex items-center gap-2 px-3.5 hover:bg-slate-50 text-left transition-colors text-[13px] font-semibold text-[#29343D] font-sans cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#635BFF]">
                  <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>View/ Edit Notification</span>
              </button>

              <button
                type="button"
                onClick={onEditStage}
                className="w-full h-[32px] flex items-center gap-2.5 px-3.5 hover:bg-slate-50 text-left transition-colors text-[13px] font-semibold text-[#29343D] font-sans cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500">
                  <path d="M12 20h9" /><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                </svg>
                <span>Edit Stage</span>
              </button>

              <button
                type="button"
                onClick={onDeleteStage}
                className="w-full h-[32px] flex items-center gap-2.5 px-3.5 hover:bg-slate-50 text-left transition-colors text-[13px] font-semibold text-[#FF6692] font-sans cursor-pointer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF6692]">
                  <path d="M3 6h18" /><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" /><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                </svg>
                <span>Delete Stage</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
