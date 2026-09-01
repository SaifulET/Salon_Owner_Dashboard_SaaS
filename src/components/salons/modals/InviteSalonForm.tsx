import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface InviteSalonFormProps {
  onClose: () => void;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function InviteSalonForm({
  onClose,
  triggerToast
}: InviteSalonFormProps) {
  const [inviteSalonName, setInviteSalonName] = useState("");
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteInviter, setInviteInviter] = useState("Super admin name");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inviteSalonName || !inviteEmail) {
      triggerToast("Please fill in all required fields.", "error");
      return;
    }
    setInviteSalonName("");
    setInviteEmail("");
    triggerToast("Invitation sent successfully.", "success");
    onClose();
  };
  return (
    <div className="flex flex-col">
      <div className="px-8 pt-8 pb-5 border-b border-slate-100 flex flex-col relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-6 top-6 p-1 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors"
        >
          <HugeiconsIcon icon={Cancel01Icon} size={20} />
        </button>
        <h3 className="text-base font-bold text-slate-800">Invite Salon</h3>
        <p className="text-xs font-semibold text-[#8a99a8] mt-1">Send invitation to the owner</p>
      </div>

      <form onSubmit={handleSubmit} className="px-8 pb-8 pt-6 flex flex-col gap-5">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600">Salon's Name *</label>
            <input
              type="text"
              required
              placeholder="Enter salon's name"
              value={inviteSalonName}
              onChange={(e) => setInviteSalonName(e.target.value)}
              className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 placeholder:text-slate-300"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-600">Salon's Email *</label>
            <input
              type="email"
              required
              placeholder="Enter salon's email"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 placeholder:text-slate-300"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Inviter</label>
          <div className="relative">
            <select
              value={inviteInviter}
              onChange={(e) => setInviteInviter(e.target.value)}
              className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-3 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer"
            >
              <option value="Super admin name">Super admin name</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md shadow-indigo-100 transition-all animate-in cursor-pointer"
          >
            Send Invitation
          </button>
        </div>
      </form>
    </div>
  );
}
