import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

interface EditActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
  primaryAteco: string;
  secondaryAteco: string;
  corporateObject: string;
  onSave: (data: {
    primaryAteco: string;
    secondaryAteco: string;
    corporateObject: string;
  }) => void;
}

export default function EditActivityModal({
  isOpen,
  onClose,
  primaryAteco,
  secondaryAteco,
  corporateObject,
  onSave
}: EditActivityModalProps) {
  const [pAteco, setPAteco] = useState(primaryAteco);
  const [sAteco, setSAteco] = useState(secondaryAteco);
  const [corpObj, setCorpObj] = useState(corporateObject);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ primaryAteco: pAteco, secondaryAteco: sAteco, corporateObject: corpObj });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between font-bold text-slate-800">
          <h3 className="text-base font-sans">Edit Activity</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-650 cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 font-semibold text-xs">
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-600 font-bold">Primary ATECO Code *</label>
            <input type="text" required value={pAteco} onChange={e => setPAteco(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-slate-600 font-bold">Secondary ATECO Codes *</label>
            <input type="text" required value={sAteco} onChange={e => setSAteco(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-slate-600 font-bold">Description of Corporate Object *</label>
            <textarea required value={corpObj} onChange={e => setCorpObj(e.target.value)} rows={3} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" />
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
            <button type="button" onClick={onClose} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-655 rounded-xl text-xs font-semibold transition-all cursor-pointer">Cancel</button>
            <button type="submit" className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md cursor-pointer">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
