import React from "react";

interface InvoiceDetailHeaderProps {
  invoiceNumber: string;
  onBack: () => void;
}

export default function InvoiceDetailHeader({ invoiceNumber, onBack }: InvoiceDetailHeaderProps) {
  return (
    <div
      className="flex flex-row justify-between items-center w-full print:border-none print:shadow-none"
      style={{
        padding: "16px 24px",
        background: "#FFFFFF",
        boxShadow: "0px 2px 4px -1px rgba(175, 182, 201, 0.2)",
        borderRadius: "12px"
      }}
    >
      <div className="flex flex-row items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center justify-center border border-[#E0E6EB] hover:bg-slate-50 transition-all print:hidden cursor-pointer"
          style={{ width: "36px", height: "36px", borderRadius: "8px" }}
          title="Back"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <div className="flex flex-col justify-center items-start">
          <h1 style={{ fontFamily: "Manrope", fontWeight: 700, fontSize: "16px", lineHeight: "22px", color: "#29343D" }}>
            Electronic Invoice - {invoiceNumber}
          </h1>
          <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#98A4AE" }}>
            Italian Fiscal Invoice
          </span>
        </div>
      </div>

      <button
        onClick={() => window.print()}
        className="flex flex-row justify-center items-center gap-2.5 transition-all print:hidden cursor-pointer"
        style={{
          padding: "10px 16px",
          width: "152px",
          height: "44px",
          background: "#DDDBFF",
          borderRadius: "8px",
          border: "none"
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#635BFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        <span style={{ fontFamily: "Manrope", fontWeight: 500, fontSize: "14px", lineHeight: "24px", textAlign: "center", color: "#635BFF" }}>
          Download PDF
        </span>
      </button>
    </div>
  );
}
