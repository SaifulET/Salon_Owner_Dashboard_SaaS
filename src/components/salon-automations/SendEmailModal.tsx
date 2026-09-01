import React, { useState } from "react";
import { AutomationEmail } from "./types";

interface SendEmailModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (email: AutomationEmail) => void;
}

export default function SendEmailModal({ isOpen, onClose, onSend }: SendEmailModalProps) {
  const [emailSubject, setEmailSubject] = useState("");
  const [emailType, setEmailType] = useState("Email");
  const [emailBody, setEmailBody] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSubject) return;
    const newMail: AutomationEmail = {
      date: new Date().toLocaleDateString("en-GB") + " " + new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }),
      subject: emailSubject,
      type: emailType,
      source: "Manual",
      category: "Sent"
    };
    onSend(newMail);
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[460px] shadow-2xl p-6 flex flex-col gap-5 relative animate-in zoom-in-95 duration-200 text-left">
        <h3 className="text-lg font-bold text-[#0f172a]">Send Email Communication</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
          <div className="flex flex-col gap-1.5">
            <label className="text-[#334155] font-semibold text-xs">Subject *</label>
            <input type="text" required value={emailSubject} onChange={(e) => setEmailSubject(e.target.value)} placeholder="e.g. Plan Renewal Reminder" className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc]" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[#334155] font-semibold text-xs">Message Type</label>
            <select value={emailType} onChange={(e) => setEmailType(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] bg-white text-xs font-semibold">
              <option value="Email">Email</option><option value="SMS">SMS</option><option value="Push">Push Notification</option>
            </select>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[#334155] font-semibold text-xs">Message Body</label>
            <textarea value={emailBody} onChange={(e) => setEmailBody(e.target.value)} placeholder="Write message details..." className="h-24 border border-slate-200 rounded-lg p-3 focus:outline-none focus:border-[#5e53fc] resize-none text-xs" />
          </div>
          <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
            <button type="button" onClick={onClose} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 rounded-xl text-xs font-bold transition-all cursor-pointer">Cancel</button>
            <button type="submit" className="px-5 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-150 cursor-pointer">Send Email</button>
          </div>
        </form>
      </div>
    </div>
  );
}
