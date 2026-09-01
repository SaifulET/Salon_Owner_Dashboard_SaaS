import React from "react";
import { PipelineSubTab } from "./types";

interface PipelineSubTabsProps {
  activeSubTab: PipelineSubTab;
  setActiveSubTab: (tab: PipelineSubTab) => void;
}

export default function PipelineSubTabs({ activeSubTab, setActiveSubTab }: PipelineSubTabsProps) {
  const tabs: PipelineSubTab[] = ["Leads da Gestire", "Actual Pipeline", "Settings"];

  return (
    <div className="flex items-center border-b border-[#E0E6EB] px-4 sm:px-[30px] h-[53px] w-full overflow-hidden">
      <div className="flex items-center gap-3 sm:gap-6 h-full w-full overflow-x-auto whitespace-nowrap scrollbar-none">
        {tabs.map((tab) => {
          const isActive = activeSubTab === tab;
          return (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveSubTab(tab)}
              className={`h-full px-2 sm:px-4 text-sm sm:text-[18px] font-semibold transition-all relative border-b-2 flex items-center gap-1.5 sm:gap-2.5 font-sans whitespace-nowrap cursor-pointer ${
                isActive
                  ? "border-[#635BFF] text-[#635BFF]"
                  : "border-transparent text-[#29343D] hover:opacity-85"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>
    </div>
  );
}
