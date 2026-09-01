import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface AddEditMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  editingMemberId: string | null;
  name: string;
  setName: (val: string) => void;
  type: string;
  setType: (val: string) => void;
  role: string;
  setRole: (val: string) => void;
  possession: string;
  setPossession: (val: string) => void;
  cfPiva: string;
  setCfPiva: (val: string) => void;
  dob: string;
  setDob: (val: string) => void;
  pob: string;
  setPob: (val: string) => void;
  residence: string;
  setResidence: (val: string) => void;
}

export default function AddEditMemberModal({
  isOpen, onClose, onSubmit, editingMemberId,
  name, setName, type, setType, role, setRole, possession, setPossession,
  cfPiva, setCfPiva, dob, setDob, pob, setPob, residence, setResidence
}: AddEditMemberModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-800 font-sans">{editingMemberId ? "Edit Member" : "Add Member"}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} />
          </button>
        </div>
        <form onSubmit={onSubmit} className="p-6 flex flex-col gap-4 max-h-[75vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-650">Full Name *</label>
              <input type="text" required value={name} onChange={e => setName(e.target.value)} placeholder="e.g. Roberto Marini" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-650">Type *</label>
              <div className="relative">
                <select value={type} onChange={e => setType(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-705 bg-white appearance-none cursor-pointer">
                  <option value="Natural Person">Natural Person</option>
                  <option value="Legal Entity">Legal Entity</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"><HugeiconsIcon icon={ArrowDown01Icon} size={14} /></div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-650">Role *</label>
              <input type="text" required value={role} onChange={e => setRole(e.target.value)} placeholder="e.g. Stylist / Sole Director" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-655">Ownership % *</label>
              <input type="text" required value={possession} onChange={e => setPossession(e.target.value)} placeholder="e.g. 100%" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-650">CF/P.IVA *</label>
              <input type="text" required value={cfPiva} onChange={e => setCfPiva(e.target.value)} placeholder="CF/P.IVA code" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-650">Date of Birth *</label>
              <input type="date" required value={dob} onChange={e => setDob(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 cursor-pointer" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-655">Place of Birth *</label>
              <input type="text" required value={pob} onChange={e => setPob(e.target.value)} placeholder="Place of birth" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-650">Residence Address *</label>
              <input type="text" required value={residence} onChange={e => setResidence(e.target.value)} placeholder="Full residence address" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
            <button type="button" onClick={onClose} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold transition-all cursor-pointer">Cancel</button>
            <button type="submit" className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md cursor-pointer">{editingMemberId ? "Save Changes" : "Add Member"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
