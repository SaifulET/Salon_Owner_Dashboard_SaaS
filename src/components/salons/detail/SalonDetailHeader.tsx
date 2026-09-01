import React from "react";
import { Salon } from "../types";

interface SalonDetailHeaderProps {
  salon: Salon;
  salonStatus: string;
  editEmployees: string;
  setIsReactivateModalOpen: (open: boolean) => void;
}

export default function SalonDetailHeader({
  salon,
  salonStatus,
  editEmployees,
  setIsReactivateModalOpen
}: SalonDetailHeaderProps) {
  return (
    <div className="w-full min-w-0 bg-white shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] rounded-[12px] flex flex-col items-start p-0 gap-[30px] z-0 relative overflow-hidden">
      <div className="flex flex-col items-start p-0 w-full lg:h-[533px] md:h-auto self-stretch flex-shrink-0 relative">
        <div 
          className="h-[330px] bg-cover bg-center w-full self-stretch flex-shrink-0 mb-[-88px] relative z-0" 
          style={{ backgroundImage: "url('/bg-main.png')" }}
        />
        <div className="flex flex-col md:flex-row md:flex-nowrap flex-wrap items-center md:items-end justify-between p-4 md:p-[30px] gap-[20px] md:gap-[30px] w-full self-stretch flex-shrink-0 md:h-auto relative z-10 bg-transparent">
          
          {/* Stats */}
          <div className="flex flex-row flex-nowrap items-start content-start p-0 gap-[6px] md:gap-[30px] w-full md:flex-1 min-w-[264px] h-auto justify-center md:justify-start font-semibold text-xs">
            <div className="flex flex-col items-center p-0 gap-[12px] w-[82px] md:w-[95.33px] flex-grow">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6 text-[#29343D] flex-shrink-0">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col items-center p-0 gap-[4px] w-full max-w-[95px] h-[50px] flex-shrink-0">
                <span className="w-auto h-[26px] font-manrope font-semibold text-lg md:text-[22px] leading-[120%] text-center text-[#29343D]">{editEmployees}</span>
                <span className="w-full h-[20px] font-manrope font-normal text-[10px] md:text-[14px] leading-[20px] text-center text-[#98A4AE]">Staff Members</span>
              </div>
            </div>

            <div className="flex flex-col justify-between items-center p-0 gap-[12px] w-[82px] md:w-[95.33px] flex-grow">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6 text-[#29343D] mx-auto flex-shrink-0">
                <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col items-center p-0 gap-[4px] w-full max-w-[113px] h-[50px] mx-auto flex-shrink-0">
                <span className="w-auto h-[26px] font-manrope font-semibold text-lg md:text-[22px] leading-[120%] text-center text-[#29343D]">€ 299</span>
                <span className="w-full h-[20px] font-manrope font-normal text-[10px] md:text-[14px] leading-[20px] text-center text-[#98A4AE]">Monthly Payment</span>
              </div>
            </div>

            <div className="flex flex-col items-center p-0 gap-[12px] w-[82px] md:w-[95.33px] flex-grow">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 md:w-6 md:h-6 text-[#1C274C] flex-shrink-0">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex flex-col items-center p-0 gap-[4px] w-full max-w-[78px] h-[50px] flex-shrink-0">
                <span className="w-auto h-[26px] font-manrope font-semibold text-lg md:text-[22px] leading-[120%] text-center text-[#29343D]">{salon.lastActive}</span>
                <span className="w-full h-[20px] font-manrope font-normal text-[10px] md:text-[14px] leading-[20px] text-center text-[#98A4AE]">Last Active</span>
              </div>
            </div>
          </div>

          {/* Avatar & Name */}
          <div className="flex flex-col items-center p-0 gap-[16px] w-full md:flex-1 min-w-[116px] relative z-10 order-1 md:order-2">
            <div className="flex flex-row justify-center items-center p-0 gap-[10px] w-full h-[102px] self-stretch flex-shrink-0">
              <div className="w-[102px] h-[102px] relative flex-shrink-0 bg-white rounded-full flex items-center justify-center shadow-md">
                <img src="/ball.png" alt="Salon Avatar Ball" className="w-[94px] h-[94px] rounded-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-center p-0 gap-[8px] w-full h-auto self-stretch flex-shrink-0">
              <h2 className="w-full h-auto font-manrope font-semibold text-[18px] leading-snug text-center text-[#29343D]">{salon.name}</h2>
              <p className="w-[183px] h-auto font-manrope font-normal text-[14px] leading-[20px] text-center text-[#98A4AE]">Member Since: Aug 22, 2025</p>
              <p className="w-full h-auto font-manrope font-normal text-[14px] leading-[20px] text-center text-[#98A4AE]">{salon.city}, Italy</p>
              
              <div className="flex flex-row justify-center items-start p-0 gap-[8px] w-auto h-[24px] flex-shrink-0">
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wide ${
                  salonStatus === "Active" ? "bg-[#EBFAF0] text-[#36C76C]" :
                  salonStatus === "Trial" ? "bg-[#e6fcf9] text-[#14b8a6]" :
                  salonStatus === "Cancelled" ? "bg-[#f1f5f9] text-[#64748b]" :
                  salonStatus === "Leads" ? "bg-[#f2f1ff] text-[#5e53fc]" :
                  "bg-[#fff0f3] text-[#f43f5e]"
                }`}>
                  {salonStatus}
                </span>
              </div>
            </div>
          </div>

          {/* Impersonate Button */}
          <div className="flex flex-row flex-nowrap justify-center md:justify-end items-center content-end p-0 gap-[16px] w-full md:flex-1 min-w-[155px] h-[44px] order-3 md:order-3">
            <button 
              onClick={() => setIsReactivateModalOpen(true)}
              className="flex flex-row justify-center items-center px-[16px] py-[10px] gap-[10px] w-[155px] h-[44px] bg-[#DDDBFF] rounded-[8px] hover:bg-[#d0cdff] transition-all flex-shrink-0 cursor-pointer"
            >
              <span className="w-[123px] h-[24px] font-manrope font-medium text-[14px] text-center leading-[24px] text-[#635BFF] flex items-center justify-center font-bold">Impersonate Salon</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
