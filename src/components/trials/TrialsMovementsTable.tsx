import React from "react";
import { trialsTransactionsLogs } from "./mockData";

export default function TrialsMovementsTable() {
  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[980px] w-full border-collapse text-left font-sans">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Created</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Customer</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Email</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Trial started</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Paid started</th>
              <th className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Cancel date</th>
            </tr>
          </thead>
          <tbody>
            {trialsTransactionsLogs.map((row, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-[#FAFAFA]">
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.created}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.customer}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.email}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.trialStarted}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.paidStarted}</td>
                <td className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.cancelDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
