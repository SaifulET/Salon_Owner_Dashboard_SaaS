import React from "react";
import { ActivityDetail } from "./types";

interface RecentActivityRowProps {
  item: ActivityDetail;
  isSelected: boolean;
  onSelectRow: (id: string, checked: boolean) => void;
}

export default function RecentActivityRow({ item, isSelected, onSelectRow }: RecentActivityRowProps) {
  const getBadgeColorClasses = (color: string) => {
    switch (color) {
      case "purple": return "bg-indigo-50 text-[#5e53fc]";
      case "teal": return "bg-[#e6fcf9] text-[#10b981]";
      case "blue": return "bg-blue-50 text-blue-600";
      case "yellow": return "bg-amber-50 text-amber-600 font-bold bg-[#fffbeb]";
      case "gray": return "bg-slate-50 text-slate-500";
      default: return "bg-slate-50 text-slate-600";
    }
  };

  return (
    <tr className={`border-b border-[#eef2f6] hover:bg-slate-50/50 transition-colors ${isSelected ? "bg-[#f8f7ff]" : ""}`}>
      <td className="p-5">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={(e) => onSelectRow(item.id, e.target.checked)}
          className="w-4 h-4 rounded border-slate-300 text-[#5e53fc] focus:ring-[#5e53fc] cursor-pointer"
        />
      </td>
      <td className="p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-sm shrink-0">
            {item.salonName.substring(0, 2).toUpperCase()}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-bold text-slate-800 text-sm leading-tight">{item.salonName}</span>
              <span className="bg-[#eff6ff] text-[#2563eb] text-[10px] font-bold px-1.5 py-0.5 rounded uppercase">{item.salonTag}</span>
              {item.hasCrown && (
                <span className="bg-amber-50 text-amber-500 text-[10px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z" /></svg>
                  VIP
                </span>
              )}
              {item.hasStar && (
                <span className="bg-purple-50 text-purple-600 text-[10px] font-extrabold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                  Enterprise
                </span>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium mt-1">
              <span>{item.contactName}</span><span>•</span><span>{item.city}</span><span>•</span><span>{item.email}</span>
            </div>
          </div>
        </div>
      </td>
      <td className="p-5">
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getBadgeColorClasses(item.activityColor)}`}>
          {item.activityLabel}
        </span>
      </td>
      <td className="p-5">
        <span className="font-extrabold text-slate-800 text-sm">{item.price}</span>
      </td>
      <td className="p-5">
        <span className="text-xs text-slate-400 font-semibold">{item.timeAgo}</span>
      </td>
    </tr>
  );
}
