"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { LayoutProps } from "./types";

export default function Layout({
  children,
  activeTab,
  setActiveTab,
  selectedSalonId,
  setSelectedSalonId,
  salonSubTab,
  setSalonSubTab,
  impersonatingSalon,
  setImpersonatingSalon
}: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="min-h-screen bg-[#f4f7fc] text-slate-800 font-sans">
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedSalonId={selectedSalonId}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
        isSidebarExpanded={isSidebarExpanded}
      />

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedSalonId={selectedSalonId}
        setSelectedSalonId={setSelectedSalonId}
        salonSubTab={salonSubTab}
        setSalonSubTab={setSalonSubTab}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
        isExpanded={isSidebarExpanded}
        setIsExpanded={setIsSidebarExpanded}
      />

      <div
        className={`flex flex-col min-h-screen transition-all duration-300 ${
          isSidebarExpanded
            ? selectedSalonId !== null
              ? "lg:pl-72"
              : "lg:pl-[280px]"
            : "lg:pl-20"
        }`}
      >
        <main className="flex-1 px-6 pb-12 overflow-y-auto transition-all duration-300 pt-[87px]">
          <div className="max-w-[1600px] mx-auto w-full flex flex-col gap-6">
            {impersonatingSalon && (
              <div className="bg-[#fff3cd] border border-[#ffeeba] text-[#856404] px-6 py-4 rounded-2xl flex items-center justify-between shadow-sm animate-in slide-in-from-top-4 duration-200 w-full mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-amber-200 flex items-center justify-center shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <span className="text-sm font-semibold">
                    Currently Impersonating: <strong className="text-amber-950 font-bold">{impersonatingSalon}</strong>
                  </span>
                </div>
                <button
                  onClick={() => setImpersonatingSalon(null)}
                  className="text-xs font-bold bg-amber-950/10 hover:bg-amber-950/20 text-amber-950 px-3.5 py-1.5 rounded-xl transition-all cursor-pointer"
                >
                  End Session
                </button>
              </div>
            )}
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
