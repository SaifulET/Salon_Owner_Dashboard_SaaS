import React from "react";
import { TimeRange } from "./types";
import { tableRows } from "./mockData";

interface ASPTableProps {
  timeRange: TimeRange;
}

export default function ASPTable({ timeRange }: ASPTableProps) {
  const currentTableMonths = timeRange === "Monthly"
    ? [{ label: "Jan 2025", key: "jan" }, { label: "Feb 2025", key: "feb" }, { label: "Mar 2025", key: "mar" }, { label: "Apr 2025", key: "apr" }]
    : [{ label: "2023", key: "2023" }, { label: "2024", key: "2024" }, { label: "2025", key: "2025" }];

  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[700px] w-full border-collapse text-left">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="w-[180px] border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]"></th>
              {currentTableMonths.map((m) => (
                <th key={m.key} colSpan={2} className="border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[14px] font-bold text-[#29343D]">{m.label}</th>
              ))}
            </tr>
            <tr className="bg-[#F5F4FF]">
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]"></th>
              {currentTableMonths.flatMap((m) => [
                <th key={`${m.key}-a`} className="border-b border-r border-[#E0E6EB] px-5 py-3 text-center text-[12px] font-bold text-[#29343D]">Amount</th>,
                <th key={`${m.key}-c`} className="border-b border-r border-[#E0E6EB] px-5 py-3 text-center text-[12px] font-bold text-[#29343D]">Count</th>,
              ])}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row) => (
              <tr key={row.label} className="odd:bg-white even:bg-[#FAFAFA]">
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-bold text-[#29343D]">{row.label}</td>
                {currentTableMonths.flatMap((m) => [
                  <td key={`${row.label}-${m.key}-a`} className="border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[12px] text-[#29343D]">{row.amount}</td>,
                  <td key={`${row.label}-${m.key}-c`} className="border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[12px] text-[#29343D]">{row.count}</td>,
                ])}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
