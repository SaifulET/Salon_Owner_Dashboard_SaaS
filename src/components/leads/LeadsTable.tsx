import React from "react";
import { PerformanceMetricRow } from "./types";

interface LeadsTableProps {
  rows: PerformanceMetricRow[];
}

export default function LeadsTable({ rows }: LeadsTableProps) {
  const getRateBadgeClass = (rate: string) => {
    if (rate === "60%") return "bg-[#EBFAF0] text-[#36C76C]";
    if (rate === "20%") return "bg-[#FFEAD2] text-[#FFAD46]";
    return "bg-[#FFE5ED] text-[#FF6692]";
  };

  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[800px] w-full border-collapse text-left font-sans">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Period</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Leads</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Trials</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Converted</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Lead-to-Trial</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Lead-to-Paid</th>
              <th className="border-b border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]">Trial-to-Paid</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.period} className="odd:bg-white even:bg-[#FAFAFA]">
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-bold text-[#29343D]">{row.period}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.leads}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.trials}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.converted}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px]">
                  <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${getRateBadgeClass(row.leadToTrialRate)}`}>{row.leadToTrialRate}</span>
                </td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px]">
                  <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${getRateBadgeClass(row.leadToPaidRate)}`}>{row.leadToPaidRate}</span>
                </td>
                <td className="border-b border-[#E0E6EB] px-5 py-4 text-[12px]">
                  <span className={`px-2 py-0.5 rounded-full font-bold text-[11px] ${getRateBadgeClass(row.trialToPaidRate)}`}>{row.trialToPaidRate}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
