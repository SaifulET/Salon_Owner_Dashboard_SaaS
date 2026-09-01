import React from "react";
import { NotificationItem } from "./types";

interface ViewNotificationModalProps {
  notification: NotificationItem | null;
  onClose: () => void;
  onMarkAsRead?: (id: string) => void;
}

export default function ViewNotificationModal({ notification, onClose, onMarkAsRead }: ViewNotificationModalProps) {
  if (!notification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4 font-sans animate-in fade-in">
      <div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl flex flex-col gap-4 text-left">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{notification.category}</span>
            <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-slate-100 text-slate-600">{notification.status}</span>
          </div>
          <button type="button" onClick={onClose} className="text-slate-400 hover:text-slate-700 cursor-pointer">✕</button>
        </div>

        <div>
          <h3 className="text-base font-bold text-slate-800">{notification.title}</h3>
          <p className="text-xs text-slate-400 mt-1">{notification.salon} &bull; {notification.date} at {notification.time}</p>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 text-xs text-slate-700 leading-relaxed">
          {notification.message || "No detailed message provided."}
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 border-t border-slate-100 pt-3">
          <div><span className="font-bold text-slate-700">Recipient:</span> {notification.recipient || "Owner"}</div>
          <div><span className="font-bold text-slate-700">Operator:</span> {notification.operator || "Automated"}</div>
          <div><span className="font-bold text-slate-700">Channel:</span> {notification.type}</div>
          <div><span className="font-bold text-slate-700">Trigger:</span> {notification.source}</div>
        </div>

        <div className="flex justify-end gap-2 mt-2">
          {!notification.read && onMarkAsRead && (
            <button
              type="button"
              onClick={() => { onMarkAsRead(notification.id); onClose(); }}
              className="px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#36C76C] hover:bg-emerald-600 cursor-pointer"
            >
              Mark As Read
            </button>
          )}
          <button type="button" onClick={onClose} className="px-5 py-2 rounded-lg text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
