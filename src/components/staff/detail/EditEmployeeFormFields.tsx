import React from "react";

interface EditEmployeeFormFieldsProps {
  firstName: string; setFirstName: (val: string) => void;
  lastName: string; setLastName: (val: string) => void;
  email: string; setEmail: (val: string) => void;
  phone: string; setPhone: (val: string) => void;
  dob: string; setDob: (val: string) => void;
  taxCode: string; setTaxCode: (val: string) => void;
  address: string; setAddress: (val: string) => void;
  contractType: string; setContractType: (val: string) => void;
  iban: string; setIban: (val: string) => void;
  startDate: string; setStartDate: (val: string) => void;
  endDate: string; setEndDate: (val: string) => void;
  occupation: string; setOccupation: (val: string) => void;
  remuneration: string; setRemuneration: (val: string) => void;
  emergencyName: string; setEmergencyName: (val: string) => void;
  emergencyPhone: string; setEmergencyPhone: (val: string) => void;
  convertToInputDate: (d: string) => string;
}

export default function EditEmployeeFormFields({
  firstName, setFirstName, lastName, setLastName, email, setEmail,
  phone, setPhone, dob, setDob, taxCode, setTaxCode, address, setAddress,
  contractType, setContractType, iban, setIban, startDate, setStartDate,
  endDate, setEndDate, occupation, setOccupation, remuneration, setRemuneration,
  emergencyName, setEmergencyName, emergencyPhone, setEmergencyPhone,
  convertToInputDate
}: EditEmployeeFormFieldsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">First Name *</label>
        <input type="text" required value={firstName} onChange={(e) => setFirstName(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Last Name *</label>
        <input type="text" required value={lastName} onChange={(e) => setLastName(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Email *</label>
        <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Phone</label>
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Date of Birth</label>
        <input type="date" value={convertToInputDate(dob)} onChange={(e) => setDob(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-705" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Tax Code *</label>
        <input type="text" required value={taxCode} onChange={(e) => setTaxCode(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5 sm:col-span-2">
        <label className="text-[#334155] font-semibold text-xs">Address</label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Contract Type</label>
        <input type="text" value={contractType} onChange={(e) => setContractType(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">IBAN</label>
        <input type="text" value={iban} onChange={(e) => setIban(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Start Date</label>
        <input type="date" value={convertToInputDate(startDate)} onChange={(e) => setStartDate(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-705" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">End Date</label>
        <input type="date" value={convertToInputDate(endDate)} onChange={(e) => setEndDate(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-705" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Occupation</label>
        <input type="text" value={occupation} onChange={(e) => setOccupation(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Remuneration</label>
        <input type="text" value={remuneration} onChange={(e) => setRemuneration(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Emergency Contact Name</label>
        <input type="text" value={emergencyName} onChange={(e) => setEmergencyName(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[#334155] font-semibold text-xs">Emergency Contact Phone</label>
        <input type="text" value={emergencyPhone} onChange={(e) => setEmergencyPhone(e.target.value)} className="h-10 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-[#5e53fc] w-full text-xs font-semibold text-slate-700" />
      </div>
    </div>
  );
}
