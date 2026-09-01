import React from "react";
import { Employee } from "../types";

interface PersonalDataCardProps {
  employee: Employee;
  openEditModal: () => void;
}

export default function PersonalDataCard({ employee, openEditModal }: PersonalDataCardProps) {
  return (
    <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col relative">
      <button
        onClick={openEditModal}
        className="absolute right-6 top-6 px-4.5 py-1.5 border border-slate-100 hover:bg-slate-50 text-[#5e53fc] rounded-xl text-[11px] font-bold transition-all cursor-pointer"
      >
        Edit
      </button>
      <h3 className="text-sm font-extrabold text-slate-800 mb-6 uppercase tracking-wider">Personal data</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Date of birth</span>
          <span className="text-slate-700">{employee.dob || "November 7, 1992"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Full Address</span>
          <span className="text-slate-700 leading-snug">{employee.address || "Corso Buenos Aires 67, 20124 Milano (MI)"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Telephone</span>
          <span className="text-slate-700">{employee.phone || "+39 336 789 012"}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Email</span>
          <span className="text-slate-700">{employee.email || "anna@bellavista.com"}</span>
        </div>
        <div className="flex flex-col gap-1 col-span-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase">Emergency Contact</span>
          <span className="text-slate-700">{employee.emergencyName} ({employee.emergencyPhone})</span>
        </div>
      </div>
    </div>
  );
}
