import React, { useState } from "react";
import { CloseIcon } from "./icons";

interface SendEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (message: string) => void;
}

export default function SendEmailModal({ isOpen, onClose, onSend }: SendEmailModalProps) {
  const [message, setMessage] = useState("");
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl w-[550px] max-w-full flex flex-col gap-5 p-6 text-left border border-[#E0E6EB]">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-lg text-[#29343D]">Send Email Response</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><CloseIcon /></button>
        </div>

        <div className="flex flex-col gap-1.5 text-xs">
          <label className="text-slate-400 font-semibold">Message Body *</label>
          <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Type your response to the customer..." className="w-full p-3 border border-[#E0E6EB] rounded-lg text-xs outline-none focus:border-[#635BFF] resize-none" />
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer">Cancel</button>
          <button type="submit" className="px-5 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">Send Email</button>
        </div>
      </form>
    </div>
  );
}
