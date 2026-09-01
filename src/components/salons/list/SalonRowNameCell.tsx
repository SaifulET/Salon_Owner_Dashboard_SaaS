import React from "react";
import { Salon } from "../types";
import { CrownIcon, PurpleStarIcon } from "../icons/SalonIcons";

interface SalonRowNameCellProps {
  salon: Salon;
  setSelectedSalonId: (id: string | null) => void;
}

export default function SalonRowNameCell({ salon, setSelectedSalonId }: SalonRowNameCellProps) {
  return (
    <div className="flex items-center gap-3.5">
      <div
        onClick={() => setSelectedSalonId(salon.id)}
        className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-100 to-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs uppercase flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity"
      >
        {salon.name.charAt(0)}
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            onClick={() => setSelectedSalonId(salon.id)}
            className="text-sm font-bold text-slate-800 tracking-tight leading-tight cursor-pointer hover:text-[#5e53fc] hover:underline transition-colors"
          >
            {salon.name}
          </span>
          <span className="text-[9px] font-bold tracking-wider text-slate-400 bg-slate-50 border border-slate-100 px-1.5 py-0.5 rounded uppercase">
            {salon.tag}
          </span>
          {salon.vip && (
            <div className="flex items-center gap-1 bg-[#fffbe6] border border-[#ffe58f] text-[#d4b106] px-1.5 py-0.5 rounded-full text-[9px] font-bold">
              <CrownIcon />
              <span>VIP Customer</span>
            </div>
          )}
          {salon.enterprise && (
            <div className="flex items-center gap-1 bg-[#f9f8ff] border border-[#e2dfff] text-[#5e53fc] px-1.5 py-0.5 rounded-full text-[9px] font-bold">
              <PurpleStarIcon />
              <span>Enterprise Customer</span>
            </div>
          )}
        </div>
        <span className="text-xs text-slate-400 mt-1 font-semibold">
          {salon.manager} • {salon.city}
        </span>
        <span className="text-xs text-[#a1abb9] font-medium leading-none mt-0.5">
          {salon.email}
        </span>
      </div>
    </div>
  );
}
