import React, { useState } from "react";
import { ModalContentProps } from "./SalesModalContent";

export default function LeadsModalContent({ onNavigate, onClose }: ModalContentProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleManage = () => {
    onClose();
    onNavigate("leads_pipeline");
  };

  const handleAnalytics = () => {
    onClose();
    onNavigate("analytics_customers_leads");
  };

  return (
    <div className="flex flex-col gap-6 text-left">
      <div>
        <h3 className="font-semibold text-[18px] leading-[25px] text-[#29343D] font-sans">New Saas Leads</h3>
        <p className="font-semibold text-[14px] leading-[19px] text-[#29343D] font-sans mt-0.5 opacity-60">Current MRR breakdown and growth metrics</p>
      </div>

      <div className="flex flex-row items-start gap-6 w-full">
        <div className="flex flex-row items-center p-[30px] gap-[12px] flex-1 bg-[#DDDBFF] rounded-[12px] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] h-[111px]">
          <img src="/newSaasLeadUserIcon.svg" className="w-[40px] h-[40px] object-contain shrink-0" alt="" />
          <div className="flex flex-col items-start p-0">
            <span className="font-semibold text-[24px] leading-[120%] text-[#635BFF] font-sans">40</span>
            <span className="font-semibold text-[16px] leading-[22px] text-[#635BFF] opacity-70 font-sans whitespace-nowrap">Total Trials</span>
          </div>
        </div>

        <div className="flex flex-row items-center p-[30px] gap-[12px] flex-1 bg-[#635BFF] rounded-[12px] shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] h-[111px]">
          <span className="inline-block bg-white shrink-0" style={{ width: "40px", height: "40px", maskImage: "url(/syncIcon.svg)", WebkitMaskImage: "url(/syncIcon.svg)", maskSize: "contain", WebkitMaskSize: "contain", maskRepeat: "no-repeat", WebkitMaskRepeat: "no-repeat" }} />
          <div className="flex flex-col items-start p-0">
            <span className="font-semibold text-[24px] leading-[120%] text-white font-sans">4</span>
            <span className="font-semibold text-[16px] leading-[22px] text-white opacity-70 font-sans whitespace-nowrap">Trial Converted</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start p-0 bg-white shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] rounded-[12px] border border-slate-50 w-full h-[219px] overflow-hidden">
        <div className="flex flex-col items-start p-[24px] gap-[12px] w-full">
          <div className="font-semibold text-[18px] leading-[25px] text-[#29343D] font-sans">Trial Conversions (last 30 days)</div>
          <div className="flex flex-row items-center gap-[9px] w-full">
            <span className="font-semibold text-[28px] leading-[120%] text-[#29343D] font-sans">10%</span>
            <div className="flex flex-row items-center gap-[8px]">
              <div className="w-[24px] h-[24px] bg-[#EBFAF0] rounded-[10px] flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#36C76C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
              </div>
              <span className="font-normal text-[14px] leading-[20px] text-[#98A4AE] font-sans">+9%</span>
            </div>
          </div>
        </div>

        <div className="relative h-[70px] w-full select-none cursor-pointer" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          {isHovered && (
            <div className="absolute z-20 bg-white border border-slate-100 shadow-[0px_3.79837px_45.5805px_-11.3951px_rgba(10,37,64,0.14)] rounded-[7.59675px] flex flex-col justify-between" style={{ width: "141.58px", height: "82.19px", left: "40%", top: "-90px", padding: "8px 11px" }}>
              <div className="text-[12px] font-semibold text-[#29343D] leading-[16px] font-sans">Mar 03, 2025</div>
              <div className="flex items-center justify-between text-[12px] font-semibold text-[#29343D] font-sans">
                <div className="flex items-center gap-[7.6px]"><div className="w-[7.6px] h-[7.6px] bg-[#635BFF] rounded-full" /><span>Total Trials</span></div>
                <span className="text-[#98A4AE]">20</span>
              </div>
              <div className="flex items-center justify-between text-[12px] font-semibold text-[#29343D] font-sans">
                <div className="flex items-center gap-[7.6px]"><div className="w-[7.6px] h-[7.6px] bg-[#635BFF] rounded-full" /><span>Trial Converted</span></div>
                <span className="text-[#98A4AE]">2</span>
              </div>
            </div>
          )}
          <svg viewBox="0 0 590 70" className="w-full h-full" preserveAspectRatio="none">
            <path d="M 10 50 Q 100 30, 200 45 T 400 20 T 580 35 L 580 70 L 10 70 Z" fill="#F1F2FE" />
            <path d="M 10 50 Q 100 30, 200 45 T 400 20 T 580 35" fill="none" stroke="#635BFF" strokeWidth="2" strokeLinecap="round" />
            <circle cx="200" cy="45" r="4.5" fill="#635BFF" stroke="#FFFFFF" strokeWidth="2" />
          </svg>
        </div>
      </div>

      <div className="flex flex-row justify-between items-center w-full h-[36px] mt-2">
        <button onClick={handleManage} className="flex flex-row justify-center items-center px-4 py-2 bg-[#DDDBFF] hover:bg-[#c9c5ff] rounded-[8px] text-[#635BFF] font-medium text-[12px] leading-[16px] h-[36px] w-[114px] transition-all cursor-pointer">
          Manage Leads
        </button>
        <button onClick={handleAnalytics} className="flex flex-row justify-center items-center px-4 py-2 gap-2 bg-[#635BFF] hover:bg-[#4d42eb] rounded-[8px] text-white font-medium text-[12px] leading-[16px] h-[36px] w-[140px] transition-all shadow-[0px_4px_12px_rgba(99,91,255,0.2)] cursor-pointer">
          View Analytics
        </button>
      </div>
    </div>
  );
}
