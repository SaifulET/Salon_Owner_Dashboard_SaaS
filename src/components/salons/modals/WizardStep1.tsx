import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface WizardStep1Props {
  manualSalonName: string;
  setManualSalonName: (val: string) => void;
  manualBusinessType: string;
  setManualBusinessType: (val: string) => void;
  manualVtaNumber: string;
  setManualVtaNumber: (val: string) => void;
  manualEmployeeCount: string;
  setManualEmployeeCount: (val: string) => void;
}

export default function WizardStep1({
  manualSalonName,
  setManualSalonName,
  manualBusinessType,
  setManualBusinessType,
  manualVtaNumber,
  setManualVtaNumber,
  manualEmployeeCount,
  setManualEmployeeCount
}: WizardStep1Props) {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-200">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Salon Name *</label>
          <input
            type="text"
            required
            placeholder="Enter salon name"
            value={manualSalonName}
            onChange={(e) => setManualSalonName(e.target.value)}
            className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 placeholder:text-slate-300"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Business Type</label>
          <div className="relative">
            <select
              value={manualBusinessType}
              onChange={(e) => setManualBusinessType(e.target.value)}
              className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer"
            >
              <option value="Sole Proprietorship">Sole Proprietorship</option>
              <option value="SRL">SRL</option>
              <option value="SPA">SPA</option>
              <option value="LLC">LLC</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">VTA Number *</label>
          <input
            type="text"
            required
            placeholder="Enter VTA number"
            value={manualVtaNumber}
            onChange={(e) => setManualVtaNumber(e.target.value)}
            className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 placeholder:text-slate-300"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Number of Employees</label>
          <div className="relative">
            <select
              value={manualEmployeeCount}
              onChange={(e) => setManualEmployeeCount(e.target.value)}
              className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer"
            >
              <option value="1-5">1-5</option>
              <option value="6-10">6-10</option>
              <option value="11-20">11-20</option>
              <option value="20+">20+</option>
              <option value="10">10</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
