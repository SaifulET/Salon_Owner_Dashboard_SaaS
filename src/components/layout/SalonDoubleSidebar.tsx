import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { NavItem } from "./types";

interface SalonDoubleSidebarProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  isExpanded: boolean;
  setIsExpanded: (val: boolean) => void;
  salonSubTab: string;
  setSalonSubTab: (tab: string) => void;
  mainNavigation: NavItem[];
  secondaryNavigation: NavItem[];
  salonNavigation: NavItem[];
  renderNarrowIcon: (item: NavItem) => React.ReactNode;
}

export default function SalonDoubleSidebar({
  isOpen, setIsOpen, isExpanded, setIsExpanded, salonSubTab, setSalonSubTab,
  mainNavigation, secondaryNavigation, salonNavigation, renderNarrowIcon
}: SalonDoubleSidebarProps) {
  const renderSalonItems = () => (
    <div className="flex flex-col gap-1 mt-3.5 text-left">
      {salonNavigation.map((item) => {
        const isActive = salonSubTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => { setSalonSubTab(item.id); setIsOpen(false); }}
            className={`w-full text-left px-4 py-2 h-[44px] flex items-center rounded-xl font-sans font-normal text-[15px] leading-[20px] transition-all duration-200 ${
              isActive ? "bg-[#635BFF] text-white shadow-sm" : "text-[#29343D] hover:bg-slate-50 hover:text-slate-950"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      {isOpen && <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsOpen(false)} />}
      <aside className={`hidden lg:flex fixed top-0 bottom-0 left-0 ${isExpanded ? "w-72" : "w-20"} bg-white z-30 border-r border-[#eef2f6] flex flex-row transition-all duration-300`}>
        <div className="w-20 bg-white border-r border-[#eef2f6] flex flex-col items-center shrink-0">
          <div className="h-[63px] w-full border-b border-[#eef2f6] flex items-center justify-center shrink-0">
            <button onClick={() => setIsExpanded(!isExpanded)} className="p-2 rounded-xl text-slate-500 hover:bg-slate-50 hover:text-slate-800 transition-colors">
              <HugeiconsIcon icon={Menu01Icon} size={20} />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center py-6 justify-between w-full overflow-y-auto">
            <div className="flex flex-col items-center gap-4.5 w-full">{mainNavigation.map(renderNarrowIcon)}</div>
            <div className="flex flex-col items-center gap-4.5 w-full">{secondaryNavigation.map(renderNarrowIcon)}</div>
          </div>
        </div>
        {isExpanded && (
          <div className="w-52 bg-[#f8fafc] flex flex-col shrink-0">
            <div className="h-[63px] w-full border-b border-[#eef2f6] flex items-center px-4 shrink-0 bg-white">
              <img src="/logo.svg" alt="MatDash" className="w-[120px] h-[50px] object-contain" />
            </div>
            <div className="flex-1 pt-6 pb-6 px-3.5 overflow-y-auto">
              <span className="px-4 text-[10px] font-extrabold uppercase tracking-wider text-[#b0bac9]">Salon</span>
              {renderSalonItems()}
            </div>
          </div>
        )}
      </aside>

      <aside className={`fixed inset-y-0 left-0 w-72 bg-white flex z-50 transform lg:hidden transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="w-20 bg-white border-r border-[#eef2f6] flex flex-col items-center py-6 justify-between shrink-0">
          <div className="flex flex-col items-center gap-4.5 w-full">{mainNavigation.map(renderNarrowIcon)}</div>
          <div className="flex flex-col items-center gap-4.5 w-full">{secondaryNavigation.map(renderNarrowIcon)}</div>
        </div>
        <div className="w-52 bg-[#f8fafc] border-r border-[#eef2f6] flex flex-col py-6 px-3.5 overflow-y-auto relative text-left">
          <button onClick={() => setIsOpen(false)} className="absolute right-4 top-4 p-1.5 rounded-xl bg-white hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors shadow-sm">
            <HugeiconsIcon icon={Cancel01Icon} size={14} />
          </button>
          <div className="mt-8">
            <span className="px-4 text-[10px] font-extrabold uppercase tracking-wider text-[#b0bac9]">Salon</span>
            {renderSalonItems()}
          </div>
        </div>
      </aside>
    </>
  );
}
