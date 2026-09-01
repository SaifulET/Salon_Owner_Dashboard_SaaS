import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon, ArrowDown01Icon } from "@hugeicons/core-free-icons";
import RecentActivityRow from "./RecentActivityRow";
import { ActivityDetail } from "./types";

interface RecentActivityTableProps {
  paginatedActivities: ActivityDetail[];
  selectedRows: string[];
  onSelectAll: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSelectRow: (id: string, checked: boolean) => void;
  itemsPerPage: number;
  setItemsPerPage: (val: number) => void;
  currentPage: number;
  setCurrentPage: (updater: (prev: number) => number) => void;
  totalPages: number;
  totalItems: number;
}

export default function RecentActivityTable({
  paginatedActivities,
  selectedRows,
  onSelectAll,
  onSelectRow,
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  totalPages,
  totalItems
}: RecentActivityTableProps) {
  return (
    <div className="bg-white rounded-3xl border border-[#eef2f6] shadow-[0_4px_20px_rgba(0,0,0,0.01)] overflow-hidden flex flex-col justify-between z-10">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#eef2f6] bg-slate-50/50">
              <th className="p-5 w-14">
                <input
                  type="checkbox"
                  checked={paginatedActivities.length > 0 && paginatedActivities.every(item => selectedRows.includes(item.id))}
                  onChange={onSelectAll}
                  className="w-4 h-4 rounded border-slate-300 text-[#5e53fc] focus:ring-[#5e53fc] cursor-pointer"
                />
              </th>
              <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wide">Salon</th>
              <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wide">Activity</th>
              <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wide">Price</th>
              <th className="p-5 text-sm font-bold text-slate-500 uppercase tracking-wide">Update</th>
            </tr>
          </thead>
          <tbody>
            {paginatedActivities.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center py-12 text-slate-400 font-medium text-sm">
                  No activity found for the selected filters.
                </td>
              </tr>
            ) : (
              paginatedActivities.map((item) => (
                <RecentActivityRow
                  key={item.id}
                  item={item}
                  isSelected={selectedRows.includes(item.id)}
                  onSelectRow={onSelectRow}
                />
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="p-5 border-t border-[#eef2f6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
        <div className="flex items-center gap-2">
          <span>Rows per page:</span>
          <div className="relative inline-block">
            <select
              value={itemsPerPage}
              onChange={(e) => { setItemsPerPage(Number(e.target.value)); setCurrentPage(() => 1); }}
              className="appearance-none bg-slate-50 border border-[#eef2f6] rounded-xl px-3 py-1.5 pr-7 text-xs font-bold text-slate-700 focus:outline-none focus:border-[#5e53fc] cursor-pointer"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
            </select>
            <HugeiconsIcon icon={ArrowDown01Icon} size={12} className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          </div>
          <span className="ml-2">
            Showing {totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl border border-[#eef2f6] text-slate-400 hover:text-slate-600 hover:bg-slate-50 disabled:opacity-40 transition-all cursor-pointer"
          >
            <HugeiconsIcon icon={ArrowLeft01Icon} size={14} />
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages || totalPages === 0}
            className="p-2 rounded-xl border border-[#eef2f6] text-slate-400 hover:text-slate-600 hover:bg-slate-50 disabled:opacity-40 transition-all cursor-pointer"
          >
            <HugeiconsIcon icon={ArrowRight01Icon} size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
