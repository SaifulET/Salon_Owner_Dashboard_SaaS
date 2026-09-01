import React, { useState } from "react";

interface ResetPasswordModalProps {
  resetPasswordSalonId: string | null;
  setResetPasswordSalonId: (id: string | null) => void;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function ResetPasswordModal({
  resetPasswordSalonId,
  setResetPasswordSalonId,
  triggerToast
}: ResetPasswordModalProps) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (resetPasswordSalonId === null) return null;

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[20px] w-full max-w-[480px] shadow-2xl p-8 flex flex-col gap-6 relative animate-in zoom-in-95 duration-200 text-left">
        <h3 className="text-xl font-bold text-[#0f172a] tracking-tight mb-2 font-sans">Reset Password</h3>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-700">New Password *</label>
            <input
              type="password"
              placeholder="Enter the new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-slate-700">Confirm New Password *</label>
            <input
              type="password"
              placeholder="Enter the new password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-end gap-3 mt-4">
          <button
            onClick={() => {
              setResetPasswordSalonId(null);
              setNewPassword("");
              setConfirmPassword("");
            }}
            className="px-6 py-2.5 bg-[#f8fafc] text-[#475569] rounded-xl text-sm font-medium cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (!newPassword || !confirmPassword) return triggerToast("Please fill in all fields.", "error");
              if (newPassword !== confirmPassword) return triggerToast("Passwords do not match.", "error");
              setResetPasswordSalonId(null);
              setNewPassword("");
              setConfirmPassword("");
              triggerToast("Password has been reset successfully.", "success");
            }}
            className="px-6 py-2.5 bg-[#5e53fc] text-white rounded-xl text-sm font-semibold shadow-md cursor-pointer"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}
