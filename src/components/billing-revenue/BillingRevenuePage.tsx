"use client";

import React, { useMemo, useState } from "react";
import InvoiceDetailPage from "../invoice-detail/InvoiceDetailPage";
import BillingRevenueHeader from "./BillingRevenueHeader";
import BillingRevenueMetrics from "./BillingRevenueMetrics";
import BillingRevenuePlans from "./BillingRevenuePlans";
import BillingRevenueTable from "./BillingRevenueTable";
import BillingRevenueActions from "./BillingRevenueActions";
import PlanDistributionModal from "./PlanDistributionModal";
import FailedPaymentsModal from "./FailedPaymentsModal";
import ReportModal from "./ReportModal";
import { initialBillingRecords, initialFailedPayments } from "./mockData";
import { BillingRecord, FailedPayment, FilterStatus, FilterPlan, FilterTime, ModalName, Plan } from "./types";

export default function BillingRevenuePage({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [records, setRecords] = useState<BillingRecord[]>(initialBillingRecords);
  const [failedPayments, setFailedPayments] = useState<FailedPayment[]>(initialFailedPayments);
  const [statusFilter, setStatusFilter] = useState<FilterStatus>("All Statuses");
  const [planFilter, setPlanFilter] = useState<FilterPlan>("All Plans");
  const [timeFilter, setTimeFilter] = useState<FilterTime>("All Time");
  const [openFilter, setOpenFilter] = useState<"status" | "plan" | "time" | null>(null);
  const [modal, setModal] = useState<ModalName>(null);
  const [distributionView, setDistributionView] = useState<"monthly" | "yearly">("monthly");
  const [notice, setNotice] = useState("Ready");
  const [lastSynced, setLastSynced] = useState("Just now");
  const [selectedInvoice, setSelectedInvoice] = useState<BillingRecord | null>(null);

  const filteredRecords = useMemo(() => records.filter((record) => {
    const matchesStatus = statusFilter === "All Statuses" || record.status === statusFilter;
    const matchesPlan = planFilter === "All Plans" || record.plan === planFilter;
    const matchesTime = timeFilter === "All Time" || timeFilter === "Custom..." || record.month === timeFilter;
    return matchesStatus && matchesPlan && matchesTime;
  }), [records, statusFilter, planFilter, timeFilter]);

  const showNotice = (message: string) => setNotice(message);

  const retryRecord = (id: string) => {
    setRecords((curr) => curr.map((r) => r.id === id && r.status === "Failed" ? { ...r, status: "Pending", tag: "Retry queued" } : r));
    showNotice("Payment retry queued");
  };

  const retryFailedPayment = (id: string) => {
    setFailedPayments((curr) => curr.filter((p) => p.id !== id));
    showNotice("Failed payment moved to retry queue");
  };

  const retryAllFailed = () => {
    setRecords((curr) => curr.map((r) => r.status === "Failed" ? { ...r, status: "Pending", tag: "Retry queued" } : r));
    setFailedPayments([]);
    showNotice("All failed payments moved to retry queue");
  };

  const exportFile = (filename: string, content: string) => {
    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = filename; link.click(); URL.revokeObjectURL(url);
    showNotice(`${filename} exported`);
  };

  const handleMetricClick = (title: string) => {
    if (title === "Failed Payments") setModal("failed");
    else if (setActiveTab) {
      if (title === "2025 Revenue" || title === "Monthly Recurring Revenue") setActiveTab("analytics_revenue_mrr_arr");
      else if (title === "Total Active Subscriptions") setActiveTab("analytics_customers_subscribers");
    } else showNotice(`${title} details opened`);
  };

  if (selectedInvoice) return <InvoiceDetailPage record={selectedInvoice} onBack={() => setSelectedInvoice(null)} />;

  return (
    <div className="flex w-full flex-col gap-5 text-left text-[#283442] font-sans animate-in fade-in duration-300">
      <BillingRevenueHeader
        onSearchChange={(query) => showNotice(query ? `Searching ${query}` : "Ready")}
        onResetFailed={retryAllFailed}
        onExportData={() => exportFile("billing-records.csv", "Salon,Invoice,Plan,Amount,Status\n" + filteredRecords.map((r) => `${r.salon},${r.invoice},${r.plan},${r.amount},${r.status}`).join("\n"))}
        onSyncPayments={() => { const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }); setLastSynced(now); showNotice(`Payments synced at ${now}`); }}
      />
      <BillingRevenueMetrics onViewMetric={handleMetricClick} />
      <BillingRevenuePlans onOpenModal={() => setModal("plan")} onSelectPlan={(plan: Plan) => { setPlanFilter(plan); showNotice(`${plan} plan selected`); }} />
      <BillingRevenueTable
        filteredRecords={filteredRecords} statusFilter={statusFilter} planFilter={planFilter} timeFilter={timeFilter}
        openFilter={openFilter} setOpenFilter={setOpenFilter} setStatusFilter={setStatusFilter} setPlanFilter={setPlanFilter}
        setTimeFilter={setTimeFilter} showNotice={showNotice} onSelectInvoice={setSelectedInvoice}
        onDownloadDetails={(r) => exportFile(`${r.salon.toLowerCase().replace(/[^a-z0-9]+/g, "_")}_details.txt`, `Salon: ${r.salon}\nOwner: ${r.owner}\nEmail: ${r.email}\nPlan: ${r.plan}\nAmount: ${r.amount}`)}
        onRetryRecord={retryRecord}
      />
      <BillingRevenueActions failedCount={failedPayments.length} onOpenFailedModal={() => setModal("failed")} onRetryAllFailed={retryAllFailed} onReviewPending={() => setStatusFilter("Pending")} onOpenReportModal={() => setModal("report")} />
      <div className="fixed bottom-5 right-5 z-40 rounded-xl bg-[#253143] px-4 py-3 text-xs font-semibold text-white shadow-2xl">{notice} <span className="ml-2 text-[#a7b3c4]">Last sync: {lastSynced}</span></div>
      {modal === "plan" && <PlanDistributionModal view={distributionView} setView={(v) => { setDistributionView(v); showNotice(`${v} distribution selected`); }} onClose={() => setModal(null)} onAnalytics={() => { setModal(null); setPlanFilter("Enterprise"); showNotice("Enterprise analytics view applied"); }} />}
      {modal === "failed" && <FailedPaymentsModal payments={failedPayments} onClose={() => setModal(null)} onExport={() => exportFile("failed-payments.csv", failedPayments.map((p) => `${p.salon},${p.amount},${p.status}`).join("\n"))} onRetry={retryFailedPayment} showNotice={showNotice} />}
      {modal === "report" && <ReportModal onClose={() => setModal(null)} onExport={(fmt) => exportFile(`billing-report.${fmt.toLowerCase()}`, `Billing report (${fmt})`)} />}
    </div>
  );
}
