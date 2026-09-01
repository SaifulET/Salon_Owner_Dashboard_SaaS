import React from "react";
import { SidebarIcon, ChevronDownIcon } from "./SidebarIcon";
import { NavItem } from "./types";

interface SidebarLeadsMenuProps {
  item: NavItem;
  activeTab: string;
  isExpanded: boolean;
  leadsExpanded: boolean;
  setLeadsExpanded: (val: boolean) => void;
  setAnalyticsExpanded: (val: boolean) => void;
  handleItemClick: (id: string) => void;
}

export default function SidebarLeadsMenu({
  item, activeTab, isExpanded, leadsExpanded, setLeadsExpanded, setAnalyticsExpanded, handleItemClick
}: SidebarLeadsMenuProps) {
  const isLeadsActive = activeTab.startsWith("leads_") || activeTab === "leads" || activeTab === "analytics_customers_leads";

  if (!isExpanded) {
    return (
      <div className="relative group flex justify-center w-full my-1">
        <button
          type="button"
          onClick={() => handleItemClick("leads_pipeline")}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
            isLeadsActive ? "bg-[#5e53fc] text-white shadow-md shadow-indigo-150" : "text-[#7e8b9b] hover:bg-slate-50 hover:text-slate-900"
          }`}
        >
          <SidebarIcon src={item.icon} size={24} />
        </button>
        <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-[#635BFF] text-white text-[10px] font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
          {item.label}
        </div>
      </div>
    );
  }

  if (leadsExpanded) {
    return (
      <div className="flex flex-col items-start p-4 gap-6 w-full bg-[#F1F2FE] rounded-2xl flex-none border border-[#E8EEF5]">
        <button type="button" onClick={() => setLeadsExpanded(false)} className="flex flex-row items-center justify-between w-full h-6 text-[#635BFF]">
          <div className="flex flex-row items-center gap-2">
            <SidebarIcon src={item.icon} size={24} className="text-[#635BFF]" />
            <span className="font-['Manrope'] font-semibold text-[15px] leading-[20px]">Leads</span>
          </div>
          <span className="text-[#635BFF] transform rotate-180"><ChevronDownIcon /></span>
        </button>

        <div className="flex flex-col items-start p-0 gap-2 self-stretch w-full">
          {[
            { id: "leads_pipeline", label: "Pipeline", icon: "/pipeline.svg" },
            { id: "analytics_customers_leads", label: "Data Analysis", icon: "/dataAnalysis.svg" }
          ].map((sub) => {
            const isSubActive = activeTab === sub.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => handleItemClick(sub.id)}
                className={`w-full h-[44px] rounded-xl px-4 py-2 flex items-center justify-start text-[15px] font-normal font-sans leading-[20px] transition-all ${
                  isSubActive ? "bg-[#635BFF] text-white shadow-sm" : "bg-white text-[#635BFF] hover:bg-slate-50"
                }`}
              >
                <SidebarIcon src={sub.icon} size={20} className={isSubActive ? "text-white" : "text-[#635BFF]"} />
                <span className="ml-2">{sub.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => { setLeadsExpanded(true); setAnalyticsExpanded(false); }}
      className={`w-full h-[44px] flex items-center justify-between px-4 py-2 rounded-xl transition-all duration-200 ${
        isLeadsActive ? "bg-[#F5F8FC]/60 text-[#635BFF]" : "text-[#29343D] hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <SidebarIcon src={item.icon} size={24} className={isLeadsActive ? "text-[#635BFF]" : "text-[#98A4AE]"} />
        <span className="text-[15px] font-normal font-sans leading-[20px]">{item.label}</span>
      </div>
      <span className="text-[#b0bac9]"><ChevronDownIcon /></span>
    </button>
  );
}
