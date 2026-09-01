import React from "react";
import { RefreshIcon, PlusIcon } from "./icons";

interface SupportHeaderProps {
  onRefresh: () => void;
  onNewAnnouncement: () => void;
}

export default function SupportHeader({ onRefresh, onNewAnnouncement }: SupportHeaderProps) {
  return (
    <div className="box-sizing-border-box flex flex-col justify-between items-start p-6 gap-6 bg-white border border-[#E0E6EB] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] rounded-[12px] w-full">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full gap-4 text-left font-sans">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-[20px] font-bold text-[#29343D] leading-[26px]">
            Support & Communications
          </h1>
          <p className="text-[14px] font-normal text-[#98A4AE] leading-[20px]">
            Manage customer tickets, publish global announcements, and define message audiences.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onRefresh}
            className="h-10 px-4 flex items-center gap-2 bg-[#EFF4FA] hover:bg-slate-200 text-xs font-semibold text-[#0A2540] rounded-lg transition-colors cursor-pointer"
          >
            <RefreshIcon />
            <span>Refresh Data</span>
          </button>

          <button
            type="button"
            onClick={onNewAnnouncement}
            className="h-10 px-5 flex items-center gap-2 bg-[#635BFF] hover:bg-[#4d42eb] text-xs font-bold text-white rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <PlusIcon />
            <span>New Announcement</span>
          </button>
        </div>
      </div>
    </div>
  );
}
