import React from "react";
import { TrashIcon } from "../icons/SalonIcons";

export interface Location {
  id: string;
  name: string;
  address: string;
  zip: string;
  city: string;
  province: string;
  country: string;
  registrationDate: string;
  isHQ: boolean;
}

interface LocationCardProps {
  location: Location;
  onDelete?: (id: string) => void;
}

export default function LocationCard({ location, onDelete }: LocationCardProps) {
  return (
    <div className="border border-slate-100 rounded-2xl p-5 bg-slate-50/10 flex flex-col relative group">
      <div className="flex justify-between items-center mb-3">
        <span className="text-xs font-bold text-slate-800">{location.name}</span>
        {location.isHQ ? (
          <span className="text-[8px] bg-indigo-50 text-[#5e53fc] px-1.5 py-0.5 rounded font-extrabold uppercase">
            Principal
          </span>
        ) : onDelete ? (
          <button
            onClick={() => onDelete(location.id)}
            className="p-1.5 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
          >
            <TrashIcon />
          </button>
        ) : null}
      </div>
      <div className="grid grid-cols-2 gap-y-3 text-xs mt-1 font-semibold">
        <div className="flex flex-col col-span-2">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Address</span>
          <span className="text-slate-700 mt-0.5">{location.address}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">CAP</span>
          <span className="text-slate-700 mt-0.5">{location.zip}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">City</span>
          <span className="text-slate-700 mt-0.5">{location.city}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Province</span>
          <span className="text-slate-700 mt-0.5">{location.province}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Nation</span>
          <span className="text-slate-700 mt-0.5">{location.country}</span>
        </div>
        {location.registrationDate && (
          <div className="flex flex-col col-span-2">
            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Registration Date</span>
            <span className="text-slate-700 mt-0.5">{location.registrationDate}</span>
          </div>
        )}
      </div>
    </div>
  );
}
