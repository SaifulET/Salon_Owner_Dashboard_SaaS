import React from "react";
import { SalonActivity } from "./types";

export default function SalonActivityItem({ act }: { act: SalonActivity }) {
  return (
    <div className="bg-white border border-[#eef2f6] rounded-2xl p-6 flex items-center justify-between hover:shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition-shadow duration-200">
      <div className="flex items-center gap-5">
        <div className={`w-11 h-11 rounded-full ${act.iconBg} flex items-center justify-center shrink-0`}>
          {act.type === "upgrade" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#5e53fc]">
              <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.57.57" />
            </svg>
          )}
          {act.type === "addUser" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#0891b2]">
              <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="8.5" cy="7" r="4" /><line x1="20" y1="8" x2="20" y2="14" /><line x1="17" y1="11" x2="23" y2="11" />
            </svg>
          )}
          {act.type === "login" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-500">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          )}
          {act.type === "updateProfile" && (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          )}
        </div>

        <div className="flex flex-col gap-0.5">
          <span className={`text-sm font-bold ${act.titleColor}`}>{act.title}</span>
          <span className="text-xs text-slate-500 font-semibold">{act.description}</span>
          <span className="text-[10px] text-slate-400 font-medium">{act.timestamp}</span>
        </div>
      </div>

      <span className={`px-4 py-2 rounded-full text-[10px] font-bold ${act.badgeBg} ${act.badgeText}`}>
        By: {act.performer}
      </span>
    </div>
  );
}
