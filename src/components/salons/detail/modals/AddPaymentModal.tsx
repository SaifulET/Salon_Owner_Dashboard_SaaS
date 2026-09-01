import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface AddPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: {
    payMethod: string;
    cardNumber: string;
    payExpiry: string;
    payCvc: string;
    payProvider: string;
    payCurrency: string;
  }) => void;
}

export default function AddPaymentModal({
  isOpen,
  onClose,
  onAdd
}: AddPaymentModalProps) {
  const [payMethod, setPayMethod] = useState("Credit Card");
  const [cardNumber, setCardNumber] = useState("4321 0000 0000 1234");
  const [payExpiry, setPayExpiry] = useState("12/28");
  const [payCvc, setPayCvc] = useState("123");
  const [payProvider, setPayProvider] = useState("Visa");
  const [payCurrency, setPayCurrency] = useState("Euro €");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ payMethod, cardNumber, payExpiry, payCvc, payProvider, payCurrency });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between font-bold text-slate-800">
          <h3 className="text-base font-sans">Add Payment Method</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-655 cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 font-semibold text-xs">
          <div className="flex flex-col gap-1.5">
            <label className="text-slate-600 font-bold">Payment method *</label>
            <div className="relative">
              <select value={payMethod} onChange={e => setPayMethod(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer">
                <option value="Credit Card">Credit Card</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-slate-600 font-bold">Card Number *</label>
            <input type="text" required value={cardNumber} onChange={e => setCardNumber(e.target.value)} placeholder="0000 0000 0000 0000" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-600 font-bold">Expiration *</label>
              <input type="text" required value={payExpiry} onChange={e => setPayExpiry(e.target.value)} placeholder="MM/YY" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-slate-600 font-bold">CVC *</label>
              <input type="text" required value={payCvc} onChange={e => setPayCvc(e.target.value)} placeholder="CVC" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-slate-600 font-bold">Payment provider being used</label>
            <div className="relative">
              <select value={payProvider} onChange={e => setPayProvider(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer">
                <option value="Visa">Visa</option>
                <option value="Mastercard">Mastercard</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-slate-600 font-bold">Billing currency</label>
            <div className="relative">
              <select value={payCurrency} onChange={e => setPayCurrency(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer">
                <option value="Euro €">Euro €</option>
                <option value="US Dollar $">US Dollar $</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
            <button type="button" onClick={onClose} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-655 rounded-xl text-xs font-semibold transition-all cursor-pointer">Cancel</button>
            <button type="submit" className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md cursor-pointer">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
}
