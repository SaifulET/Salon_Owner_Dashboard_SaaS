import React, { useState } from "react";
import { Employee } from "../types";

interface StaffTableProps {
  employees: Employee[];
  onViewDetails: (id: string) => void;
  onEdit: (emp: Employee) => void;
  onResetPassword: (id: string) => void;
  onSuspend: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function StaffTable({
  employees,
  onViewDetails,
  onEdit,
  onResetPassword,
  onSuspend,
  onDelete
}: StaffTableProps) {
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  const toggleMenu = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMenuId(prev => prev === id ? null : id);
  };

  return (
    <div className="overflow-x-auto w-full font-sans text-xs font-semibold text-[#283442] text-left">
      <table className="w-full border-collapse min-w-[800px]">
        <thead>
          <tr className="bg-slate-50/50 border-b border-slate-100 text-slate-400 font-bold uppercase tracking-widest text-[9px]">
            <th className="px-6 py-4">Name</th>
            <th className="px-6 py-4">Role</th>
            <th className="px-6 py-4">Status</th>
            <th className="px-6 py-4">Employment Status</th>
            <th className="px-6 py-4">Last Login</th>
            <th className="px-6 py-4 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-150/70">
          {employees.map((emp) => (
            <tr key={emp.id} onClick={() => onViewDetails(emp.id)} className="hover:bg-slate-50/30 transition-all cursor-pointer">
              <td className="px-6 py-4 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-indigo-50 text-[#5e53fc] font-bold flex items-center justify-center text-xs uppercase">{emp.firstName[0]}{emp.lastName[0]}</div>
                <div className="flex flex-col">
                  <span className="text-slate-800 font-bold">{emp.firstName} {emp.lastName}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{emp.email}</span>
                </div>
              </td>
              <td className="px-6 py-4 font-bold text-slate-700">{emp.role}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-0.5 rounded text-[8px] font-extrabold uppercase ${
                  emp.status === "Active" ? "bg-emerald-50 text-emerald-600" :
                  emp.status === "Pending" ? "bg-amber-50 text-amber-600" :
                  "bg-rose-50 text-rose-600"
                }`}>{emp.status}</span>
              </td>
              <td className="px-6 py-4 font-bold text-slate-700">{emp.employmentStatus}</td>
              <td className="px-6 py-4 text-slate-400 font-medium">{emp.lastLogin}</td>
              <td className="px-6 py-4 text-center relative" onClick={e => e.stopPropagation()}>
                <button onClick={(e) => toggleMenu(emp.id, e)} className="p-1 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 cursor-pointer">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="5" r="1.5" fill="currentColor" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /><circle cx="12" cy="19" r="1.5" fill="currentColor" /></svg>
                </button>
                {activeMenuId === emp.id && (
                  <>
                    <div className="fixed inset-0 z-10" onClick={() => setActiveMenuId(null)}></div>
                    <div className="absolute right-6 top-10 w-[180px] bg-white border border-slate-100 rounded-2xl shadow-xl py-1.5 z-20 text-left">
                      <button onClick={() => { onEdit(emp); setActiveMenuId(null); }} className="flex items-center gap-2.5 w-full px-4 py-2.5 hover:bg-slate-50 text-slate-600 font-semibold cursor-pointer">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                        Edit Employee
                      </button>
                      <button onClick={() => { onResetPassword(emp.id); setActiveMenuId(null); }} className="flex items-center gap-2.5 w-full px-4 py-2.5 hover:bg-slate-50 text-slate-600 font-semibold cursor-pointer">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                        Reset Password
                      </button>
                      <button onClick={() => { onSuspend(emp.id); setActiveMenuId(null); }} className="flex items-center gap-2.5 w-full px-4 py-2.5 hover:bg-slate-50 text-amber-600 font-bold cursor-pointer">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10" /><line x1="8" y1="12" x2="16" y2="12" /></svg>
                        Suspend
                      </button>
                      <button onClick={() => { onDelete(emp.id); setActiveMenuId(null); }} className="flex items-center gap-2.5 w-full px-4 py-2.5 hover:bg-slate-50 text-rose-600 font-bold cursor-pointer">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /></svg>
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
