import React, { useState } from "react";
import { NotificationData } from "./types";
import { initialNotificationData } from "./mockData";

export default function NotificationTab({ onSave }: { onSave?: () => void }) {
  const [data, setData] = useState<NotificationData>(initialNotificationData);

  return (
    <div className="flex flex-col gap-6 w-full font-sans text-left">
      <div className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6">
        <h3 className="text-base font-bold text-[#29343D]">Platform Notification Alerts</h3>

        <div className="flex flex-col gap-3">
          <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-800 block">Payment Failures</span>
              <span className="text-[11px] text-slate-400">Receive instant alerts when a subscription invoice fails</span>
            </div>
            <input type="checkbox" checked={data.paymentFailures} onChange={(e) => setData({ ...data, paymentFailures: e.target.checked })} className="rounded text-[#635BFF]" />
          </label>

          <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-800 block">New Tenant Signups</span>
              <span className="text-[11px] text-slate-400">Receive notification when a new salon signs up</span>
            </div>
            <input type="checkbox" checked={data.newSignups} onChange={(e) => setData({ ...data, newSignups: e.target.checked })} className="rounded text-[#635BFF]" />
          </label>

          <label className="flex items-center justify-between p-3 rounded-lg border border-slate-100 hover:bg-slate-50 cursor-pointer">
            <div>
              <span className="text-xs font-bold text-slate-800 block">Weekly Digest Reports</span>
              <span className="text-[11px] text-slate-400">Summary email of revenue, churn, and active subscribers</span>
            </div>
            <input type="checkbox" checked={data.weeklyReports} onChange={(e) => setData({ ...data, weeklyReports: e.target.checked })} className="rounded text-[#635BFF]" />
          </label>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <label className="text-[11px] font-bold text-slate-500">Slack / Discord Webhook URL</label>
          <input value={data.webhookUrl} onChange={(e) => setData({ ...data, webhookUrl: e.target.value })} placeholder="https://hooks.slack.com/services/..." className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button onClick={onSave} className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] cursor-pointer shadow-sm">
            Save Notifications
          </button>
        </div>
      </div>
    </div>
  );
}
