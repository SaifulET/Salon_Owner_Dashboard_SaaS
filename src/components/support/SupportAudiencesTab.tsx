import React, { useState } from "react";
import { Filter } from "lucide-react";
import { Audience } from "./types";
import { EyeIcon, TrashIcon } from "./icons";

interface SupportAudiencesTabProps {
  audiences: Audience[];
  onViewAudience: (audience: Audience) => void;
  onEditAudience: (audience: Audience) => void;
  onDeleteAudience: (audience: Audience) => void;
  onOpenAdvancedFilters: () => void;
}

export default function SupportAudiencesTab({
  audiences,
  onViewAudience,
  onEditAudience,
  onDeleteAudience,
  onOpenAdvancedFilters
}: SupportAudiencesTabProps) {
  const [recipientFilter, setRecipientFilter] = useState("All Recipient");
  const [employeesFilter, setEmployeesFilter] = useState("All");
  const [ageFilter, setAgeFilter] = useState("All Ages");

  const filteredAudiences = audiences.filter((aud) => {
    if (recipientFilter !== "All Recipient" && aud.recipient !== recipientFilter) return false;
    if (employeesFilter !== "All" && aud.employeeCount !== employeesFilter) return false;
    if (ageFilter !== "All Ages" && aud.age !== ageFilter) return false;
    return true;
  });

  return (
    <div className="flex flex-col gap-6 text-left w-full font-sans">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div className="flex flex-wrap items-center gap-3">
          <select value={recipientFilter} onChange={(e) => setRecipientFilter(e.target.value)} className="h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] outline-none cursor-pointer">
            {["All Recipient", "Owner", "Employee", "Accountants", "Clients"].map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <select value={employeesFilter} onChange={(e) => setEmployeesFilter(e.target.value)} className="h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] outline-none cursor-pointer">
            {["All", "Between a and b"].map((eVal) => <option key={eVal} value={eVal}>{eVal}</option>)}
          </select>
          <select value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)} className="h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] outline-none cursor-pointer">
            {["All Ages", "Between a and b"].map((a) => <option key={a} value={a}>{a}</option>)}
          </select>
          <button type="button" onClick={onOpenAdvancedFilters} className="w-9 h-9 border border-[#E0E6EB] hover:bg-slate-50 text-[#526B7A] rounded-lg flex items-center justify-center cursor-pointer" title="Advanced Filters">
            <Filter className="w-4 h-4" />
          </button>
        </div>
        <span className="text-xs font-bold text-slate-400">{filteredAudiences.length} Audiences</span>
      </div>

      <div className="border border-[#E0E6EB] rounded-xl overflow-x-auto w-full bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-xs min-w-[800px]">
          <thead>
            <tr className="bg-[#F3F3FF] border-b border-[#E0E6EB] text-[#29343D] font-bold h-[52px]">
              <th className="px-6 py-4 font-bold text-sm">Name of Audience</th>
              <th className="px-6 py-4 font-bold text-sm">Recipient</th>
              <th className="px-6 py-4 font-bold text-sm">Employees</th>
              <th className="px-6 py-4 font-bold text-sm">Age</th>
              <th className="px-6 py-4 font-bold text-sm">Status</th>
              <th className="px-6 py-4 text-center font-bold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E0E6EB] text-[#29343D] font-semibold">
            {filteredAudiences.map((aud, idx) => (
              <tr key={aud.id} className={`hover:bg-slate-50/70 transition-colors ${idx % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"}`}>
                <td className="px-6 py-4 font-bold text-[#29343D]">{aud.name}</td>
                <td className="px-6 py-4"><span className="px-2.5 py-1 rounded text-[10px] font-bold bg-indigo-50 text-[#635BFF]">{aud.recipient}</span></td>
                <td className="px-6 py-4"><span className="px-2.5 py-1 rounded text-[10px] font-bold bg-slate-100 text-slate-700">{aud.employeeCount}</span></td>
                <td className="px-6 py-4"><span className="px-2.5 py-1 rounded text-[10px] font-bold bg-amber-50 text-amber-600">{aud.age}</span></td>
                <td className="px-6 py-4"><span className="px-2.5 py-1 rounded text-[10px] font-bold bg-emerald-50 text-emerald-600">{aud.status}</span></td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => onViewAudience(aud)} className="p-2 bg-[#F1F2FE] text-[#635BFF] hover:bg-[#e0e2fe] rounded-lg transition-colors cursor-pointer" title="View details"><EyeIcon /></button>
                    <button onClick={() => onEditAudience(aud)} className="p-2 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer" title="Edit">✎</button>
                    <button onClick={() => onDeleteAudience(aud)} className="p-2 bg-[#FFE5ED] text-[#FF6692] hover:bg-[#ffd1de] rounded-lg transition-colors cursor-pointer" title="Delete"><TrashIcon /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
