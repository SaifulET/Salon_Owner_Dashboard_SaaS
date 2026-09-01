import React from "react";
import { Employee } from "../types";

interface ContractCardProps {
  employee: Employee;
  openEditModal: () => void;
}

export default function ContractCard({ employee, openEditModal }: ContractCardProps) {
  const handleDownloadContract = () => {
    const contractText = `EMPLOYEE CONTRACT DETAILS
-------------------------
Employee: ${employee.firstName} ${employee.lastName}
Date of Birth: ${employee.dob}
Address: ${employee.address}
Phone: ${employee.phone}
Email: ${employee.email}

CONTRACT INFO
-------------
Contract Type: ${employee.contractType || "Permanent"}
Start Date: ${employee.startDate}
End Date: ${employee.endDate || "N/A"}
Occupation: ${employee.occupation}
Remuneration: ${employee.remuneration}
Tax Code: ${employee.taxCode}
IBAN: ${employee.iban}
Emergency Contact: ${employee.emergencyName} (${employee.emergencyPhone})
`;
    const filename = `${employee.firstName}_${employee.lastName}_Contract.txt`;
    const file = new Blob([contractText], { type: "text/plain" });
    const element = document.createElement("a");
    element.href = URL.createObjectURL(file);
    element.download = filename;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col relative">
      <div className="absolute right-6 top-6 flex items-center gap-2">
        <button
          onClick={handleDownloadContract}
          className="px-3 py-1.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-[11px] font-bold transition-all flex items-center gap-1.5 cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          <span>Download Contract</span>
        </button>
        <button
          onClick={openEditModal}
          className="px-4.5 py-1.5 border border-slate-100 hover:bg-slate-50 text-[#5e53fc] rounded-xl text-[11px] font-bold transition-all cursor-pointer"
        >
          Edit
        </button>
      </div>
      <h3 className="text-sm font-extrabold text-slate-800 mb-6 uppercase tracking-wider">Contract</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">End Date</span>
          <span className="text-slate-700">{employee.endDate || "Indeterminate"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Tax ID Code</span>
          <span className="text-slate-700 uppercase">{employee.taxCode || "RSSANN92S48F205Z"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Occupation</span>
          <span className="text-slate-700">{employee.occupation || "Barber"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Remuneration</span>
          <span className="text-slate-700">€ {employee.remuneration || "2,200"}</span>
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase">IBAN</span>
          <span className="text-slate-700 uppercase tracking-wide">IT60 X054 ******* 123</span>
        </div>
      </div>
    </div>
  );
}
