import React from "react";

interface InvoicePaymentCardProps {
  totalAmount: string;
}

export default function InvoicePaymentCard({ totalAmount }: InvoicePaymentCardProps) {
  return (
    <div
      className="flex flex-col items-start w-full"
      style={{
        padding: "30px",
        gap: "24px",
        background: "#FFFFFF",
        boxShadow: "0px 2px 4px -1px rgba(175, 182, 201, 0.2)",
        borderRadius: "12px"
      }}
    >
      <h2 style={{ fontFamily: "Manrope", fontWeight: 600, fontSize: "22px", lineHeight: "26px", color: "#29343D" }}>
        Payment Methods
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full pt-1">
        <div>
          <span className="block text-[12px] text-[#999999]">Mode</span>
          <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">Credit Card</span>
        </div>
        <div>
          <span className="block text-[12px] text-[#999999]">Payment Date</span>
          <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">12/02/2024</span>
        </div>
        <div>
          <span className="block text-[12px] text-[#999999]">Deadline</span>
          <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">12/14/2024</span>
        </div>
        <div>
          <span className="block text-[12px] text-[#999999]">Amount Paid</span>
          <span className="block text-[15px] font-semibold text-[#29343D] mt-0.5">{totalAmount}</span>
        </div>
        <div>
          <span className="block text-[12px] text-[#999999]">Status</span>
          <div className="mt-1">
            <div className="flex flex-row justify-center items-center px-2 py-1 bg-[#E6FBF2] rounded-lg w-fit">
              <span style={{ fontFamily: "Manrope", fontWeight: 500, fontSize: "12px", color: "#10B981" }}>
                Paid
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
