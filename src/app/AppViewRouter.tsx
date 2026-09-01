"use client";

import React from "react";
import DashboardPage from "../components/dashboard/DashboardPage";
import RecentActivityPage from "../components/recent-activity/RecentActivityPage";
import SalonsPage from "../components/salons/SalonsPage";
import BillingRevenuePage from "../components/billing-revenue/BillingRevenuePage";
import AnalyticsPage from "../components/analytics/AnalyticsPage";
import ASPPage from "../components/asp/ASPPage";
import LTVPage from "../components/ltv/LTVPage";
import CashflowPage from "../components/cashflow/CashflowPage";
import SubscribersPage from "../components/subscribers/SubscribersPage";
import LeadsPage from "../components/leads/LeadsPage";
import LeadsPipelinePage from "../components/leads-pipeline/LeadsPipelinePage";
import TrialsPage from "../components/trials/TrialsPage";
import ARPAPage from "../components/arpa/ARPAPage";
import ChurnPage from "../components/churn/ChurnPage";
import CohortsPage from "../components/cohorts/CohortsPage";
import MapPage from "../components/map/MapPage";
import AutomationsMailPage from "../components/automations-mail/AutomationsMailPage";
import SettingsPage from "../components/settings/SettingsPage";
import SupportPage from "../components/support/SupportPage";
import { Salon } from "./types";

interface AppViewRouterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  salons: Salon[];
  setSalons: React.Dispatch<React.SetStateAction<Salon[]>>;
  selectedSalonId: string | null;
  setSelectedSalonId: (id: string | null) => void;
  setSalonSubTab: (tab: string) => void;
  impersonatingSalon: string | null;
  setImpersonatingSalon: (name: string | null) => void;
  dateRange: string;
  setDateRange: (range: string) => void;
}

export default function AppViewRouter({
  activeTab,
  setActiveTab,
  salons,
  setSalons,
  selectedSalonId,
  setSelectedSalonId,
  setSalonSubTab,
  impersonatingSalon,
  setImpersonatingSalon,
  dateRange,
  setDateRange
}: AppViewRouterProps) {
  switch (activeTab) {
    case "dashboard":
      return <DashboardPage onViewAllActivities={() => setActiveTab("recent_activity")} onNavigate={setActiveTab} onViewSalon={(id) => { setSelectedSalonId(id); setSalonSubTab("overview"); setActiveTab("salons"); }} />;
    case "salons":
      return <SalonsPage salons={salons} setSalons={setSalons} selectedSalonId={selectedSalonId} setSelectedSalonId={(id) => { setSelectedSalonId(id); setSalonSubTab("overview"); }} impersonatingSalon={impersonatingSalon} setImpersonatingSalon={setImpersonatingSalon} />;
    case "recent_activity":
      return <RecentActivityPage currentRange={dateRange} onRangeChange={setDateRange} />;
    case "billing":
      return <BillingRevenuePage setActiveTab={setActiveTab} />;
    case "analytics":
    case "analytics_revenue_mrr_arr":
      return <AnalyticsPage setActiveTab={setActiveTab} />;
    case "analytics_revenue_asp":
      return <ASPPage setActiveTab={setActiveTab} />;
    case "analytics_revenue_ltv":
      return <LTVPage setActiveTab={setActiveTab} />;
    case "analytics_revenue_cashflow":
      return <CashflowPage setActiveTab={setActiveTab} />;
    case "analytics_customers_subscribers":
      return <SubscribersPage setActiveTab={setActiveTab} />;
    case "analytics_customers_leads":
      return <LeadsPage setActiveTab={setActiveTab} />;
    case "leads":
    case "leads_pipeline":
      return <LeadsPipelinePage setActiveTab={setActiveTab} />;
    case "analytics_customers_trials":
      return <TrialsPage setActiveTab={setActiveTab} />;
    case "analytics_performance_arpa":
      return <ARPAPage setActiveTab={setActiveTab} />;
    case "analytics_performance_churn":
      return <ChurnPage setActiveTab={setActiveTab} />;
    case "analytics_performance_cohorts":
      return <CohortsPage setActiveTab={setActiveTab} />;
    case "analytics_performance_map":
      return <MapPage setActiveTab={setActiveTab} />;
    case "automations":
      return <AutomationsMailPage />;
    case "settings":
    case "settings_Profile":
      return <SettingsPage defaultActiveTab="Profile" key="Profile" />;
    case "settings_System":
      return <SettingsPage defaultActiveTab="System" key="System" />;
    case "settings_Security":
      return <SettingsPage defaultActiveTab="Security" key="Security" />;
    case "settings_Billing":
      return <SettingsPage defaultActiveTab="Billing" key="Billing" />;
    case "settings_Notifications":
      return <SettingsPage defaultActiveTab="Notifications" key="Notifications" />;
    case "support":
      return <SupportPage />;
    default:
      return (
        <div className="bg-white rounded-3xl p-8 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] text-center max-w-lg mx-auto my-12 animate-in fade-in">
          <h2 className="text-xl font-bold text-slate-800 mb-2 capitalize">{activeTab.replace("-", " ")} Page</h2>
          <p className="text-slate-400 text-sm mb-6">This section is under construction.</p>
          <button onClick={() => setActiveTab("dashboard")} className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-2xl text-xs font-semibold shadow-md">
            Back to Dashboard
          </button>
        </div>
      );
  }
}
