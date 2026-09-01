import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import { PlusIcon } from "../icons/SalonIcons";
import { Member } from "../types";
import MajorityShareholderCard from "./MajorityShareholderCard";

interface MembersTabProps {
  membersList: Member[];
  setSelectedMember: (member: Member) => void;
  setIsAddMemberModalOpen: (open: boolean) => void;
}

export default function MembersTab({
  membersList,
  setSelectedMember,
  setIsAddMemberModalOpen
}: MembersTabProps) {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-200">
      {/* Staff Details Table */}
      <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 flex-wrap gap-4">
          <h3 className="text-sm font-bold text-slate-800 font-sans">Staff Details</h3>
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2 pr-10 text-xs font-semibold text-slate-650 bg-white appearance-none cursor-pointer">
                <option value="all">All Salons</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <HugeiconsIcon icon={ArrowDown01Icon} size={12} />
              </div>
            </div>

            <button
              onClick={() => setIsAddMemberModalOpen(true)}
              className="px-4 py-2 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
            >
              <PlusIcon />
              <span>Add Member</span>
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <th className="pb-3 pt-1 pl-2">Name and Surname</th>
                <th className="pb-3 pt-1">CF/P.IVA</th>
                <th className="pb-3 pt-1">Type</th>
                <th className="pb-3 pt-1">% Possession</th>
                <th className="pb-3 pt-1">Role</th>
                <th className="pb-3 pt-1 text-right pr-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-xs font-semibold">
              {membersList.map((m) => (
                <tr key={m.id} className="hover:bg-slate-50/50 transition-colors">
                  <td className="py-3.5 pl-2 font-bold text-slate-800">{m.name}</td>
                  <td className="py-3.5 text-slate-500">{m.cfPiva}</td>
                  <td className="py-3.5">
                    <span className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[9px] text-slate-500">
                      {m.type}
                    </span>
                  </td>
                  <td className="py-3.5 text-slate-750 font-bold">{m.possession}</td>
                  <td className="py-3.5">
                    <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-[#5e53fc] text-[9px] uppercase tracking-wide">
                      {m.role}
                    </span>
                  </td>
                  <td className="py-3.5 text-right pr-4">
                    <button
                      onClick={() => setSelectedMember(m)}
                      className="w-8 h-8 rounded-full bg-indigo-50 text-[#5e53fc] hover:bg-indigo-100 transition-colors inline-flex items-center justify-center cursor-pointer"
                      title="View Details"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <MajorityShareholderCard />
    </div>
  );
}
