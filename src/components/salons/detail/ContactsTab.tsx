import React from "react";
import { EditIcon } from "../icons/SalonIcons";

interface ContactsTabProps {
  contactPec: string;
  contactEmail: string;
  contactLandline: string;
  contactMobile: string;
  contactWebsite: string;
  setIsContactModalOpen: (open: boolean) => void;
}

export default function ContactsTab({
  contactPec,
  contactEmail,
  contactLandline,
  contactMobile,
  contactWebsite,
  setIsContactModalOpen
}: ContactsTabProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in duration-200">
      {/* Main Contacts */}
      <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-800 font-sans">Main Contacts</h3>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="text-[#5e53fc] hover:underline text-xs font-bold flex items-center gap-1 cursor-pointer"
          >
            <EditIcon />
            <span>Edit</span>
          </button>
        </div>

        <div className="flex flex-col gap-4 font-semibold">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">PEC</span>
            <span className="text-slate-700 text-xs mt-1">{contactPec}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Ordinary Email</span>
            <span className="text-slate-700 text-xs mt-1">{contactEmail}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Landline Phone</span>
            <span className="text-slate-700 text-xs mt-1">{contactLandline}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mobile Phone</span>
            <span className="text-slate-700 text-xs mt-1">{contactMobile}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Website</span>
            <a
              href={contactWebsite}
              target="_blank"
              rel="noreferrer"
              className="text-[#5e53fc] hover:underline text-xs font-bold mt-1 inline-flex items-center gap-1"
            >
              {contactWebsite}
            </a>
          </div>
        </div>
      </div>

      {/* Electronic Invoicing */}
      <div className="bg-white rounded-3xl p-6 border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] flex flex-col gap-5">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <h3 className="text-sm font-bold text-slate-800 font-sans">Electronic Invoicing</h3>
        </div>

        <div className="flex flex-col gap-4 font-semibold">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">SDI Recipient Code</span>
            <span className="text-slate-700 text-xs mt-1">BWC2023</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Tax Regime</span>
            <span className="text-slate-700 text-xs mt-1">RF01 - Ordinary</span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Customs Office Code</span>
            <span className="text-slate-700 text-xs mt-1">Not applicable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
