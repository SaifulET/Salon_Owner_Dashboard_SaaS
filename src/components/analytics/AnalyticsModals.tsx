"use client";

import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import SalesModalContent from "./modals/SalesModalContent";
import SubscriptionsModalContent from "./modals/SubscriptionsModalContent";
import LeadsModalContent from "./modals/LeadsModalContent";
import SalonsModalContent from "./modals/SalonsModalContent";
import ChurnModalContent from "./modals/ChurnModalContent";

interface AnalyticsModalsProps {
  isOpen: boolean;
  type: "sales" | "subscriptions" | "leads" | "salons" | "churn" | null;
  onClose: () => void;
  onNavigate: (tab: string) => void;
}

export default function AnalyticsModals({ isOpen, type, onClose, onNavigate }: AnalyticsModalsProps) {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-[638px] w-full z-10 transform transition-all duration-300 animate-in zoom-in-95 relative p-6">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 p-1.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-700 transition-colors z-30 cursor-pointer"
          aria-label="Close modal"
        >
          <HugeiconsIcon icon={Cancel01Icon} size={18} />
        </button>

        <div className="max-h-[75vh] overflow-y-auto pr-1">
          {type === "sales" && <SalesModalContent onNavigate={onNavigate} onClose={onClose} />}
          {type === "subscriptions" && <SubscriptionsModalContent onNavigate={onNavigate} onClose={onClose} />}
          {type === "leads" && <LeadsModalContent onNavigate={onNavigate} onClose={onClose} />}
          {type === "salons" && <SalonsModalContent onNavigate={onNavigate} onClose={onClose} />}
          {type === "churn" && <ChurnModalContent onNavigate={onNavigate} onClose={onClose} />}
        </div>
      </div>
    </div>
  );
}
