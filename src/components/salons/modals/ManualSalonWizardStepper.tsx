import React from "react";

interface ManualSalonWizardStepperProps {
  manualStep: number;
}

export default function ManualSalonWizardStepper({ manualStep }: ManualSalonWizardStepperProps) {
  const stepLabels = ["General Info", "Ownership", "Contact", "Provenance", "Subscription"];

  return (
    <div className="flex items-center justify-between px-2 mb-4 relative mt-4">
      <div className="absolute left-6 right-6 top-[15px] h-[2px] bg-slate-100 -z-0" />
      <div
        className="absolute left-6 top-[15px] h-[2px] bg-[#5e53fc] transition-all duration-350 -z-0"
        style={{ width: `${((Math.min(manualStep, 5) - 1) / 4) * 100}%` }}
      />
      {[1, 2, 3, 4, 5].map((stepNum) => (
        <div key={stepNum} className="flex flex-col items-center relative z-10 flex-1">
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-350 ${
              manualStep > stepNum
                ? "bg-[#5e53fc] text-white"
                : manualStep === stepNum
                ? "bg-white border-2 border-[#5e53fc] text-[#5e53fc] shadow-[0_0_12px_rgba(94,83,252,0.15)]"
                : "bg-white border-2 border-slate-200 text-slate-400"
            }`}
          >
            {manualStep > stepNum ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            ) : (
              stepNum
            )}
          </div>
          <span
            className={`text-[10px] font-bold mt-2 whitespace-nowrap transition-colors duration-300 ${
              manualStep === stepNum ? "text-slate-800 font-extrabold" : "text-slate-450 font-semibold"
            }`}
          >
            {stepLabels[stepNum - 1]}
          </span>
        </div>
      ))}
    </div>
  );
}
