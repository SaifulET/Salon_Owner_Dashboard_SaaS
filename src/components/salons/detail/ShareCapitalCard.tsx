import React from "react";
import { EditIcon } from "../icons/SalonIcons";

interface ShareCapitalCardProps {
  subscribedCapital: string;
  paidUpCapital: string;
  companyDuration: string;
  shareDivision: string;
  setIsShareCapitalModalOpen: (open: boolean) => void;
}

export default function ShareCapitalCard({
  subscribedCapital,
  paidUpCapital,
  companyDuration,
  shareDivision,
  setIsShareCapitalModalOpen
}: ShareCapitalCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-800 font-sans">Share Capital</h3>
        <button
          onClick={() => setIsShareCapitalModalOpen(true)}
          className="text-[#5e53fc] hover:underline text-xs font-bold flex items-center gap-1 cursor-pointer"
        >
          <EditIcon />
          <span>Edit</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Subscribed Capital</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{subscribedCapital}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Paid-up Capital</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{paidUpCapital}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company Duration</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{companyDuration}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Share Division</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{shareDivision}</span>
        </div>
      </div>
    </div>
  );
}
