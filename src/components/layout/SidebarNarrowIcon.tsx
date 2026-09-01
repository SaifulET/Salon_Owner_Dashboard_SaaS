import React from "react";
import { SidebarIcon } from "./SidebarIcon";
import { NavItem } from "./types";

interface SidebarNarrowIconProps {
  item: NavItem;
  activeTab: string;
  selectedSalonId: string | null;
  onItemClick: (id: string) => void;
}

export default function SidebarNarrowIcon({
  item,
  activeTab,
  selectedSalonId,
  onItemClick
}: SidebarNarrowIconProps) {
  const isTabActive =
    activeTab === item.id ||
    (item.id === "analytics" && activeTab.startsWith("analytics_")) ||
    (item.id === "leads" && (activeTab.startsWith("leads_") || activeTab === "analytics_customers_leads"));
  const isHighlighted = item.id === "salons" ? (activeTab === "salons" || selectedSalonId !== null) : isTabActive;

  return (
    <button
      key={item.id}
      onClick={() => {
        if (item.id === "analytics") {
          onItemClick("analytics_revenue_mrr_arr");
        } else if (item.id === "leads") {
          onItemClick("leads_pipeline");
        } else {
          onItemClick(item.id);
        }
      }}
      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 relative group ${
        isHighlighted
          ? "bg-[#5e53fc] text-white shadow-md shadow-indigo-150"
          : "text-[#7e8b9b] hover:bg-slate-50 hover:text-slate-900"
      }`}
      title={item.label}
    >
      <SidebarIcon src={item.icon} size={24} />
      {isHighlighted && (
        <span className="absolute right-0 w-1.5 h-1.5 rounded-full bg-white mr-1" />
      )}
    </button>
  );
}
