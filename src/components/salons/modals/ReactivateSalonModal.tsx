import React from "react";
import { Salon } from "../types";

interface ReactivateSalonModalProps {
  isOpen: boolean;
  onClose: () => void;
  salonId: string | null;
  setSalons: React.Dispatch<React.SetStateAction<Salon[]>>;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function ReactivateSalonModal({
  isOpen,
  onClose,
  salonId,
  setSalons,
  triggerToast
}: ReactivateSalonModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[480px] shadow-2xl p-8 flex flex-col gap-6 relative animate-in zoom-in-95 duration-200 text-left">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#0f172a] tracking-tight font-sans">Confirm Reactivation</h3>
          <p className="text-sm text-[#475569] font-normal mt-1">Are you sure you want to reactivate this salon?</p>
        </div>
        <div className="flex items-center justify-end gap-3 mt-4">
          <button onClick={onClose} className="px-6 py-2.5 bg-[#f8fafc] text-slate-600 rounded-xl text-sm font-medium cursor-pointer">
            Cancel
          </button>
          <button
            onClick={() => {
              setSalons(prev => prev.map(s => s.id === salonId ? { ...s, status: "Active" } : s));
              onClose();
              triggerToast("Salon profile reactivated successfully.", "success");
            }}
            className="px-6 py-2.5 bg-[#eefcf5] text-[#10b981] rounded-xl text-sm font-semibold cursor-pointer"
          >
            Reactivate
          </button>
        </div>
      </div>
    </div>
  );
}
