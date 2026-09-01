import React from "react";
import { PipelineStage } from "./types";

interface NotificationPreviewCardProps {
  settings: PipelineStage["emailSettings"];
}

export default function NotificationPreviewCard({ settings }: NotificationPreviewCardProps) {
  return (
    <div className="lg:col-span-6 flex flex-col gap-4">
      <div className="flex justify-between items-center h-[40px] border-b border-[#E0E6EB]">
        <span className="text-[14px] font-bold text-[#29343D] font-sans">Live Email Preview</span>
        <span className="text-[12px] font-semibold text-[#98A4AE] font-sans">HTML Template</span>
      </div>

      <div className="border border-[#E0E6EB] rounded-2xl bg-white p-6 shadow-sm flex flex-col gap-6 font-sans text-left">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="w-10 h-10 rounded-full bg-[#635BFF] text-white flex items-center justify-center font-bold text-base shadow-sm">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold text-[#29343D]">MatDash CRM</span>
            <span className="text-xs text-[#98A4AE]">Subject: {settings.subject || "(No subject)"}</span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {settings.showImage && (
            <div className="w-full h-32 bg-gradient-to-r from-[#635BFF]/10 to-indigo-100/30 rounded-xl flex items-center justify-center text-[#635BFF] font-bold text-sm">
              ✨ Salon Promotion Banner
            </div>
          )}

          <h4 className="text-lg font-bold text-[#29343D] leading-snug">
            {settings.title || "Email Title"}
          </h4>

          <p className="text-sm text-slate-600 whitespace-pre-line leading-relaxed">
            {settings.content || "Email body content goes here..."}
          </p>

          {settings.ctaEnabled && (
            <div className="pt-2">
              <button type="button" className="px-6 py-2.5 bg-[#635BFF] text-white text-xs font-bold rounded-lg shadow-sm">
                {settings.ctaText || "Button Action"}
              </button>
            </div>
          )}

          <div className="border-t border-slate-100 pt-4 mt-2 flex flex-col gap-1 text-xs text-slate-400">
            <span className="whitespace-pre-line font-medium">{settings.signature}</span>
            <span className="text-[11px] text-slate-350 italic mt-2">{settings.disclaimer}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
