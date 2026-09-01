import React, { useState } from "react";

export default function ProfileTab({ onSave }: { onSave?: () => void }) {
  const [formData, setFormData] = useState({
    name: "Mathew Anderson",
    location: "United States",
    email: "info@modernize.com",
    phone: "(219) 555-0114",
    address: "3891 Ranchview Dr. Richardson, California 62639"
  });

  return (
    <div className="flex flex-col gap-6 w-full font-sans text-left">
      <div className="rounded-xl bg-white p-6 shadow-[0_4px_18px_rgba(17,31,56,0.06)] flex flex-col gap-6">
        <h3 className="text-base font-bold text-[#29343D]">Personal Details</h3>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-bold text-xl">
            {formData.name.charAt(0)}
          </div>
          <div className="flex flex-col gap-1">
            <button className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#635BFF] text-white hover:bg-[#5248E2] cursor-pointer">
              Upload New Photo
            </button>
            <span className="text-[11px] text-slate-400">Allowed JPG, GIF or PNG. Max size of 800K</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="text-[11px] font-bold text-slate-500">Your Name</label>
            <input value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs text-[#29343D] mt-1" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">Location</label>
            <input value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs text-[#29343D] mt-1" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">Email</label>
            <input value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs text-[#29343D] mt-1" />
          </div>
          <div>
            <label className="text-[11px] font-bold text-slate-500">Phone</label>
            <input value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs text-[#29343D] mt-1" />
          </div>
        </div>

        <div>
          <label className="text-[11px] font-bold text-slate-500">Address</label>
          <input value={formData.address} onChange={(e) => setFormData({ ...formData, address: e.target.value })} className="h-10 w-full rounded-lg border border-[#E0E6EB] px-3 text-xs text-[#29343D] mt-1" />
        </div>

        <div className="flex justify-end gap-2 pt-2 border-t border-slate-100">
          <button onClick={onSave} className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-[#635BFF] hover:bg-[#5248E2] cursor-pointer shadow-sm">
            Save Profile Changes
          </button>
        </div>
      </div>
    </div>
  );
}
