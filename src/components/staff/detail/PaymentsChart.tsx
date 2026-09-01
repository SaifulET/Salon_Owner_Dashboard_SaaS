import React from "react";

export default function PaymentsChart() {
  return (
    <div className="border border-slate-100 rounded-3xl p-6 bg-white flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h4 className="text-sm font-bold text-slate-800">Payments per Year</h4>
      </div>

      <div className="w-full py-2 overflow-x-auto scrollbar-thin">
        <div className="min-w-[1000px] md:min-w-0 w-full">
          <svg className="w-full h-[300px]" viewBox="0 0 1385 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <text x="42" y="32" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 4,000</text>
            <text x="42" y="72" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 3,500</text>
            <text x="42" y="112" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 3,000</text>
            <text x="42" y="152" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 2,500</text>
            <text x="42" y="192" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 2,000</text>
            <text x="42" y="232" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 1,500</text>
            <text x="42" y="262" textAnchor="end" fontSize="11" fill="#94a3b8" fontWeight="600">€ 1,000</text>

            <line x1="52" y1="28" x2="1370" y2="28" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="52" y1="68" x2="1370" y2="68" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="52" y1="108" x2="1370" y2="108" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="52" y1="148" x2="1370" y2="148" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="52" y1="188" x2="1370" y2="188" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="52" y1="228" x2="1370" y2="228" stroke="#f1f5f9" strokeWidth="1" />
            <line x1="52" y1="258" x2="1370" y2="258" stroke="#f1f5f9" strokeWidth="1" />

            <rect x="60" y="48" width="140" height="225" rx="12" fill="#f1f0ff" />
            <rect x="60" y="218" width="140" height="55" rx="12" fill="#5e53fc" />
            <text x="130" y="290" textAnchor="middle" fontSize="12" fill="#94a3b8" fontWeight="600">2020</text>

            <rect x="285" y="58" width="140" height="215" rx="12" fill="#f1f0ff" />
            <rect x="285" y="208" width="140" height="65" rx="12" fill="#5e53fc" />
            <text x="355" y="290" textAnchor="middle" fontSize="12" fill="#94a3b8" fontWeight="600">2021</text>

            <rect x="510" y="48" width="140" height="225" rx="12" fill="#f1f0ff" />
            <rect x="510" y="188" width="140" height="85" rx="12" fill="#5e53fc" />
            <text x="580" y="290" textAnchor="middle" fontSize="12" fill="#94a3b8" fontWeight="600">2022</text>

            <rect x="735" y="38" width="140" height="235" rx="12" fill="#f1f0ff" />
            <rect x="735" y="198" width="140" height="75" rx="12" fill="#5e53fc" />
            <text x="805" y="290" textAnchor="middle" fontSize="12" fill="#94a3b8" fontWeight="600">2023</text>

            <rect x="960" y="28" width="140" height="245" rx="12" fill="#f1f0ff" />
            <rect x="960" y="208" width="140" height="65" rx="12" fill="#5e53fc" />
            <text x="1030" y="290" textAnchor="middle" fontSize="12" fill="#94a3b8" fontWeight="600">2024</text>

            <rect x="1185" y="18" width="140" height="255" rx="12" fill="#f1f0ff" />
            <rect x="1185" y="188" width="140" height="85" rx="12" fill="#5e53fc" />
            <text x="1255" y="290" textAnchor="middle" fontSize="12" fill="#94a3b8" fontWeight="600">2025</text>
          </svg>
        </div>
      </div>
      <div className="flex justify-end gap-2 -mt-2">
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-300 hover:text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full border border-slate-200 text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>
      </div>
    </div>
  );
}
