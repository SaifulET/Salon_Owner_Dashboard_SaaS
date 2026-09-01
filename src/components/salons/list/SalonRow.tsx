import React from "react";
import { Salon } from "../types";
import { StarIcon, ClockIcon, CheckIcon, VerticalDotsIcon } from "../icons/SalonIcons";
import ActionMenu from "./ActionMenu";
import SalonRowNameCell from "./SalonRowNameCell";

interface SalonRowProps {
  salon: Salon;
  index: number;
  isChecked: boolean;
  activeActionMenuId: string | null;
  paginatedSalonsLength: number;
  menuRef: React.RefObject<HTMLDivElement | null>;
  handleSelectRow: (id: string) => void;
  setSelectedSalonId: (id: string | null) => void;
  handleImpersonate: (id: string) => void;
  setMailsSentSalonId: (id: string | null) => void;
  setResetPasswordSalonId: (id: string | null) => void;
  setSuspendSalonId: (id: string | null) => void;
  setDeleteSalonId: (id: string | null) => void;
  setActiveActionMenuId: (id: string | null) => void;
}

export default function SalonRow({
  salon, index, isChecked, activeActionMenuId, paginatedSalonsLength, menuRef,
  handleSelectRow, setSelectedSalonId, handleImpersonate, setMailsSentSalonId,
  setResetPasswordSalonId, setSuspendSalonId, setDeleteSalonId, setActiveActionMenuId
}: SalonRowProps) {
  const getStatusClass = (st: string) => {
    if (st === "Active") return "bg-[#eefcf5] text-[#10b981]";
    if (st === "Trial") return "bg-[#e6fcf9] text-[#14b8a6]";
    if (st === "Cancelled") return "bg-[#f1f5f9] text-[#64748b]";
    if (st === "Leads") return "bg-[#f2f1ff] text-[#5e53fc]";
    if (st === "Past Due") return "bg-[#fff0f3] text-[#f43f5e]";
    return "bg-slate-100 text-slate-400";
  };

  return (
    <tr className={`hover:bg-slate-50/30 transition-colors ${isChecked ? "bg-indigo-50/10" : ""}`}>
      <td className="p-4 text-center">
        <input type="checkbox" checked={isChecked} onChange={() => handleSelectRow(salon.id)} className="w-4 h-4 text-[#5e53fc] border-slate-300 rounded focus:ring-[#5e53fc] cursor-pointer" />
      </td>
      <td className="p-4"><SalonRowNameCell salon={salon} setSelectedSalonId={setSelectedSalonId} /></td>
      <td className="p-4"><span className={`inline-flex px-2.5 py-1 text-[10px] font-bold rounded-xl uppercase tracking-wide ${getStatusClass(salon.status)}`}>{salon.status}</span></td>
      <td className="p-4">
        {salon.plan === "Basic" && <span className="inline-flex px-2.5 py-1 text-[10px] font-bold rounded-xl bg-[#f3f4f6] text-[#4b5563] uppercase">Basic</span>}
        {salon.plan === "Premium" && <span className="inline-flex px-2.5 py-1 text-[10px] font-bold rounded-xl bg-[#e0f2fe] text-[#0369a1] uppercase">Premium</span>}
        {salon.plan === "Enterprise" && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold rounded-xl bg-[#5e53fc] text-white uppercase shadow-sm">
            <StarIcon /><span>Enterprise</span>
          </span>
        )}
      </td>
      <td className="p-4">
        <div className="flex flex-col whitespace-nowrap">
          <span className="text-sm font-bold text-slate-800 leading-none">{salon.revenue}</span>
          <span className="text-[10px] text-slate-400 font-semibold mt-0.5">LTV: {salon.ltv}</span>
        </div>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-1.5 text-slate-500 font-semibold text-xs whitespace-nowrap">
          <ClockIcon /><span>{salon.lastActive}</span>
        </div>
      </td>
      <td className="p-4">
        {salon.hasTicket ? (
          <span className="inline-flex px-2 py-0.5 text-[9px] font-bold rounded-full bg-rose-500 text-white uppercase tracking-wide">1 ticket</span>
        ) : (
          <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center"><CheckIcon /></div>
        )}
      </td>
      <td className={`p-4 text-center relative ${activeActionMenuId === salon.id ? "z-50" : ""}`}>
        <button onClick={() => setActiveActionMenuId(activeActionMenuId === salon.id ? null : salon.id)} className="p-2 bg-slate-50 text-slate-400 hover:bg-slate-100 hover:text-slate-600 rounded-xl transition-colors inline-flex cursor-pointer">
          <VerticalDotsIcon />
        </button>
        {activeActionMenuId === salon.id && (
          <ActionMenu
            salon={salon} index={index} paginatedSalonsLength={paginatedSalonsLength} menuRef={menuRef}
            setSelectedSalonId={setSelectedSalonId} handleImpersonate={handleImpersonate}
            setMailsSentSalonId={setMailsSentSalonId} setResetPasswordSalonId={setResetPasswordSalonId}
            setSuspendSalonId={setSuspendSalonId} setDeleteSalonId={setDeleteSalonId} setActiveActionMenuId={setActiveActionMenuId}
          />
        )}
      </td>
    </tr>
  );
}
