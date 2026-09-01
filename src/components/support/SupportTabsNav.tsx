import React from "react";
import { SupportSubTab } from "./types";
import { TicketIcon, MegaphoneIcon, UserGroupIcon } from "./icons";

interface SupportTabsNavProps {
  activeTab: SupportSubTab;
  setActiveTab: (tab: SupportSubTab) => void;
  onNewAudienceClick: () => void;
}

export default function SupportTabsNav({ activeTab, setActiveTab, onNewAudienceClick }: SupportTabsNavProps) {
  const tabs = [
    { id: "tickets" as SupportSubTab, label: "Support Tickets", icon: <TicketIcon /> },
    { id: "announcements" as SupportSubTab, label: "Announcements", icon: <MegaphoneIcon /> },
    { id: "audiences" as SupportSubTab, label: "Audiences", icon: <UserGroupIcon /> }
  ];

  return (
    <div className="flex items-center justify-between border-b border-[#E0E6EB] w-full h-[53px] px-2 sm:px-4">
      <div className="flex items-center gap-4 sm:gap-6 h-full">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 h-full px-2 text-xs sm:text-sm font-semibold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
                isActive
                  ? "border-[#635BFF] text-[#635BFF]"
                  : "border-transparent text-[#7A8897] hover:text-[#253143]"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={onNewAudienceClick}
        className="h-9 px-4 bg-[#DDDBFF] hover:bg-[#c7c4ff] text-[#635BFF] text-xs font-bold rounded-lg transition-colors cursor-pointer"
      >
        New Audience
      </button>
    </div>
  );
}
