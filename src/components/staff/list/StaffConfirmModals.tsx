import React, { useState } from "react";
import { Employee } from "../types";

interface StaffConfirmModalsProps {
  employees: Employee[];
  deleteEmployeeId: string | null;
  setDeleteEmployeeId: (id: string | null) => void;
  onDeleteConfirm: (id: string) => void;
  suspendEmployeeId: string | null;
  setSuspendEmployeeId: (id: string | null) => void;
  onSuspendConfirm: (id: string) => void;
  resetPasswordEmployeeId: string | null;
  setResetPasswordEmployeeId: (id: string | null) => void;
  onResetPasswordConfirm: (id: string, pass: string) => void;
  triggerToast: (msg: string, type: "success" | "error" | "info") => void;
}

export default function StaffConfirmModals({
  employees,
  deleteEmployeeId,
  setDeleteEmployeeId,
  onDeleteConfirm,
  suspendEmployeeId,
  setSuspendEmployeeId,
  onSuspendConfirm,
  resetPasswordEmployeeId,
  setResetPasswordEmployeeId,
  onResetPasswordConfirm,
  triggerToast
}: StaffConfirmModalsProps) {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleResetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPassword || newPassword !== confirmPassword) {
      triggerToast("Passwords do not match or are empty.", "error");
      return;
    }
    if (resetPasswordEmployeeId) {
      onResetPasswordConfirm(resetPasswordEmployeeId, newPassword);
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  const deleteEmp = employees.find(e => e.id === deleteEmployeeId);
  const suspendEmp = employees.find(e => e.id === suspendEmployeeId);
  const resetEmp = employees.find(e => e.id === resetPasswordEmployeeId);

  return (
    <>
      {/* Delete Confirmation */}
      {deleteEmployeeId && deleteEmp && (
        <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[20px] w-full max-w-[440px] shadow-2xl p-6 flex flex-col gap-6 text-left font-sans text-xs font-semibold">
            <div className="flex flex-col gap-1.5">
              <h3 className="text-lg font-bold text-[#0f172a]">Delete Employee</h3>
              <p className="text-sm text-[#475569]">Are you sure you want to delete <strong>{deleteEmp.firstName} {deleteEmp.lastName}</strong>? This action cannot be undone.</p>
            </div>
            <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
              <button type="button" onClick={() => setDeleteEmployeeId(null)} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
              <button type="button" onClick={() => onDeleteConfirm(deleteEmployeeId)} className="px-5 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-xl text-xs font-bold cursor-pointer">Delete</button>
            </div>
          </div>
        </div>
      )}

      {/* Suspend Confirmation */}
      {suspendEmployeeId && suspendEmp && (() => {
        const isSuspended = suspendEmp.status === "Inactive";
        return (
          <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-[20px] w-full max-w-[440px] shadow-2xl p-6 flex flex-col gap-6 text-left font-sans text-xs font-semibold">
              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-bold text-[#0f172a]">{isSuspended ? "Reactivate" : "Suspend"} Employee</h3>
                <p className="text-sm text-[#475569]">Are you sure you want to {isSuspended ? "reactivate" : "suspend"} <strong>{suspendEmp.firstName} {suspendEmp.lastName}</strong>?</p>
              </div>
              <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4">
                <button type="button" onClick={() => setSuspendEmployeeId(null)} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                <button type="button" onClick={() => onSuspendConfirm(suspendEmployeeId)} className="px-5 py-2.5 bg-amber-50 hover:bg-amber-100 text-amber-600 rounded-xl text-xs font-bold cursor-pointer">{isSuspended ? "Reactivate" : "Suspend"}</button>
              </div>
            </div>
          </div>
        );
      })()}

      {/* Reset Password */}
      {resetPasswordEmployeeId && resetEmp && (
        <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-[20px] w-full max-w-[440px] shadow-2xl p-6 flex flex-col gap-5 text-left font-sans text-xs font-semibold">
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-bold text-[#0f172a]">Reset Password</h3>
              <p className="text-xs text-[#475569]">Reset password for {resetEmp.firstName} {resetEmp.lastName} ({resetEmp.email})</p>
            </div>
            <form onSubmit={handleResetSubmit} className="flex flex-col gap-4 text-sm">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#334155] font-semibold text-xs">New Password *</label>
                <input type="password" required value={newPassword} onChange={e => setNewPassword(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] text-xs font-semibold text-slate-800" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#334155] font-semibold text-xs">Confirm New Password *</label>
                <input type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] text-xs font-semibold text-slate-800" />
              </div>
              <div className="flex items-center justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
                <button type="button" onClick={() => setResetPasswordEmployeeId(null)} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 rounded-xl text-xs font-bold cursor-pointer">Cancel</button>
                <button type="submit" className="px-5 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer">Reset Password</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
