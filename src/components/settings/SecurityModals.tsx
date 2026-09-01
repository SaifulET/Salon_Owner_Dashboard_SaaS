import React, { useState } from "react";

interface SecurityModalsProps {
  activeModal: string | null;
  onClose: () => void;
  onSavePassword: () => void;
  onUpdateRecoveryEmail: (email: string) => void;
  onUpdateRecoveryPhone: (phone: string) => void;
}

export default function SecurityModals({
  activeModal,
  onClose,
  onSavePassword,
  onUpdateRecoveryEmail,
  onUpdateRecoveryPhone
}: SecurityModalsProps) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  if (!activeModal || activeModal.startsWith("2fa_")) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs px-4">
      <div className="w-full max-w-[480px] rounded-xl bg-white p-6 shadow-2xl font-sans animate-in scale-in-95 duration-100 flex flex-col gap-4 text-left">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-base font-bold text-[#29343D]">
            {activeModal === "change_password" ? "Change Password" : activeModal === "recovery_email" ? "Update Recovery Email" : "Update Recovery Phone"}
          </h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
        </div>

        {activeModal === "change_password" && (
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-500">Current Password</label>
              <input type="password" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} className="h-9 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-500">New Password</label>
              <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="h-9 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
            </div>
            <div>
              <label className="text-[11px] font-bold text-slate-500">Confirm New Password</label>
              <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="h-9 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 mt-2">
              <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">Cancel</button>
              <button onClick={() => { onSavePassword(); onClose(); }} className="px-5 py-2 text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] rounded-lg">Update Password</button>
            </div>
          </div>
        )}

        {activeModal === "recovery_email" && (
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-500">New Recovery Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="recovery@example.com" className="h-9 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 mt-2">
              <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">Cancel</button>
              <button onClick={() => { if (email) onUpdateRecoveryEmail(email); onClose(); }} className="px-5 py-2 text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] rounded-lg">Save Email</button>
            </div>
          </div>
        )}

        {activeModal === "recovery_phone" && (
          <div className="flex flex-col gap-3">
            <div>
              <label className="text-[11px] font-bold text-slate-500">New Recovery Phone</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+39 348 ..." className="h-9 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs mt-1" />
            </div>
            <div className="flex justify-end gap-2 pt-2 border-t border-slate-100 mt-2">
              <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">Cancel</button>
              <button onClick={() => { if (phone) onUpdateRecoveryPhone(phone); onClose(); }} className="px-5 py-2 text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] rounded-lg">Save Phone</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
