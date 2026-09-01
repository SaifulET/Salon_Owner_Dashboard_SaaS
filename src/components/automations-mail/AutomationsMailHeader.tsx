import React from "react";
import { RefreshIcon, PaperPlaneIcon } from "./AutomationsMailIcons";

interface AutomationsMailHeaderProps {
  onRefresh: () => void;
  onSendEmail: () => void;
}

export default function AutomationsMailHeader({ onRefresh, onSendEmail }: AutomationsMailHeaderProps) {
  return (
    <div className="box-sizing-border-box flex flex-col justify-between items-start p-6 gap-6 bg-white border border-[#E0E6EB] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] rounded-[12px] w-full">
      <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full gap-4 text-left font-sans">
        <h1 className="text-[20px] font-bold text-[#29343D] leading-[26px]">
          Automations & Mail
        </h1>

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
            onClick={onSendEmail}
            className="h-10 px-5 flex items-center gap-2 bg-[#635BFF] hover:bg-[#4d42eb] text-xs font-bold text-white rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <PaperPlaneIcon />
            <span>Send Email</span>
          </button>
        </div>
      </div>
    </div>
  );
}
