import React from "react";

interface DeleteTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function DeleteTicketModal({ isOpen, onClose, onConfirm }: DeleteTicketModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[400px] shadow-2xl p-6 flex flex-col gap-6 relative animate-in zoom-in-95 duration-200 text-left">
        <div className="flex flex-col gap-1.5">
          <h3 className="text-lg font-bold text-[#0f172a]">Delete Ticket</h3>
          <p className="text-sm text-[#475569]">Are you sure you want to delete this ticket? This action cannot be undone.</p>
        </div>
        <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="px-5 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold transition-all cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
