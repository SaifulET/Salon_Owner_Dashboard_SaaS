import React from "react";
import { SidebarIcon, ChevronDownIcon } from "./SidebarIcon";

interface SidebarAccordionGroupProps {
  title: string;
  icon: string;
  isExpanded: boolean;
  onToggle: () => void;
  items: { id: string; label: string }[];
  activeTab: string;
  onItemClick: (id: string) => void;
}

export default function SidebarAccordionGroup({
  title,
  icon,
  isExpanded,
  onToggle,
  items,
  activeTab,
  onItemClick
}: SidebarAccordionGroupProps) {
  if (isExpanded) {
    return (
      <div className="flex flex-col items-start p-3 gap-3 w-full bg-[#DDDBFF] rounded-xl flex-none">
        <button
          type="button"
          onClick={onToggle}
          className="flex flex-row items-center justify-between w-full h-6 text-[#635BFF] px-1"
        >
          <div className="flex flex-row items-center gap-2">
            <SidebarIcon src={icon} size={20} className="text-[#635BFF]" />
            <span className="font-['Manrope'] font-semibold text-[15px] leading-[20px]">
              {title}
            </span>
          </div>
          <span className="text-[#635BFF] transform rotate-180">
            <ChevronDownIcon />
          </span>
        </button>
        <div className="flex flex-col items-start p-0 gap-2 self-stretch w-full">
          {items.map((sub) => {
            const isSubActive = activeTab === sub.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => onItemClick(sub.id)}
                className={`w-full h-[44px] rounded-xl px-4 py-2 flex items-center justify-start text-[15px] font-normal font-sans leading-[20px] transition-all ${
                  isSubActive
                    ? "bg-[#635BFF] text-white shadow-sm"
                    : "bg-white text-[#635BFF] hover:bg-slate-50"
                }`}
              >
                {sub.label}
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
      onClick={onToggle}
      className="flex flex-row justify-between items-center px-4 py-2 w-full h-[44px] bg-[#DDDBFF] rounded-xl text-[#635BFF] font-['Manrope'] font-semibold text-[15px]"
    >
      <div className="flex items-center gap-2">
        <SidebarIcon src={icon} size={20} className="text-[#635BFF]" />
        <span>{title}</span>
      </div>
      <span>
        <ChevronDownIcon />
      </span>
    </button>
  );
}
