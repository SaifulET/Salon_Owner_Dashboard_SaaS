import React, { useRef, useEffect } from "react";
import { ChevronDown, Eye } from "lucide-react";
import { PipelineStage, PipelineStatus } from "./types";

interface ActualPipelineFiltersProps {
  pipelineStatus: PipelineStatus;
  setPipelineStatus: (status: PipelineStatus) => void;
  dataRange: string;
  setDataRange: (range: string) => void;
  isDataRangeDropdownOpen: boolean;
  setIsDataRangeDropdownOpen: (open: boolean) => void;
  priorityFilter: "All" | "Low" | "Medium" | "High";
  setPriorityFilter: (priority: "All" | "Low" | "Medium" | "High") => void;
  columnVisibilityMenuOpen: boolean;
  setColumnVisibilityMenuOpen: (open: boolean) => void;
  visibleColumns: Record<string, boolean>;
  setVisibleColumns: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  currentStages: PipelineStage[];
}

export default function ActualPipelineFilters({
  pipelineStatus,
  setPipelineStatus,
  dataRange,
  setDataRange,
  isDataRangeDropdownOpen,
  setIsDataRangeDropdownOpen,
  priorityFilter,
  setPriorityFilter,
  columnVisibilityMenuOpen,
  setColumnVisibilityMenuOpen,
  visibleColumns,
  setVisibleColumns,
  currentStages
}: ActualPipelineFiltersProps) {
  const dataRangeRef = useRef<HTMLDivElement>(null);
  const columnsDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dataRangeRef.current && !dataRangeRef.current.contains(event.target as Node)) setIsDataRangeDropdownOpen(false);
      if (columnsDropdownRef.current && !columnsDropdownRef.current.contains(event.target as Node)) setColumnVisibilityMenuOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [setIsDataRangeDropdownOpen, setColumnVisibilityMenuOpen]);

  return (
    <div className="bg-white border border-[#E0E6EB] rounded-[12px] p-6 shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] flex flex-col lg:flex-row lg:items-center justify-between gap-4 w-full font-sans text-left">
      <div className="flex flex-wrap items-center gap-6">
        {/* Status */}
        <div className="flex flex-col gap-1 items-start">
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">Status</span>
          <div className="flex items-center gap-1.5 h-9">
            {(["Ongoing", "Completed"] as const).map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setPipelineStatus(st)}
                className={`h-9 px-4 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                  pipelineStatus === st
                    ? "border border-[#635BFF] text-[#635BFF] bg-white shadow-xs"
                    : "border border-transparent text-[#29343D] hover:bg-slate-50"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* Data Range */}
        <div className="flex flex-col gap-1 items-start relative" ref={dataRangeRef}>
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">Data Range</span>
          <button type="button" onClick={() => setIsDataRangeDropdownOpen(!isDataRangeDropdownOpen)} className="h-9 px-3.5 border border-[#E0E6EB] rounded-lg text-xs bg-white text-[#29343D] font-semibold flex items-center gap-2 hover:bg-slate-50 cursor-pointer min-w-[130px] justify-between">
            <span>{dataRange}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#29343D]" />
          </button>
          {isDataRangeDropdownOpen && (
            <div className="absolute left-0 top-16 z-30 w-[140px] rounded-lg border border-slate-100 bg-white p-1.5 shadow-xl flex flex-col gap-1">
              {["All Time", "Today", "Last 7 Days", "Last 30 Days"].map((r) => (
                <button key={r} type="button" onClick={() => { setDataRange(r); setIsDataRangeDropdownOpen(false); }} className={`text-left w-full px-3 py-1.5 text-xs font-semibold rounded-lg hover:bg-slate-50 ${dataRange === r ? "text-[#635BFF] bg-indigo-50/40" : "text-slate-600"}`}>{r}</button>
              ))}
            </div>
          )}
        </div>

        {/* Priority */}
        <div className="flex flex-col gap-1 items-start">
          <span className="text-[11px] font-bold text-[#98A4AE] uppercase tracking-wider">Priority</span>
          <div className="flex items-center gap-1.5 h-9">
            {(["All", "Low", "Medium", "High"] as const).map((p) => (
              <button key={p} type="button" onClick={() => setPriorityFilter(p)} className={`h-9 px-3 text-xs font-bold rounded-lg transition-colors cursor-pointer ${priorityFilter === p ? "border border-[#635BFF] text-[#635BFF] bg-white shadow-xs" : "border border-transparent text-[#29343D] hover:bg-slate-50"}`}>{p}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Columns customizer */}
      <div className="relative self-end lg:self-center" ref={columnsDropdownRef}>
        <button type="button" onClick={() => setColumnVisibilityMenuOpen(!columnVisibilityMenuOpen)} className="h-9 px-4 rounded-lg border border-[#E0E6EB] bg-white text-xs font-bold text-[#29343D] flex items-center gap-2 hover:bg-slate-50 cursor-pointer">
          <Eye className="w-3.5 h-3.5 text-[#29343D]" />
          <span>Columns</span>
        </button>
        {columnVisibilityMenuOpen && (
          <div className="absolute right-0 top-11 z-30 w-[200px] rounded-xl bg-white p-3 shadow-xl border border-slate-100 flex flex-col gap-1.5 text-xs">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1">Visible Columns</span>
            {currentStages.map((s) => (
              <label key={s.id} className="flex items-center gap-2 px-2 py-1 rounded hover:bg-slate-50 cursor-pointer font-semibold text-[#29343D]">
                <input type="checkbox" checked={visibleColumns[s.id] !== false} onChange={() => setVisibleColumns((p) => ({ ...p, [s.id]: p[s.id] === false ? true : false }))} className="rounded text-[#635BFF] w-4 h-4 cursor-pointer" />
                <span>{s.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
