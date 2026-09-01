import React from "react";

interface CityFilterProps {
  selectedCity: string;
  setSelectedCity: (city: string) => void;
  setCurrentPage: (page: number) => void;
  isCityDropdownOpen: boolean;
  setIsCityDropdownOpen: (open: boolean) => void;
  citySearch: string;
  setCitySearch: (search: string) => void;
  filteredCities: string[];
  cityRef: React.RefObject<HTMLDivElement | null>;
}

export default function CityFilter({
  selectedCity,
  setSelectedCity,
  setCurrentPage,
  isCityDropdownOpen,
  setIsCityDropdownOpen,
  citySearch,
  setCitySearch,
  filteredCities,
  cityRef
}: CityFilterProps) {
  return (
    <div
      className="flex flex-col items-start p-0 gap-2 w-full sm:w-[150px] h-[60px] flex-none order-3 grow-0 shrink-0 relative"
      ref={cityRef}
    >
      <span className="w-[24px] h-[16px] font-['Manrope'] font-semibold text-[12px] leading-[16px] text-[#98A4AE] flex-none order-0 grow-0">
        City
      </span>
      <button
        type="button"
        onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
        className="box-border flex flex-col justify-center items-center p-[10px_16px] gap-2.5 w-full sm:w-[150px] h-[36px] border border-[#EFF4FA] rounded-[8px] bg-white cursor-pointer select-none flex-none order-1 grow-0"
      >
        <div className="flex flex-row justify-between items-center p-0 gap-3 w-full h-[16px] flex-none order-0 grow-0">
          <span className="font-['Manrope'] font-medium text-[12px] leading-[16px] text-center text-[#29343D] flex-none order-0 grow-0 truncate max-w-[85px]">
            {selectedCity}
          </span>
          <svg width="12.06" height="7" viewBox="0 0 12.06 7" fill="none" className="flex-none order-1 grow-0">
            <path d="M1 1L6.03 6L11.06 1" stroke="#29343D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </button>

      {isCityDropdownOpen && (
        <div className="absolute top-[64px] left-0 right-0 bg-white border border-[#eef2f6] rounded-[8px] shadow-xl z-30 p-2 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="relative mb-1">
            <input
              type="text"
              placeholder="Search"
              value={citySearch}
              onChange={(e) => setCitySearch(e.target.value)}
              className="w-full border border-slate-100 focus:border-[#5e53fc] focus:outline-none rounded-[8px] px-3 py-2 text-xs font-semibold text-slate-700"
            />
          </div>
          <div className="max-h-40 overflow-y-auto flex flex-col">
            {filteredCities.map((cit) => (
              <button
                key={cit}
                type="button"
                onClick={() => {
                  setSelectedCity(cit);
                  setIsCityDropdownOpen(false);
                  setCitySearch("");
                  setCurrentPage(1);
                }}
                className={`text-left w-full px-3 py-2 text-xs font-semibold rounded-xl hover:bg-slate-50 transition-colors ${
                  selectedCity === cit ? "text-[#635BFF] bg-indigo-50/40" : "text-slate-600"
                }`}
              >
                {cit}
              </button>
            ))}
            {filteredCities.length === 0 && (
              <span className="text-[10px] text-slate-400 text-center py-2 font-semibold">
                No matches found
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
