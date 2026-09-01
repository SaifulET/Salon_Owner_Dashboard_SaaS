import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { Employee } from "../types";
import EditEmployeeFormFields from "./EditEmployeeFormFields";

interface EditEmployeeModalProps {
  isOpen: boolean;
  onClose: () => void;
  employee: Employee;
  onSave: (updated: Employee) => void;
}

export default function EditEmployeeModal({
  isOpen,
  onClose,
  employee,
  onSave
}: EditEmployeeModalProps) {
  const [firstName, setFirstName] = useState(employee.firstName);
  const [lastName, setLastName] = useState(employee.lastName);
  const [email, setEmail] = useState(employee.email);
  const [phone, setPhone] = useState(employee.phone || "");
  const [dob, setDob] = useState(employee.dob || "");
  const [taxCode, setTaxCode] = useState(employee.taxCode || "");
  const [address, setAddress] = useState(employee.address || "");
  const [contractType, setContractType] = useState(employee.contractType || "Permanent");
  const [iban, setIban] = useState(employee.iban || "");
  const [startDate, setStartDate] = useState(employee.startDate || "");
  const [endDate, setEndDate] = useState(employee.endDate || "");
  const [occupation, setOccupation] = useState(employee.occupation || "Staff");
  const [remuneration, setRemuneration] = useState(employee.remuneration || "");
  const [emergencyName, setEmergencyName] = useState(employee.emergencyName || "");
  const [emergencyPhone, setEmergencyPhone] = useState(employee.emergencyPhone || "");

  if (!isOpen) return null;

  const convertToInputDate = (dStr: string) => {
    if (!dStr) return "";
    if (dStr.includes("-")) return dStr;
    const parts = dStr.split("/");
    if (parts.length === 3) return `${parts[2]}-${parts[1].padStart(2, "0")}-${parts[0].padStart(2, "0")}`;
    return dStr;
  };

  const convertToDisplayDate = (dStr: string) => {
    if (!dStr) return "";
    if (dStr.includes("/")) return dStr;
    const parts = dStr.split("-");
    if (parts.length === 3) return `${parts[2]}/${parts[1]}/${parts[0]}`;
    return dStr;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...employee,
      firstName, lastName, email, phone,
      dob: convertToDisplayDate(dob), taxCode, address, contractType, iban,
      startDate: convertToDisplayDate(startDate),
      endDate: endDate ? convertToDisplayDate(endDate) : undefined,
      occupation, remuneration, emergencyName, emergencyPhone
    });
  };

  return (
    <div className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-[6px] z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-[24px] w-full max-w-[640px] shadow-2xl p-8 flex flex-col gap-6 relative text-left max-h-[90vh] overflow-y-auto font-semibold text-xs font-sans">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h3 className="text-lg font-bold text-[#0f172a] font-sans">Edit Employee Details</h3>
          <button onClick={onClose} className="p-1 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer">
            <HugeiconsIcon icon={Cancel01Icon} size={20} className="text-slate-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-sm">
          <EditEmployeeFormFields
            firstName={firstName} setFirstName={setFirstName}
            lastName={lastName} setLastName={setLastName}
            email={email} setEmail={setEmail}
            phone={phone} setPhone={setPhone}
            dob={dob} setDob={setDob}
            taxCode={taxCode} setTaxCode={setTaxCode}
            address={address} setAddress={setAddress}
            contractType={contractType} setContractType={setContractType}
            iban={iban} setIban={setIban}
            startDate={startDate} setStartDate={setStartDate}
            endDate={endDate} setEndDate={setEndDate}
            occupation={occupation} setOccupation={setOccupation}
            remuneration={remuneration} setRemuneration={setRemuneration}
            emergencyName={emergencyName} setEmergencyName={setEmergencyName}
            emergencyPhone={emergencyPhone} setEmergencyPhone={setEmergencyPhone}
            convertToInputDate={convertToInputDate}
          />

          <div className="flex items-center justify-end gap-3 mt-4 border-t border-slate-100 pt-4">
            <button type="button" onClick={onClose} className="px-5 py-2 bg-slate-50 hover:bg-slate-100 text-slate-650 rounded-xl font-bold transition-all text-xs cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="px-5 py-2 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl font-bold transition-all text-xs shadow-md cursor-pointer">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
