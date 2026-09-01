import React from "react";
import { EditIcon } from "../icons/SalonIcons";

interface ActivityCardProps {
  primaryAteco: string;
  secondaryAteco: string;
  corporateObject: string;
  setIsActivityModalOpen: (open: boolean) => void;
}

export default function ActivityCard({
  primaryAteco,
  secondaryAteco,
  corporateObject,
  setIsActivityModalOpen
}: ActivityCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-800 font-sans">Activity</h3>
        <button
          onClick={() => setIsActivityModalOpen(true)}
          className="text-[#5e53fc] hover:underline text-xs font-bold flex items-center gap-1 cursor-pointer"
        >
          <EditIcon />
          <span>Edit</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Primary ATECO Code</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{primaryAteco}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Secondary ATECO Codes</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{secondaryAteco}</span>
        </div>
        <div className="flex flex-col col-span-1 md:col-span-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Description of Corporate Object</span>
          <span className="text-xs font-semibold text-slate-650 mt-1 leading-relaxed">
            {corporateObject}
          </span>
        </div>
      </div>
    </div>
  );
}
