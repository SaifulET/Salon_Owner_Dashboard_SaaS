import React from "react";
import WeeklyAppointmentsChart from "./WeeklyAppointmentsChart";
import RecentStampsTable, { Stamp } from "./RecentStampsTable";

export interface LoyalCustomer {
  name: string;
  appts: number;
  spent: string;
  lastAppt: string;
}

interface ActivityTabProps {
  stamps: Stamp[];
  loyalCustomers: LoyalCustomer[];
}

export default function ActivityTab({ stamps, loyalCustomers }: ActivityTabProps) {
  return (
    <div className="flex flex-col gap-6 w-full text-left font-semibold text-xs font-sans">
      <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-6 w-full">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-800">Analytics</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-[#e2dfff] rounded-3xl p-5 bg-[#f5f3ff] flex flex-col gap-1.5">
            <span className="text-[#5e53fc] text-[9px] font-extrabold uppercase tracking-wider">Appointments Completed (Last 30 days)</span>
            <span className="text-3xl font-black text-[#5e53fc] mt-1">45</span>
          </div>
          <div className="border border-[#ccfbf1] rounded-3xl p-5 bg-[#f0fdfa] flex flex-col gap-1.5">
            <span className="text-teal-600 text-[9px] font-extrabold uppercase tracking-wider">Appointments Booked Now (Last 30 days)</span>
            <span className="text-3xl font-black text-teal-600 mt-1">52</span>
          </div>
        </div>

        <WeeklyAppointmentsChart />

        <div className="flex flex-col gap-4 pt-6 border-t border-slate-100">
          <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Top 3 Services</h4>
          <div className="flex flex-col gap-3">
            {[
              { idx: 1, name: "Cut and Fold", sales: "35 sales" },
              { idx: 2, name: "Shampoo Treatment", sales: "25 sales" },
              { idx: 3, name: "Hair Coloring", sales: "15 sales" }
            ].map(item => (
              <div key={item.idx} className="flex items-center gap-3 justify-between p-3.5 border border-slate-50 rounded-2xl bg-slate-50/20">
                <span className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-indigo-50 text-[#5e53fc] font-bold text-xs flex items-center justify-center">{item.idx}</span>
                  <span className="text-xs font-bold text-slate-700">{item.name}</span>
                </span>
                <span className="text-xs font-extrabold text-[#5e53fc]">{item.sales}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <RecentStampsTable stamps={stamps} />

      <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col gap-4">
        <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider">Most Loyal Customers</h4>
        <div className="flex flex-col gap-3">
          {loyalCustomers.map((c, idx) => (
            <div key={idx} className="flex items-center gap-3 justify-between p-3.5 border border-slate-50 rounded-2xl">
              <span className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-lg bg-indigo-50 text-[#5e53fc] font-bold text-xs flex items-center justify-center">{idx + 1}</span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-slate-800">{c.name}</span>
                  <span className="text-[9px] text-slate-400 font-semibold mt-0.5">Last Visit: {c.lastAppt}</span>
                </div>
              </span>
              <div className="flex flex-col items-end">
                <span className="text-xs font-extrabold text-slate-800">{c.spent}</span>
                <span className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">{c.appts} appts</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col text-left">
          <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-5">Days Worked (Holidays)</h4>
          <div className="flex flex-col gap-3.5 text-xs font-semibold">
            <div className="flex items-center justify-between"><span className="text-slate-500">Matured</span><span className="text-slate-850 font-bold">22 days</span></div>
            <div className="flex items-center justify-between"><span className="text-slate-500">Enjoyed</span><span className="text-slate-850 font-bold">8 days</span></div>
          </div>
        </div>
        <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col text-left">
          <h4 className="text-xs font-extrabold text-slate-800 uppercase tracking-wider mb-5">Days Worked (Other Data)</h4>
          <div className="flex flex-col gap-3.5 text-xs font-semibold">
            <div className="flex items-center justify-between"><span className="text-slate-500">Sick Days</span><span className="text-slate-850 font-bold">2</span></div>
            <div className="flex items-center justify-between"><span className="text-slate-500">Next Evaluation</span><span className="text-slate-850 font-bold">March 14, 2025</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
