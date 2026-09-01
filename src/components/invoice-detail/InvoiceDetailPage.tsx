"use client";

import React from "react";
import InvoiceDetailHeader from "./InvoiceDetailHeader";
import InvoiceOverviewCards from "./InvoiceOverviewCards";
import InvoiceSellerBuyerCards from "./InvoiceSellerBuyerCards";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceVatTotalsCards from "./InvoiceVatTotalsCards";
import InvoicePaymentCard from "./InvoicePaymentCard";
import InvoiceLegalNotesCard from "./InvoiceLegalNotesCard";

interface InvoiceDetailPageProps {
  invoice?: any;
  salon?: any;
  record?: any;
  onBack: () => void;
}

export default function InvoiceDetailPage({ invoice, salon, record, onBack }: InvoiceDetailPageProps) {
  const invoiceNumber = invoice?.id || record?.invoice || "INV-2024-001";
  const issueDate = invoice?.date || record?.billingDate || "11/30/2024";
  const expirationDate = record?.dueDate || "12/14/2024";
  const clientName = salon?.name || record?.salon || "Bella Vista Salon";
  const clientEmail = salon?.email || record?.email || "amministrazione@pec.bellavistasalon.it";
  const clientCity = salon?.city || record?.city || "Turin";

  const unitPrice = "€ 245.08";
  const vatRate = "22%";
  const taxableAmount = "€ 245.08";
  const vatAmount = "€ 53.92";
  const totalAmount = "€ 299.00";

  return (
    <div
      className="flex flex-col gap-6 w-full text-left animate-in fade-in duration-300 font-sans pb-10"
      style={{ padding: "24px", background: "#F4F7FB", borderRadius: "20px" }}
    >
      <InvoiceDetailHeader invoiceNumber={invoiceNumber} onBack={onBack} />
      <InvoiceOverviewCards invoiceNumber={invoiceNumber} issueDate={issueDate} expirationDate={expirationDate} />
      <InvoiceSellerBuyerCards clientName={clientName} clientEmail={clientEmail} clientCity={clientCity} />
      <InvoiceItemsTable unitPrice={unitPrice} vatRate={vatRate} taxableAmount={taxableAmount} />
      <InvoiceVatTotalsCards vatRate={vatRate} taxableAmount={taxableAmount} vatAmount={vatAmount} totalAmount={totalAmount} />
      <InvoicePaymentCard totalAmount={totalAmount} />
      <InvoiceLegalNotesCard />
    </div>
  );
}
