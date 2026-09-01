"use client";

import React, { useState, useRef, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
import DateRangeCalendarModal from "./DateRangeCalendarModal";

interface DateRangeFilterProps {
  onRangeChange: (rangeStr: string) => void;
  currentRange: string;
}

export default function DateRangeFilter({ onRangeChange, currentRange }: DateRangeFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState<number | null>(4);
  const [endDate, setEndDate] = useState<number | null>(8);
  const [hoveredDate, setHoveredDate] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const presets = ["All Time", "Today", "Last 7 Days", "Last 30 Days", "Custom Range"];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setShowCalendar(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handlePresetSelect = (preset: string) => {
    if (preset === "Custom Range") {
      setShowCalendar(true);
    } else {
      onRangeChange(preset);
      setIsOpen(false);
    }
  };

  const handleDateClick = (dayNum: number) => {
    if (startDate === null || (startDate !== null && endDate !== null)) {
      setStartDate(dayNum);
      setEndDate(null);
    } else if (startDate !== null && endDate === null) {
      if (dayNum < startDate) {
        setStartDate(dayNum);
      } else {
        setEndDate(dayNum);
        const startStr = `06/${startDate.toString().padStart(2, "0")}/2025`;
        const endStr = `06/${dayNum.toString().padStart(2, "0")}/2025`;
        onRangeChange(`${startStr} - ${endStr}`);
        setIsOpen(false);
        setShowCalendar(false);
      }
    }
  };

  const handleDateHover = (dayNum: number) => {
    if (startDate !== null && endDate === null) setHoveredDate(dayNum);
  };

  return (
    <div className="relative" ref={containerRef}>
      <label className="block text-[11px] font-bold text-[#a0aec0] uppercase tracking-wider mb-2">
        Data Range
      </label>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          if (currentRange.includes("-")) setShowCalendar(true);
        }}
        className="flex items-center justify-between w-52 bg-white text-slate-700 font-medium text-sm border border-[#eef2f6] rounded-2xl px-4 py-2.5 shadow-[0_2px_10px_rgba(0,0,0,0.01)] hover:border-[#5e53fc] focus:outline-none transition-all text-left"
      >
        <span className="truncate">{currentRange}</span>
        <HugeiconsIcon icon={ArrowDown01Icon} size={16} className="text-[#a0aec0] ml-2" />
      </button>

      {isOpen && !showCalendar && (
        <div className="absolute left-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-100 py-2.5 z-40 animate-in fade-in slide-in-from-top-1">
          {presets.map((preset) => (
            <button
              key={preset}
              onClick={() => handlePresetSelect(preset)}
              className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors ${
                currentRange === preset || (preset === "Custom Range" && currentRange.includes("-"))
                  ? "text-[#5e53fc] bg-[#f2f1ff]"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {preset}
            </button>
          ))}
        </div>
      )}

      {isOpen && showCalendar && (
        <DateRangeCalendarModal
          startDate={startDate}
          endDate={endDate}
          hoveredDate={hoveredDate}
          onDateClick={handleDateClick}
          onDateHover={handleDateHover}
          onBackToPresets={() => setShowCalendar(false)}
        />
      )}
    </div>
  );
}
