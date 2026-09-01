import React from "react";
import { RefreshIcon, DownloadIcon } from "./icons";

interface PipelineHeaderProps {
  onResync: () => void;
  onExport: () => void;
}

export default function PipelineHeader({ onResync, onExport }: PipelineHeaderProps) {
  return (
    <div className="box-sizing-border-box flex flex-col justify-between items-start p-6 gap-6 bg-white border border-[#E0E6EB] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] rounded-[12px] w-full">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center w-full gap-4">
        <div className="flex flex-col items-start gap-1">
          <h1 className="text-[20px] font-bold text-[#29343D] leading-[26px] font-sans">
            Leads Pipeline
          </h1>
          <p className="text-[15px] font-normal text-[#98A4AE] leading-[20px] font-sans">
            Manage your sales pipeline, assign incoming leads, track conversation status and configure stage-based automations
          </p>
        </div>

        <div className="flex flex-row items-center gap-3">
          <button
            type="button"
            onClick={onResync}
            className="w-[144px] h-[44px] flex flex-row justify-center items-center py-[10px] px-4 gap-2.5 bg-[#EFF4FA] rounded-lg text-[#0A2540] hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <RefreshIcon color="#0A2540" />
            <span className="text-[14px] font-medium leading-[24px] text-center font-sans">Refresh Data</span>
          </button>

          <button
            type="button"
            onClick={onExport}
            className="w-[149px] h-[44px] flex flex-row justify-center items-center py-[10px] px-4 gap-2.5 bg-[#635BFF] rounded-lg text-white hover:bg-[#4d42eb] transition-colors cursor-pointer"
          >
            <DownloadIcon color="#FFFFFF" />
            <span className="text-[14px] font-medium leading-[24px] text-center font-sans">Export Report</span>
          </button>
        </div>
      </div>
    </div>
  );
}
