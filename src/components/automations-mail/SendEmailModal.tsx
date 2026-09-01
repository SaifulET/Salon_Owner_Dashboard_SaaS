import React, { useState } from "react";
import { NotificationItem } from "./types";

interface SendEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (newItem: NotificationItem) => void;
}

export default function SendEmailModal({ isOpen, onClose, onSend }: SendEmailModalProps) {
  const [recipient, setRecipient] = useState("Clients");
  const [category, setCategory] = useState("Marketing Campaigns");
  const [salon, setSalon] = useState("Bella Vista Salon");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newItem: NotificationItem = {
      id: `notif-${Date.now()}`,
      title,
      category,
      salon,
      date: new Date().toLocaleDateString("en-GB"),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      type: "Email",
      source: "Manual",
      status: "Sent",
      read: true,
      recipient,
      message: message || "Broadcast message dispatched to selected recipients.",
      operator: "Staff Admin"
    };

    onSend(newItem);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 font-sans animate-in fade-in">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl flex flex-col gap-4 text-left">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-base font-bold text-slate-800">Compose & Dispatch Email</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-500">Target Salon</label>
              <select value={salon} onChange={(e) => setSalon(e.target.value)} className="w-full h-9 border border-slate-200 rounded-lg px-2 text-xs font-semibold mt-1">
                <option value="Bella Vista Salon">Bella Vista Salon</option><option value="Elegant Touch Spa">Elegant Touch Spa</option><option value="Urban Chic Hair Studio">Urban Chic Hair Studio</option>
              </select>
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-500">Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full h-9 border border-slate-200 rounded-lg px-2 text-xs font-semibold mt-1">
                <option value="Marketing Campaigns">Marketing Campaigns</option><option value="Salon Operations">Salon Operations</option><option value="Accountant">Accountant</option>
              </select>
            </div>
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-500">Subject / Headline</label>
            <input required type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Exclusive Weekend Discount" className="w-full h-9 border border-slate-200 rounded-lg px-3 text-xs mt-1" />
          </div>

          <div>
            <label className="text-[11px] font-bold text-slate-500">Message Body</label>
            <textarea rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type email notification message..." className="w-full border border-slate-200 rounded-lg p-2.5 text-xs mt-1 resize-none" />
          </div>

          <div className="flex items-center justify-end gap-2 mt-2 pt-3 border-t border-slate-100">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 cursor-pointer">Cancel</button>
            <button type="submit" className="px-5 py-2 rounded-lg text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] cursor-pointer shadow-sm">Send Dispatch</button>
          </div>
        </form>
      </div>
    </div>
  );
}
