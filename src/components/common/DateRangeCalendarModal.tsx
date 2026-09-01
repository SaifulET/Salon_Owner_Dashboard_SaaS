import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon, Calendar01Icon } from "@hugeicons/core-free-icons";

interface DateRangeCalendarModalProps {
  startDate: number | null;
  endDate: number | null;
  hoveredDate: number | null;
  onDateClick: (dayNum: number) => void;
  onDateHover: (dayNum: number) => void;
  onBackToPresets: () => void;
}

export default function DateRangeCalendarModal({
  startDate,
  endDate,
  hoveredDate,
  onDateClick,
  onDateHover,
  onBackToPresets
}: DateRangeCalendarModalProps) {
  const juneDays = Array.from({ length: 30 }, (_, i) => i + 1);
  const juneEmptySlots = Array.from({ length: 6 }, (_, i) => i);
  const julyDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const julyEmptySlots = Array.from({ length: 1 }, (_, i) => i);

  const isSelected = (day: number) => day === startDate || day === endDate;
  const isInRange = (day: number) => {
    if (startDate !== null && endDate !== null) return day > startDate && day < endDate;
    if (startDate !== null && hoveredDate !== null) return day > startDate && day < hoveredDate;
    return false;
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0 mt-2 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 z-50 w-[calc(100vw-32px)] sm:w-[600px] max-w-[600px] animate-in fade-in slide-in-from-top-2">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
        <span className="text-sm font-bold text-slate-800 flex items-center gap-2">
          <HugeiconsIcon icon={Calendar01Icon} size={16} className="text-[#5e53fc]" />
          Select custom range
        </span>
        <button
          onClick={onBackToPresets}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 px-3 py-1.5 rounded-lg hover:bg-slate-50 transition-colors"
        >
          Back to presets
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center justify-between mb-4">
            <button className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-700">
              <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
            </button>
            <span className="text-sm font-bold text-slate-700">June 2024</span>
            <span className="w-6" />
          </div>
          <div className="grid grid-cols-7 gap-y-2 text-center mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <span key={day} className="text-[11px] font-bold text-slate-400 uppercase">{day}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-1 text-center">
            {juneEmptySlots.map((emptyIdx) => <div key={`empty-june-${emptyIdx}`} className="h-9" />)}
            {juneDays.map((day) => {
              const active = isSelected(day);
              const inRange = isInRange(day);
              const isStart = day === startDate;
              const isEnd = day === endDate;
              return (
                <button
                  key={`june-${day}`}
                  onClick={() => onDateClick(day)}
                  onMouseEnter={() => onDateHover(day)}
                  className={`h-9 w-9 flex items-center justify-center text-xs font-semibold rounded-full transition-all relative ${
                    active ? "bg-[#5e53fc] text-white shadow-md shadow-indigo-200 z-10" : inRange ? "bg-[#f2f1ff] text-[#5e53fc] rounded-none scale-105" : "text-slate-700 hover:bg-slate-50"
                  }`}
                >
                  {inRange && <div className="absolute inset-0 bg-[#f2f1ff] -z-10 scale-y-90" />}
                  {isStart && endDate !== null && <div className="absolute right-0 top-0 bottom-0 left-1/2 bg-[#f2f1ff] -z-10 scale-y-90" />}
                  {isEnd && <div className="absolute left-0 top-0 bottom-0 right-1/2 bg-[#f2f1ff] -z-10 scale-y-90" />}
                  {day}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="w-6" />
            <span className="text-sm font-bold text-slate-700">July 2024</span>
            <button className="p-1 rounded-lg text-slate-400 hover:bg-slate-50 hover:text-slate-700">
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-y-2 text-center mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <span key={day} className="text-[11px] font-bold text-slate-400 uppercase">{day}</span>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-y-1 text-center">
            {julyEmptySlots.map((emptyIdx) => <div key={`empty-july-${emptyIdx}`} className="h-9" />)}
            {julyDays.map((day) => (
              <button key={`july-${day}`} className="h-9 w-9 flex items-center justify-center text-xs font-semibold text-slate-700 hover:bg-slate-50 rounded-full">
                {day}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
