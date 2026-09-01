import React from "react";
import Image from "next/image";
import { Employee } from "../types";

const HomeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-slate-400">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

interface DetailHeaderProps {
  employee: Employee;
  onBack: () => void;
  onOpenEditModal: () => void;
  onOpenTerminateModal: () => void;
  activeSubTab: "basic" | "remuneration" | "activity" | "production";
  setActiveSubTab: (tab: "basic" | "remuneration" | "activity" | "production") => void;
}

export default function DetailHeader({
  employee,
  onBack,
  onOpenEditModal,
  onOpenTerminateModal,
  activeSubTab,
  setActiveSubTab
}: DetailHeaderProps) {
  return (
    <div className="flex flex-col gap-6 text-left">
      {/* Breadcrumb Header Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-1.5 hover:bg-slate-100 rounded-xl transition-colors inline-flex text-slate-500 hover:text-slate-800 cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          <h1 className="text-xl font-bold tracking-tight text-slate-800 font-sans">{employee.firstName} {employee.lastName}</h1>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold">
          <button onClick={onBack} className="p-1.5 hover:bg-slate-100 rounded-xl transition-colors inline-flex cursor-pointer"><HomeIcon /></button>
          <span className="text-slate-300">/</span>
          <span className="bg-[#eff6ff] text-[#2563eb] px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase">Salon Beauty</span>
        </div>
      </div>

      {/* Main Profile Cover Card */}
      <div className="bg-white rounded-3xl border border-[#eef2f6] shadow-[0_2px_4px_-1px_rgba(175,182,201,0.2)] flex flex-col p-6 w-full text-left">
        <div className="h-[240px] w-full rounded-2xl relative overflow-hidden">
          <Image src="/bg-main.png" alt="Cover" fill className="object-cover" unoptimized />
        </div>

        <div className="flex flex-col items-center -mt-12 relative z-10 mb-6">
          <div className="w-[100px] h-[100px] rounded-full border-4 border-white shadow-md overflow-hidden bg-slate-50 flex items-center justify-center font-bold text-2xl text-[#5e53fc] uppercase">
            {employee.firstName[0]}{employee.lastName[0]}
          </div>
          <h2 className="text-lg font-extrabold text-slate-800 mt-3 font-sans">{employee.firstName} {employee.lastName}</h2>
          <span className="text-xs text-slate-400 font-semibold">{employee.pob || "Bologna"}, Italy</span>
          <span className={`mt-2.5 px-2.5 py-0.5 rounded-full text-[9px] font-extrabold uppercase tracking-wide ${
            employee.status === "Active" ? "bg-[#dcfce7] text-[#16a34a]" : "bg-slate-100 text-slate-500"
          }`}>
            {employee.status}
          </span>
        </div>

        <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 font-semibold">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-slate-800">{employee.startDate || "May 31, 2022"}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Start Date</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold text-slate-800">{employee.contractType || "Permanent"}</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Contract Type</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button onClick={onOpenEditModal} className="px-5 py-2.5 bg-[#f2f1ff] hover:bg-[#e2dfff] text-[#5e53fc] rounded-xl text-xs font-bold transition-all cursor-pointer">Edit Employee</button>
            <button onClick={onOpenTerminateModal} className="px-5 py-2.5 bg-[#fee2e2] hover:bg-[#fecaca] text-[#dc2626] rounded-xl text-xs font-bold transition-all cursor-pointer">Terminate Contract</button>
          </div>
        </div>

        <div className="flex items-center border-b border-slate-100 mt-8 overflow-x-auto whitespace-nowrap scrollbar-none">
          {[
            { id: "basic", label: "Basic Data" },
            { id: "remuneration", label: "Remuneration" },
            { id: "activity", label: "Activity in Salon" },
            { id: "production", label: "Production" }
          ].map((tab) => (
            <button key={tab.id} onClick={() => setActiveSubTab(tab.id as any)} className={`px-6 py-3 border-b-2 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${activeSubTab === tab.id ? "border-[#5e53fc] text-[#5e53fc]" : "border-transparent text-slate-400 hover:text-slate-700"}`}>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
