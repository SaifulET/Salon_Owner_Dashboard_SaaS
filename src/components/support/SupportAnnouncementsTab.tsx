import React from "react";
import { Announcement } from "./types";
import { EyeIcon, TrashIcon } from "./icons";

interface SupportAnnouncementsTabProps {
  announcements: Announcement[];
  onPreviewAnnouncement: (announcement: Announcement) => void;
  onDeleteAnnouncement: (id: string) => void;
}

export default function SupportAnnouncementsTab({ announcements, onPreviewAnnouncement, onDeleteAnnouncement }: SupportAnnouncementsTabProps) {
  const getTypeStyle = (t?: string) => {
    if (t === "Alert") return "bg-[#FFE5ED] text-[#FF6692]";
    if (t === "Maintenance") return "bg-[#FFF9E5] text-[#FFD648]";
    if (t === "New Feature") return "bg-[#EBFAF0] text-[#36C76C]";
    return "bg-[#EFF4FA] text-[#635BFF]";
  };

  const getCategoryStyle = (c?: string) => {
    if (c === "Sent") return "bg-[#EBFAF0] text-[#36C76C]";
    if (c === "Scheduled") return "bg-[#FFF9E5] text-[#FFD648]";
    return "bg-slate-100 text-slate-600";
  };

  return (
    <div className="flex flex-col gap-5 text-left w-full">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <h3 className="text-sm font-bold text-[#29343D]">Broadcast Campaigns</h3>
          <p className="text-[11px] text-[#98A4AE] mt-0.5">System-wide notifications currently displayed to platform customers.</p>
        </div>
        <span className="text-[11px] font-bold text-slate-400 bg-slate-100 px-3 py-1.5 rounded-lg">{announcements.length} Published</span>
      </div>

      <div className="border border-[#E0E6EB] rounded-xl overflow-x-auto w-full bg-white shadow-sm">
        <table className="w-full border-collapse text-left text-xs min-w-[700px]">
          <thead>
            <tr className="bg-[#F3F3FF] border-b border-[#E0E6EB] text-[#29343D] font-bold h-[52px]">
              <th className="px-6 py-4 font-bold text-sm">Recent Announcements</th>
              <th className="px-6 py-4 font-bold text-sm">Type</th>
              <th className="px-6 py-4 font-bold text-sm">Category</th>
              <th className="px-6 py-4 text-center font-bold text-sm">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#E0E6EB] text-slate-700 font-semibold">
            {announcements.map((a, idx) => (
              <tr key={a.id} className={`hover:bg-slate-50/70 transition-colors ${idx % 2 === 1 ? "bg-[#FAFAFA]" : "bg-white"}`}>
                <td className="px-6 py-4 text-[#29343D] font-bold">
                  <div>{a.title}</div>
                  <div className="text-[11px] text-[#98A4AE] font-normal mt-0.5">{a.message.slice(0, 70)}...</div>
                </td>
                <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase ${getTypeStyle(a.type)}`}>{a.type || "Alert"}</span></td>
                <td className="px-6 py-4"><span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase ${getCategoryStyle(a.category || a.status)}`}>{a.category || a.status}</span></td>
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2">
                    <button onClick={() => onPreviewAnnouncement(a)} className="p-2 bg-[#F1F2FE] text-[#635BFF] hover:bg-[#e0e2fe] rounded-lg transition-colors cursor-pointer" title="Preview"><EyeIcon /></button>
                    <button onClick={() => onDeleteAnnouncement(a.id)} className="p-2 bg-[#FFE5ED] text-[#FF6692] hover:bg-[#ffd1de] rounded-lg transition-colors cursor-pointer" title="Delete"><TrashIcon /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
