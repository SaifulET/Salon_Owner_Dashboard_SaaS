import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { Salon } from "../../types";
import EditIdentificationModalFields from "./EditIdentificationModalFields";

interface EditIdentificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  salon: Salon;
  editBusinessType: string;
  editVtaNumber: string;
  editEmployees: string;
  editOwnerFirst: string;
  editOwnerLast: string;
  editEmail: string;
  editPhone: string;
  editCountry: string;
  editCity: string;
  editProvince: string;
  editZip: string;
  editPlan: "Basic" | "Premium" | "Enterprise";
  editNotes: string;
  onSave: (data: {
    name: string; businessType: string; vtaNumber: string; employees: string;
    ownerFirst: string; ownerLast: string; email: string; phone: string;
    country: string; city: string; province: string; zip: string;
    plan: "Basic" | "Premium" | "Enterprise"; notes: string;
  }) => void;
}

export default function EditIdentificationModal({
  isOpen, onClose, salon, editBusinessType, editVtaNumber, editEmployees,
  editOwnerFirst, editOwnerLast, editEmail, editPhone, editCountry, editCity,
  editProvince, editZip, editPlan, editNotes, onSave
}: EditIdentificationModalProps) {
  const [name, setName] = useState(salon.name);
  const [businessType, setBusinessType] = useState(editBusinessType);
  const [vtaNumber, setVtaNumber] = useState(editVtaNumber);
  const [employees, setEmployees] = useState(editEmployees);
  const [ownerFirst, setOwnerFirst] = useState(editOwnerFirst);
  const [ownerLast, setOwnerLast] = useState(editOwnerLast);
  const [email, setEmail] = useState(editEmail);
  const [phone, setPhone] = useState(editPhone);
  const [country, setCountry] = useState(editCountry);
  const [city, setCity] = useState(editCity);
  const [province, setProvince] = useState(editProvince);
  const [zip, setZip] = useState(editZip);
  const [plan, setPlan] = useState(editPlan);
  const [notes, setNotes] = useState(editNotes);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ name, businessType, vtaNumber, employees, ownerFirst, ownerLast, email, phone, country, city, province, zip, plan, notes });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-800 font-sans">Edit Salon</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-650 cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 max-h-[75vh] overflow-y-auto font-semibold">
          <EditIdentificationModalFields
            name={name} setName={setName}
            businessType={businessType} setBusinessType={setBusinessType}
            vtaNumber={vtaNumber} setVtaNumber={setVtaNumber}
            employees={employees} setEmployees={setEmployees}
            ownerFirst={ownerFirst} setOwnerFirst={setOwnerFirst}
            ownerLast={ownerLast} setOwnerLast={setOwnerLast}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
            country={country} setCountry={setCountry}
            city={city} setCity={setCity}
            province={province} setProvince={setProvince}
            zip={zip} setZip={setZip}
            plan={plan} setPlan={setPlan}
            notes={notes} setNotes={setNotes}
          />
          <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
            <button type="button" onClick={onClose} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-semibold transition-all cursor-pointer">Cancel</button>
            <button type="submit" className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md cursor-pointer">Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
}
