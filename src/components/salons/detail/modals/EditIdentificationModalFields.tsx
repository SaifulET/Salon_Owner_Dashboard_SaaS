import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface EditIdentificationModalFieldsProps {
  name: string; setName: (val: string) => void;
  businessType: string; setBusinessType: (val: string) => void;
  vtaNumber: string; setVtaNumber: (val: string) => void;
  employees: string; setEmployees: (val: string) => void;
  ownerFirst: string; setOwnerFirst: (val: string) => void;
  ownerLast: string; setOwnerLast: (val: string) => void;
  email: string; setEmail: (val: string) => void;
  phone: string; setPhone: (val: string) => void;
  country: string; setCountry: (val: string) => void;
  city: string; setCity: (val: string) => void;
  province: string; setProvince: (val: string) => void;
  zip: string; setZip: (val: string) => void;
  plan: "Basic" | "Premium" | "Enterprise"; setPlan: (val: "Basic" | "Premium" | "Enterprise") => void;
  notes: string; setNotes: (val: string) => void;
}

export default function EditIdentificationModalFields({
  name, setName, businessType, setBusinessType, vtaNumber, setVtaNumber,
  employees, setEmployees, ownerFirst, setOwnerFirst, ownerLast, setOwnerLast,
  email, setEmail, phone, setPhone, country, setCountry, city, setCity,
  province, setProvince, zip, setZip, plan, setPlan, notes, setNotes
}: EditIdentificationModalFieldsProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Salon Name *</label>
          <input type="text" required value={name} onChange={e => setName(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Business Type</label>
          <div className="relative">
            <select value={businessType} onChange={e => setBusinessType(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer">
              <option value="Sole Proprietorship">Sole Proprietorship</option><option value="SRL">SRL</option><option value="SPA">SPA</option><option value="LLC">LLC</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"><HugeiconsIcon icon={ArrowDown01Icon} size={14} /></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">VTA Number *</label>
          <input type="text" required value={vtaNumber} onChange={e => setVtaNumber(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-bold text-slate-600">Number of Employees</label>
          <div className="relative">
            <select value={employees} onChange={e => setEmployees(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer">
              <option value="1-5">1-5</option><option value="6-10">6-10</option><option value="12">12</option><option value="20+">20+</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"><HugeiconsIcon icon={ArrowDown01Icon} size={14} /></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">Owner's First Name *</label><input type="text" required value={ownerFirst} onChange={e => setOwnerFirst(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" /></div>
        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">Owner's Last Name *</label><input type="text" required value={ownerLast} onChange={e => setOwnerLast(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" /></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">Email Address *</label><input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" /></div>
        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">Phone Number *</label><input type="text" required value={phone} onChange={e => setPhone(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" /></div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">Country *</label><select value={country} onChange={e => setCountry(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white cursor-pointer"><option value="Italy">Italy</option><option value="France">France</option><option value="Spain">Spain</option></select></div>
        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">City *</label><select value={city} onChange={e => setCity(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white cursor-pointer"><option value="Bologna">Bologna</option><option value="Milano">Milano</option><option value="Rome">Rome</option></select></div>
        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">Province *</label><select value={province} onChange={e => setProvince(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white cursor-pointer"><option value="Select province">Select province</option><option value="Bologna">Bologna</option><option value="Milano">Milano</option><option value="Rome">Rome</option></select></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">ZIP code *</label><input type="text" required value={zip} onChange={e => setZip(e.target.value)} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" /></div>
        <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">Initial Plan</label><select value={plan} onChange={e => setPlan(e.target.value as any)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white cursor-pointer"><option value="Basic">Basic Plan (€99/month)</option><option value="Premium">Premium Plan (€199/month)</option><option value="Enterprise">Enterprise Plan (€299/month)</option></select></div>
      </div>

      <div className="flex flex-col gap-1.5"><label className="text-xs font-bold text-slate-600">Internal Notes</label><textarea value={notes} onChange={e => setNotes(e.target.value)} rows={3} className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" /></div>
    </>
  );
}
