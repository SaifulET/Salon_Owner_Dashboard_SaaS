import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface AddLocationFormFieldsProps {
  employees: string; setEmployees: (val: string) => void;
  email: string; setEmail: (val: string) => void;
  phone: string; setPhone: (val: string) => void;
  address: string; setAddress: (val: string) => void;
  zip: string; setZip: (val: string) => void;
  city: string; setCity: (val: string) => void;
  province: string; setProvince: (val: string) => void;
  country: string; setCountry: (val: string) => void;
}

export default function AddLocationFormFields({
  employees, setEmployees, email, setEmail, phone, setPhone,
  address, setAddress, zip, setZip, city, setCity, province, setProvince, country, setCountry
}: AddLocationFormFieldsProps) {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label className="text-slate-600 font-bold">Number of Employees</label>
        <div className="relative">
          <select value={employees} onChange={e => setEmployees(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 pr-10 text-xs font-semibold text-slate-700 bg-white appearance-none cursor-pointer">
            <option value="1-5">1-5</option>
            <option value="6-10">6-10</option>
            <option value="10">10</option>
            <option value="20+">20+</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400"><HugeiconsIcon icon={ArrowDown01Icon} size={14} /></div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-600 font-bold">Email Address *</label>
          <input type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email address" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-600 font-bold">Phone Number *</label>
          <input type="text" required value={phone} onChange={e => setPhone(e.target.value)} placeholder="Enter phone number" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-slate-600 font-bold">Address *</label>
        <input type="text" required value={address} onChange={e => setAddress(e.target.value)} placeholder="Enter address" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 w-full" />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-600 font-bold">Country *</label>
          <select value={country} onChange={e => setCountry(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white cursor-pointer">
            <option value="United States">United States</option>
            <option value="Italy">Italy</option>
            <option value="France">France</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-600 font-bold">City *</label>
          <select value={city} onChange={e => setCity(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white cursor-pointer">
            <option value="Select city">Select city</option>
            <option value="Bologna">Bologna</option>
            <option value="Milano">Milano</option>
            <option value="Rome">Rome</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-600 font-bold">Province *</label>
          <select value={province} onChange={e => setProvince(e.target.value)} className="w-full border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white cursor-pointer">
            <option value="Select province">Select province</option>
            <option value="Bologna">Bologna (BO)</option>
            <option value="Milano">Milano (MI)</option>
            <option value="Rome">Rome (RM)</option>
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-slate-600 font-bold">ZIP code *</label>
          <input type="text" required value={zip} onChange={e => setZip(e.target.value)} placeholder="Enter zip code" className="border border-slate-200 focus:border-[#5e53fc] focus:outline-none rounded-xl px-4 py-2.5 text-xs font-semibold text-slate-700" />
        </div>
      </div>
    </>
  );
}
