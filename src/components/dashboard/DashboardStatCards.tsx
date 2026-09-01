import React from "react";
import StatCard from "../common/StatCard";

interface DashboardStatCardsProps {
  setActiveModal: (modal: "sales" | "subscriptions" | "leads" | "salons" | "churn") => void;
}

export default function DashboardStatCards({ setActiveModal }: DashboardStatCardsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      <StatCard
        title="Monthly Processed Sales"
        value="€ 23,850"
        subtext="from last month"
        trendType="up"
        trendValue="+12.5%"
        icon="/monthlyProcessedSalesIcon.svg"
        iconBgClass="bg-[#f0efff]"
        iconColor="#5e53fc"
        onViewClick={() => setActiveModal("sales")}
        bgGradient="linear-gradient(180deg, rgba(99, 91, 255, 0.12) 0%, rgba(99, 91, 255, 0.03) 100%), #FFFFFF"
      />
      <StatCard
        title="Total Active Subscriptions"
        value="44"
        subtext="from last month"
        trendType="up"
        trendValue="+10%"
        icon="/TotalActiveSubscriptions.svg"
        iconBgClass="bg-[#e6fcf9]"
        iconColor="#10b981"
        onViewClick={() => setActiveModal("subscriptions")}
        bgGradient="linear-gradient(180deg, rgba(22, 205, 199, 0.13) 0%, rgba(22, 205, 199, 0.03) 100%), #FFFFFF"
      />
      <StatCard
        title="New Saas Leads"
        value="10"
        subtext="14 total leads in pipeline"
        trendType="neutral"
        icon="/NewSaasLeads.svg"
        iconBgClass="bg-[#eefcf2]"
        iconColor="#059669"
        onViewClick={() => setActiveModal("leads")}
        bgGradient="linear-gradient(180deg, rgba(54, 199, 108, 0.13) 0%, rgba(54, 199, 108, 0.03) 100%), #FFFFFF"
      />
      <StatCard
        title="New Salons"
        value="+8"
        subtext="from last month"
        trendType="up"
        trendValue="+18.5%"
        icon="/NewSalons.svg"
        iconBgClass="bg-[#fff9eb]"
        iconColor="#f59e0b"
        onViewClick={() => setActiveModal("salons")}
        bgGradient="linear-gradient(180deg, rgba(248, 194, 9, 0.13) 0%, rgba(248, 194, 9, 0.03) 100%), #FFFFFF"
      />
      <StatCard
        title="Monthly Churn Rate"
        value="7%"
        subtext="Last month Churn Rate: 5%"
        trendType="neutral"
        icon="/MonthlyChumRate.svg"
        iconBgClass="bg-[#fff0f3]"
        iconColor="#f43f5e"
        onViewClick={() => setActiveModal("churn")}
        bgGradient="linear-gradient(180deg, rgba(255, 102, 146, 0.13) 0%, rgba(255, 102, 146, 0.03) 100%), #FFFFFF"
      />
    </div>
  );
}
