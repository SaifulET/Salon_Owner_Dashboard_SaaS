import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

interface AddStaffFormFieldsProps {
  firstName: string; setFirstName: (v: string) => void;
  lastName: string; setLastName: (v: string) => void;
  dob: string; setDob: (v: string) => void;
  pob: string; setPob: (v: string) => void;
  address: string; setAddress: (v: string) => void;
  contractType: string; setContractType: (v: string) => void;
  taxCode: string; setTaxCode: (v: string) => void;
  iban: string; setIban: (v: string) => void;
  startDate: string; setStartDate: (v: string) => void;
  endDate: string; setEndDate: (v: string) => void;
  occupation: string; setOccupation: (v: string) => void;
  remuneration: string; setRemuneration: (v: string) => void;
  phone: string; setPhone: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  emergencyName: string; setEmergencyName: (v: string) => void;
  emergencyPhone: string; setEmergencyPhone: (v: string) => void;
}

export default function AddStaffFormFields({
  firstName, setFirstName, lastName, setLastName, dob, setDob, pob, setPob, address, setAddress,
  contractType, setContractType, taxCode, setTaxCode, iban, setIban, startDate, setStartDate,
  endDate, setEndDate, occupation, setOccupation, remuneration, setRemuneration, phone, setPhone,
  email, setEmail, emergencyName, setEmergencyName, emergencyPhone, setEmergencyPhone
}: AddStaffFormFieldsProps) {
  return (
    <div className="flex flex-col gap-5 text-left text-xs font-semibold font-sans">
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">First Name *</label><input type="text" required value={firstName} onChange={e => setFirstName(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Last Name *</label><input type="text" required value={lastName} onChange={e => setLastName(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Date of Birth</label><input type="date" value={dob} onChange={e => setDob(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Place of Birth</label><input type="text" value={pob} onChange={e => setPob(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
      </div>
      <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Address Residence</label><input type="text" value={address} onChange={e => setAddress(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700 w-full" /></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Contract Type</label><input type="text" value={contractType} onChange={e => setContractType(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Tax ID Code *</label><input type="text" required value={taxCode} onChange={e => setTaxCode(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
      </div>
      <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">IBAN</label><input type="text" value={iban} onChange={e => setIban(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700 w-full" /></div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Start Date</label><input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">End Date</label><input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-[11px] font-extrabold uppercase text-slate-500">Role *</label>
          <div className="relative">
            <select value={occupation} onChange={e => setOccupation(e.target.value)} className="w-full border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700 bg-white appearance-none cursor-pointer">
              <option value="Sole Director">Sole Director</option><option value="Manager">Manager</option><option value="Staff">Staff</option>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
              <HugeiconsIcon icon={ArrowDown01Icon} size={14} />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Remuneration / Hours</label><input type="text" value={remuneration} onChange={e => setRemuneration(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Telephone *</label><input type="text" required value={phone} onChange={e => setPhone(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
        <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">E-mail *</label><input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
      </div>
      <div className="border-t border-slate-100 pt-4 mt-2">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#5e53fc] block mb-4">Emergency Contacts</span>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Emergency Contact (Name) *</label><input type="text" required value={emergencyName} onChange={e => setEmergencyName(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
          <div className="flex flex-col gap-1.5"><label className="text-[11px] font-extrabold uppercase text-slate-500">Emergency Contact (Telephone) *</label><input type="text" required value={emergencyPhone} onChange={e => setEmergencyPhone(e.target.value)} className="border border-slate-200 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-700" /></div>
        </div>
      </div>
    </div>
  );
}
