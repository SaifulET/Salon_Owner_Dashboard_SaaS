import React from "react";
import { PlusIcon } from "../icons/SalonIcons";
import LocationCard, { Location } from "./LocationCard";

interface LocationsTabProps {
  locations: Location[];
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
  setIsLocationModalOpen: (open: boolean) => void;
}

export default function LocationsTab({
  locations,
  setLocations,
  setIsLocationModalOpen
}: LocationsTabProps) {
  const hqLocations = locations.filter(l => l.isHQ);
  const secondaryLocations = locations.filter(l => !l.isHQ);

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-200">
      {/* Headquarters block */}
      <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-800 font-sans">Company Headquarters</h3>
          <button
            onClick={() => setIsLocationModalOpen(true)}
            className="px-4 py-2 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            <PlusIcon />
            <span>Add Location</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {hqLocations.map((loc) => (
            <LocationCard key={loc.id} location={loc} />
          ))}
        </div>
      </div>

      {/* Secondary Branches block */}
      <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6">
        <div className="border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-800 font-sans">Secondary Branches</h3>
        </div>

        {secondaryLocations.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center py-12">
            <div className="w-16 h-16 rounded-2xl bg-slate-50 text-slate-300 flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="9" y1="3" x2="9" y2="21" />
              </svg>
            </div>
            <h4 className="font-bold text-slate-800 text-sm">No registered branch offices</h4>
            <p className="text-slate-400 text-xs mt-1 mb-6">Additional operating locations will be displayed here</p>
            <button
              onClick={() => setIsLocationModalOpen(true)}
              className="px-5 py-2.5 bg-[#f2f1ff] hover:bg-[#e2dfff] text-[#5e53fc] rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              Add First Secondary Branch
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryLocations.map((loc) => (
              <LocationCard
                key={loc.id}
                location={loc}
                onDelete={(id) => setLocations(prev => prev.filter(l => l.id !== id))}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
