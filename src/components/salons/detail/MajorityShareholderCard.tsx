import React from "react";

export default function MajorityShareholderCard() {
  return (
    <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5 w-full">
      <div className="border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-800 font-sans">Majority Shareholder Detail</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-6 text-xs font-semibold">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Name and Surname</span>
          <span className="text-slate-850 mt-1">Roberto Marini</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tax ID code</span>
          <span className="text-slate-700 mt-1">RSSMRA85M01H501Z</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Date of birth</span>
          <span className="text-slate-700 mt-1">01/03/1985</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Place of birth</span>
          <span className="text-slate-700 mt-1">Milan (MI)</span>
        </div>
        <div className="flex flex-col col-span-1 md:col-span-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Residence</span>
          <span className="text-slate-700 mt-1">Via Giuseppe Verdi 123, 20121 Milan (MI)</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Appointment Date</span>
          <span className="text-slate-700 mt-1">15/03/2020</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ownership Percentage</span>
          <span className="text-slate-700 mt-1">100%</span>
        </div>
      </div>
    </div>
  );
}
