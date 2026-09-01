import React from "react";

interface SalonSecuritySettingsSectionProps {
  settings: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export default function SalonSecuritySettingsSection({ settings, onToggle }: SalonSecuritySettingsSectionProps) {
  const is2faChecked = settings["twoFactorAuth"];
  const isBackupChecked = settings["dataBackup"];

  return (
    <div className="flex flex-col gap-6 w-full">
      <h3 className="text-base font-bold text-[#2c3a50]">Data & Security</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-slate-850">Two-Factor Authentication</span>
            <span className="text-[10px] text-slate-400 font-medium leading-normal">Require 2FA for all users</span>
          </div>
          <button
            type="button"
            onClick={() => onToggle("twoFactorAuth")}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              is2faChecked ? "bg-[#5e53fc]" : "bg-slate-200"
            }`}
          >
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${is2faChecked ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        </div>

        <div className="hidden md:block" />

        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-slate-850">Data Backup</span>
            <span className="text-[10px] text-slate-400 font-medium leading-normal">Daily automated backups</span>
          </div>
          <button
            type="button"
            onClick={() => onToggle("dataBackup")}
            className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
              isBackupChecked ? "bg-[#5e53fc]" : "bg-slate-200"
            }`}
          >
            <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isBackupChecked ? "translate-x-5" : "translate-x-0"}`} />
          </button>
        </div>
      </div>
    </div>
  );
}
