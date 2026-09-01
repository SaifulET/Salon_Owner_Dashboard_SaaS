import React from "react";

interface DeleteStageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteStageModal({ isOpen, onClose, onConfirm }: DeleteStageModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-[521px] min-h-[182px] max-h-[90vh] overflow-y-auto bg-white rounded-xl shadow-[0px_16px_32px_-8px_rgba(12,12,13,0.4)] p-6 flex flex-col justify-between animate-in scale-in-95 duration-100 text-left font-sans">
        <div className="flex flex-col gap-2">
          <h3 className="text-[18px] font-semibold leading-[25px] text-[#29343D]">
            Are you sure you want to delete this Stage?
          </h3>
          <p className="text-[14px] leading-5 text-[#526B7A]">
            You are deleting both the stage and all the automations associated with it. This action cannot be undone.
          </p>
        </div>

        <div className="flex justify-end gap-[10px] mt-4">
          <button
            type="button"
            onClick={onClose}
            className="h-9 px-[22px] bg-[#F6F7F9] text-[12px] font-medium leading-4 text-[#0A2540] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="h-9 px-4 bg-[#FFE5ED] text-[12px] font-medium leading-4 text-[#FF6692] hover:bg-[#ffd1de] rounded-lg transition-colors cursor-pointer"
          >
            Delete Stage
          </button>
        </div>
      </div>
    </div>
  );
}
