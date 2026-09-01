import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface WizardStep4Props {
  manualCountry: string;
  setManualCountry: (val: string) => void;
  manualCity: string;
  setManualCity: (val: string) => void;
  manualProvince: string;
  setManualProvince: (val: string) => void;
  manualZip: string;
  setManualZip: (val: string) => void;
}

export default function WizardStep4({
  manualCountry,
  setManualCountry,
  manualCity,
  setManualCity,
  manualProvince,
  setManualProvince,
  manualZip,
  setManualZip
}: WizardStep4Props) {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-200">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Country *</label>
          <div className="relative">
            <select
              value={manualCountry}
              onChange={(e) => setManualCountry(e.target.value)}
              className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer"
            >
              <option value="United States">United States</option>
              <option value="Italy">Italy</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Spain">Spain</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">City *</label>
          <div className="relative">
            <select
              value={manualCity}
              onChange={(e) => setManualCity(e.target.value)}
              className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer"
            >
              <option value="Select city">Select city</option>
              <option value="Bologna">Bologna</option>
              <option value="Milano">Milano</option>
              <option value="Rome">Rome</option>
              <option value="Torino">Torino</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Province *</label>
          <div className="relative">
            <select
              value={manualProvince}
              onChange={(e) => setManualProvince(e.target.value)}
              className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer"
            >
              <option value="Select province">Select province</option>
              <option value="Bologna">Bologna</option>
              <option value="Milano">Milano</option>
              <option value="Rome">Rome</option>
              <option value="Torino">Torino</option>
              <option value="New York">New York</option>
              <option value="California">California</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">ZIP code *</label>
          <input
            type="text"
            required
            placeholder="Enter zip code"
            value={manualZip}
            onChange={(e) => setManualZip(e.target.value)}
            className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 placeholder:text-slate-300"
          />
        </div>
      </div>
    </div>
  );
}
