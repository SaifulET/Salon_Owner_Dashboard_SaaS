import React, { useState } from "react";
import { BillingData } from "./types";
import { initialBillingData } from "./mockData";

export default function BillingTab({ onSave }: { onSave?: () => void }) {
  const [data, setData] = useState<BillingData>(initialBillingData);

  return (
    <div className="flex flex-col gap-6 w-full font-sans text-left">
      <div className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6">
        <h3 className="text-base font-bold text-[#29343D]">Payment Gateway & Invoicing</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[11px] font-bold text-slate-500">Stripe Publishable Key</label>
            <input value={data.stripePublishableKey} onChange={(e) => setData({ ...data, stripePublishableKey: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1 font-mono" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">Stripe Secret Key</label>
            <input type="password" value={data.stripeSecretKey} onChange={(e) => setData({ ...data, stripeSecretKey: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1 font-mono" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">Default Currency</label>
            <select value={data.currency} onChange={(e) => setData({ ...data, currency: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1 bg-white">
              <option value="EUR (€)">EUR (€)</option><option value="USD ($)">USD ($)</option><option value="GBP (£)">GBP (£)</option>
            </select>
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">VAT / Tax Rate (%)</label>
            <input value={data.taxRate} onChange={(e) => setData({ ...data, taxRate: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
          <div>
            <label className="text-[11px] font-bold text-slate-500">Invoice Number Prefix</label>
            <input value={data.invoicePrefix} onChange={(e) => setData({ ...data, invoicePrefix: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">Grace Period (Days)</label>
            <input value={data.gracePeriod} onChange={(e) => setData({ ...data, gracePeriod: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button onClick={onSave} className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] cursor-pointer shadow-sm">
            Save Billing Settings
          </button>
        </div>
      </div>
    </div>
  );
}
