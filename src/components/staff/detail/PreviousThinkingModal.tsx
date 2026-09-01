import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";

interface PreviousThinkingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialThinking: string;
  onSave: (thinking: string) => void;
}

export default function PreviousThinkingModal({
  isOpen,
  onClose,
  initialThinking,
  onSave
}: PreviousThinkingModalProps) {
  const [thinking, setThinking] = useState(initialThinking);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(thinking);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left font-semibold text-xs font-sans">
        <div className="px-8 pt-8 pb-5 border-b border-slate-100 flex flex-col relative">
          <button type="button" onClick={onClose} className="absolute right-6 top-6 p-1.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} />
          </button>
          <h3 className="text-lg font-bold text-slate-800 font-sans">Previous Thinking</h3>
        </div>
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-8 py-6 max-h-[70vh] flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5e53fc] block mb-1">Thoughts & Decisions</span>
            <textarea value={thinking} onChange={(e) => setThinking(e.target.value)} placeholder="Record previous design decisions, notes, or rationale..." className="w-full h-48 border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl p-2.5 text-xs text-slate-705 font-semibold" />
          </div>
          <div className="flex justify-end mt-4 pt-4 border-t border-slate-100">
            <button type="submit" className="px-6 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer">Save Thoughts</button>
          </div>
        </form>
      </div>
    </div>
  );
}
