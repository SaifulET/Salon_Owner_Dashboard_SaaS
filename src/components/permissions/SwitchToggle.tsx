import React from "react";

interface SwitchToggleProps {
  label: string;
  description: string;
  enabled: boolean;
  onChange: (val: boolean) => void;
}

export default function SwitchToggle({ label, description, enabled, onChange }: SwitchToggleProps) {
  return (
    <div className="flex items-start justify-between gap-4 p-4 border border-slate-50 rounded-2xl hover:bg-slate-50/35 transition-all">
      <div className="flex flex-col text-left min-w-0">
        <span className="text-xs font-bold text-slate-800 leading-snug">{label}</span>
        <span className="text-[10px] text-slate-400 font-semibold mt-1 leading-normal">{description}</span>
      </div>
      <button
        type="button"
        onClick={() => onChange(!enabled)}
        className={`w-10 h-6 rounded-full relative transition-all duration-200 shrink-0 outline-none cursor-pointer ${
          enabled ? "bg-[#5e53fc]" : "bg-slate-200"
        }`}
      >
        <span
          className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200 ${
            enabled ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}
