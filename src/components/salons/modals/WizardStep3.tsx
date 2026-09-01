import React from "react";

interface WizardStep3Props {
  manualEmail: string;
  setManualEmail: (val: string) => void;
  manualPhone: string;
  setManualPhone: (val: string) => void;
}

export default function WizardStep3({
  manualEmail,
  setManualEmail,
  manualPhone,
  setManualPhone
}: WizardStep3Props) {
  return (
    <div className="flex flex-col gap-4 animate-in fade-in duration-200">
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-slate-600">Email address *</label>
        <input
          type="email"
          required
          placeholder="Enter email address"
          value={manualEmail}
          onChange={(e) => setManualEmail(e.target.value)}
          className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 placeholder:text-slate-300"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-bold text-slate-600">Phone Number *</label>
        <input
          type="tel"
          required
          placeholder="Enter phone number"
          value={manualPhone}
          onChange={(e) => setManualPhone(e.target.value)}
          className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 placeholder:text-slate-300"
        />
      </div>
    </div>
  );
}
