import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import AddLocationFormFields from "./AddLocationFormFields";

interface AddLocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (data: {
    employees: string; email: string; phone: string; address: string;
    zip: string; city: string; province: string; country: string;
  }) => void;
}

export default function AddLocationModal({ isOpen, onClose, onAdd }: AddLocationModalProps) {
  const [employees, setEmployees] = useState("10");
  const [email, setEmail] = useState("bologna@beautywellness.com");
  const [phone, setPhone] = useState("+39 051 9876543");
  const [address, setAddress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("Select city");
  const [province, setProvince] = useState("Select province");
  const [country, setCountry] = useState("United States");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({ employees, email, phone, address, zip, city, province, country });
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-xl shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left">
        <div className="px-6 py-5 border-b border-slate-100 flex items-center justify-between font-bold text-slate-800">
          <h3 className="text-base font-sans">Add Location</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-655 cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-4 max-h-[75vh] overflow-y-auto font-semibold text-xs font-sans">
          <AddLocationFormFields
            employees={employees} setEmployees={setEmployees}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
            address={address} setAddress={setAddress}
            zip={zip} setZip={setZip}
            city={city} setCity={setCity}
            province={province} setProvince={setProvince}
            country={country} setCountry={setCountry}
          />
          <div className="flex justify-end gap-3 border-t border-slate-100 pt-4 mt-2">
            <button type="button" onClick={onClose} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-655 rounded-xl text-xs font-semibold transition-all cursor-pointer">Cancel</button>
            <button type="submit" className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md cursor-pointer">Add Location</button>
          </div>
        </form>
      </div>
    </div>
  );
}
