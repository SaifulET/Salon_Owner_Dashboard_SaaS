import React from "react";
import { ArrowLeft } from "lucide-react";
import { Audience } from "./types";

interface AudienceDetailViewProps {
  audience: Audience;
  onBack: () => void;
  onOpenSalonsModal: () => void;
}

export default function AudienceDetailView({ audience, onBack, onOpenSalonsModal }: AudienceDetailViewProps) {
  return (
    <div className="flex flex-col gap-6 w-full text-left font-sans animate-in fade-in duration-200">
      <div className="flex items-center justify-between border-b border-[#E0E6EB] pb-4">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="p-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h2 className="text-lg font-bold text-[#29343D]">{audience.name}</h2>
            <p className="text-xs text-slate-400">Audience configuration and member characteristics</p>
          </div>
        </div>
        <button type="button" onClick={onOpenSalonsModal} className="px-4 py-2 bg-[#635BFF] text-white hover:bg-[#4d42eb] text-xs font-bold rounded-lg transition-colors cursor-pointer">
          View Salons in Audience
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        <div className="p-6 bg-white border border-[#E0E6EB] rounded-xl shadow-sm flex flex-col gap-4">
          <h3 className="text-sm font-bold text-[#29343D]">General Information</h3>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div><span className="text-slate-400 block text-[11px]">Recipient</span><span className="font-bold text-[#29343D]">{audience.recipient}</span></div>
            <div><span className="text-slate-400 block text-[11px]">Membership Status</span><span className="font-bold text-[#29343D]">{audience.status}</span></div>
            <div><span className="text-slate-400 block text-[11px]">Membership Type</span><span className="font-bold text-[#29343D]">{audience.membershipType || "All"}</span></div>
            <div><span className="text-slate-400 block text-[11px]">Clients Count</span><span className="font-bold text-[#29343D]">{audience.clientsNumber || "All"}</span></div>
          </div>
        </div>

        <div className="p-6 bg-white border border-[#E0E6EB] rounded-xl shadow-sm flex flex-col gap-4">
          <h3 className="text-sm font-bold text-[#29343D]">Member Characteristics</h3>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div><span className="text-slate-400 block text-[11px]">Number of Employees</span><span className="font-bold text-[#29343D]">{audience.employeeCount}</span></div>
            <div><span className="text-slate-400 block text-[11px]">Age Range</span><span className="font-bold text-[#29343D]">{audience.age}</span></div>
            <div><span className="text-slate-400 block text-[11px]">Income Level</span><span className="font-bold text-[#29343D]">{audience.income || "All"}</span></div>
            <div><span className="text-slate-400 block text-[11px]">WhatsApp API</span><span className="font-bold text-[#29343D]">{audience.hasWhatsappApi || "No"}</span></div>
          </div>
        </div>
      </div>
    </div>
  );
}
