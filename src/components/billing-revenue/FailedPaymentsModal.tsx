import React from "react";
import { FailedPayment, Plan } from "./types";
import { EyeIcon, RefreshIcon, PhoneIcon, DownloadIcon, ChevronDownIcon, AvatarMark } from "./BillingRevenueIcons";

interface FailedPaymentsModalProps {
  payments: FailedPayment[];
  onClose: () => void;
  onExport: () => void;
  onRetry: (id: string) => void;
  showNotice: (message: string) => void;
}

export default function FailedPaymentsModal({
  payments,
  onClose,
  onExport,
  onRetry,
  showNotice
}: FailedPaymentsModalProps) {
  const planClass = (plan: Plan) => {
    if (plan === "Basic") return "bg-[#eeeaff] text-[#6258ff]";
    if (plan === "Enterprise") return "bg-[#635bff] text-white";
    return "bg-[#d7f5ef] text-[#1ba886]";
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]/35 p-4 backdrop-blur-sm">
      <div className="w-full max-w-[930px] rounded-xl bg-white p-6 shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-[15px] font-bold text-[#253143]">Failed Payments</h2>
            <p className="mt-2 text-[12px] font-semibold text-[#253143]">Salons with failed payment attempts requiring attention</p>
          </div>
          <button onClick={onClose} className="p-1 text-[#253143] hover:text-rose-500 cursor-pointer" aria-label="Close failed payments">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
          </button>
        </div>

        <button onClick={() => showNotice("Last 7 days filter applied")} className="mt-6 flex h-9 w-[118px] items-center justify-between rounded-lg border border-[#edf1f6] px-3 text-[10px] font-semibold text-[#526174] cursor-pointer">
          Last 7 days
          <ChevronDownIcon />
        </button>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="rounded-xl bg-white p-5 shadow-[0_4px_14px_rgba(17,31,56,0.08)]"><div className="text-[11px] font-semibold">Failed Payments</div><div className="mt-5 text-[24px] font-bold text-[#ff4f82]">{payments.length}</div></div>
          <div className="rounded-xl bg-white p-5 shadow-[0_4px_14px_rgba(17,31,56,0.08)]"><div className="text-[11px] font-semibold">Pending Retry</div><div className="mt-5 text-[24px] font-bold text-[#ffc228]">0</div></div>
          <div className="rounded-xl bg-white p-5 shadow-[0_4px_14px_rgba(17,31,56,0.08)]"><div className="text-[11px] font-semibold">Lost Revenue</div><div className="mt-5 text-[24px] font-bold text-[#ff4f82]">€299</div></div>
        </div>

        <div className="mt-6 overflow-hidden rounded-xl border border-[#e4e9f1]">
          <table className="w-full min-w-[760px] border-collapse text-left text-[11px]">
            <thead className="bg-[#f0efff]">
              <tr>
                <th className="px-4 py-4 font-bold">Salon</th><th className="px-4 py-4 font-bold">Plan</th>
                <th className="px-4 py-4 font-bold">Amount</th><th className="px-4 py-4 font-bold">Due Date</th>
                <th className="px-4 py-4 font-bold">Status</th><th className="px-4 py-4 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e4e9f1]">
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-4 py-3"><div className="flex items-center gap-3"><AvatarMark /><div><div className="font-bold">{payment.salon}</div><div className="text-xs text-[#9aa7b8]">{payment.method}</div></div></div></td>
                  <td className="px-4 py-3"><span className={`${planClass(payment.plan)} rounded-md px-3 py-1 text-xs font-bold`}>{payment.plan}</span></td>
                  <td className="px-4 py-3">{payment.amount}</td>
                  <td className="px-4 py-3">{payment.dueDate}</td>
                  <td className="px-4 py-3"><span className="rounded-full bg-[#ffeaf1] px-3 py-1 text-xs font-bold text-[#ff4f82]">{payment.status}</span></td>
                  <td className="px-4 py-3"><div className="flex gap-2"><button onClick={() => showNotice(`${payment.salon} opened`)} className="flex h-8 w-10 items-center justify-center rounded-lg bg-[#635bff] text-white hover:bg-[#5244f0] cursor-pointer"><EyeIcon /></button><button onClick={() => onRetry(payment.id)} className="flex h-8 w-10 items-center justify-center rounded-lg bg-[#12c7bf] text-white hover:bg-[#0eb2ab] cursor-pointer"><RefreshIcon /></button><button onClick={() => showNotice(`Calling ${payment.salon}`)} className="flex h-8 w-10 items-center justify-center rounded-lg bg-[#42c6e8] text-white hover:bg-[#34b7d9] cursor-pointer"><PhoneIcon /></button></div></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={onExport} className="flex h-10 items-center gap-2 rounded-lg bg-[#635bff] hover:bg-[#5244f0] px-6 text-[12px] font-bold text-white cursor-pointer"><DownloadIcon />Export</button>
        </div>
      </div>
    </div>
  );
}
