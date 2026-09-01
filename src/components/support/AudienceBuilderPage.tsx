import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Audience } from "./types";

interface AudienceBuilderPageProps {
  onSave: (audience: Audience) => void;
  onBack: () => void;
}

export default function AudienceBuilderPage({ onSave, onBack }: AudienceBuilderPageProps) {
  const [name, setName] = useState("Audience New");
  const [recipient, setRecipient] = useState<Audience["recipient"]>("Owner");
  const [employeeCount, setEmployeeCount] = useState<Audience["employeeCount"]>("Between a and b");
  const [age, setAge] = useState<Audience["age"]>("Between a and b");
  const [status, setStatus] = useState<Audience["status"]>("Active");
  const [region, setRegion] = useState("Region 01");
  const [city, setCity] = useState("City 01");
  const [province, setProvince] = useState("Province 01");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ id: `aud-${Date.now()}`, name, recipient, employeeCount, age, status, region, city, province });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full text-left font-sans animate-in fade-in duration-200">
      <div className="flex items-center justify-between border-b border-[#E0E6EB] pb-4">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="p-1.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-lg transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div><h2 className="text-lg font-bold text-[#29343D]">Audience Builder</h2><p className="text-xs text-slate-400">Configure parameters to target tenant salon segments</p></div>
        </div>
        <button type="submit" className="px-5 py-2 bg-[#635BFF] hover:bg-[#4d42eb] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer">Save Audience</button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
        <div className="p-6 bg-white border border-[#E0E6EB] rounded-xl shadow-sm flex flex-col gap-4">
          <h3 className="text-sm font-bold text-[#29343D]">Audience Target Settings</h3>
          <div className="flex flex-col gap-3 text-xs">
            <div><label className="text-slate-400 block text-[11px] mb-1">Audience Name *</label><input type="text" value={name} onChange={(e) => setName(e.target.value)} required className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs outline-none" /></div>
            <div>
              <label className="text-slate-400 block text-[11px] mb-1">Recipient *</label>
              <select value={recipient} onChange={(e) => setRecipient(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
                {["All", "Owner", "Employee", "Accountants", "Clients"].map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>
            <div>
              <label className="text-slate-400 block text-[11px] mb-1">Number of Employees</label>
              <select value={employeeCount} onChange={(e) => setEmployeeCount(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
                {["All", "Between a and b"].map((ec) => <option key={ec} value={ec}>{ec}</option>)}
              </select>
            </div>
            <div>
              <label className="text-slate-400 block text-[11px] mb-1">Age Range</label>
              <select value={age} onChange={(e) => setAge(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
                {["All", "Between a and b"].map((a) => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>
          </div>
        </div>

        <div className="p-6 bg-white border border-[#E0E6EB] rounded-xl shadow-sm flex flex-col gap-4">
          <h3 className="text-sm font-bold text-[#29343D]">Location & Status</h3>
          <div className="flex flex-col gap-3 text-xs">
            <div>
              <label className="text-slate-400 block text-[11px] mb-1">Membership Status</label>
              <select value={status} onChange={(e) => setStatus(e.target.value as any)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs bg-white outline-none cursor-pointer">
                {["All", "Active", "Cancelled", "Trial"].map((st) => <option key={st} value={st}>{st}</option>)}
              </select>
            </div>
            <div><label className="text-slate-400 block text-[11px] mb-1">Region</label><input type="text" value={region} onChange={(e) => setRegion(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs outline-none" /></div>
            <div><label className="text-slate-400 block text-[11px] mb-1">City</label><input type="text" value={city} onChange={(e) => setCity(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs outline-none" /></div>
            <div><label className="text-slate-400 block text-[11px] mb-1">Province</label><input type="text" value={province} onChange={(e) => setProvince(e.target.value)} className="w-full h-9 px-3 border border-[#E0E6EB] rounded-lg text-xs outline-none" /></div>
          </div>
        </div>
      </div>
    </form>
  );
}
