import React, { useState } from "react";

interface TwoFactorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function TwoFactorModal({ isOpen, onClose, onSuccess }: TwoFactorModalProps) {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  if (!isOpen) return null;

  const handleChange = (index: number, val: string) => {
    if (val.length > 1) val = val.slice(-1);
    const newCode = [...code];
    newCode[index] = val;
    setCode(newCode);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs px-4">
      <div className="w-full max-w-[480px] rounded-xl bg-white p-6 shadow-2xl font-sans animate-in scale-in-95 duration-100 flex flex-col gap-4 text-center">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3 text-left">
          <h3 className="text-base font-bold text-[#29343D]">Two-Factor Authentication Setup</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
        </div>

        <p className="text-xs text-slate-500">Scan this QR code with your authenticator app (Google Authenticator, Authy):</p>
        
        <div className="w-36 h-36 mx-auto bg-slate-100 rounded-xl border border-slate-200 flex items-center justify-center text-4xl">
          📱
        </div>

        <span className="text-[11px] font-mono text-slate-400">Secret Key: ABCD-EFGH-IJKL-MNOP</span>

        <div className="flex justify-center gap-2 my-2">
          {code.map((c, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              value={c}
              onChange={(e) => handleChange(i, e.target.value)}
              className="w-10 h-11 text-center font-bold text-lg border border-[#E0E6EB] rounded-lg focus:border-[#635BFF] outline-none"
            />
          ))}
        </div>

        <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
          <button onClick={onClose} className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 rounded-lg">Cancel</button>
          <button onClick={() => { onSuccess(); onClose(); }} className="px-5 py-2 text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] rounded-lg shadow-sm">Verify & Activate</button>
        </div>
      </div>
    </div>
  );
}
