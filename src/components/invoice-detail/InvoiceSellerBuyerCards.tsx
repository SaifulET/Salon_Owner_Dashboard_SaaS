import React from "react";

interface InvoiceSellerBuyerCardsProps {
  clientName: string;
  clientEmail: string;
  clientCity: string;
}

export default function InvoiceSellerBuyerCards({ clientName, clientEmail, clientCity }: InvoiceSellerBuyerCardsProps) {
  const containerStyle = {
    boxSizing: "border-box" as const,
    padding: "30px",
    gap: "30px",
    background: "#FFFFFF",
    border: "1px solid #E0E6EB",
    borderRadius: "12px",
    minHeight: "353px"
  };

  return (
    <div className="flex flex-row flex-wrap items-start w-full gap-6">
      {/* Transferor/Provider */}
      <div className="flex-1 min-w-[320px] flex flex-col justify-between" style={containerStyle}>
        <h2 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "22px", lineHeight: "26px", color: "#29343D" }}>
          Transferor/Provider
        </h2>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <h3 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "18px", lineHeight: "25px", color: "#29343D" }}>
              SalonFlow S.r.l.
            </h3>
            <p style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#526B7A" }}>
              Via Roma, 123 <br />20121 Milan (MI) - Italy
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row items-start gap-6 w-full">
              <div className="flex-1">
                <span className="block text-[12px] text-[#999999]">P.IVA</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">IT12345678901</span>
              </div>
              <div className="flex-1">
                <span className="block text-[12px] text-[#999999]">Tax Code</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">12345678901</span>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 w-full">
              <div className="flex-1">
                <span className="block text-[12px] text-[#999999]">PEC</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5 break-words">amministrazione@pec.salonflow.it</span>
              </div>
              <div className="flex-1">
                <span className="block text-[12px] text-[#999999]">Recipient Code</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">XXXXXXX</span>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 w-full">
              <div className="flex-1">
                <span className="block text-[12px] text-[#999999]">Telephone</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">+39 02 1234567</span>
              </div>
              <div className="flex-1">
                <span className="block text-[12px] text-[#999999]">Email</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5 break-words">fatturazione@salonflow.it</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transferee/Client */}
      <div className="flex-1 min-w-[320px] flex flex-col justify-between" style={containerStyle}>
        <h2 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "22px", lineHeight: "26px", color: "#29343D" }}>
          Transferee/Client
        </h2>
        <div className="flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <h3 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "18px", lineHeight: "25px", color: "#29343D" }}>
              {clientName}
            </h3>
            <p style={{ fontFamily: "Manrope", fontWeight: 400, fontSize: "14px", lineHeight: "20px", color: "#526B7A" }}>
              Via Esempio, 456 <br />10100 {clientCity} (TO) - Italy
            </p>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-row items-start gap-6 w-full">
              <div className="flex-1">
                <span className="block text-[12px] text-[#999999]">P.IVA</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">IT98765432109</span>
              </div>
              <div className="flex-1">
                <span className="block text-[12px] text-[#999999]">Tax Code</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">98765432109</span>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 w-full">
              <div className="flex-grow">
                <span className="block text-[12px] text-[#999999]">PEC</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5 break-words">{clientEmail}</span>
              </div>
            </div>
            <div className="flex flex-row items-start gap-6 w-full">
              <div className="flex-grow">
                <span className="block text-[12px] text-[#999999]">Recipient Code</span>
                <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">YYYYYYY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
