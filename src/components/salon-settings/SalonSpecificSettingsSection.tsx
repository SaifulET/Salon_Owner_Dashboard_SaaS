import React from "react";

interface SalonSpecificSettingsSectionProps {
  settings: Record<string, boolean>;
  onToggle: (id: string) => void;
}

export default function SalonSpecificSettingsSection({ settings, onToggle }: SalonSpecificSettingsSectionProps) {
  const items = [
    { id: "advancedAnalytics", label: "Advanced Analytics", desc: "Enable detailed reporting and analytics" },
    { id: "socialMediaTools", label: "Social Media Tools", desc: "Social media integration and posting" },
    { id: "multiLocationSupport", label: "Multi-location Support", desc: "Manage multiple salon locations" },
    { id: "apiAccess", label: "API Access", desc: "Allow third-party integrations" },
    { id: "whiteLabelBranding", label: "White Label Branding", desc: "Custom branding and logos" }
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
      <h3 className="text-base font-bold text-[#2c3a50]">Salon-Specific Settings</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
        {items.map((item) => {
          const isChecked = settings[item.id];
          return (
            <div key={item.id} className="flex items-center justify-between gap-4">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-slate-850">{item.label}</span>
                <span className="text-[10px] text-slate-400 font-medium leading-normal">{item.desc}</span>
              </div>
              <button
                type="button"
                onClick={() => onToggle(item.id)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                  isChecked ? "bg-[#5e53fc]" : "bg-slate-200"
                }`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isChecked ? "translate-x-5" : "translate-x-0"}`} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
