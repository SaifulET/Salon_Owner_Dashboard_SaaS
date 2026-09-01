"use client";

import React, { useState } from "react";
import DashboardHeader from "./DashboardHeader";
import DashboardStatCards from "./DashboardStatCards";
import DashboardRevenueChart from "./DashboardRevenueChart";
import DashboardCriticalAlerts from "./DashboardCriticalAlerts";
import DashboardTickets from "./DashboardTickets";
import RecentActivitySection from "../common/RecentActivitySection";
import AnalyticsModals from "../analytics/AnalyticsModals";
import { mockDashboardActivities } from "./mockData";

interface DashboardPageProps {
  onViewAllActivities: () => void;
  onNavigate?: (tab: string) => void;
  onViewSalon?: (id: string) => void;
}

export default function DashboardPage({ onViewAllActivities, onNavigate, onViewSalon }: DashboardPageProps) {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [activeModal, setActiveModal] = useState<"sales" | "subscriptions" | "leads" | "salons" | "churn" | null>(null);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] animate-in fade-in slide-in-from-bottom-4 duration-300">
      <DashboardHeader isRefreshing={isRefreshing} onRefresh={handleRefresh} onNavigate={onNavigate} />
      <DashboardStatCards setActiveModal={setActiveModal} />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <DashboardRevenueChart />
        <div>
          <RecentActivitySection activities={mockDashboardActivities} onViewAllClick={onViewAllActivities} />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <DashboardCriticalAlerts onNavigate={onNavigate} onViewSalon={onViewSalon} />
        <DashboardTickets onNavigate={onNavigate} onViewSalon={onViewSalon} />
      </div>

      <AnalyticsModals
        isOpen={activeModal !== null}
        type={activeModal}
        onClose={() => setActiveModal(null)}
        onNavigate={onNavigate || (() => {})}
      />
    </div>
  );
}
