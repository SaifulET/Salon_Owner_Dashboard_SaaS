import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

export interface Payslip {
  date: string;
  net: string;
  gross: string;
  contributions: string;
  tfr: string;
  login: string;
}

interface PayslipsTableProps {
  payslips: Payslip[];
  onDownload: (ps: Payslip) => void;
}

export default function PayslipsTable({ payslips, onDownload }: PayslipsTableProps) {
  return (
    <div className="border border-slate-100 rounded-3xl overflow-hidden w-full bg-white flex flex-col">
      <div className="px-6 py-5 flex items-center justify-between border-b border-slate-100">
        <h4 className="text-sm font-bold text-slate-800">Payslip List</h4>
        <button className="px-3 py-1.5 border border-slate-200 rounded-lg text-[11px] font-semibold text-slate-600 bg-white flex items-center gap-1.5 hover:bg-slate-50 transition-colors cursor-pointer">
          Custom Range <HugeiconsIcon icon={ArrowDown01Icon} size={10} />
        </button>
      </div>
      <div className="overflow-x-auto w-full">
        <table className="w-full border-collapse text-left text-xs min-w-[600px]">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 font-bold uppercase tracking-widest text-[9px]">
              <th className="px-6 py-4">Data</th>
              <th className="px-6 py-4">Net</th>
              <th className="px-6 py-4">Gross</th>
              <th className="px-6 py-4">Contributions</th>
              <th className="px-6 py-4">TFR</th>
              <th className="px-6 py-4">Last Login</th>
              <th className="px-6 py-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-slate-600 font-semibold">
            {payslips.map((ps, idx) => (
              <tr key={idx} className="hover:bg-slate-50/30 transition-all">
                <td className="px-6 py-4 text-slate-800 font-bold">{ps.date}</td>
                <td className="px-6 py-4 text-slate-800 font-extrabold">{ps.net}</td>
                <td className="px-6 py-4">{ps.gross}</td>
                <td className="px-6 py-4">{ps.contributions}</td>
                <td className="px-6 py-4">{ps.tfr}</td>
                <td className="px-6 py-4 text-slate-400 font-medium">{ps.login}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    onClick={() => onDownload(ps)}
                    className="p-2 bg-indigo-50/60 hover:bg-indigo-100 text-[#5e53fc] rounded-xl transition-all inline-flex cursor-pointer"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
