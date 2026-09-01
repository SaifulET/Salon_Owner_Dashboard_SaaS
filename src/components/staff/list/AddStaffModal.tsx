import React, { useState, useEffect } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { Employee } from "../types";
import AddStaffFormFields from "./AddStaffFormFields";

interface AddStaffModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee | null;
  onSave: (emp: Partial<Employee>) => void;
  onViewPermissions: (emp: Partial<Employee>) => void;
}

export default function AddStaffModal({
  isOpen,
  onClose,
  employee,
  onSave,
  onViewPermissions
}: AddStaffModalProps) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [pob, setPob] = useState("Select city");
  const [address, setAddress] = useState("");
  const [contractType, setContractType] = useState("Permanent");
  const [taxCode, setTaxCode] = useState("");
  const [iban, setIban] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [occupation, setOccupation] = useState("Barber");
  const [remuneration, setRemuneration] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emergencyName, setEmergencyName] = useState("");
  const [emergencyPhone, setEmergencyPhone] = useState("");

  useEffect(() => {
    if (employee) {
      setFirstName(employee.firstName);
      setLastName(employee.lastName);
      setDob(employee.dob || "");
      setPob(employee.pob || "Select city");
      setAddress(employee.address || "");
      setContractType(employee.contractType || "Permanent");
      setTaxCode(employee.taxCode || "");
      setIban(employee.iban || "");
      setStartDate(employee.startDate || "");
      setEndDate(employee.endDate || "");
      setOccupation(employee.occupation || "Barber");
      setRemuneration(employee.remuneration || "");
      setPhone(employee.phone || "");
      setEmail(employee.email);
      setEmergencyName(employee.emergencyName || "");
      setEmergencyPhone(employee.emergencyPhone || "");
    } else {
      setFirstName(""); setLastName(""); setDob(""); setPob("Select city"); setAddress("");
      setContractType("Permanent"); setTaxCode(""); setIban(""); setStartDate(""); setEndDate("");
      setOccupation("Barber"); setRemuneration(""); setPhone(""); setEmail("");
      setEmergencyName(""); setEmergencyPhone("");
    }
  }, [employee, isOpen]);

  if (!isOpen) return null;

  const getFormData = (): Partial<Employee> => ({
    firstName, lastName, dob, pob, address, contractType, taxCode, iban,
    startDate, endDate, occupation, remuneration, phone, email,
    emergencyName, emergencyPhone
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(getFormData());
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl w-full max-w-[620px] shadow-2xl flex flex-col relative overflow-hidden animate-in zoom-in-95 duration-200 text-left font-semibold text-xs font-sans">
        <div className="px-7 pt-7 pb-5 flex items-center justify-between border-b border-slate-100">
          <h3 className="text-base font-bold text-slate-800">{employee ? "Edit Employee Details" : "Hire New Staff"}</h3>
          <button onClick={onClose} className="p-1.5 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto px-7 pb-7 pt-5 max-h-[75vh] flex flex-col gap-6">
          <AddStaffFormFields
            firstName={firstName} setFirstName={setFirstName} lastName={lastName} setLastName={setLastName}
            dob={dob} setDob={setDob} pob={pob} setPob={setPob} address={address} setAddress={setAddress}
            contractType={contractType} setContractType={setContractType} taxCode={taxCode} setTaxCode={setTaxCode}
            iban={iban} setIban={setIban} startDate={startDate} setStartDate={setStartDate}
            endDate={endDate} setEndDate={setEndDate} occupation={occupation} setOccupation={setOccupation}
            remuneration={remuneration} setRemuneration={setRemuneration} phone={phone} setPhone={setPhone}
            email={email} setEmail={setEmail} emergencyName={emergencyName} setEmergencyName={setEmergencyName}
            emergencyPhone={emergencyPhone} setEmergencyPhone={setEmergencyPhone}
          />

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100">
            <button type="button" onClick={() => onViewPermissions(getFormData())} className="px-4 py-2.5 text-xs font-bold text-[#5e53fc] hover:bg-[#f8f7ff] rounded-xl transition-colors cursor-pointer">View Permissions</button>
            <div className="flex items-center gap-3">
              <button type="button" onClick={onClose} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-650 rounded-xl font-bold transition-all text-xs cursor-pointer">Cancel</button>
              <button type="submit" className="px-6 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer">{employee ? "Save Changes" : "Hire Staff"}</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
