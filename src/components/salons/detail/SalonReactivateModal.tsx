import React from "react";

interface SalonReactivateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function SalonReactivateModal({ isOpen, onClose, onConfirm }: SalonReactivateModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[480px] shadow-2xl p-8 flex flex-col gap-6 relative animate-in zoom-in-95 duration-200 text-left">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[#0f172a] tracking-tight font-sans">Reactive Profile</h3>
          <p className="text-sm text-[#475569] font-normal mt-1.5">Are you sure you want to reactive this profile?</p>
        </div>
        <div className="flex items-center justify-end gap-3 mt-4">
          <button type="button" onClick={onClose} className="px-6 py-2.5 bg-[#f8fafc] hover:bg-[#f1f5f9] text-[#475569] rounded-lg text-sm font-medium transition-all cursor-pointer">
            Cancel
          </button>
          <button type="button" onClick={onConfirm} className="px-6 py-2.5 bg-[#ecfeff] hover:bg-[#cffafe] text-[#0891b2] rounded-lg text-sm font-semibold transition-all cursor-pointer">
            Reactive Profile Now
          </button>
        </div>
      </div>
    </div>
  );
}
