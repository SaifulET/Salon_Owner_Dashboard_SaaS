"use client";

import React, { useState } from "react";
import AnalyticsHeader from "../common/AnalyticsHeader";
import AnalyticsStatCards from "./AnalyticsStatCards";
import AnalyticsControls from "./AnalyticsControls";
import AnalyticsChartTabs from "./AnalyticsChartTabs";
import MRRChart from "./MRRChart";
import AnalyticsMovementsTable from "./AnalyticsMovementsTable";
import { PlanType, ChartMode, ChartTab, TimeRange, FilterStage } from "./types";
import { salonOptions, cityOptions } from "./mockData";

export default function AnalyticsPage({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [planType, setPlanType] = useState<PlanType>("All");
  const [timeRange, setTimeRange] = useState<TimeRange>("Monthly");
  const [chartMode, setChartMode] = useState<ChartMode>("line");
  const [activeChartTab, setActiveChartTab] = useState<ChartTab>("MRR");
  const [selectedSalon, setSelectedSalon] = useState(salonOptions[0]);
  const [selectedCity, setSelectedCity] = useState(cityOptions[0]);
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filterStage, setFilterStage] = useState<FilterStage>("root");

  const handleTabChange = (tab: ChartTab) => {
    setActiveChartTab(tab);
    if (tab === "Movements") setChartMode("bar");
    else if (tab === "Breakdown") setChartMode("line");
  };

  const handleExport = () => {
    const csvContent = "Category,Value,Percentage,Trend\nNew,€ 98,260,45,2.5%\nReactivation,€ 40,000,5,5.5%\nRenewals,€ 80,000,45,5%\nChurn,€ 60,260,5%,(2.5%)\n";
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csvContent], { type: "text/csv;charset=utf-8;" }));
    link.download = "analytics_mrr_report.csv";
    link.click();
  };

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] animate-in fade-in duration-300 font-sans pb-10">
      <AnalyticsHeader
        title="Analytics"
        setActiveTab={setActiveTab}
        onResync={() => {
          setPlanType("All");
          setSelectedSalon(salonOptions[0]);
          setSelectedCity(cityOptions[0]);
          setSelectedFilter(null);
        }}
      />
      <AnalyticsStatCards planType={planType} />
      <div className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6 w-full">
        <AnalyticsControls
          planType={planType} setPlanType={setPlanType}
          timeRange={timeRange} setTimeRange={setTimeRange}
          chartMode={chartMode} setChartMode={setChartMode}
          selectedSalon={selectedSalon} setSelectedSalon={setSelectedSalon}
          selectedCity={selectedCity} setSelectedCity={setSelectedCity}
          selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}
          isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen}
          filterStage={filterStage} setFilterStage={setFilterStage}
        />
        <AnalyticsChartTabs activeTab={activeChartTab} setActiveTab={handleTabChange} onExport={handleExport} />
        <MRRChart activeTab={activeChartTab} chartMode={chartMode} planType={planType} timeRange={timeRange} />
      </div>
      <AnalyticsMovementsTable activeTab={activeChartTab} />
    </div>
  );
}
