"use client";

import React from "react";
import SalonActivityHeader from "./SalonActivityHeader";
import SalonActivityItem from "./SalonActivityItem";
import { initialSalonActivities } from "./mockData";

interface Salon {
  id: string;
  name: string;
  tag: string;
  manager: string;
  city: string;
  region: string;
  email: string;
  status: "Active" | "Trial" | "Cancelled" | "Leads" | "Past Due" | "Expired";
  plan: "Basic" | "Premium" | "Enterprise";
  revenue: string;
  ltv: string;
  lastActive: string;
  hasTicket: boolean;
  vip?: boolean;
  enterprise?: boolean;
}

interface SalonActivityPageProps {
  salon: Salon;
  onBack: () => void;
}

export default function SalonActivityPage({ salon, onBack }: SalonActivityPageProps) {
  const activities = initialSalonActivities;

  const handleExport = () => {
    const csvContent = `Type,Title,Description,Timestamp,Performer\n` + activities.map((a) => `${a.type},${a.title},${a.description},"${a.timestamp}",${a.performer}`).join("\n");
    const element = document.createElement("a");
    element.href = URL.createObjectURL(new Blob([csvContent], { type: "text/csv" }));
    element.download = "salon_activity_log.csv";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300 w-full text-left font-sans">
      <SalonActivityHeader salonName={salon.name} onBack={onBack} />

      <div className="bg-white rounded-3xl border border-[#eef2f6] shadow-[0_2px_4px_-1px_rgba(175,182,201,0.08)] flex flex-col p-8 w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-800">Activity Log</h2>
          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2.5 bg-[#f2f1ff] hover:bg-[#e4e2ff] text-[#5e53fc] border border-[#e2dfff] rounded-2xl text-xs font-semibold transition-all shadow-sm cursor-pointer"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Export Data</span>
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {activities.map((act, index) => (
            <SalonActivityItem key={index} act={act} />
          ))}
        </div>
      </div>
    </div>
  );
}
