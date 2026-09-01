import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Mail01Icon } from "@hugeicons/core-free-icons";

interface AddSalonModalProps {
  isOpen: boolean;
  onClose: () => void;
  addModalStep: 1 | 2;
  setAddModalStep: (step: 1 | 2) => void;
  addModalType: "invite" | "manual" | null;
  setAddModalType: (type: "invite" | "manual" | null) => void;
  childrenStep2: React.ReactNode;
}

export default function AddSalonModal({
  isOpen,
  onClose,
  addModalStep,
  setAddModalStep,
  addModalType,
  setAddModalType,
  childrenStep2
}: AddSalonModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-[#0f172a]/45 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[24px] w-full max-w-[580px] shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200">
        {addModalStep === 1 ? (
          <>
            <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
              <h3 className="text-base font-bold text-slate-800">Add New Salon</h3>
              <button
                onClick={onClose}
                className="p-1 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors"
              >
                <HugeiconsIcon icon={Cancel01Icon} size={20} />
              </button>
            </div>
            <div className="p-6 flex flex-col gap-6">
              <div className="grid grid-cols-2 gap-4">
                <div
                  onClick={() => setAddModalType("invite")}
                  className={`border rounded-2xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-200 select-none ${
                    addModalType === "invite"
                      ? "border-[#5e53fc] bg-[#f9f8ff] ring-1 ring-[#5e53fc]"
                      : "border-slate-100 hover:border-slate-200 bg-white"
                  }`}
                >
                  <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center ${
                    addModalType === "invite" ? "bg-[#e2dfff] text-[#5e53fc]" : "bg-slate-50 text-slate-400"
                  }`}>
                    <HugeiconsIcon icon={Mail01Icon} size={40} />
                  </div>
                  <span className={`text-sm font-bold ${addModalType === "invite" ? "text-[#5e53fc]" : "text-slate-700"}`}>
                    Invite Salon
                  </span>
                </div>

                <div
                  onClick={() => setAddModalType("manual")}
                  className={`border rounded-2xl p-6 flex flex-col items-center text-center gap-4 cursor-pointer transition-all duration-200 select-none ${
                    addModalType === "manual"
                      ? "border-[#5e53fc] bg-[#f9f8ff] ring-1 ring-[#5e53fc]"
                      : "border-slate-100 hover:border-slate-200 bg-white"
                  }`}
                >
                  <div className={`w-[60px] h-[60px] rounded-full flex items-center justify-center ${
                    addModalType === "manual" ? "bg-[#e2dfff] text-[#5e53fc]" : "bg-slate-50 text-slate-400"
                  }`}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 20h9" />
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                    </svg>
                  </div>
                  <span className={`text-sm font-bold ${addModalType === "manual" ? "text-[#5e53fc]" : "text-slate-700"}`}>
                    Add Salon Manually
                  </span>
                </div>
              </div>

              <div className="flex justify-end mt-4">
                <button
                  disabled={addModalType === null}
                  onClick={() => setAddModalStep(2)}
                  className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white disabled:bg-slate-100 disabled:text-slate-400 rounded-2xl text-xs font-semibold shadow-md transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              </div>
            </div>
          </>
        ) : (
          childrenStep2
        )}
      </div>
    </div>
  );
}
