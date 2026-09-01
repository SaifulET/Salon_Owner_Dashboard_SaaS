import React, { useState } from "react";
import { Announcement } from "./types";
import { CloseIcon } from "./icons";

interface NewAnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (announcement: Announcement) => void;
}

export default function NewAnnouncementModal({ isOpen, onClose, onCreate }: NewAnnouncementModalProps) {
  const [step, setStep] = useState<1 | 2>(1);
  const [title, setTitle] = useState("");
  const [audience, setAudience] = useState("all");
  const [channel, setChannel] = useState("Email & Dashboard");
  const [message, setMessage] = useState("");
  const [type, setType] = useState<Announcement["type"]>("Alert");
  const [category, setCategory] = useState<Announcement["category"]>("Sent");

  if (!isOpen) return null;

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate({
      id: `ann-${Date.now()}`,
      title,
      audience,
      channel,
      date: new Date().toLocaleDateString("en-US"),
      status: category || "Sent",
      message,
      type,
      category,
      sentCount: category === "Sent" ? 25 : 0,
      openedCount: category === "Sent" ? 18 : 0,
      timeAgo: "Just now"
    });
    setStep(1);
    setTitle("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[150] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-[550px] max-w-full flex flex-col gap-4 p-6 text-left border border-[#E0E6EB]">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="font-bold text-lg text-[#29343D]">New Broadcast Announcement (Step {step} of 2)</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><CloseIcon /></button>
        </div>

        {step === 1 ? (
          <div className="flex flex-col gap-3 text-xs">
            <div><label className="text-slate-400 block text-[11px] mb-1">Title *</label><input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required placeholder="Announcement title" className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs outline-none" /></div>
            <div>
              <label className="text-slate-400 block text-[11px] mb-1">Target Audience</label>
              <select value={audience} onChange={(e) => setAudience(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
                <option value="all">All Salons & Tenants</option><option value="plan_specific">Premium & Enterprise Only</option>
              </select>
            </div>
            <div>
              <label className="text-slate-400 block text-[11px] mb-1">Delivery Channel</label>
              <select value={channel} onChange={(e) => setChannel(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
                <option value="Email & Dashboard">Email & In-App Dashboard</option><option value="Email">Email Only</option><option value="Dashboard">Dashboard Notification Only</option>
              </select>
            </div>
            <div><label className="text-slate-400 block text-[11px] mb-1">Announcement Body *</label><textarea rows={3} value={message} onChange={(e) => setMessage(e.target.value)} required placeholder="Write message..." className="w-full p-2.5 border border-[#E0E6EB] rounded-lg text-xs outline-none resize-none" /></div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer">Cancel</button>
              <button type="button" disabled={!title.trim() || !message.trim()} onClick={() => setStep(2)} className="px-5 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer disabled:opacity-50">Next: Settings</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleFinish} className="flex flex-col gap-3 text-xs">
            <div>
              <label className="text-slate-400 block text-[11px] mb-1">Announcement Type</label>
              <select value={type} onChange={(e) => setType(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
                {["Alert", "Maintenance", "New Feature", "Update"].map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label className="text-slate-400 block text-[11px] mb-1">Status Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
                {["Sent", "Scheduled", "Draft"].map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
              <button type="button" onClick={() => setStep(1)} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer">Back</button>
              <button type="submit" className="px-5 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">Publish Announcement</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
