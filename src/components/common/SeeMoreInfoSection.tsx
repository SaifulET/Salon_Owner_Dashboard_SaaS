import React from "react";

export interface InfoItem {
  label: string;
  value: string;
}

interface SectionProps {
  title: string;
  items: InfoItem[];
}

export default function SeeMoreInfoSection({ title, items }: SectionProps) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-[0_2px_4px_-1px_rgba(175,182,201,0.2)]">
      <h3 className="text-[13px] font-semibold leading-[18px] text-[#29343D]">
        {title}
      </h3>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-[30px] gap-y-4">
        {items.map((item) => (
          <div key={item.label}>
            <p className="text-[12px] leading-4 text-[#999999]">{item.label}</p>
            <p className="text-[13px] font-semibold leading-[18px] text-[#29343D]">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
