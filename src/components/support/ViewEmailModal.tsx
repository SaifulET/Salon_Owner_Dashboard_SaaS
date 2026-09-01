import React from "react";
import { CloseIcon } from "./icons";

interface ViewEmailModalProps {
  email: { sender: string; message: string; date: string } | null;
  onClose: () => void;
}

export default function ViewEmailModal({ email, onClose }: ViewEmailModalProps) {
  if (!email) return null;

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-[600px] max-w-full flex flex-col gap-5 p-6 text-left border border-[#E0E6EB]">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-lg text-[#29343D]">Email Details</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><CloseIcon /></button>
        </div>

        <div className="flex flex-col gap-3 text-xs">
          <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
            <div><span className="text-slate-400 block text-[11px]">From</span><span className="font-bold text-[#635BFF]">{email.sender}</span></div>
            <div><span className="text-slate-400 block text-[11px]">Date</span><span className="font-semibold text-slate-700">{email.date}</span></div>
          </div>

          <div className="p-4 bg-white border border-[#E0E6EB] rounded-lg">
            <span className="text-slate-400 block text-[11px] mb-2 font-semibold">Message</span>
            <p className="text-xs text-slate-800 leading-relaxed whitespace-pre-line">{email.message}</p>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button type="button" onClick={onClose} className="px-5 py-2 bg-[#635BFF] text-white text-xs font-bold rounded-lg hover:bg-[#4d42eb] transition-colors cursor-pointer">Close</button>
        </div>
      </div>
    </div>
  );
}
