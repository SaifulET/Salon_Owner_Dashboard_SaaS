import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Search01Icon } from "@hugeicons/core-free-icons";

interface StaffToolbarProps {
  filterTab: "hired" | "out" | "all";
  setFilterTab: (tab: "hired" | "out" | "all") => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onAddUser: () => void;
}

export default function StaffToolbar({
  filterTab,
  setFilterTab,
  searchQuery,
  setSearchQuery,
  onAddUser
}: StaffToolbarProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 text-left text-xs font-semibold">
      {/* Tab Selectors */}
      <div className="flex bg-slate-50 p-1 rounded-xl w-fit">
        {[
          { id: "hired", label: "Currently hired" },
          { id: "out", label: "Out of team" },
          { id: "all", label: "All" }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setFilterTab(tab.id as any)}
            className={`px-4 py-2 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${
              filterTab === tab.id
                ? "bg-white text-slate-800 shadow-sm"
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search and Action Button */}
      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:w-64">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-9 pr-4 border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl text-xs font-semibold text-slate-700"
          />
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <HugeiconsIcon icon={Search01Icon} size={14} />
          </div>
        </div>

        <button
          onClick={onAddUser}
          className="h-10 px-5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-100 flex items-center gap-2 cursor-pointer shrink-0"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add User
        </button>
      </div>
    </div>
  );
}
