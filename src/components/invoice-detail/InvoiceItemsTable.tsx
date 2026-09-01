import React from "react";

interface InvoiceItemsTableProps {
  unitPrice: string;
  vatRate: string;
  taxableAmount: string;
}

export default function InvoiceItemsTable({ unitPrice, vatRate, taxableAmount }: InvoiceItemsTableProps) {
  const thStyle = {
    boxSizing: "border-box" as const,
    padding: "14px",
    borderBottom: "1px solid #E0E6EB",
    borderLeft: "1px solid #E0E6EB",
    fontFamily: "Manrope",
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "24px",
    color: "#29343D"
  };

  const tdStyle = {
    boxSizing: "border-box" as const,
    padding: "14px",
    borderBottom: "1px solid #E0E6EB",
    borderLeft: "1px solid #E0E6EB",
    fontFamily: "Manrope",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    color: "#29343D",
    verticalAlign: "middle" as const
  };

  return (
    <div
      className="flex flex-col items-start w-full"
      style={{
        padding: "30px",
        gap: "16px",
        background: "#FFFFFF",
        boxShadow: "0px 2px 4px -1px rgba(175, 182, 201, 0.2)",
        borderRadius: "12px"
      }}
    >
      <h2 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "22px", lineHeight: "26px", color: "#29343D" }}>
        Performance Details
      </h2>

      <div className="w-full overflow-x-auto" style={{ border: "1px solid #E0E6EB", borderRadius: "12px" }}>
        <table className="w-full border-collapse text-left" style={{ minWidth: "900px" }}>
          <thead>
            <tr style={{ background: "#F3F3FF" }}>
              <th style={{ ...thStyle, borderLeft: "none", width: "55%" }}>Description</th>
              <th style={{ ...thStyle, textAlign: "center" }}>Amount</th>
              <th style={thStyle}>Plan</th>
              <th style={thStyle}>Unit price</th>
              <th style={thStyle}>VAT rate</th>
              <th style={thStyle}>Amount</th>
            </tr>
          </thead>
          <tbody style={{ background: "#FFFFFF" }}>
            <tr style={{ height: "152px" }}>
              <td style={{ boxSizing: "border-box", padding: "14px", borderBottom: "1px solid #E0E6EB", verticalAlign: "middle" }}>
                <div className="flex flex-row items-center gap-3">
                  <img src="/ball.png" alt="Avatar" style={{ width: "48px", height: "48px", borderRadius: "12px", objectFit: "cover" }} />
                  <div className="flex flex-col items-start justify-center">
                    <span style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "14px", lineHeight: "19px", color: "#29343D" }}>
                      SalonFlow Membership - Premium Plan
                    </span>
                    <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#999999", marginTop: "2px" }}>
                      Salon Management Software - Period: November 30, 2024 - December 14, 2024
                    </span>
                    <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "12px", lineHeight: "16px", color: "#999999", marginTop: "2px" }}>
                      Item code: SF- PREMIUM -2025
                    </span>
                  </div>
                </div>
              </td>
              <td style={{ ...tdStyle, textAlign: "center" }}>1</td>
              <td style={tdStyle}>
                <div className="flex flex-row justify-center items-center" style={{ padding: "4px 8px", background: "#D2F4F2", borderRadius: "8px", width: "fit-content" }}>
                  <span style={{ fontFamily: "Manrope", fontWeight: 500, fontSize: "12px", lineHeight: "16px", color: "#29343D" }}>Premium</span>
                </div>
              </td>
              <td style={tdStyle}>{unitPrice}</td>
              <td style={tdStyle}>{vatRate}</td>
              <td style={{ ...tdStyle, fontWeight: 600 }}>{taxableAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
