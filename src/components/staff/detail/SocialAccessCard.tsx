import React from "react";

interface SocialAccessCardProps {
  onViewPermissions: () => void;
}

export default function SocialAccessCard({ onViewPermissions }: SocialAccessCardProps) {
  return (
    <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col relative">
      <button
        onClick={onViewPermissions}
        className="absolute right-6 top-6 px-4.5 py-1.5 border border-slate-100 hover:bg-slate-50 text-[#5e53fc] rounded-xl text-[11px] font-bold transition-all cursor-pointer"
      >
        Change Permits
      </button>
      <h3 className="text-sm font-extrabold text-slate-800 mb-6 uppercase tracking-wider">Social & Access</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
        <div className="flex flex-col gap-2.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Social Connected</span>
          <div className="flex items-center gap-2 justify-between max-w-sm border border-slate-50 p-2.5 rounded-xl">
            <span className="font-bold text-slate-600 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-blue-600">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </span>
            <span className="px-2 py-0.5 rounded text-[8px] bg-rose-50 text-rose-500 font-extrabold uppercase">
              Not Connected
            </span>
          </div>
          <div className="flex items-center gap-2 justify-between max-w-sm border border-slate-50 p-2.5 rounded-xl">
            <span className="font-bold text-slate-600 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-pink-600">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
              Instagram
            </span>
            <span className="px-2 py-0.5 rounded text-[8px] bg-emerald-50 text-emerald-600 font-extrabold uppercase">
              Connected
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Direct Manager</span>
          <div className="flex items-center gap-3 border border-slate-50 p-2.5 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-[9px] uppercase font-bold">Last Access</span>
              <span className="text-slate-700 font-extrabold">1h ago</span>
            </div>
          </div>
          <div className="flex items-center gap-3 border border-slate-50 p-2.5 rounded-xl">
            <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-slate-400 text-[9px] uppercase font-bold">Permits</span>
              <span className="px-2.5 py-0.5 bg-[#eff6ff] text-[#2563eb] rounded-md text-[9px] font-extrabold uppercase mt-0.5 w-fit">
                All
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
