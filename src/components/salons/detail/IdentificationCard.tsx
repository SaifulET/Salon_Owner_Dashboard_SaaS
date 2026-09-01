import React from "react";
import { EditIcon } from "../icons/SalonIcons";
import { Salon } from "../types";

interface IdentificationCardProps {
  salon: Salon;
  editBusinessType: string;
  editVtaNumber: string;
  setIsEditModalOpen: (open: boolean) => void;
}

export default function IdentificationCard({
  salon,
  editBusinessType,
  editVtaNumber,
  setIsEditModalOpen
}: IdentificationCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-800 font-sans">Identification Data</h3>
        <button
          onClick={() => setIsEditModalOpen(true)}
          className="text-[#5e53fc] hover:underline text-xs font-bold flex items-center gap-1 cursor-pointer"
        >
          <EditIcon />
          <span>Edit</span>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-y-4 gap-x-6">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company Name</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{salon.name} S.R.L.</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Legal Form</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{editBusinessType}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">VAT number</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{editVtaNumber}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company Tax Code</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{editVtaNumber}</span>
        </div>
        <div className="flex flex-col col-span-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PEC</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">info@beautywellnesscenter.pec.it</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">SDI Recipient Code</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">BWC2023</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">REA Number</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">BO-3344556</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Chamber of Commerce Office</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">Bologna</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date of Constitution</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">14/03/2020</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Term</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">Indefinite period</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Owner</span>
          <span className="text-xs font-semibold text-slate-700 mt-1">{salon.manager}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Status</span>
          <span className="text-xs font-semibold text-emerald-600 mt-1 flex items-center gap-1.5 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Active
          </span>
        </div>
      </div>
    </div>
  );
}
