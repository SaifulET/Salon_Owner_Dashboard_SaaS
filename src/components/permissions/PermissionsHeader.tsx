import React from "react";

interface PermissionsHeaderProps {
  employeeName: string;
  onBack: () => void;
}

export default function PermissionsHeader({ employeeName, onBack }: PermissionsHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-1.5 hover:bg-slate-100 rounded-xl transition-colors inline-flex text-slate-500 hover:text-slate-800 cursor-pointer"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        <h1 className="text-xl font-bold tracking-tight text-slate-800 font-sans">
          {employeeName} (Permissions)
        </h1>
      </div>

      <div className="flex items-center gap-2 text-xs font-semibold">
        <button onClick={onBack} className="p-1.5 hover:bg-slate-100 rounded-xl transition-colors inline-flex cursor-pointer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
          </svg>
        </button>
        <span className="text-slate-300">/</span>
        <button onClick={onBack} className="text-[#5e53fc] hover:underline cursor-pointer">
          Salon Beauty
        </button>
      </div>
    </div>
  );
}
