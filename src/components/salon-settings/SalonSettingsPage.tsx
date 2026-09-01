"use client";

import React, { useState } from "react";
import SalonSettingsHeader from "./SalonSettingsHeader";
import SalonSpecificSettingsSection from "./SalonSpecificSettingsSection";
import SalonSecuritySettingsSection from "./SalonSecuritySettingsSection";

interface Salon {
  id: string;
  name: string;
  tag: string;
  manager: string;
  city: string;
  region: string;
  email: string;
  status: "Active" | "Trial" | "Cancelled" | "Leads" | "Past Due" | "Expired";
  plan: "Basic" | "Premium" | "Enterprise";
  revenue: string;
  ltv: string;
  lastActive: string;
  hasTicket: boolean;
  vip?: boolean;
  enterprise?: boolean;
}

interface SalonSettingsPageProps {
  salon: Salon;
  onBack: () => void;
}

export default function SalonSettingsPage({ salon, onBack }: SalonSettingsPageProps) {
  const [saveStatus, setSaveStatus] = useState<"idle" | "saving" | "saved">("idle");
  const [settings, setSettings] = useState<Record<string, boolean>>({
    advancedAnalytics: true,
    socialMediaTools: true,
    multiLocationSupport: true,
    apiAccess: true,
    whiteLabelBranding: true,
    twoFactorAuth: false,
    dataBackup: true
  });

  const toggleSetting = (key: string) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveChanges = () => {
    setSaveStatus("saving");
    setTimeout(() => {
      setSaveStatus("saved");
      setTimeout(() => setSaveStatus("idle"), 2000);
    }, 1000);
  };

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] animate-in fade-in duration-300 font-sans">
      <SalonSettingsHeader salonName={salon.name} onBack={onBack} />

      <div className="bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col p-6 w-full">
        <h2 className="text-base font-bold text-[#1f2937] mb-6">Settings</h2>

        <div className="border border-[#eef2f6] rounded-xl p-6 flex flex-col gap-6 w-full bg-white">
          <SalonSpecificSettingsSection settings={settings} onToggle={toggleSetting} />
          <hr className="border-[#eef2f6]" />
          <SalonSecuritySettingsSection settings={settings} onToggle={toggleSetting} />
        </div>

        <div className="flex items-center justify-end gap-3 mt-8">
          <button onClick={onBack} className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer">
            Cancel
          </button>
          <button onClick={handleSaveChanges} disabled={saveStatus === "saving"} className="px-6 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-100 disabled:opacity-50 cursor-pointer">
            {saveStatus === "saving" ? "Saving..." : saveStatus === "saved" ? "Saved!" : "Save Changes"}
          </button>
        </div>
      </div>
    </div>
  );
}
