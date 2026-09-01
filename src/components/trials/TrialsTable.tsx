import React from "react";
import { mainTableMonths, mainTableRows } from "./mockData";

export default function TrialsTable() {
  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[700px] w-full border-collapse text-left font-sans">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="w-[180px] border-b border-r border-[#E0E6EB] px-5 py-4 text-[13px] font-bold text-[#29343D]"></th>
              {mainTableMonths.map((m) => (
                <th key={m.key} className="border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[14px] font-bold text-[#29343D]">{m.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mainTableRows.map((row) => (
              <tr key={row.label} className={row.isBgGray ? "bg-[#FAFAFA]" : "bg-white"}>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-bold text-[#29343D]">{row.label}</td>
                {mainTableMonths.map((m) => (
                  <td key={`${row.label}-${m.key}`} className={`border-b border-r border-[#E0E6EB] px-5 py-4 text-center text-[12px] ${row.valueClass || "text-[#29343D]"}`}>
                    {row.values[m.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
