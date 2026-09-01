import React from "react";
import { SidebarIcon } from "./SidebarIcon";
import { NavItem } from "./types";

interface SidebarOthersSectionProps {
  secondaryNavigation: NavItem[];
  activeTab: string;
  isExpanded: boolean;
  handleMainItemClick: (id: string) => void;
}

export default function SidebarOthersSection({
  secondaryNavigation,
  activeTab,
  isExpanded,
  handleMainItemClick
}: SidebarOthersSectionProps) {
  return (
    <div className="flex flex-col gap-1">
      {isExpanded && <span className="px-4 text-[10px] font-extrabold uppercase tracking-wider text-[#b0bac9] mb-2">Others</span>}
      {secondaryNavigation.map((item) => {
        const isActive = activeTab === item.id;
        if (!isExpanded) {
          return (
            <div key={item.id} className="relative group flex justify-center w-full my-1">
              <button
                type="button"
                onClick={() => handleMainItemClick(item.id)}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                  isActive ? "bg-[#635BFF] text-white shadow-md shadow-indigo-150" : "text-[#29343D] hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <SidebarIcon src={item.icon} size={24} className={isActive ? "text-white" : "text-[#98A4AE]"} />
              </button>
              <div className="absolute left-full ml-3 px-2.5 py-1.5 bg-[#635BFF] text-white text-[10px] font-bold rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
            </div>
          );
        }
        return (
          <button
            key={item.id}
            onClick={() => handleMainItemClick(item.id)}
            className={`w-full h-[44px] flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 ${
              isActive ? "bg-[#635BFF] text-white shadow-md shadow-indigo-150" : "text-[#29343D] hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            <SidebarIcon src={item.icon} size={24} className={isActive ? "text-white" : "text-[#98A4AE]"} />
            <span className="font-sans font-normal text-[15px] leading-[20px] tracking-wide">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
