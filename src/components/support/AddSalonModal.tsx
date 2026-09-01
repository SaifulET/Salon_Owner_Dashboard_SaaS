import React, { useState } from "react";
import { AVAILABLE_SALONS } from "./mockData";
import { CloseIcon } from "./icons";

interface AddSalonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddSalon: (salon: typeof AVAILABLE_SALONS[0]) => void;
}

export default function AddSalonModal({ isOpen, onClose, onAddSalon }: AddSalonModalProps) {
  const [selectedId, setSelectedId] = useState(AVAILABLE_SALONS[0]?.id || "");
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const salon = AVAILABLE_SALONS.find((s) => s.id === selectedId);
    if (salon) {
      onAddSalon(salon);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[170] flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl w-[450px] max-w-full flex flex-col gap-6 p-6 text-left border border-[#E0E6EB]">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-[#29343D]">Add Salon to Audience</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><CloseIcon /></button>
        </div>

        <div className="flex flex-col gap-2 text-xs">
          <label className="text-slate-400 block text-[11px]">Select Salon *</label>
          <select value={selectedId} onChange={(e) => setSelectedId(e.target.value)} className="w-full h-10 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
            {AVAILABLE_SALONS.map((s) => <option key={s.id} value={s.id}>{s.name} ({s.city})</option>)}
          </select>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer">Cancel</button>
          <button type="submit" className="px-5 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">Add Salon</button>
        </div>
      </form>
    </div>
  );
}
