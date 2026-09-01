import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ViewIcon, Mail01Icon } from "@hugeicons/core-free-icons";
import { ImpersonateIcon, KeyIcon, TrashIcon } from "../icons/SalonIcons";
import { Salon } from "../types";

interface ActionMenuProps {
  salon: Salon;
  index: number;
  paginatedSalonsLength: number;
  menuRef: React.RefObject<HTMLDivElement | null>;
  setSelectedSalonId: (id: string | null) => void;
  handleImpersonate: (id: string) => void;
  setMailsSentSalonId: (id: string | null) => void;
  setResetPasswordSalonId: (id: string | null) => void;
  setSuspendSalonId: (id: string | null) => void;
  setDeleteSalonId: (id: string | null) => void;
  setActiveActionMenuId: (id: string | null) => void;
}

export default function ActionMenu({
  salon,
  index,
  paginatedSalonsLength,
  menuRef,
  setSelectedSalonId,
  handleImpersonate,
  setMailsSentSalonId,
  setResetPasswordSalonId,
  setSuspendSalonId,
  setDeleteSalonId,
  setActiveActionMenuId
}: ActionMenuProps) {
  const isNearBottom = index >= paginatedSalonsLength - 2 && paginatedSalonsLength > 2;

  return (
    <div
      ref={menuRef}
      className={`absolute right-12 w-44 bg-white border border-[#eef2f6] rounded-2xl shadow-xl z-[100] p-2 flex flex-col gap-0.5 animate-in scale-in duration-100 ${
        isNearBottom ? "bottom-2 mb-1 origin-bottom-right" : "top-2 mt-1 origin-top-right"
      }`}
    >
      <button
        onClick={() => {
          setSelectedSalonId(salon.id);
          setActiveActionMenuId(null);
        }}
        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-xl transition-colors text-left"
      >
        <HugeiconsIcon icon={ViewIcon} size={14} className="text-slate-400" />
        View Details
      </button>
      <button
        onClick={() => handleImpersonate(salon.id)}
        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-xl transition-colors text-left"
      >
        <ImpersonateIcon />
        Impersonate
      </button>
      <button
        onClick={() => {
          setMailsSentSalonId(salon.id);
          setActiveActionMenuId(null);
        }}
        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-xl transition-colors text-left"
      >
        <HugeiconsIcon icon={Mail01Icon} size={14} className="text-slate-400" />
        Mails Sent
      </button>
      <button
        onClick={() => {
          setResetPasswordSalonId(salon.id);
          setActiveActionMenuId(null);
        }}
        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-800 rounded-xl transition-colors text-left"
      >
        <KeyIcon />
        Reset Password
      </button>
      <button
        onClick={() => {
          setSuspendSalonId(salon.id);
          setActiveActionMenuId(null);
        }}
        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-amber-600 hover:bg-amber-50 rounded-xl transition-colors text-left"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <circle cx="12" cy="12" r="10" />
          <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        </svg>
        Suspend
      </button>
      <button
        onClick={() => {
          setDeleteSalonId(salon.id);
          setActiveActionMenuId(null);
        }}
        className="flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors text-left border-t border-slate-100/60 mt-1 pt-1.5"
      >
        <TrashIcon />
        Delete
      </button>
    </div>
  );
}
