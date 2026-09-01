import React, { useState } from "react";
import { PipelineStage } from "./types";
import { CustomSwitch } from "./icons";
import NotificationPreviewCard from "./NotificationPreviewCard";

interface NotificationEditPanelProps {
  stage: PipelineStage;
  onUpdateSettings: (settings: Partial<PipelineStage["emailSettings"]>) => void;
  onBack: () => void;
}

export default function NotificationEditPanel({ stage, onUpdateSettings, onBack }: NotificationEditPanelProps) {
  const [activeTab, setActiveTab] = useState<"Lead" | "Admin">("Lead");
  const settings = stage.emailSettings;

  return (
    <section className="relative w-full rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] font-sans border border-[#E0E6EB]">
      <div className="flex items-center justify-between border-b border-[#E0E6EB] pb-4 mb-6">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors cursor-pointer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 19l-7-7 7-7" /></svg>
          </button>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold text-[#29343D]">Notification Settings</h3>
            <div className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${stage.badgeBg}`}>{stage.label}</div>
          </div>
        </div>
        <button type="button" onClick={onBack} className="px-5 py-2 bg-[#635BFF] text-white text-xs font-semibold rounded-lg hover:bg-[#4d42eb] transition-colors cursor-pointer">
          Save & Return
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full text-left">
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="flex border-b border-[#E0E6EB] h-[40px] items-center gap-6">
            {(["Lead", "Admin"] as const).map((tab) => (
              <button key={tab} type="button" onClick={() => setActiveTab(tab)} className={`h-full px-2 text-[15px] font-bold transition-all relative border-b-2 flex items-center cursor-pointer ${activeTab === tab ? "border-[#635BFF] text-[#635BFF]" : "border-transparent text-[#98A4AE] hover:text-[#29343D]"}`}>
                {tab}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 text-xs font-sans">
            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-[#98A4AE]">Send email</label>
              <div className="flex items-center gap-2 font-sans">
                <select value={settings.delayAmount} onChange={(e) => onUpdateSettings({ delayAmount: e.target.value })} className="w-16 h-9 rounded-lg border border-[#E0E6EB] bg-white px-2 text-[13px] text-[#29343D] focus:border-[#635BFF] outline-none">
                  {["1", "2", "3", "5", "10", "15", "30", "45", "60"].map((n) => <option key={n} value={n}>{n}</option>)}
                </select>
                <select value={settings.delayUnit} onChange={(e) => onUpdateSettings({ delayUnit: e.target.value as any })} className="w-28 h-9 rounded-lg border border-[#E0E6EB] bg-white px-3 text-[13px] text-[#29343D] focus:border-[#635BFF] outline-none">
                  {["Minutes", "Hours", "Days"].map((u) => <option key={u} value={u}>{u}</option>)}
                </select>
                <span className="text-[13px] text-[#98A4AE] font-medium ml-1">after being added to stage</span>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-[#98A4AE]">Subject *</label>
              <input type="text" value={settings.subject} onChange={(e) => onUpdateSettings({ subject: e.target.value })} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-[13px] text-[#29343D] focus:border-[#635BFF] outline-none" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-[#98A4AE]">Title *</label>
              <input type="text" value={settings.title} onChange={(e) => onUpdateSettings({ title: e.target.value })} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-[13px] text-[#29343D] focus:border-[#635BFF] outline-none" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[12px] font-semibold text-[#98A4AE]">Content *</label>
              <textarea rows={4} value={settings.content} onChange={(e) => onUpdateSettings({ content: e.target.value })} className="w-full p-3 border border-[#E0E6EB] rounded-lg text-[13px] text-[#29343D] focus:border-[#635BFF] outline-none resize-none" />
            </div>

            <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="font-semibold text-slate-700">Enable CTA Button</span>
              <CustomSwitch checked={settings.ctaEnabled} onChange={(checked) => onUpdateSettings({ ctaEnabled: checked })} />
            </div>

            {settings.ctaEnabled && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[12px] font-semibold text-[#98A4AE]">Button Text</label>
                <input type="text" value={settings.ctaText} onChange={(e) => onUpdateSettings({ ctaText: e.target.value })} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-[13px] text-[#29343D] focus:border-[#635BFF] outline-none" />
              </div>
            )}
          </div>
        </div>

        <NotificationPreviewCard settings={settings} />
      </div>
    </section>
  );
}
