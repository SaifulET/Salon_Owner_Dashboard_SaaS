import React from "react";
import { ChartTab } from "./types";
import { tableMonths, tableRows, movementTransactions } from "./mockData";

interface AnalyticsMovementsTableProps {
  activeTab: ChartTab;
}

export default function AnalyticsMovementsTable({ activeTab }: AnalyticsMovementsTableProps) {
  return (
    <div className="flex flex-col gap-6 w-full text-left">
      {/* Movements Table */}
      <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
        <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
          <table className="min-w-[980px] w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#F5F4FF]">
                <th className="w-[140px] border-b border-r border-[#E0E6EB] px-5 py-4 text-[14px] font-semibold text-[#29343D]"></th>
                {tableMonths.map((m) => (
                  <th key={m.key} colSpan={3} className="border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[16px] font-semibold text-[#29343D]">{m.label}</th>
                ))}
              </tr>
              <tr className="bg-[#F5F4FF]">
                <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[14px] font-semibold text-[#29343D]"></th>
                {tableMonths.flatMap((m) => [
                  <th key={`${m.key}-a`} className="border-b border-r border-[#E0E6EB] px-5 py-3 text-center text-[12px] font-medium text-[#29343D]">Amount</th>,
                  <th key={`${m.key}-c`} className="border-b border-r border-[#E0E6EB] px-5 py-3 text-center text-[12px] font-medium text-[#29343D]">Count</th>,
                  <th key={`${m.key}-ch`} className="border-b border-r border-[#E0E6EB] px-5 py-3 text-center text-[12px] font-medium text-[#29343D]">Change</th>,
                ])}
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row) => (
                <tr key={row.label} className="odd:bg-white even:bg-[#FAFAFA]">
                  <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">{row.label}</td>
                  {tableMonths.flatMap((m) => [
                    <td key={`${row.label}-${m.key}-a`} className={`border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[12px] ${row.label === "Total MRR" || row.label === "Growth Rate" ? "font-semibold text-[#36C76C]" : "text-[#29343D]"}`}>{row.amount}</td>,
                    <td key={`${row.label}-${m.key}-c`} className={`border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[12px] ${row.label === "Total MRR" || row.label === "Growth Rate" ? "font-semibold text-[#36C76C]" : "text-[#29343D]"}`}>{row.count}</td>,
                    <td key={`${row.label}-${m.key}-ch`} className={`border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[12px] ${row.label === "Growth Rate" ? "font-semibold text-[#36C76C]" : "text-[#29343D]"}`}>{row.change}</td>,
                  ])}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent Movements Logs */}
      {(activeTab === "Movements" || activeTab === "Breakdown") && (
        <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)]">
          <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
            <table className="min-w-[980px] w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#F5F4FF]">
                  <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Date</th>
                  <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Customer</th>
                  <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Description</th>
                  <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Type</th>
                  <th className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">MRR change</th>
                </tr>
              </thead>
              <tbody>
                {movementTransactions.map((row, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-[#FAFAFA]">
                    <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.date}</td>
                    <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.customer}</td>
                    <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.description}</td>
                    <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.type}</td>
                    <td className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
