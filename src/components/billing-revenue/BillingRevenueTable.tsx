import React from "react";
import { BillingRecord, FilterStatus, FilterPlan, FilterTime, BillingStatus, Plan } from "./types";
import { EyeIcon, DownloadIcon, RefreshIcon, AvatarMark } from "./BillingRevenueIcons";
import BillingRevenueFilterButton from "./BillingRevenueFilterButton";

interface BillingRevenueTableProps {
  filteredRecords: BillingRecord[];
  statusFilter: FilterStatus;
  planFilter: FilterPlan;
  timeFilter: FilterTime;
  openFilter: "status" | "plan" | "time" | null;
  setOpenFilter: (filter: "status" | "plan" | "time" | null) => void;
  setStatusFilter: (val: FilterStatus) => void;
  setPlanFilter: (val: FilterPlan) => void;
  setTimeFilter: (val: FilterTime) => void;
  showNotice: (msg: string) => void;
  onSelectInvoice: (record: BillingRecord) => void;
  onDownloadDetails: (record: BillingRecord) => void;
  onRetryRecord: (id: string) => void;
}

export default function BillingRevenueTable({
  filteredRecords,
  statusFilter,
  planFilter,
  timeFilter,
  openFilter,
  setOpenFilter,
  setStatusFilter,
  setPlanFilter,
  setTimeFilter,
  showNotice,
  onSelectInvoice,
  onDownloadDetails,
  onRetryRecord
}: BillingRevenueTableProps) {
  const statusClass = (status: BillingStatus) => {
    if (status === "Paid") return "bg-[#dcfaec] text-[#1fc76a]";
    if (status === "Pending") return "bg-[#fff7df] text-[#efb629]";
    if (status === "Refunded") return "bg-[#eef3f8] text-[#758598]";
    return "bg-[#ffeaf1] text-[#ff4f82]";
  };

  const planClass = (plan: Plan) => {
    if (plan === "Basic") return "bg-[#eeeaff] text-[#6258ff]";
    if (plan === "Enterprise") return "bg-[#635bff] text-white";
    return "bg-[#d7f5ef] text-[#1ba886]";
  };

  return (
    <section className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
      <div className="mb-4 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="text-sm font-bold">Billing Records</h2>
          <p className="mt-1 text-xs text-[#9aa7b8]">Complete payment history and status</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <BillingRevenueFilterButton id="status" value={statusFilter} options={["All Statuses", "Paid", "Pending", "Failed", "Refunded"]} openFilter={openFilter} setOpenFilter={setOpenFilter} showNotice={showNotice} onSelect={(value) => setStatusFilter(value as FilterStatus)} />
          <BillingRevenueFilterButton id="plan" value={planFilter} options={["All Plans", "Basic", "Premium", "Enterprise"]} openFilter={openFilter} setOpenFilter={setOpenFilter} showNotice={showNotice} onSelect={(value) => setPlanFilter(value as FilterPlan)} />
          <BillingRevenueFilterButton id="time" value={timeFilter} options={["All Time", "This Month", "Last Month", "Custom..."]} openFilter={openFilter} setOpenFilter={setOpenFilter} showNotice={showNotice} onSelect={(value) => setTimeFilter(value as FilterTime)} />
        </div>
      </div>
      <div className="overflow-hidden rounded-lg border border-[#edf1f6]">
        <div className="max-h-[360px] overflow-auto">
          <table className="w-full min-w-[920px] border-collapse text-left text-xs">
            <thead className="sticky top-0 z-10 bg-[#f5f4ff]">
              <tr>
                <th className="w-9 px-3 py-3"><input type="checkbox" aria-label="Select all records" /></th>
                <th className="px-3 py-3">Salon</th><th className="px-3 py-3">Invoice</th>
                <th className="px-3 py-3">Plan</th><th className="px-3 py-3">Amount</th>
                <th className="px-3 py-3">Status</th><th className="px-3 py-3">Billing Date</th>
                <th className="px-3 py-3">Due Date</th><th className="px-3 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf1f6]">
              {filteredRecords.map((record) => (
                <tr key={record.id} className={`${record.selected ? "bg-[#f3f1ff]" : "bg-white"} hover:bg-[#f9fbfe]`}>
                  <td className="px-3 py-3"><input type="checkbox" defaultChecked={record.selected} aria-label={`Select ${record.salon}`} /></td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-3">
                      <AvatarMark />
                      <div>
                        <div className="flex items-center gap-2"><span className="font-extrabold">{record.salon}</span><span className="rounded-full border px-1.5 py-0.5 text-[8px]">{record.legal}</span></div>
                        <div className="text-[10px] text-[#8190a4]">{record.owner} &bull; {record.city}</div>
                        <div className="text-[10px] text-[#a4afbd]">{record.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3">{record.invoice}</td>
                  <td className="px-3 py-3"><span className={`${planClass(record.plan)} rounded-md px-2 py-1 text-[10px] font-bold`}>{record.plan}</span></td>
                  <td className="px-3 py-3">{record.amount}</td>
                  <td className="px-3 py-3"><span className={`${statusClass(record.status)} rounded-md px-2 py-1 text-[10px] font-bold`}>{record.status}</span>{record.tag && <div className="mt-1 text-[10px] text-[#ff4f82]">{record.tag}</div>}</td>
                  <td className="px-3 py-3">{record.billingDate}</td>
                  <td className="px-3 py-3">{record.dueDate}</td>
                  <td className="px-3 py-3">
                    <div className="flex justify-center gap-2">
                      <button onClick={() => onSelectInvoice(record)} className="flex h-8 w-10 items-center justify-center rounded-lg bg-[#eeedff] text-[#635bff] hover:bg-[#e2dfff] cursor-pointer" title="View Invoice"><EyeIcon /></button>
                      <button onClick={() => onDownloadDetails(record)} className="flex h-8 w-10 items-center justify-center rounded-lg bg-[#eeedff] text-[#635bff] hover:bg-[#e2dfff] cursor-pointer" title="Download Details"><DownloadIcon /></button>
                      <button onClick={() => onRetryRecord(record.id)} className="flex h-8 w-10 items-center justify-center rounded-lg bg-[#e9fbfc] text-[#00c4cb] hover:bg-[#d8f8fa] cursor-pointer"><RefreshIcon /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
