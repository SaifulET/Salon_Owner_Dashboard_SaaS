import React from "react";

interface InvoiceOverviewCardsProps {
  invoiceNumber: string;
  issueDate: string;
  expirationDate: string;
}

export default function InvoiceOverviewCards({
  invoiceNumber,
  issueDate,
  expirationDate
}: InvoiceOverviewCardsProps) {
  const cardStyle = {
    boxSizing: "border-box" as const,
    padding: "30px",
    gap: "12px",
    height: "125px",
    background: "#FFFFFF",
    border: "1px solid #E0E6EB",
    boxShadow: "0px 2px 4px -1px rgba(175, 182, 201, 0.2)",
    borderRadius: "12px"
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
      <h2 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "22px", lineHeight: "26px", color: "#29343D", marginBottom: "4px" }}>
        Eletronic Invoice
      </h2>

      <div className="flex flex-row flex-wrap items-start w-full gap-6">
        <div className="flex flex-col justify-center items-start flex-1 min-w-[240px]" style={cardStyle}>
          <span style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "18px", lineHeight: "25px", color: "#29343D" }}>{invoiceNumber}</span>
          <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#98A4AE" }}>Number</span>
        </div>

        <div className="flex flex-col justify-center items-start flex-1 min-w-[240px]" style={cardStyle}>
          <span style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "18px", lineHeight: "25px", color: "#29343D" }}>{issueDate}</span>
          <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#98A4AE" }}>Issue Date</span>
        </div>

        <div className="flex flex-col justify-center items-start flex-1 min-w-[240px]" style={cardStyle}>
          <span style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "18px", lineHeight: "25px", color: "#29343D" }}>{expirationDate}</span>
          <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#98A4AE" }}>Expiration Date</span>
        </div>

        <div
          className="flex flex-col justify-center items-start flex-1 min-w-[240px]"
          style={{ padding: "30px", gap: "12px", height: "125px", background: "#EFF4FA", boxShadow: "0px 2px 4px -1px rgba(175, 182, 201, 0.2)", borderRadius: "12px" }}
        >
          <span style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "18px", lineHeight: "25px", color: "#29343D" }}>Art. 21 DPR 633/72</span>
          <span style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "15px", lineHeight: "20px", color: "#98A4AE" }}>Tax Document</span>
        </div>
      </div>
    </div>
  );
}
