"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { SidebarProps, NavItem } from "./types";
import SidebarNarrowIcon from "./SidebarNarrowIcon";
import SidebarMainSection from "./SidebarMainSection";
import SidebarOthersSection from "./SidebarOthersSection";
import SalonDoubleSidebar from "./SalonDoubleSidebar";

const mainNavigation: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: "/dashboard.svg" },
  { id: "salons", label: "Salons", icon: "/salon.svg" },
  { id: "leads", label: "Leads", icon: "/leads.svg" },
  { id: "billing", label: "Billing", icon: "/billing.svg" },
  { id: "analytics", label: "Analytics", icon: "/analytics.svg" },
  { id: "automations", label: "Automations & Mail", icon: "/automationAndMails.svg" }
];

const secondaryNavigation: NavItem[] = [
  { id: "support", label: "Support", icon: "/supports.svg" },
  { id: "settings", label: "Settings", icon: "/settings.svg" }
];

const salonNavigation: NavItem[] = [
  { id: "overview", label: "Overview", icon: "/dashboard.svg" },
  { id: "users_and_staff", label: "Users and Staff", icon: "/customers.svg" },
  { id: "billing", label: "Billing", icon: "/billing.svg" },
  { id: "settings", label: "Settings", icon: "/settings.svg" },
  { id: "activity", label: "Activity", icon: "/performance.svg" },
  { id: "support", label: "Support", icon: "/supports.svg" },
  { id: "automations", label: "Automations & Mail", icon: "/automationAndMails.svg" }
];

export default function Sidebar({
  activeTab, setActiveTab, selectedSalonId, setSelectedSalonId,
  salonSubTab, setSalonSubTab, isOpen, setIsOpen, isExpanded = true, setIsExpanded = () => {}
}: SidebarProps) {
  const [analyticsExpanded, setAnalyticsExpanded] = useState(false);
  const [revenueExpanded, setRevenueExpanded] = useState(false);
  const [customersExpanded, setCustomersExpanded] = useState(false);
  const [performanceExpanded, setPerformanceExpanded] = useState(false);
  const [leadsExpanded, setLeadsExpanded] = useState(false);

  const handleMainItemClick = (id: string) => {
    setActiveTab(id);
    setSelectedSalonId(null);
    setIsOpen(false);
  };

  const renderNarrowIcon = (item: NavItem) => (
    <SidebarNarrowIcon key={item.id} item={item} activeTab={activeTab} selectedSalonId={selectedSalonId} onItemClick={handleMainItemClick} />
  );

  if (selectedSalonId !== null) {
    return (
      <SalonDoubleSidebar
        isOpen={isOpen} setIsOpen={setIsOpen} isExpanded={isExpanded} setIsExpanded={setIsExpanded}
        salonSubTab={salonSubTab} setSalonSubTab={setSalonSubTab} mainNavigation={mainNavigation}
        secondaryNavigation={secondaryNavigation} salonNavigation={salonNavigation} renderNarrowIcon={renderNarrowIcon}
      />
    );
  }

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsOpen(false)} />}
      <aside className={`fixed inset-y-0 left-0 ${isExpanded ? "w-[280px]" : "w-20"} bg-white border-r border-[#eef2f6] flex flex-col z-50 lg:z-30 transform lg:transform-none transition-all duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className={`h-[63px] ${isExpanded ? "px-6 justify-between" : "px-2 justify-center"} border-b border-[#eef2f6] flex items-center shrink-0`}>
          {isExpanded && <div className="flex items-center"><img src="/logo.svg" alt="MatDash" className="w-[120px] h-[50px] object-contain" /></div>}
          <button onClick={() => setIsExpanded(!isExpanded)} className="hidden lg:flex p-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors"><HugeiconsIcon icon={Menu01Icon} size={20} /></button>
          <button onClick={() => setIsOpen(false)} className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-600 lg:hidden"><HugeiconsIcon icon={Cancel01Icon} size={20} /></button>
        </div>
        <div className={`flex-1 overflow-y-auto ${isExpanded ? "px-4" : "px-2"} py-6 flex flex-col gap-6 text-left`}>
          <SidebarMainSection
            mainNavigation={mainNavigation} activeTab={activeTab} isExpanded={isExpanded} handleMainItemClick={handleMainItemClick}
            leadsExpanded={leadsExpanded} setLeadsExpanded={setLeadsExpanded} analyticsExpanded={analyticsExpanded} setAnalyticsExpanded={setAnalyticsExpanded}
            revenueExpanded={revenueExpanded} setRevenueExpanded={setRevenueExpanded} customersExpanded={customersExpanded} setCustomersExpanded={setCustomersExpanded}
            performanceExpanded={performanceExpanded} setPerformanceExpanded={setPerformanceExpanded}
          />
          <SidebarOthersSection secondaryNavigation={secondaryNavigation} activeTab={activeTab} isExpanded={isExpanded} handleMainItemClick={handleMainItemClick} />
        </div>
      </aside>
    </>
  );
}
