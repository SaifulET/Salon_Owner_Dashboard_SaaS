import React from "react";
import { NotificationItem } from "./types";
import { EyeIcon, CheckIcon, PaperclipIcon, getCategoryIcon } from "./AutomationsMailIcons";

interface AutomationsMailListProps {
  notifications: NotificationItem[];
  onViewNotification: (item: NotificationItem) => void;
  onMarkAllAsRead: () => void;
  onMarkAsRead: (id: string) => void;
}

export default function AutomationsMailList({
  notifications,
  onViewNotification,
  onMarkAllAsRead,
  onMarkAsRead
}: AutomationsMailListProps) {
  const unreadCount = notifications.filter((n) => !n.read).length;

  const getStatusBadge = (status: string) => {
    if (status === "Opened") return <span className="px-2.5 py-1 rounded-[6px] text-[10px] font-extrabold uppercase tracking-wide bg-[#EBFAF0] text-[#36C76C]">OPENED</span>;
    if (status === "Clicked") return <span className="px-2.5 py-1 rounded-[6px] text-[10px] font-extrabold uppercase tracking-wide bg-[#ECFDFD] text-[#16CDC7]">CLICKED</span>;
    if (status === "Sent") return <span className="px-2.5 py-1 rounded-[6px] text-[10px] font-extrabold uppercase tracking-wide bg-[#EFF4FA] text-[#635BFF]">SENT</span>;
    return <span className="px-2.5 py-1 rounded-[6px] text-[10px] font-extrabold uppercase tracking-wide bg-slate-100 text-slate-500">{status}</span>;
  };

  return (
    <div className="flex-1 bg-white border border-[#E0E6EB] rounded-[12px] p-6 shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] flex flex-col gap-6 text-left font-sans">
      <div className="flex items-center justify-between border-b border-[#E0E6EB] pb-4">
        <div className="flex items-center gap-3">
          <h2 className="text-[18px] font-bold text-[#29343D]">Notifications ({notifications.length})</h2>
          {unreadCount > 0 && <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#FFE5ED] text-[#FF6692]">{unreadCount} unread</span>}
        </div>

        <button type="button" onClick={onMarkAllAsRead} className="h-9 px-4 flex items-center gap-2 border border-[#635BFF] text-[#635BFF] hover:bg-[#635BFF]/5 rounded-lg text-xs font-bold transition-colors cursor-pointer">
          <CheckIcon className="w-3.5 h-3.5" />
          <span>Mark All As Read</span>
        </button>
      </div>

      <div className="flex flex-col divide-y divide-[#E0E6EB]">
        {notifications.map((item) => (
          <div key={item.id} className={`flex flex-col sm:flex-row sm:items-center justify-between py-4 gap-4 transition-colors ${!item.read ? "bg-slate-50/40 -mx-6 px-6" : ""}`}>
            <div className="flex items-start sm:items-center gap-4 flex-1 min-w-0">
              {getCategoryIcon(item.category)}
              <div className="flex flex-col gap-1 min-w-0">
                <h4 className="text-[14px] font-bold text-[#29343D] leading-tight truncate" title={item.title}>{item.title}</h4>
                <div className="flex flex-wrap items-center gap-1.5 text-[12px] text-[#98A4AE] font-normal">
                  <span>{item.category}</span><span>&bull;</span><span>{item.salon}</span><span>&bull;</span><span>{item.date}</span><span>&bull;</span><span>{item.time}</span>
                  {item.hasAttachment && (<><span className="ml-1 flex items-center gap-0.5 text-slate-500 font-semibold"><PaperclipIcon /> {item.attachmentCount}</span></>)}
                  {item.emailLink && (<><span className="ml-1 text-[#635BFF] font-semibold">{item.emailLink}</span></>)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2.5 self-end sm:self-center shrink-0">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500">{item.source}</span>
              {getStatusBadge(item.status)}
              <button type="button" onClick={() => onViewNotification(item)} className="p-2 bg-[#F1F2FE] text-[#635BFF] hover:bg-[#e0e2fe] rounded-lg transition-colors cursor-pointer" title="View notification"><EyeIcon /></button>
              {!item.read && (<button type="button" onClick={() => onMarkAsRead(item.id)} className="p-2 bg-[#EBFAF0] text-[#36C76C] hover:bg-[#d8f7e2] rounded-lg transition-colors cursor-pointer" title="Mark as read"><CheckIcon className="w-4 h-4" /></button>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
