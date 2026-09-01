import React from "react";
import { SalonInAudience, Audience } from "./types";
import { TrashIcon, CloseIcon, renderSalonLogo } from "./icons";

interface AudienceSalonsModalProps {
  audience: Audience;
  salons: SalonInAudience[];
  onClose: () => void;
  onOpenAddSalon: () => void;
  onRemoveSalon: (salonId: string) => void;
}

export default function AudienceSalonsModal({ audience, salons, onClose, onOpenAddSalon, onRemoveSalon }: AudienceSalonsModalProps) {
  return (
    <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[160] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-[900px] max-w-full flex flex-col gap-6 p-6 text-left border border-[#E0E6EB] max-h-[85vh] overflow-hidden">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-lg text-[#29343D]">Salons in {audience.name}</h3>
          <button type="button" onClick={onClose} className="p-1 text-slate-400 hover:text-slate-600"><CloseIcon /></button>
        </div>

        <div className="flex justify-start">
          <button type="button" onClick={onOpenAddSalon} className="px-4 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">
            Add Salon
          </button>
        </div>

        <div className="border border-[#E0E6EB] rounded-xl overflow-y-auto max-h-[350px]">
          <table className="w-full border-collapse text-left text-xs">
            <thead className="bg-[#F3F3FF] border-b border-[#E0E6EB] text-[#29343D] font-bold sticky top-0">
              <tr>
                <th className="px-6 py-3.5">Salon Name</th>
                <th className="px-6 py-3.5">Plan</th>
                <th className="px-6 py-3.5">Last Active</th>
                <th className="px-6 py-3.5 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E0E6EB] font-semibold text-slate-700">
              {salons.map((salon) => (
                <tr key={salon.id} className="hover:bg-slate-50">
                  <td className="px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      {renderSalonLogo(salon.name)}
                      <div><div className="font-bold text-[#29343D]">{salon.name}</div><div className="text-[11px] text-slate-400">{salon.manager} &bull; {salon.city}</div></div>
                    </div>
                  </td>
                  <td className="px-6 py-3.5"><span className="px-2.5 py-1 rounded text-[10px] font-bold bg-indigo-50 text-[#635BFF]">{salon.plan}</span></td>
                  <td className="px-6 py-3.5 text-slate-500">{salon.lastActive}</td>
                  <td className="px-6 py-3.5 text-center">
                    <button type="button" onClick={() => onRemoveSalon(salon.id)} className="p-2 bg-[#FFE5ED] text-[#FF6692] hover:bg-[#ffd1de] rounded-lg transition-colors cursor-pointer"><TrashIcon /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
