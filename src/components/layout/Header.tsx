"use client";

import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon, BellIcon, Menu01Icon } from "@hugeicons/core-free-icons";
import { HeaderProps } from "./types";
import HeaderProfileDropdown from "./HeaderProfileDropdown";

export default function Header({
  activeTab,
  setActiveTab,
  selectedSalonId,
  toggleSidebar,
  isSidebarExpanded = true
}: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <header className={`fixed top-0 right-0 left-0 h-[63px] bg-white border-b border-[#eef2f6] flex items-center justify-between px-6 md:px-8 z-40 shadow-[0_2px_10px_rgba(0,0,0,0.01)] transition-all duration-300 ${
      isSidebarExpanded
        ? selectedSalonId !== null ? "lg:left-72" : "lg:left-[280px]"
        : "lg:left-20"
    }`}>
      {/* Brand/Logo & Search Wrapper */}
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <button
          onClick={toggleSidebar}
          className="p-2 -ml-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 lg:hidden transition-colors"
        >
          <HugeiconsIcon icon={Menu01Icon} size={22} />
        </button>

        <div className="relative w-full hidden md:block max-w-sm">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <HugeiconsIcon icon={Search01Icon} size={18} className="text-[#a0aec0]" />
          </div>
          <input
            type="text"
            placeholder="Search in salons"
            className="w-full bg-[#f8fafc] text-slate-700 placeholder-[#a0aec0] text-sm rounded-2xl pl-11 pr-4 py-2.5 border border-transparent focus:bg-white focus:border-[#5e53fc] focus:outline-none transition-all duration-200"
          />
        </div>
      </div>

      {/* Header Actions */}
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 md:hidden transition-colors">
          <HugeiconsIcon icon={Search01Icon} size={20} />
        </button>

        <button className="p-2.5 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors relative">
          <HugeiconsIcon icon={BellIcon} size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#5e53fc]" />
        </button>

        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-1.5 focus:outline-none group p-1 rounded-full hover:bg-slate-50 transition-colors"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-slate-100 shadow-sm relative bg-indigo-50 flex items-center justify-center">
              <img src="/avatar.png" alt="Admin Avatar" className="w-full h-full object-cover" />
            </div>
          </button>

          <HeaderProfileDropdown
            isOpen={isProfileOpen}
            onClose={() => setIsProfileOpen(false)}
            onNavigate={setActiveTab}
          />
        </div>
      </div>
    </header>
  );
}
