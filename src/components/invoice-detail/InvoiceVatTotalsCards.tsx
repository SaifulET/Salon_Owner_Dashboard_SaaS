import React from "react";

interface InvoiceVatTotalsCardsProps {
  vatRate: string;
  taxableAmount: string;
  vatAmount: string;
  totalAmount: string;
}

export default function InvoiceVatTotalsCards({
  vatRate,
  taxableAmount,
  vatAmount,
  totalAmount
}: InvoiceVatTotalsCardsProps) {
  const cardStyle = {
    boxSizing: "border-box" as const,
    padding: "30px",
    gap: "16px",
    background: "#FFFFFF",
    boxShadow: "0px 2px 4px -1px rgba(175, 182, 201, 0.2)",
    borderRadius: "12px",
    minHeight: "254px"
  };

  return (
    <div className="flex flex-row flex-wrap items-start w-full gap-6">
      {/* VAT Summary */}
      <div className="flex-1 min-w-[320px] flex flex-col justify-between" style={cardStyle}>
        <h2 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "22px", lineHeight: "26px", color: "#29343D" }}>
          VAT Summary
        </h2>
        <div className="w-full overflow-hidden" style={{ border: "1px solid #E0E6EB", borderRadius: "12px" }}>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr style={{ background: "#F3F3FF" }}>
                <th style={{ padding: "14px", borderBottom: "1px solid #E0E6EB", fontFamily: "Manrope", fontWeight: 700, fontSize: "16px", color: "#29343D" }}>Rate</th>
                <th style={{ padding: "14px", borderBottom: "1px solid #E0E6EB", borderLeft: "1px solid #E0E6EB", fontFamily: "Manrope", fontWeight: 700, fontSize: "16px", color: "#29343D" }}>Taxable</th>
                <th style={{ padding: "14px", borderBottom: "1px solid #E0E6EB", borderLeft: "1px solid #E0E6EB", fontFamily: "Manrope", fontWeight: 700, fontSize: "16px", color: "#29343D" }}>IVA</th>
              </tr>
            </thead>
            <tbody style={{ background: "#FFFFFF" }}>
              <tr style={{ height: "76px" }}>
                <td style={{ padding: "14px", fontFamily: "Manrope", fontSize: "14px", color: "#29343D" }}>{vatRate}</td>
                <td style={{ padding: "14px", borderLeft: "1px solid #E0E6EB", fontFamily: "Manrope", fontSize: "14px", color: "#29343D" }}>{taxableAmount}</td>
                <td style={{ padding: "14px", borderLeft: "1px solid #E0E6EB", fontFamily: "Manrope", fontSize: "14px", color: "#29343D" }}>{vatAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Document Totals */}
      <div className="flex-1 min-w-[320px] flex flex-col justify-between" style={cardStyle}>
        <h2 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "22px", lineHeight: "26px", color: "#29343D" }}>
          Document Totals
        </h2>
        <div className="flex flex-col gap-4 w-full pt-2">
          <div className="flex justify-between items-center w-full">
            <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "14px", color: "#526B7A" }}>Total Taxable Amount</span>
            <span style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "16px", color: "#29343D" }}>{taxableAmount}</span>
          </div>
          <div className="flex justify-between items-center w-full">
            <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "14px", color: "#526B7A" }}>Total VAT</span>
            <span style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "16px", color: "#29343D" }}>{vatAmount}</span>
          </div>
          <div style={{ height: "1px", background: "#E0E6EB", margin: "4px 0" }} />
          <div className="flex justify-between items-center w-full">
            <span style={{ fontFamily: "Manrope", fontWeight: 700, fontSize: "18px", color: "#29343D" }}>Document Total</span>
            <span style={{ fontFamily: "Manrope", fontWeight: 700, fontSize: "20px", color: "#635BFF" }}>{totalAmount}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
