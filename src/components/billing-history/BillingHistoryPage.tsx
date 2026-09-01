"use client";

import React, { useState } from "react";
import InvoiceDetailPage from "../invoice-detail/InvoiceDetailPage";
import BillingHistoryHeader from "./BillingHistoryHeader";
import BillingKpiCards from "./BillingKpiCards";
import BillingInvoicesTable from "./BillingInvoicesTable";
import { initialBillingInvoices } from "./mockData";
import { Salon } from "../salons/types";

interface BillingHistoryPageProps {
  salon?: Salon;
  onBack?: () => void;
}

const defaultSalonData: Salon = {
  id: "salon-1",
  name: "Bella Vista Salon",
  tag: "SRL",
  manager: "Marco Rossi",
  city: "Turin",
  region: "Piedmont",
  email: "info@bellavistasalon.it",
  status: "Active",
  plan: "Premium",
  revenue: "€ 299,00",
  ltv: "€ 3.588,00",
  lastActive: "Just now",
  hasTicket: false
};

export default function BillingHistoryPage({ salon = defaultSalonData, onBack = () => {} }: BillingHistoryPageProps) {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState<string | null>(null);
  const [retrying, setRetrying] = useState(false);
  const invoices = initialBillingInvoices;
  const currentSalon = salon || defaultSalonData;

  const handleRetry = () => {
    setRetrying(true);
    setTimeout(() => setRetrying(false), 1500);
  };

  const handleExport = () => {
    const csvContent = `Invoice ID,Date,Description,Period,Amount,Method,Status\nBILL__001,November 30, 2024,Premium,December 2024,EUR 299.00,Credit Card,Paid\nBILL__002,November 30, 2024,Premium,December 2024,EUR 299.00,Credit Card,Paid\nBILL__003,November 30, 2024,Premium,December 2024,EUR 299.00,Bank Transfer,Paid\n`;
    const element = document.createElement("a");
    element.href = URL.createObjectURL(new Blob([csvContent], { type: "text/csv" }));
    element.download = "billing_history_export.csv";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  if (selectedInvoiceId) {
    const selectedInvoice = invoices.find((inv) => inv.id === selectedInvoiceId);
    if (selectedInvoice) {
      return <InvoiceDetailPage invoice={selectedInvoice} salon={currentSalon} onBack={() => setSelectedInvoiceId(null)} />;
    }
  }

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300 w-full text-left font-sans">
      <BillingHistoryHeader salonName={currentSalon.name} onBack={onBack} />

      <div className="bg-white rounded-3xl border border-[#eef2f6] shadow-[0_2px_4px_-1px_rgba(175,182,201,0.08)] flex flex-col p-8 w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-xl font-bold text-slate-800">Billing History</h2>
          <div className="flex items-center gap-3">
            <button onClick={handleRetry} disabled={retrying} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#eef2f6] hover:bg-slate-50 rounded-2xl text-xs font-semibold text-slate-600 transition-all shadow-sm disabled:opacity-50 cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={retrying ? "animate-spin" : ""}><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l.57.57" /></svg>
              <span>{retrying ? "Retrying..." : "Retry Failed"}</span>
            </button>
            <button onClick={handleExport} className="flex items-center gap-2 px-4 py-2.5 bg-[#f2f1ff] hover:bg-[#e4e2ff] text-[#5e53fc] border border-[#e2dfff] rounded-2xl text-xs font-semibold transition-all shadow-sm cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
              <span>Export Data</span>
            </button>
          </div>
        </div>

        <BillingKpiCards />
        <BillingInvoicesTable invoices={invoices} onSelectInvoice={setSelectedInvoiceId} />
      </div>
    </div>
  );
}
