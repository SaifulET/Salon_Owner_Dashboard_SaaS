import React from "react";

export default function RecentActivityHeader() {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <h1 className="text-xl font-bold text-slate-800">Recent Activity</h1>
      </div>
      <div className="flex items-center gap-2 text-xs font-semibold select-none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#a0aec0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
        </svg>
        <span className="text-[#a0aec0]">/</span>
        <span className="bg-[#f2f1ff] text-[#5e53fc] px-2.5 py-1 rounded-lg">Recent Activity</span>
      </div>
    </div>
  );
}
