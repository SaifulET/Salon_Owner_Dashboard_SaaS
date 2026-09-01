import React from "react";
import { Salon } from "../types";

interface DeleteSalonModalProps {
  deleteSalonId: string | null;
  setDeleteSalonId: (id: string | null) => void;
  setSalons: React.Dispatch<React.SetStateAction<Salon[]>>;
  setSelectedSalonIds: React.Dispatch<React.SetStateAction<string[]>>;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function DeleteSalonModal({
  deleteSalonId,
  setDeleteSalonId,
  setSalons,
  setSelectedSalonIds,
  triggerToast
}: DeleteSalonModalProps) {
  if (deleteSalonId === null) return null;

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[480px] shadow-2xl p-8 flex flex-col gap-6 relative animate-in zoom-in-95 duration-200 text-left">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#0f172a] tracking-tight font-sans">Are you sure you want to delete this Salon?</h3>
          <p className="text-sm text-[#475569] font-normal mt-1">This action cannot be undone.</p>
        </div>
        <div className="flex items-center justify-end gap-3 mt-4">
          <button
            onClick={() => setDeleteSalonId(null)}
            className="px-6 py-2.5 bg-[#f8fafc] text-[#475569] rounded-xl text-sm font-medium cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setSalons(prev => prev.filter(s => s.id !== deleteSalonId));
              setSelectedSalonIds(prev => prev.filter(id => id !== deleteSalonId));
              setDeleteSalonId(null);
              triggerToast("Salon deleted successfully.", "success");
            }}
            className="px-6 py-2.5 bg-[#ffe4e6] text-[#ff4e73] rounded-xl text-sm font-semibold cursor-pointer"
          >
            Delete Salon
          </button>
        </div>
      </div>
    </div>
  );
}
