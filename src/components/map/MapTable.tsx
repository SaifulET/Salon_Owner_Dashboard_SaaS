import React from "react";
import { RegionDataRow } from "./types";

interface MapTableProps {
  rows: RegionDataRow[];
  hoveredRegion: string | null;
}

export default function MapTable({ rows, hoveredRegion }: MapTableProps) {
  return (
    <section className="overflow-hidden rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] w-full text-left">
      <div className="overflow-x-auto rounded-[12px] border border-[#E0E6EB]">
        <table className="min-w-[980px] w-full border-collapse text-left font-sans">
          <thead>
            <tr className="bg-[#F5F4FF]">
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Region</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">MRR</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Subscribers</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">ARPA</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">Customer Churn</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">NET MRR Churn</th>
              <th className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">LTV</th>
              <th className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">City / Plan</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const isHighlight = hoveredRegion && row.region.toLowerCase() === hoveredRegion.toLowerCase();
              return (
                <tr key={idx} className={`transition-colors ${isHighlight ? "bg-[#F0F5FF]" : "odd:bg-white even:bg-[#FAFAFA]"}`}>
                  <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] font-semibold text-[#29343D]">{row.region}</td>
                  <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">€ {row.mrr.toLocaleString()}</td>
                  <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.subs}</td>
                  <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">€ {row.arpa}</td>
                  <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#FF6692] font-semibold">{row.churn}%</td>
                  <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#36C76C] font-semibold">+{row.netChurn}%</td>
                  <td className="border-b border-r border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">€ {row.ltv.toLocaleString()}</td>
                  <td className="border-b border-[#E0E6EB] px-5 py-4 text-[12px] text-[#29343D]">{row.city} / {row.plan}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
