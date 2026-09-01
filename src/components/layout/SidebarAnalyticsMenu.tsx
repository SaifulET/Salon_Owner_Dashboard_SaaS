import React from "react";
import { SidebarIcon, ChevronDownIcon } from "./SidebarIcon";
import SidebarAccordionGroup from "./SidebarAccordionGroup";
import { NavItem } from "./types";

interface SidebarAnalyticsMenuProps {
  item: NavItem;
  activeTab: string;
  isExpanded: boolean;
  analyticsExpanded: boolean;
  setAnalyticsExpanded: (val: boolean) => void;
  setLeadsExpanded: (val: boolean) => void;
  revenueExpanded: boolean;
  setRevenueExpanded: (val: boolean) => void;
  customersExpanded: boolean;
  setCustomersExpanded: (val: boolean) => void;
  performanceExpanded: boolean;
  setPerformanceExpanded: (val: boolean) => void;
  handleItemClick: (id: string) => void;
}

export default function SidebarAnalyticsMenu({
  item, activeTab, isExpanded, analyticsExpanded, setAnalyticsExpanded, setLeadsExpanded,
  revenueExpanded, setRevenueExpanded, customersExpanded, setCustomersExpanded,
  performanceExpanded, setPerformanceExpanded, handleItemClick
}: SidebarAnalyticsMenuProps) {
  const isAnalyticsActive = activeTab.startsWith("analytics_") || activeTab === "analytics";

  if (!isExpanded) {
    return (
      <div className="relative group flex justify-center w-full my-1">
        <button
          type="button"
          onClick={() => handleItemClick("analytics_revenue_mrr_arr")}
          className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
            isAnalyticsActive ? "bg-[#5e53fc] text-white shadow-md" : "text-[#7e8b9b] hover:bg-slate-50 hover:text-slate-900"
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

  if (analyticsExpanded) {
    return (
      <div className="flex flex-col items-start p-4 gap-6 w-full bg-[#F1F2FE] rounded-2xl flex-none border border-[#E8EEF5]">
        <button type="button" onClick={() => setAnalyticsExpanded(false)} className="flex flex-row items-center justify-between w-full h-6 text-[#635BFF]">
          <div className="flex flex-row items-center gap-2">
            <SidebarIcon src={item.icon} size={24} className="text-[#635BFF]" />
            <span className="font-['Manrope'] font-semibold text-[15px] leading-[20px]">Analytics</span>
          </div>
          <span className="text-[#635BFF] transform rotate-180"><ChevronDownIcon /></span>
        </button>

        <div className="flex flex-col items-start p-0 gap-4 self-stretch w-full">
          <SidebarAccordionGroup
            title="Revenue" icon="/revenue.svg" isExpanded={revenueExpanded}
            onToggle={() => { setRevenueExpanded(!revenueExpanded); setCustomersExpanded(false); setPerformanceExpanded(false); }}
            items={[{ id: "analytics_revenue_mrr_arr", label: "MRR / ARR" }, { id: "analytics_revenue_asp", label: "ASP" }, { id: "analytics_revenue_ltv", label: "LTV" }, { id: "analytics_revenue_cashflow", label: "Cashflow" }]}
            activeTab={activeTab} onItemClick={handleItemClick}
          />
          <SidebarAccordionGroup
            title="Customers" icon="/customers.svg" isExpanded={customersExpanded}
            onToggle={() => { setCustomersExpanded(!customersExpanded); setRevenueExpanded(false); setPerformanceExpanded(false); }}
            items={[{ id: "analytics_customers_subscribers", label: "Subscribers" }, { id: "analytics_customers_leads", label: "Leads" }, { id: "analytics_customers_trials", label: "Trials" }]}
            activeTab={activeTab} onItemClick={handleItemClick}
          />
          <SidebarAccordionGroup
            title="Performance" icon="/performance.svg" isExpanded={performanceExpanded}
            onToggle={() => { setPerformanceExpanded(!performanceExpanded); setRevenueExpanded(false); setCustomersExpanded(false); }}
            items={[{ id: "analytics_performance_arpa", label: "ARPA" }, { id: "analytics_performance_churn", label: "Churn" }, { id: "analytics_performance_cohorts", label: "Cohorts" }, { id: "analytics_performance_map", label: "Map" }]}
            activeTab={activeTab} onItemClick={handleItemClick}
          />
        </div>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => { setAnalyticsExpanded(true); setLeadsExpanded(false); }}
      className={`w-full h-[44px] flex items-center justify-between px-4 py-2 rounded-xl transition-all duration-200 ${
        isAnalyticsActive ? "bg-[#F5F8FC]/60 text-[#635BFF]" : "text-[#29343D] hover:bg-slate-50 hover:text-slate-900"
      }`}
    >
      <div className="flex items-center gap-3">
        <SidebarIcon src={item.icon} size={24} className={isAnalyticsActive ? "text-[#635BFF]" : "text-[#98A4AE]"} />
        <span className="font-sans font-normal text-[15px] leading-[20px] tracking-wide">{item.label}</span>
      </div>
      <span className="text-[#b0bac9]"><ChevronDownIcon /></span>
    </button>
  );
}
