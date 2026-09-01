import React from "react";
import { ChurnTableRow } from "./types";

interface ChurnTableProps {
  rows: ChurnTableRow[];
}

export default function ChurnTable({ rows }: ChurnTableProps) {
  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[980px] w-full border-collapse text-left font-sans">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Month</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Churn rate %</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Churn delta amount</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">MRR churn rate %</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">MRR churn delta</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Net MRR churn %</th>
              <th className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Plan</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-[#FAFAFA]">
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">{row.month}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#FF6692]">{row.churnRateChg}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.churnDeltaAmt}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#FF6692]">{row.mrrRateChg}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.mrrDeltaAmt}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#FF6692]">{row.netRateChg}</td>
                <td className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.plan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
