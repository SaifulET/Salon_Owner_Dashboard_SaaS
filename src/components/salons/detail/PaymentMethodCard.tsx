import React from "react";
import { PlusIcon, TrashIcon, CheckIcon } from "../icons/SalonIcons";

interface PaymentMethodCardProps {
  paymentMethods: any[];
  setPaymentMethods: React.Dispatch<React.SetStateAction<any[]>>;
  setIsPaymentModalOpen: (open: boolean) => void;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function PaymentMethodCard({
  paymentMethods,
  setPaymentMethods,
  setIsPaymentModalOpen,
  triggerToast
}: PaymentMethodCardProps) {
  const defaultMethod = paymentMethods.find(m => m.isDefault) || paymentMethods[0];

  const handleDelete = () => {
    if (paymentMethods.length > 1) {
      const activeMethod = paymentMethods.find(m => m.isDefault) || paymentMethods[0];
      setPaymentMethods(prev => prev.filter(p => p.id !== activeMethod.id));
      triggerToast("Payment method deleted successfully.", "success");
    } else {
      triggerToast("Cannot delete the only payment method.", "error");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5 relative">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-sm font-bold text-slate-800 font-sans">Subscription Payment Method</h3>
        
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="w-8 h-8 flex items-center justify-center bg-indigo-50 hover:bg-indigo-100 text-[#5e53fc] rounded-lg transition-all cursor-pointer"
            title="Add Payment Method"
          >
            <PlusIcon />
          </button>
          <button
            onClick={handleDelete}
            className="w-8 h-8 flex items-center justify-center bg-rose-50 hover:bg-rose-100 text-rose-500 rounded-lg transition-all cursor-pointer"
            title="Delete Payment Method"
          >
            <TrashIcon />
          </button>
          <div className="relative group">
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 hidden group-hover:flex flex-col items-center z-20">
              <span className="bg-[#00c9db] text-white text-[9px] font-extrabold px-2 py-1 rounded-md whitespace-nowrap shadow-sm">
                Mark as default
              </span>
              <span className="w-2.5 h-2.5 bg-[#00c9db] rotate-45 -mt-1.5" />
            </div>
            <button
              className="w-8 h-8 flex items-center justify-center bg-[#e6fcf9] hover:bg-[#d0faf4] text-[#0d9488] rounded-lg transition-all cursor-pointer"
            >
              <CheckIcon />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Default payment method</span>
            <span className="text-xs font-semibold text-slate-700 mt-1">{defaultMethod?.type || "Visa ending in ****1234"}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Billing currency</span>
            <span className="text-xs font-semibold text-slate-700 mt-1">Euro €</span>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Payment provider being used</span>
          <div className="mt-2.5">
            <div className="w-[50px] h-[30px] bg-[#0f172a] rounded-md flex flex-col items-center justify-center p-1 shadow-sm border border-slate-700">
              <span className="text-[10px] font-extrabold text-blue-400 italic tracking-wider uppercase">{defaultMethod?.provider || "visa"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
