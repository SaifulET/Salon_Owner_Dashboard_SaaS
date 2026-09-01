import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface WizardStep5Props {
  manualTrialPeriod: string;
  setManualTrialPeriod: (val: string) => void;
  manualInitialPlan: "Basic" | "Premium" | "Enterprise";
  setManualInitialPlan: (val: "Basic" | "Premium" | "Enterprise") => void;
}

export default function WizardStep5({
  manualTrialPeriod,
  setManualTrialPeriod,
  manualInitialPlan,
  setManualInitialPlan
}: WizardStep5Props) {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-200">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-slate-600">Trial Period</label>
        <div className="relative">
          <select
            value={manualTrialPeriod}
            onChange={(e) => setManualTrialPeriod(e.target.value)}
            className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer"
          >
            <option value="14 days">Start with 14-day trial</option>
            <option value="7 days">Start with 7-day trial</option>
            <option value="30 days">Start with 30-day trial</option>
            <option value="No trial">No trial period</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-slate-600">Initial Plan</label>
        <div className="relative">
          <select
            value={manualInitialPlan}
            onChange={(e) => setManualInitialPlan(e.target.value as any)}
            className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer"
          >
            <option value="Basic">Basic Plan (€99/month)</option>
            <option value="Premium">Premium Plan (€199/month)</option>
            <option value="Enterprise">Enterprise Plan (€299/month)</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
          </div>
        </div>
      </div>
    </div>
  );
}
