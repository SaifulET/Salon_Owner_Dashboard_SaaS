import React, { useState } from "react";
import { Audience } from "./types";
import { CloseIcon } from "./icons";

interface NewAudienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (audience: Audience) => void;
}

export default function NewAudienceModal({ isOpen, onClose, onCreate }: NewAudienceModalProps) {
  const [name, setName] = useState("");
  const [recipient, setRecipient] = useState<Audience["recipient"]>("Owner");
  const [status, setStatus] = useState<Audience["status"]>("Active");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    onCreate({
      id: `aud-${Date.now()}`,
      name,
      recipient,
      employeeCount: "Between a and b",
      age: "Between a and b",
      status,
      region: "Region 01",
      city: "City 01",
      province: "Province 01",
      socialMediaLinked: "No",
      hasWhatsappApi: "Yes",
      membershipType: "Premium"
    });
    setName("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl w-[450px] max-w-full flex flex-col gap-5 p-6 text-left border border-[#E0E6EB]">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-lg text-[#29343D]">Create Audience Segment</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><CloseIcon /></button>
        </div>

        <div className="flex flex-col gap-3 text-xs">
          <div><label className="text-slate-400 block text-[11px] mb-1">Audience Name *</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} required placeholder="e.g. VIP Milan Salon Owners" className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs outline-none" /></div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Recipient</label>
            <select value={recipient} onChange={(e) => setRecipient(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              {["All", "Owner", "Employee", "Accountants", "Clients"].map((r) => <option key={r} value={r}>{r}</option>)}
            </select>
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Membership Status</label>
            <select value={status} onChange={(e) => setStatus(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              {["All", "Active", "Cancelled", "Trial"].map((st) => <option key={st} value={st}>{st}</option>)}
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer">Cancel</button>
          <button type="submit" className="px-5 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">Create Audience</button>
        </div>
      </form>
    </div>
  );
}
