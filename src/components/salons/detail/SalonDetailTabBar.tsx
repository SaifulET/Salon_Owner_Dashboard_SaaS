import React from "react";
import { BasicDataIcon, LocationsIcon, ContactsIcon, TaxIcon, DocumentsIcon, MembersIcon } from "../icons/SalonIcons";

export type SalonTabType = "basic" | "locations" | "contacts" | "tax" | "documents" | "members";

interface SalonDetailTabBarProps {
  activeTab: SalonTabType;
  setActiveTab: (tab: SalonTabType) => void;
}

export default function SalonDetailTabBar({ activeTab, setActiveTab }: SalonDetailTabBarProps) {
  const tabs = [
    { id: "basic" as SalonTabType, label: "Basic Data", icon: BasicDataIcon, width: "w-1/3 md:w-[126px]" },
    { id: "locations" as SalonTabType, label: "Locations", icon: LocationsIcon, width: "w-1/3 md:w-[121px]" },
    { id: "contacts" as SalonTabType, label: "Contacts", icon: ContactsIcon, width: "w-1/3 md:w-[118px]" },
    { id: "tax" as SalonTabType, label: "Tax and Banking", icon: TaxIcon, width: "w-1/3 md:w-[162px]" },
    { id: "documents" as SalonTabType, label: "Documents", icon: DocumentsIcon, width: "w-1/3 md:w-[133px]" },
    { id: "members" as SalonTabType, label: "Members", icon: MembersIcon, width: "w-1/3 md:w-[118px]" }
  ];

  return (
    <div className="w-full bg-[#DDDBFF] rounded-[12px] flex flex-row flex-nowrap justify-start lg:justify-center items-center px-0 md:px-[16px] gap-0 md:gap-[16px] h-[48px] overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`h-full flex flex-row items-center justify-center px-1.5 py-3 md:p-[12px] gap-1 md:gap-[8px] ${tab.width} flex-shrink-0 transition-all border-b-2 rounded-none cursor-pointer ${
              isActive ? "border-[#635BFF] text-[#635BFF]" : "border-transparent text-[#29343D] hover:bg-black/5"
            }`}
          >
            <Icon className={`w-4.5 h-4.5 md:w-6 md:h-6 flex-shrink-0 ${isActive ? "text-[#635BFF]" : "text-[#29343D]"}`} />
            <span className={`font-manrope font-semibold text-[11px] md:text-[14px] leading-tight whitespace-nowrap ${isActive ? "text-[#635BFF]" : "text-[#29343D]"}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
