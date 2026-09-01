import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { Employee } from "../types";

interface ViewStaffModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee | null;
  salonName: string;
  onEdit: () => void;
  onViewPermissions: () => void;
}

export default function ViewStaffModal({
  isOpen,
  onClose,
  employee,
  salonName,
  onEdit,
  onViewPermissions
}: ViewStaffModalProps) {
  if (!isOpen || !employee) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left font-sans text-xs font-semibold text-[#29343D]">
        <button onClick={onClose} className="absolute right-6 top-6 p-1.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors z-10 cursor-pointer">
          <HugeiconsIcon icon={Cancel01Icon} size={20} />
        </button>

        <div className="px-8 pt-8 pb-6">
          <h3 className="text-base font-extrabold text-slate-800 mb-6">View Member</h3>

          <div className="flex items-center gap-4 bg-slate-50/50 p-4 border border-slate-100 rounded-2xl mb-6">
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#5e53fc] to-indigo-400 text-white flex items-center justify-center font-bold text-base shadow-sm uppercase">{employee.firstName[0]}{employee.lastName[0]}</div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-extrabold text-slate-800 leading-snug">{employee.firstName} {employee.lastName}</span>
              <span className="text-xs text-slate-400 font-semibold">{salonName}</span>
            </div>
            <div className="ml-auto flex flex-col gap-1 items-end shrink-0">
              <span className="px-2.5 py-0.5 rounded-full text-[9px] bg-slate-200 text-slate-600 font-extrabold uppercase">Natural Person</span>
              <span className="px-2.5 py-0.5 rounded-full text-[9px] bg-[#eff6ff] text-[#2563eb] font-extrabold uppercase">{employee.role}</span>
            </div>
          </div>

          <div className="flex flex-col gap-4 border border-slate-100 rounded-2xl p-5 mb-5 bg-white relative">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">General Information</span>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
              <div className="flex flex-col gap-1"><span className="text-[10px] font-bold text-slate-400 uppercase">Date of birth</span><span className="font-extrabold text-slate-800">{employee.dob || "01/03/1985"}</span></div>
              <div className="flex flex-col gap-1"><span className="text-[10px] font-bold text-slate-400 uppercase">Place of birth</span><span className="font-extrabold text-slate-800">{employee.pob || "Milan (MI)"}</span></div>
              <div className="flex flex-col gap-1 col-span-2"><span className="text-[10px] font-bold text-slate-400 uppercase">Residence</span><span className="font-extrabold text-slate-800 leading-relaxed">{employee.address || "Via Giuseppe Verdi 123, 20121 Milan (MI)"}</span></div>
            </div>
          </div>

          <div className="flex flex-col gap-4 border border-slate-100 rounded-2xl p-5 mb-6 bg-white">
            <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">Business Information</span>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 text-xs">
              <div className="flex flex-col gap-1"><span className="text-[10px] font-bold text-slate-400 uppercase">Appointment Date</span><span className="font-extrabold text-slate-800">{employee.startDate || "15/03/2020"}</span></div>
              <div className="flex flex-col gap-1"><span className="text-[10px] font-bold text-slate-400 uppercase">Ownership Percentage</span><span className="font-extrabold text-slate-800">{employee.endDate || "100%"}</span></div>
              <div className="flex flex-col gap-1 col-span-2"><span className="text-[10px] font-bold text-slate-400 uppercase">CF/P.IVA</span><span className="font-extrabold text-slate-800 tracking-wide uppercase">{employee.taxCode || "RSSMRA85M01H501Z"}</span></div>
            </div>
          </div>

          <div className="flex justify-between items-center border-t border-slate-100 pt-5">
            <button onClick={onEdit} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-bold transition-all cursor-pointer">Edit</button>
            <button onClick={onViewPermissions} className="px-5 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer">View Permissions</button>
          </div>
        </div>
      </div>
    </div>
  );
}
