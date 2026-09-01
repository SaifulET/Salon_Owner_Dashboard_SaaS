import React from "react";
import { Salon } from "../types";
import SalonRow from "./SalonRow";
import SalonTablePagination from "./SalonTablePagination";

interface SalonListTableProps {
  paginatedSalons: Salon[];
  selectedSalonIds: string[];
  activeActionMenuId: string | null;
  menuRef: React.RefObject<HTMLDivElement | null>;
  handleSelectAll: () => void;
  handleSelectRow: (id: string) => void;
  setSelectedSalonId: (id: string | null) => void;
  handleImpersonate: (id: string) => void;
  setMailsSentSalonId: (id: string | null) => void;
  setResetPasswordSalonId: (id: string | null) => void;
  setSuspendSalonId: (id: string | null) => void;
  setDeleteSalonId: (id: string | null) => void;
  setActiveActionMenuId: (id: string | null) => void;
  itemsPerPage: number;
  setItemsPerPage: (num: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  totalPages: number;
  startIndex: number;
}

export default function SalonListTable({
  paginatedSalons,
  selectedSalonIds,
  activeActionMenuId,
  menuRef,
  handleSelectAll,
  handleSelectRow,
  setSelectedSalonId,
  handleImpersonate,
  setMailsSentSalonId,
  setResetPasswordSalonId,
  setSuspendSalonId,
  setDeleteSalonId,
  setActiveActionMenuId,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  totalItems,
  totalPages,
  startIndex
}: SalonListTableProps) {
  const allChecked = paginatedSalons.length > 0 && paginatedSalons.every(s => selectedSalonIds.includes(s.id));

  return (
    <div className="bg-white rounded-xl shadow-[0_4px_18px_rgba(17,31,56,0.06)] overflow-hidden">
      <div className="overflow-x-auto min-h-[320px]">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/40 border-b border-slate-100">
              <th className="p-4 w-12 text-center">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={handleSelectAll}
                  className="w-4 h-4 text-[#5e53fc] border-slate-300 rounded focus:ring-[#5e53fc] cursor-pointer"
                />
              </th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Salon</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Status</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Plan</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Revenue</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Last Active</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">Support</th>
              <th className="p-4 text-xs font-bold uppercase tracking-wider text-slate-400 w-16 text-center whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedSalons.map((salon, index) => (
              <SalonRow
                key={salon.id}
                salon={salon}
                index={index}
                isChecked={selectedSalonIds.includes(salon.id)}
                activeActionMenuId={activeActionMenuId}
                paginatedSalonsLength={paginatedSalons.length}
                menuRef={menuRef}
                handleSelectRow={handleSelectRow}
                setSelectedSalonId={setSelectedSalonId}
                handleImpersonate={handleImpersonate}
                setMailsSentSalonId={setMailsSentSalonId}
                setResetPasswordSalonId={setResetPasswordSalonId}
                setSuspendSalonId={setSuspendSalonId}
                setDeleteSalonId={setDeleteSalonId}
                setActiveActionMenuId={setActiveActionMenuId}
              />
            ))}
            {paginatedSalons.length === 0 && (
              <tr>
                <td colSpan={8} className="p-12 text-center text-slate-400 font-semibold text-sm">
                  No salons match your selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <SalonTablePagination
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalItems={totalItems}
        totalPages={totalPages}
        startIndex={startIndex}
      />
    </div>
  );
}
