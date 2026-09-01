import React from "react";
import { SecurityData } from "./types";

interface SecurityTabProps {
  data: SecurityData;
  setData: React.Dispatch<React.SetStateAction<SecurityData>>;
  onOpenModal: (modal: "change_password" | "signout_all" | "2fa_step1_qr" | "recovery_email" | "recovery_phone") => void;
  onSave?: () => void;
}

export default function SecurityTab({ data, setData, onOpenModal, onSave }: SecurityTabProps) {
  return (
    <div className="flex flex-col gap-6 w-full font-sans text-left">
      <div className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-5">
        <h3 className="text-base font-bold text-[#29343D]">Authentication & Passwords</h3>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 gap-3">
          <div>
            <span className="text-xs font-bold text-slate-800 block">Password</span>
            <span className="text-[11px] text-slate-400">Last changed 3 months ago</span>
          </div>
          <button onClick={() => onOpenModal("change_password")} className="px-4 py-2 bg-white border border-[#E0E6EB] rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 cursor-pointer shadow-sm">
            Change Password
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 rounded-xl border border-slate-100 bg-slate-50 gap-3">
          <div>
            <span className="text-xs font-bold text-slate-800 block">Two-Factor Authentication (2FA)</span>
            <span className="text-[11px] text-slate-400">Add an extra layer of security with authenticator apps</span>
          </div>
          <button onClick={() => onOpenModal("2fa_step1_qr")} className="px-4 py-2 bg-[#635BFF] text-white rounded-lg text-xs font-bold hover:bg-[#5248E2] cursor-pointer shadow-sm">
            {data.twoFactorEnabled ? "Manage 2FA" : "Enable 2FA"}
          </button>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Recovery Options</h4>
          <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
            <div><span className="text-xs font-bold text-slate-800 block">Recovery Email</span><span className="text-[11px] text-slate-500">{data.recoveryEmail}</span></div>
            <button onClick={() => onOpenModal("recovery_email")} className="text-xs font-bold text-[#635BFF] hover:underline cursor-pointer">Edit</button>
          </div>
          <div className="flex items-center justify-between p-3 border border-slate-100 rounded-lg">
            <div><span className="text-xs font-bold text-slate-800 block">Recovery Phone</span><span className="text-[11px] text-slate-500">{data.recoveryPhone}</span></div>
            <button onClick={() => onOpenModal("recovery_phone")} className="text-xs font-bold text-[#635BFF] hover:underline cursor-pointer">Edit</button>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button onClick={onSave} className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] cursor-pointer shadow-sm">
            Save Security Settings
          </button>
        </div>
      </div>
    </div>
  );
}
