import React from "react";

interface SalonTablePaginationProps {
  itemsPerPage: number;
  setItemsPerPage: (num: number) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  totalPages: number;
  startIndex: number;
}

export default function SalonTablePagination({
  itemsPerPage,
  setItemsPerPage,
  currentPage,
  setCurrentPage,
  totalItems,
  totalPages,
  startIndex
}: SalonTablePaginationProps) {
  return (
    <div className="bg-slate-50/20 px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-end gap-4 border-t border-slate-100">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
        <span>Items per page:</span>
        <select
          value={itemsPerPage}
          onChange={(e) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
          className="bg-white border border-slate-200 hover:border-slate-300 rounded-xl px-2.5 py-1.5 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#5e53fc] cursor-pointer"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
      </div>
      <span className="text-xs font-semibold text-slate-500">
        {totalItems === 0 ? "0-0" : `${startIndex + 1}-${Math.min(startIndex + itemsPerPage, totalItems)}`} of {totalItems}
      </span>
      <div className="flex items-center gap-1">
        <button
          onClick={() => setCurrentPage(1)}
          disabled={currentPage === 1 || totalItems === 0}
          className="p-2 bg-white hover:bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-700 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-slate-400 rounded-xl transition-colors inline-flex cursor-pointer"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="11 17 6 12 11 7" />
            <polyline points="18 17 13 12 18 7" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1 || totalItems === 0}
          className="p-2 bg-white hover:bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-700 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-slate-400 rounded-xl transition-colors inline-flex cursor-pointer"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages || totalItems === 0}
          className="p-2 bg-white hover:bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-700 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-slate-400 rounded-xl transition-colors inline-flex cursor-pointer"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <button
          onClick={() => setCurrentPage(totalPages)}
          disabled={currentPage === totalPages || totalItems === 0}
          className="p-2 bg-white hover:bg-slate-50 border border-slate-100 text-slate-400 hover:text-slate-700 disabled:opacity-50 disabled:hover:bg-white disabled:hover:text-slate-400 rounded-xl transition-colors inline-flex cursor-pointer"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="13 17 18 12 13 7" />
            <polyline points="6 17 11 12 6 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
