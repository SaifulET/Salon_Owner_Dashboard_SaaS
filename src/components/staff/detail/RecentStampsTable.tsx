import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export interface Stamp {
  date: string;
  time: string;
  total: string;
  added: string;
}

interface RecentStampsTableProps {
  stamps: Stamp[];
}

export default function RecentStampsTable({ stamps }: RecentStampsTableProps) {
  return (
    <div className="border border-slate-100 rounded-3xl overflow-hidden bg-white flex flex-col">
      <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
        <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Recents Stamps</h4>
        <button className="px-3 py-1.5 border border-slate-100 rounded-xl text-[10px] font-bold text-slate-600 bg-white flex items-center gap-1.5 cursor-pointer">
          Custom Range <HugeiconsIcon icon={ArrowDown01Icon} size={10} />
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse text-left text-xs min-w-[600px]">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 font-bold uppercase tracking-widest text-[9px]">
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4">Time-Range</th>
              <th className="px-6 py-4">Total Time</th>
              <th className="px-6 py-4">Added</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 font-semibold">
            {stamps.map((st, idx) => (
              <tr key={idx} className="hover:bg-slate-50/30 transition-all">
                <td className="px-6 py-4 text-slate-800 font-bold">{st.date}</td>
                <td className="px-6 py-4">{st.time}</td>
                <td className="px-6 py-4 text-slate-800 font-extrabold">{st.total}</td>
                <td className="px-6 py-4 text-slate-400 font-medium">{st.added}</td>
              </tr>
            ))}
            <tr className="bg-slate-50/20">
              <td colSpan={2} className="px-6 py-4"></td>
              <td colSpan={2} className="px-6 py-4 text-slate-800 font-black">
                30h <span className="text-[10px] text-slate-400 font-bold uppercase ml-1">Total of the hours</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
