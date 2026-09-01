import React from "react";
import { ArpaTableRow } from "./types";

interface ARPATableProps {
  rows: ArpaTableRow[];
}

export default function ARPATable({ rows }: ARPATableProps) {
  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[980px] w-full border-collapse text-left font-sans">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Month</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">ARPA</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Delta amount</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Delta %</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Delta % YoY</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Total Revenue</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Top Salon</th>
              <th className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Bottom Salon</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-[#FAFAFA]">
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.month}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.arpa}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.deltaAmt}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#36C76C] font-semibold">{row.deltaPct}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#36C76C] font-semibold">{row.deltaYearPct}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.totalRev}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.topSalon}</td>
                <td className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.bottomSalon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
