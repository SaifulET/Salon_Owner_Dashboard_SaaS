import React, { useState } from "react";
import { SystemData } from "./types";
import { initialSystemData } from "./mockData";

export default function SystemTab({ onSave }: { onSave?: () => void }) {
  const [data, setData] = useState<SystemData>(initialSystemData);

  return (
    <div className="flex flex-col gap-6 w-full font-sans text-left">
      <div className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6">
        <h3 className="text-base font-bold text-[#29343D]">Platform & System Configuration</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[11px] font-bold text-slate-500">Platform Brand Name</label>
            <input value={data.platformName} onChange={(e) => setData({ ...data, platformName: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">Support Email</label>
            <input value={data.supportEmail} onChange={(e) => setData({ ...data, supportEmail: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">Trial Period (Days)</label>
            <input value={data.trialDays} onChange={(e) => setData({ ...data, trialDays: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">Max Salons / Tenant</label>
            <input value={data.maxSalons} onChange={(e) => setData({ ...data, maxSalons: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
          <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-800 block">Maintenance Mode</span>
              <span className="text-[11px] text-slate-400">Temporarily take the client frontend offline for updates</span>
            </div>
            <input type="checkbox" checked={data.maintenanceMode} onChange={(e) => setData({ ...data, maintenanceMode: e.target.checked })} className="rounded text-[#635BFF]" />
          </label>

          <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-800 block">Allow New Self-Service Signups</span>
              <span className="text-[11px] text-slate-400">Let salons register accounts directly from the landing page</span>
            </div>
            <input type="checkbox" checked={data.newSignupsEnabled} onChange={(e) => setData({ ...data, newSignupsEnabled: e.target.checked })} className="rounded text-[#635BFF]" />
          </label>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button onClick={onSave} className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] cursor-pointer shadow-sm">
            Save System Settings
          </button>
        </div>
      </div>
    </div>
  );
}
