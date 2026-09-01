import React from "react";
import { CohortRow } from "./types";

interface CohortsTableProps {
  data: CohortRow[];
  activeSubTab: string;
}

export default function CohortsTable({ data, activeSubTab }: CohortsTableProps) {
  const getCellBg = (type: "high" | "med" | "low") => {
    if (type === "high") return "bg-[#33ADE5] text-white";
    if (type === "med") return "bg-[#99D6F2] text-[#0A2540]";
    return "bg-[#E6F5FC] text-[#0A2540]";
  };

  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[980px] w-full border-collapse text-left font-sans">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Cohort</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">{activeSubTab === "Net MRR Retention" ? "MRR" : "Users"}</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Plan</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">City</th>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <th key={i} className={`border-b ${i < 8 ? "border-r" : ""} border-[#E0E6EB] px-5 py-4 text-center text-[12px] font-semibold text-[#29343D]`}>M+{i}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr key={idx} className="odd:bg-white even:bg-[#FAFAFA]">
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">{row.month}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.mrr}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.plan}</td>
                <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.city}</td>
                {row.cells.map((cell, cIdx) => (
                  <td key={cIdx} className={`border-b ${cIdx < 7 ? "border-r" : ""} border-[#E0E6EB] px-2 py-3 text-center text-[12px] font-semibold ${getCellBg(cell.type)}`}>
                    {cell.value}
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
