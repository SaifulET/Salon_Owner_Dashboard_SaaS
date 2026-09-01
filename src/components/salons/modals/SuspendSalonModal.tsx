import React from "react";
import { Salon } from "../types";

interface SuspendSalonModalProps {
  suspendSalonId: string | null;
  setSuspendSalonId: (id: string | null) => void;
  setSalons: React.Dispatch<React.SetStateAction<Salon[]>>;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function SuspendSalonModal({
  suspendSalonId,
  setSuspendSalonId,
  setSalons,
  triggerToast
}: SuspendSalonModalProps) {
  if (suspendSalonId === null) return null;

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[480px] shadow-2xl p-8 flex flex-col gap-6 relative animate-in zoom-in-95 duration-200 text-left">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#0f172a] tracking-tight font-sans">Confirm Suspend Salon</h3>
          <p className="text-sm text-[#475569] font-normal mt-1">Are you sure you want to suspend this Salon?</p>
        </div>
        <div className="flex items-center justify-end gap-3 mt-4">
          <button
            onClick={() => setSuspendSalonId(null)}
            className="px-6 py-2.5 bg-[#f8fafc] text-[#475569] rounded-xl text-sm font-medium cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setSalons(prev => prev.map(s => s.id === suspendSalonId ? { ...s, status: "Cancelled" } : s));
              setSuspendSalonId(null);
              triggerToast("Salon suspended successfully.", "success");
            }}
            className="px-6 py-2.5 bg-[#fffbeb] text-[#d97706] rounded-xl text-sm font-semibold cursor-pointer"
          >
            Suspend Salon
          </button>
        </div>
      </div>
    </div>
  );
}
