import React from "react";
import { Employee } from "../types";
import PaymentsChart from "./PaymentsChart";
import PayslipsTable, { Payslip } from "./PayslipsTable";

interface RemunerationTabProps {
  employee: Employee;
  payslips: Payslip[];
}

export default function RemunerationTab({ employee, payslips }: RemunerationTabProps) {
  const handleDownloadPayslip = (ps: Payslip) => {
    const payslipText = `PAYSLIP FOR ${ps.date.toUpperCase()}
------------------------------------------
Employee: ${employee.firstName} ${employee.lastName}
Contract: ${employee.contractType || "Permanent"}
Occupation: ${employee.occupation}

EARNINGS DETAILS
----------------
Net: ${ps.net}
Gross: ${ps.gross}
Contributions: ${ps.contributions}
TFR: ${ps.tfr}
`;
    const filename = `${employee.firstName}_${employee.lastName}_Payslip_${ps.date.replace(/,?\s+/g, "_")}.txt`;
    const file = new Blob([payslipText], { type: "text/plain" });
    const el = document.createElement("a");
    el.href = URL.createObjectURL(file);
    el.download = filename;
    document.body.appendChild(el);
    el.click();
    document.body.removeChild(el);
  };

  return (
    <div className="flex flex-col gap-6 w-full text-left font-semibold text-xs font-sans">
      <h3 className="text-[22px] font-semibold leading-[120%] text-[#29343D] font-sans">Remuneration</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border border-slate-100 rounded-3xl p-5 bg-white flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#eff6ff] flex items-center justify-center text-[#5e53fc]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M12 6v12M9 9h6M9 15h4" /></svg>
            </div>
            <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wide">Last Payslip</span>
          </div>
          <span className="text-2xl font-black text-slate-800">€ 1,700</span>
          <div className="text-[10px] text-slate-400 font-semibold leading-relaxed">
            <span>Gross: € 4,500.00</span>
            <span className="block">November 29, 2024</span>
          </div>
        </div>

        <div className="border border-slate-100 rounded-3xl p-5 bg-white flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#fff7ed] flex items-center justify-center text-[#f59e0b]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M2 10h20" /></svg>
            </div>
            <span className="text-[10px] font-extrabold uppercase text-slate-400 tracking-wide">Average Salary</span>
          </div>
          <span className="text-2xl font-black text-slate-800">€ 2,200</span>
          <span className="text-[10px] text-slate-400 font-semibold">Last 12 months</span>
        </div>

        <div className="rounded-3xl p-5 bg-[#f2f1ff] flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#e2dfff] flex items-center justify-center text-[#5e53fc]">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><path d="M8 12h8M12 8v8" /></svg>
            </div>
            <span className="text-[10px] font-extrabold uppercase text-[#5e53fc]/60 tracking-wide">Accumulated TFR</span>
          </div>
          <span className="text-2xl font-black text-slate-800">€ 5,500</span>
        </div>
      </div>

      <PaymentsChart />
      <PayslipsTable payslips={payslips} onDownload={handleDownloadPayslip} />
    </div>
  );
}
