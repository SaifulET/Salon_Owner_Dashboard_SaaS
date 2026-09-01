import React from "react";
import { mainTableMonths, mainTableRows } from "./mockData";

export default function CashflowTable() {
  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[980px] w-full border-collapse text-left font-sans">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="w-[180px] border-b border-r border-[#E0E6EB] px-5 py-4 text-[14px] font-semibold text-[#29343D]"></th>
              {mainTableMonths.map((m) => (
                <th key={m.key} colSpan={3} className="border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[16px] font-semibold text-[#29343D]">{m.label}</th>
              ))}
            </tr>
            <tr className="bg-[#F5F4FF]">
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[14px] font-semibold text-[#29343D]"></th>
              {mainTableMonths.flatMap((m) => [
                <th key={`${m.key}-a`} className="border-b border-r border-[#E0E6EB] px-5 py-3 text-center text-[12px] font-medium text-[#29343D]">Amount</th>,
                <th key={`${m.key}-c`} className="border-b border-r border-[#E0E6EB] px-5 py-3 text-center text-[12px] font-medium text-[#29343D]">Count</th>,
                <th key={`${m.key}-ch`} className="border-b border-r border-[#E0E6EB] px-5 py-3 text-center text-[12px] font-medium text-[#29343D]">Change</th>,
              ])}
            </tr>
          </thead>
          <tbody>
            {mainTableRows.map((row) => (
              <tr key={row.label} className={row.isHighlight ? "bg-[#F5F8FC] font-semibold" : "odd:bg-white even:bg-[#FAFAFA]"}>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">
                  <div className="flex items-center gap-2">
                    {row.color && <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: row.color }} />}
                    <span>{row.label}</span>
                  </div>
                </td>
                {mainTableMonths.flatMap((m) => [
                  <td key={`${row.label}-${m.key}-a`} className={`border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[12px] ${row.values[m.key].amountClass || "text-[#29343D]"}`}>{row.values[m.key].amount}</td>,
                  <td key={`${row.label}-${m.key}-c`} className={`border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[12px] ${row.values[m.key].countClass || "text-[#29343D]"}`}>{row.values[m.key].count}</td>,
                  <td key={`${row.label}-${m.key}-ch`} className={`border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[12px] ${row.values[m.key].changeClass || "text-[#29343D]"}`}>{row.values[m.key].change}</td>,
                ])}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
