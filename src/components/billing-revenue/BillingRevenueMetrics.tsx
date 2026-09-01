import React from "react";
import { RevenueIcon, CardIcon, StackIcon, FailedIcon } from "./BillingRevenueIcons";

interface BillingRevenueMetricsProps {
  onViewMetric: (title: string) => void;
}

export default function BillingRevenueMetrics({ onViewMetric }: BillingRevenueMetricsProps) {
  const metricCards = [
    { title: "2025 Revenue", value: "47.850,00 €", note: "+20% from same period last year", icon: RevenueIcon, bg: "bg-[#eafffb]", iconBg: "bg-[#24c96b]", tone: "text-[#263241]" },
    { title: "Monthly Recurring Revenue", value: "23.925,00 €", note: "+11.6% from last month", icon: CardIcon, bg: "bg-[#f5f3ff]", iconBg: "bg-[#6a5cff]", tone: "text-[#263241]" },
    { title: "Total Active Subscriptions", value: "44", note: "+10% from last month", icon: StackIcon, bg: "bg-[#e7fbfb]", iconBg: "bg-[#00c9c9]", tone: "text-[#263241]" },
    { title: "Failed Payments", value: "8", note: "8 pending retry", icon: FailedIcon, bg: "bg-[#fff0f5]", iconBg: "bg-[#ff5f87]", tone: "text-[#ff4f82]" }
  ];

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
      {metricCards.map((card) => {
        const Icon = card.icon;
        return (
          <div key={card.title} className={`${card.bg} min-h-[172px] rounded-xl p-6`}>
            <div className={`${card.iconBg} mb-5 flex h-9 w-9 items-center justify-center rounded-lg text-white`}>
              <Icon />
            </div>
            <div className="text-xs font-bold text-[#253143]">{card.title}</div>
            <div className={`mt-4 text-3xl font-extrabold ${card.tone}`}>{card.value}</div>
            <div className="mt-2 text-[11px] font-semibold text-[#263241]">{card.note}</div>
            <button
              onClick={() => onViewMetric(card.title)}
              className="mt-5 rounded-md bg-white hover:bg-slate-50 px-5 py-2 text-[11px] font-bold text-[#40516a] shadow-[0_5px_12px_rgba(17,31,56,0.08)] cursor-pointer"
            >
              View All
            </button>
          </div>
        );
      })}
    </div>
  );
}
