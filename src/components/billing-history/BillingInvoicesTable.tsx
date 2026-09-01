import React from "react";
import { InvoiceItem } from "./types";

interface BillingInvoicesTableProps {
  invoices: InvoiceItem[];
  onSelectInvoice: (id: string) => void;
}

export default function BillingInvoicesTable({ invoices, onSelectInvoice }: BillingInvoicesTableProps) {
  return (
    <div className="border border-slate-100 rounded-2xl overflow-x-auto w-full bg-white">
      <table className="w-full min-w-[800px] border-collapse text-left text-xs">
        <thead>
          <tr className="bg-[#f5f4ff] border-b border-slate-100 text-slate-600 font-bold uppercase tracking-wider">
            <th className="px-6 py-4">Date</th>
            <th className="px-6 py-4">Description</th>
            <th className="px-6 py-4">Amount</th>
            <th className="px-6 py-4">Payment Method</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Employment Status</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 text-slate-700 font-semibold">
          {invoices.map((inv, idx) => (
            <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
              <td className="px-6 py-4 font-semibold text-slate-700">{inv.date}</td>
              <td className="px-6 py-4 flex flex-col gap-1 items-start">
                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-bold bg-[#ecfeff] text-[#0891b2] uppercase tracking-wide">
                  {inv.description}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold">{inv.billingMonth}</span>
              </td>
              <td className="px-6 py-4 text-slate-800 font-bold">{inv.amount}</td>
              <td className="px-6 py-4 text-slate-500 font-semibold">{inv.method}</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-[#10b981] text-white uppercase tracking-wider">
                  {inv.status}
                </span>
              </td>
              <td className="px-6 py-4">
                <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                  inv.employmentStatus === "Currently Hired" ? "bg-[#eff6ff] text-[#2563eb]" : "bg-[#fff1f2] text-[#ff4e73]"
                }`}>
                  {inv.employmentStatus}
                </span>
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => onSelectInvoice(inv.id)}
                  className="p-2 bg-[#f2f1ff] text-[#5e53fc] hover:bg-[#e2dfff] rounded-lg transition-colors inline-flex cursor-pointer"
                  title="View Details"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
