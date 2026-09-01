import React, { useRef, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { UserIcon, Settings01Icon } from "@hugeicons/core-free-icons";

interface HeaderProfileDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (tab: string) => void;
}

export default function HeaderProfileDropdown({
  isOpen,
  onClose,
  onNavigate
}: HeaderProfileDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 mt-3.5 w-72 bg-white rounded-3xl shadow-xl border border-slate-100 py-3 z-50 transform origin-top-right transition-all duration-200 animate-in fade-in slide-in-from-top-2"
    >
      <div className="px-5 py-3 border-b border-slate-50 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100 bg-slate-50 shadow-inner flex items-center justify-center">
          <img src="/avatar.png" alt="Admin Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col min-w-0">
          <span className="text-sm font-semibold text-slate-800 truncate flex items-center gap-1.5">
            David McMichael
            <span className="text-[9px] bg-emerald-50 text-emerald-600 font-bold px-1.5 py-0.5 rounded-full uppercase">
              Super Admin
            </span>
          </span>
          <span className="text-xs text-slate-400 truncate">example@example.com</span>
        </div>
      </div>

      <div className="px-2 py-2 flex flex-col gap-0.5">
        <button
          onClick={() => {
            onClose();
            onNavigate("settings_Profile");
          }}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-2xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-medium"
        >
          <HugeiconsIcon icon={UserIcon} size={18} className="text-[#a0aec0]" />
          View profile
        </button>
        <button
          onClick={() => {
            onClose();
            onNavigate("settings");
          }}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-2xl text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors text-sm font-medium"
        >
          <HugeiconsIcon icon={Settings01Icon} size={18} className="text-[#a0aec0]" />
          Account Settings
        </button>
      </div>

      <div className="px-2 pt-2 border-t border-slate-50">
        <button
          onClick={() => {
            onClose();
            console.log("Logging out...");
          }}
          className="flex items-center gap-3 w-full px-4 py-2.5 rounded-2xl text-red-500 hover:bg-red-50 transition-colors text-sm font-medium text-left"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-red-400"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          Log out
        </button>
      </div>
    </div>
  );
}
