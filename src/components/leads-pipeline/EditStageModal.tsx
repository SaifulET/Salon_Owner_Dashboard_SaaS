import React, { useState } from "react";
import { PipelineStage } from "./types";
import { CustomSwitch } from "./icons";

interface EditStageModalProps {
  stage: PipelineStage;
  onClose: () => void;
  onSubmit: (notifiedWhenLeadEnters: boolean, notifyLead: boolean, lowDays: string, medDays: string, highDays: string, lowNotif: boolean, medNotif: boolean, highNotif: boolean) => void;
}

export default function EditStageModal({ stage, onClose, onSubmit }: EditStageModalProps) {
  const [notifiedWhenLeadEnters, setNotifiedWhenLeadEnters] = useState(stage.notifiedWhenLeadEnters);
  const [notifyLead, setNotifyLead] = useState(stage.notifyLead);
  const [lowDays, setLowDays] = useState(stage.priorityDays.low);
  const [medDays, setMedDays] = useState(stage.priorityDays.medium);
  const [highDays, setHighDays] = useState(stage.priorityDays.high);
  const [lowNotif, setLowNotif] = useState(stage.priorityNotifications.low);
  const [medNotif, setMedNotif] = useState(stage.priorityNotifications.medium);
  const [highNotif, setHighNotif] = useState(stage.priorityNotifications.high);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm px-4">
      <div className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto bg-white rounded-[12px] shadow-2xl flex flex-col p-6 gap-6 animate-in scale-in-95 duration-150 text-left font-sans">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-3">
            <h3 className="font-bold text-[18px] text-[#29343D]">Edit Stage</h3>
            <div className={`py-1 px-2.5 rounded-full text-xs font-bold ${stage.badgeBg}`}>{stage.label}</div>
          </div>
          <button type="button" onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>

        <div className="flex flex-col gap-4 text-xs">
          <div className="flex flex-row items-center p-4 gap-4 bg-white border border-[#E0E6EB] rounded-lg justify-between">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-4"><span className="text-[13px] font-bold text-[#29343D]">Lead Enters</span><CustomSwitch checked={notifiedWhenLeadEnters} onChange={setNotifiedWhenLeadEnters} /></div>
              <span className="text-[11px] text-[#98A4AE] font-medium">Notify when lead enters</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-4"><span className="text-[13px] font-bold text-[#29343D]">Notify Lead</span><CustomSwitch checked={notifyLead} onChange={setNotifyLead} /></div>
              <span className="text-[11px] text-[#98A4AE] font-medium">Notify lead once inside this stage</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[13px] font-bold text-[#29343D]">Priority Settings</span>
            <div className="flex flex-col gap-2.5">
              {[{ label: "Low", days: lowDays, setDays: setLowDays, color: "text-emerald-500 bg-emerald-50" }, { label: "Medium", days: medDays, setDays: setMedDays, color: "text-amber-500 bg-amber-50" }, { label: "High", days: highDays, setDays: setHighDays, color: "text-rose-500 bg-rose-50" }].map((p) => (
                <div key={p.label} className="flex flex-col gap-1">
                  <div className="flex justify-between items-center"><span className="text-slate-500 font-medium">{p.label} priority after (days)</span><span className={`px-2 py-0.5 rounded text-[10px] font-bold ${p.color}`}>{p.label}</span></div>
                  <input type="text" placeholder="Number of days" value={p.days} onChange={(e) => p.setDays(e.target.value)} className="w-full h-8 px-3 border border-[#E0E6EB] rounded-lg text-xs outline-none focus:border-[#635BFF]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-3 gap-2 border-t border-slate-100">
          <button type="button" onClick={onClose} className="px-4 py-2 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 cursor-pointer">Cancel</button>
          <button type="button" onClick={() => onSubmit(notifiedWhenLeadEnters, notifyLead, lowDays, medDays, highDays, lowNotif, medNotif, highNotif)} className="px-5 py-2.5 bg-[#635BFF] hover:bg-[#4d42eb] text-white rounded-lg text-xs font-semibold shadow-md cursor-pointer">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
