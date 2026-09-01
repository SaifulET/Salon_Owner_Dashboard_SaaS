import React, { useState } from "react";
import { CloseIcon } from "./icons";

interface AdvancedAudienceFiltersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: () => void;
}

export default function AdvancedAudienceFiltersModal({ isOpen, onClose, onApply }: AdvancedAudienceFiltersModalProps) {
  const [socialMedia, setSocialMedia] = useState("All");
  const [whatsappApi, setWhatsappApi] = useState("All");
  const [membershipType, setMembershipType] = useState("All");
  const [income, setIncome] = useState("All");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-[500px] max-w-full flex flex-col gap-6 p-6 text-left border border-[#E0E6EB]">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-lg text-[#29343D]">Advanced Audience Filters</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><CloseIcon /></button>
        </div>

        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Social Media Linked</label>
            <select value={socialMedia} onChange={(e) => setSocialMedia(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              {["All", "Yes", "No"].map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">WhatsApp API</label>
            <select value={whatsappApi} onChange={(e) => setWhatsappApi(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              {["All", "Yes", "No"].map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Membership Plan</label>
            <select value={membershipType} onChange={(e) => setMembershipType(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              {["All", "Basic", "Premium", "Enterprise"].map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Income Level</label>
            <select value={income} onChange={(e) => setIncome(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              {["All", "Low", "Medium", "High"].map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer">Cancel</button>
          <button type="button" onClick={() => { onApply(); onClose(); }} className="px-5 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">Apply Filters</button>
        </div>
      </div>
    </div>
  );
}
