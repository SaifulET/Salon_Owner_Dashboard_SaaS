import React from "react";
import { LtvTableRow } from "./types";

interface LTVTableProps {
  rows: LtvTableRow[];
}

export default function LTVTable({ rows }: LTVTableProps) {
  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[700px] w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Year</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">LTV</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Delta amount</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Delta %</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">ARPA</th>
              <th className="border-b border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Churn</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.year} className="odd:bg-white even:bg-[#FAFAFA]">
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-bold text-[#29343D]">{row.year}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.ltv}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.deltaAmt}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#FF6692]">{row.deltaPct}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.arpa}</td>
                <td className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] text-[#FF6692]">{row.churn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
