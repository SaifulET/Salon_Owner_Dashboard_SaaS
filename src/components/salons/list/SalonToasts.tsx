import React from "react";

export interface ToastItem {
  id: number;
  message: string;
  type: "success" | "info" | "error";
}

interface SalonToastsProps {
  toasts: ToastItem[];
}

export default function SalonToasts({ toasts }: SalonToastsProps) {
  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[200] flex flex-col gap-3 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl border text-xs font-bold bg-white pointer-events-auto animate-in slide-in-from-right duration-250 ${
            toast.type === "success"
              ? "border-emerald-100"
              : toast.type === "error"
              ? "border-rose-100"
              : "border-[#e4e2ff]"
          }`}
        >
          {toast.type === "success" && (
            <div className="w-5 h-5 rounded-full bg-[#EBFAF0] text-[#36C76C] flex items-center justify-center">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          )}
          {toast.type === "error" && (
            <div className="w-5 h-5 rounded-full bg-[#FFE5ED] text-[#FF6692] flex items-center justify-center font-black font-sans leading-none">
              !
            </div>
          )}
          {toast.type === "info" && (
            <div className="w-5 h-5 rounded-full bg-[#F1F2FE] text-[#635BFF] flex items-center justify-center font-bold font-sans leading-none">
              i
            </div>
          )}
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
