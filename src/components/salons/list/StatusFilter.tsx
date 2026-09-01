import React from "react";

interface StatusFilterProps {
  selectedStatus: string;
  setSelectedStatus: (status: string) => void;
  setCurrentPage: (page: number) => void;
  isStatusDropdownOpen: boolean;
  setIsStatusDropdownOpen: (open: boolean) => void;
  statusRef: React.RefObject<HTMLDivElement | null>;
}

export default function StatusFilter({
  selectedStatus,
  setSelectedStatus,
  setCurrentPage,
  isStatusDropdownOpen,
  setIsStatusDropdownOpen,
  statusRef
}: StatusFilterProps) {
  return (
    <div
      className="flex flex-col items-start p-0 gap-2 w-full sm:w-[219px] h-auto sm:h-[60px] flex-none order-0 grow-0 shrink-0 relative"
      ref={statusRef}
    >
      <div className="flex flex-row items-center p-0 gap-2 w-[63px] h-[16px] flex-none order-0 grow-0">
        <span className="w-[39px] h-[16px] font-['Manrope'] font-semibold text-[12px] leading-[16px] text-[#98A4AE] flex-none order-0 grow-0">
          Status
        </span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#526B7A" strokeWidth="2.5" className="flex-none order-1 grow-0">
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden sm:flex flex-row items-center p-0 gap-2 w-[219px] h-[36px] flex-none order-1 grow-0">
        {["All", "Active", "Cancelled"].map((status) => (
          <button
            key={status}
            type="button"
            onClick={() => {
              setSelectedStatus(status);
              setCurrentPage(1);
            }}
            className={`box-border flex flex-row justify-center items-center py-2.5 px-4 gap-2.5 h-[36px] rounded-[8px] flex-none transition-all font-['Manrope'] font-medium text-[12px] leading-[16px] text-center cursor-pointer ${
              selectedStatus === status
                ? "border border-[#635BFF] text-[#635BFF]"
                : "border border-[#EFF4FA] text-[#0A2540] hover:bg-slate-50"
            }`}
            style={{ width: status === "All" ? "46px" : status === "Active" ? "68px" : "89px" }}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="flex sm:hidden relative w-full h-[36px]">
        <button
          type="button"
          onClick={() => setIsStatusDropdownOpen(!isStatusDropdownOpen)}
          className="box-border flex flex-col justify-center items-center p-[10px_16px] gap-2.5 w-full h-[36px] border border-[#EFF4FA] rounded-[8px] bg-white cursor-pointer select-none"
        >
          <div className="flex flex-row justify-between items-center p-0 gap-3 w-full h-[16px]">
            <span className="font-['Manrope'] font-medium text-[12px] leading-[16px] text-[#29343D]">{selectedStatus}</span>
            <svg width="12.06" height="7" viewBox="0 0 12.06 7" fill="none">
              <path d="M1 1L6.03 6L11.06 1" stroke="#29343D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </button>
        {isStatusDropdownOpen && (
          <div className="absolute top-[40px] left-0 right-0 bg-white border border-[#eef2f6] rounded-[8px] shadow-xl z-30 p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
            {["All", "Active", "Cancelled"].map((status) => (
              <button
                key={status}
                type="button"
                onClick={() => {
                  setSelectedStatus(status);
                  setIsStatusDropdownOpen(false);
                  setCurrentPage(1);
                }}
                className={`text-left w-full px-3 py-2 text-xs font-semibold rounded-xl hover:bg-slate-50 transition-colors ${
                  selectedStatus === status ? "text-[#635BFF] bg-indigo-50/40" : "text-slate-600"
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
