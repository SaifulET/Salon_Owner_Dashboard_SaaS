import React from "react";
import { EditIcon } from "../icons/SalonIcons";

interface TaxTabProps {
  bankIban: string;
  bankName: string;
  bankBic: string;
  turnover: string;
  editEmployees: string;
  editPlan: string;
  investedCapital: string;
  editNotes: string;
  setIsBankModalOpen: (open: boolean) => void;
  setIsFinancialModalOpen: (open: boolean) => void;
  setIsOtherDataModalOpen: (open: boolean) => void;
}

export default function TaxTab({
  bankIban, bankName, bankBic, turnover, editEmployees, editPlan,
  investedCapital, editNotes, setIsBankModalOpen, setIsFinancialModalOpen, setIsOtherDataModalOpen
}: TaxTabProps) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-200">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bank Details */}
        <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-800 font-sans">Bank Details</h3>
            <button onClick={() => setIsBankModalOpen(true)} className="text-[#5e53fc] hover:underline text-xs font-bold flex items-center gap-1 cursor-pointer">
              <EditIcon /><span>Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-4 font-semibold text-xs">
            <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company IBAN</span><span className="text-slate-700 mt-1 tracking-wider">{bankIban}</span></div>
            <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Supporting Bank</span><span className="text-slate-700 mt-1">{bankName}</span></div>
            <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">BIC/SWIFT</span><span className="text-slate-700 mt-1">{bankBic}</span></div>
          </div>
        </div>

        {/* Financial Indicators */}
        <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-sm font-bold text-slate-800 font-sans">Financial Indicators</h3>
            <button onClick={() => setIsFinancialModalOpen(true)} className="text-[#5e53fc] hover:underline text-xs font-bold flex items-center gap-1 cursor-pointer">
              <EditIcon /><span>Edit</span>
            </button>
          </div>
          <div className="flex flex-col gap-4 font-semibold text-xs">
            <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Last Year's Turnover</span><span className="text-slate-700 mt-1">{turnover}</span></div>
            <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Number of Employees</span><span className="text-slate-700 mt-1">{editEmployees}</span></div>
            <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Current Plan</span><span className="inline-flex max-w-fit px-2 py-0.5 text-[9px] font-extrabold rounded-md bg-[#D2F4F2] text-[#29343D] uppercase tracking-wide mt-1.5">{editPlan}</span></div>
          </div>
        </div>
      </div>

      {/* Other Data */}
      <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5 w-full">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-800 font-sans">Other Data</h3>
          <button onClick={() => setIsOtherDataModalOpen(true)} className="text-[#5e53fc] hover:underline text-xs font-bold flex items-center gap-1 cursor-pointer">
            <EditIcon /><span>Edit</span>
          </button>
        </div>
        <div className="flex flex-col gap-4 font-semibold text-xs">
          <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Invested Capital</span><span className="text-slate-700 mt-1">{investedCapital}</span></div>
          <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Certifications</span>
            <div className="flex items-center gap-2 mt-1.5"><span className="px-2.5 py-1 text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 rounded-md">ISO 9001:2015</span><span className="px-2.5 py-1 text-[10px] font-semibold text-slate-500 bg-slate-50 border border-slate-200 rounded-md">GDPR Compliant</span></div>
          </div>
          <div className="flex flex-col"><span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Free Notes</span><span className="text-slate-650 mt-1.5 leading-relaxed font-medium">{editNotes}</span></div>
        </div>
      </div>
    </div>
  );
}
