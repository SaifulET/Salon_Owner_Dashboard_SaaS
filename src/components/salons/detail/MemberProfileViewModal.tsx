import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { Member } from "../types";

interface MemberProfileViewModalProps {
  selectedMember: Member | null;
  onClose: () => void;
  onEdit: () => void;
}

export default function MemberProfileViewModal({
  selectedMember,
  onClose,
  onEdit
}: MemberProfileViewModalProps) {
  if (!selectedMember) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left font-semibold">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-800 font-sans">Member Profile Details</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} />
          </button>
        </div>
        <div className="p-6 flex flex-col gap-5 max-h-[70vh] overflow-y-auto">
          <div className="flex items-center gap-4 bg-slate-50/50 border border-slate-100 p-4 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-indigo-50 text-[#5e53fc] font-bold flex items-center justify-center text-sm font-sans uppercase">
              {selectedMember.name.charAt(0)}
            </div>
            <div className="flex flex-col">
              <h4 className="text-sm font-bold text-slate-800">{selectedMember.name}</h4>
              <span className="text-[10px] text-slate-400 font-semibold mt-0.5">{selectedMember.company}</span>
              <div className="flex items-center gap-1.5 mt-1.5">
                <span className="px-1.5 py-0.5 text-[8px] font-bold rounded bg-slate-105 border border-slate-200 text-slate-500 uppercase tracking-wide">
                  {selectedMember.type}
                </span>
                <span className="px-1.5 py-0.5 text-[8px] font-bold rounded-md bg-indigo-55 text-[#5e53fc] uppercase tracking-wide">
                  {selectedMember.role}
                </span>
              </div>
            </div>
          </div>
          <div className="border border-slate-100 rounded-2xl p-5 flex flex-col gap-4 text-xs">
            <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-50 pb-2">General Information</h5>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Date of birth</span>
                <span className="text-slate-700 mt-0.5">{selectedMember.dob}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Place of birth</span>
                <span className="text-slate-700 mt-0.5">{selectedMember.pob}</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Residence</span>
                <span className="text-slate-700 mt-0.5">{selectedMember.residence}</span>
              </div>
            </div>
          </div>
          <div className="border border-slate-100 rounded-2xl p-5 flex flex-col gap-4 text-xs">
            <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-50 pb-2">Business Information</h5>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Appointment Date</span>
                <span className="text-slate-700 mt-0.5">{selectedMember.appointmentDate}</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">Ownership Percentage</span>
                <span className="text-slate-700 mt-0.5">{selectedMember.possession}</span>
              </div>
              <div className="flex flex-col col-span-2">
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">CF/P.IVA</span>
                <span className="text-slate-700 mt-0.5">{selectedMember.cfPiva}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex justify-between items-center gap-3">
          <button onClick={onEdit} className="px-5 py-2.5 bg-indigo-50 text-[#5e53fc] hover:bg-indigo-100 rounded-xl text-xs font-bold transition-all cursor-pointer">
            Edit
          </button>
          <button onClick={onClose} className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md cursor-pointer">
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
