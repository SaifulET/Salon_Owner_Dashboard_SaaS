import React, { useState, useEffect } from "react";
import { CloseIcon } from "./icons";

interface AddNoteModalProps {
  isOpen: boolean;
  initialNote?: { author: string; message: string; type: "note" | "resolution" } | null;
  onClose: () => void;
  onSave: (message: string, type: "note" | "resolution") => void;
}

export default function AddNoteModal({ isOpen, initialNote, onClose, onSave }: AddNoteModalProps) {
  const [message, setMessage] = useState("");
  const [type, setType] = useState<"note" | "resolution">("note");

  useEffect(() => {
    if (initialNote) {
      setMessage(initialNote.message);
      setType(initialNote.type);
    } else {
      setMessage("");
      setType("note");
    }
  }, [initialNote, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    onSave(message, type);
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl w-[500px] max-w-full flex flex-col gap-5 p-6 text-left border border-[#E0E6EB]">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-lg text-[#29343D]">{initialNote ? "Edit Internal Note" : "Add Internal Note"}</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><CloseIcon /></button>
        </div>

        <div className="flex flex-col gap-3 text-xs">
          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Note Type</label>
            <select value={type} onChange={(e) => setType(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
              <option value="note">Internal Team Note</option>
              <option value="resolution">Issue Resolution</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 block text-[11px] mb-1">Note Message *</label>
            <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Add private note for team members..." className="w-full p-3 border border-[#E0E6EB] rounded-lg text-xs outline-none focus:border-[#635BFF] resize-none" />
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer">Cancel</button>
          <button type="submit" className="px-5 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">Save Note</button>
        </div>
      </form>
    </div>
  );
}
