import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface EditFinancialModalProps {
  isOpen: boolean;
  onClose: () => void;
  turnover: string;
  editEmployees: string;
  editPlan: "Basic" | "Premium" | "Enterprise";
  onSave: (data: {
    turnover: string;
    editEmployees: string;
    editPlan: "Basic" | "Premium" | "Enterprise";
  }) => void;
}

export default function EditFinancialModal({
  isOpen,
  onClose,
  turnover,
  editEmployees,
  editPlan,
  onSave
}: EditFinancialModalProps) {
  const [turn, setTurn] = useState(turnover);
  const [emp, setEmp] = useState(editEmployees);
  const [plan, setPlan] = useState(editPlan);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ turnover: turn, editEmployees: emp, editPlan: plan });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between font-bold text-slate-800">
          <h3 className="text-base font-sans">Edit Financial Indicators</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-655 cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 font-semibold text-xs">
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-600 font-bold">Last Year's Turnover *</label>
            <input type="text" required value={turn} onChange={e => setTurn(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-600 font-bold">Number of Employees</label>
              <div className="relative">
                <select value={emp} onChange={e => setEmp(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer">
                  <option value="1-5">1-5</option>
                  <option value="6-10">6-10</option>
                  <option value="12">12</option>
                  <option value="20+">20+</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-slate-600 font-bold">Current Plan</label>
              <div className="relative">
                <select value={plan} onChange={e => setPlan(e.target.value as any)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer">
                  <option value="Basic">Basic</option>
                  <option value="Premium">Premium</option>
                  <option value="Enterprise">Enterprise</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
                </div>
              </div>
            </div>
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
