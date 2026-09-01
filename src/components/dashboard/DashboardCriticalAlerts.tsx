import React, { useState } from "react";
import DashboardIcon from "./DashboardIcon";

interface DashboardCriticalAlertsProps {
  onNavigate?: (tab: string) => void;
  onViewSalon?: (id: string) => void;
}

export default function DashboardCriticalAlerts({ onNavigate, onViewSalon }: DashboardCriticalAlertsProps) {
  const [loadingSync, setLoadingSync] = useState(false);
  const [alert1Resolved, setAlert1Resolved] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [reminderSent, setReminderSent] = useState(false);

  return (
    <div className="bg-white rounded-xl p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col justify-between">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-base font-bold text-slate-800">Critical Alerts</h3>
        <button
          onClick={() => onNavigate && onNavigate("support")}
          className="text-xs font-semibold text-[#635BFF] bg-white border border-[#635BFF] hover:bg-[#635BFF]/5 px-4 py-1.5 rounded-[8px] transition-all duration-200"
        >
          View All
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {/* Alert Row 1 */}
        {!alert1Resolved && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-rose-50/20 border border-rose-100/30 group gap-4 min-h-[72px] transition-all duration-300">
            <div className="flex flex-col justify-center items-start gap-1 min-h-[52px]">
              <div className="flex items-center gap-2">
                <img src="/BellaVistaSalonBellIcon.svg" className="w-7 h-7 object-contain shrink-0" alt="Bella Vista Salon" />
                <span className="text-sm font-semibold text-[#29343D] leading-[19px]">Bella Vista Salon</span>
              </div>
              <span className="text-[11px] font-normal text-[#526B7A] pl-9">Subscription failed - Card declined</span>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-between sm:justify-end w-full sm:w-auto">
              <div className="w-[45px] h-[22px] flex items-center justify-center bg-[#FFE5ED] rounded-[6px] shrink-0">
                <span className="text-[13px] font-semibold text-[#FF6692]">High</span>
              </div>
              <span className="text-[11px] font-normal text-[#526B7A] w-[38px] text-center">2h ago</span>
              <div className="flex items-center gap-[16px] w-[112px] h-[36px] shrink-0">
                <button
                  onClick={() => {
                    if (loadingSync || alert1Resolved) return;
                    setLoadingSync(true);
                    setTimeout(() => { setLoadingSync(false); setAlert1Resolved(true); }, 1200);
                  }}
                  className="w-[48px] h-[36px] rounded-[8px] bg-[#DDDBFF] text-[#635BFF] hover:opacity-90 flex items-center justify-center transition-opacity shrink-0 cursor-pointer"
                  title="Retry Payment"
                >
                  <DashboardIcon src="/syncIcon.svg" size={16} className={loadingSync ? "animate-spin" : ""} />
                </button>
                <button
                  onClick={() => onViewSalon && onViewSalon("salon-2")}
                  className="w-[48px] h-[36px] rounded-[8px] bg-[#F1F2FE] text-[#635BFF] hover:opacity-90 flex items-center justify-center transition-opacity shrink-0 cursor-pointer"
                >
                  <DashboardIcon src="/viewIcon.svg" size={16} />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Alert Row 2 */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-amber-50/20 border border-amber-100/30 group gap-4 min-h-[72px]">
          <div className="flex flex-col justify-center items-start gap-1 min-h-[52px]">
            <div className="flex items-center gap-2">
              <img src="/UrbanHairStudio.svg" className="w-7 h-7 object-contain shrink-0" alt="Urban Hair Studio" />
              <span className="text-sm font-semibold text-[#29343D] leading-[19px]">Urban Hair Studio</span>
            </div>
            <span className="text-[11px] font-normal text-[#526B7A] pl-9">Subscription expires in 3 days</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 justify-between sm:justify-end w-full sm:w-auto">
            <div className="w-[60px] h-[22px] flex items-center justify-center bg-[#FFF2D6] rounded-[6px] shrink-0">
              <span className="text-[13px] font-semibold text-[#FFAB00]">Medium</span>
            </div>
            <span className="text-[11px] font-normal text-[#526B7A] w-[38px] text-center">4h ago</span>
            <div className="flex items-center gap-[16px] w-[112px] h-[36px] shrink-0">
              <button
                onClick={() => {
                  if (loadingSend || reminderSent) return;
                  setLoadingSend(true);
                  setTimeout(() => { setLoadingSend(false); setReminderSent(true); }, 1200);
                }}
                className={`w-[48px] h-[36px] rounded-[8px] text-[#635BFF] flex items-center justify-center shrink-0 transition-all cursor-pointer ${
                  reminderSent ? "bg-emerald-100 text-emerald-600" : "bg-[#DDDBFF] hover:opacity-90"
                }`}
                title="Send Reminder"
              >
                {loadingSend ? (
                  <DashboardIcon src="/syncIcon.svg" size={16} className="animate-spin" />
                ) : reminderSent ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                ) : (
                  <DashboardIcon src="/shareIcon.svg" size={16} />
                )}
              </button>
              <button
                onClick={() => onViewSalon && onViewSalon("salon-5")}
                className="w-[48px] h-[36px] rounded-[8px] bg-[#F1F2FE] text-[#635BFF] hover:opacity-90 flex items-center justify-center transition-opacity shrink-0 cursor-pointer"
              >
                <DashboardIcon src="/viewIcon.svg" size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
