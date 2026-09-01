import React, { useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon } from "@hugeicons/core-free-icons";
import { Salon } from "../types";
import WizardSteps1to3 from "./WizardSteps1to3";
import WizardSteps4to5 from "./WizardSteps4to5";
import ManualSalonWizardStepper from "./ManualSalonWizardStepper";
import { Owner } from "./WizardStep2";

interface ManualSalonWizardProps {
  onClose: () => void;
  onAddSalon: (salon: Salon) => void;
  triggerToast: (msg: string, type: "success" | "info" | "error") => void;
}

export default function ManualSalonWizard({ onClose, onAddSalon, triggerToast }: ManualSalonWizardProps) {
  const [manualStep, setManualStep] = useState(1);
  const [manualSalonName, setManualSalonName] = useState("");
  const [manualBusinessType, setManualBusinessType] = useState("Sole Proprietorship");
  const [manualVtaNumber, setManualVtaNumber] = useState("");
  const [manualEmployeeCount, setManualEmployeeCount] = useState("10");
  const [manualOwners, setManualOwners] = useState<Owner[]>([{ id: "owner-1", firstName: "", lastName: "" }]);
  const [manualEmail, setManualEmail] = useState("");
  const [manualPhone, setManualPhone] = useState("");
  const [manualCountry, setManualCountry] = useState("United States");
  const [manualCity, setManualCity] = useState("Select city");
  const [manualProvince, setManualProvince] = useState("Select province");
  const [manualZip, setManualZip] = useState("");
  const [manualTrialPeriod, setManualTrialPeriod] = useState("14 days");
  const [manualInitialPlan, setManualInitialPlan] = useState<"Basic" | "Premium" | "Enterprise">("Basic");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (manualStep < 5) {
      if (manualStep === 1 && (!manualSalonName.trim() || !manualVtaNumber.trim())) return triggerToast("Salon Name and VTA Number are required.", "error");
      if (manualStep === 2 && manualOwners.some(o => !o.firstName.trim() || !o.lastName.trim())) return triggerToast("Please fill in first and last name for all owners.", "error");
      if (manualStep === 3 && (!manualEmail.trim() || !manualPhone.trim())) return triggerToast("Email and phone number are required.", "error");
      if (manualStep === 4 && (!manualZip.trim() || manualCity === "Select city" || manualProvince === "Select province")) return triggerToast("Please complete location fields.", "error");
      setManualStep(prev => prev + 1);
    } else {
      const newSalon: Salon = {
        id: `salon-${Date.now()}`, name: manualSalonName,
        tag: manualBusinessType === "Sole Proprietorship" ? "Ind." : (manualBusinessType === "SPA" ? "SPA" : "SRL"),
        manager: manualOwners.map(o => `${o.firstName} ${o.lastName}`).filter(n => n.trim() !== "").join(", ") || "No Owner",
        city: manualCity, region: manualCountry, email: manualEmail,
        status: manualTrialPeriod !== "No trial" ? "Trial" : "Active", plan: manualInitialPlan,
        revenue: "299,00 €", ltv: "299,00 €", lastActive: "Just now", hasTicket: false
      };
      onAddSalon(newSalon); triggerToast("Salon added successfully.", "success"); onClose();
    }
  };

  return (
    <div className="flex flex-col">
      <div className="px-8 pt-8 pb-5 border-b border-slate-100 flex flex-col relative">
        <button type="button" onClick={onClose} className="absolute right-6 top-6 p-1 rounded-xl text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors">
          <HugeiconsIcon icon={Cancel01Icon} size={20} />
        </button>
        <h3 className="text-lg font-bold text-slate-800 font-sans">Add New Salon</h3>
        <p className="text-xs font-semibold text-slate-450 mt-1">Create a new salon account and send invitation to the owner</p>
      </div>

      <form onSubmit={handleSubmit} className="px-8 pb-8 flex flex-col gap-6">
        <ManualSalonWizardStepper manualStep={manualStep} />
        <div className="mt-4 min-h-[160px]">
          <WizardSteps1to3
            manualStep={manualStep} manualSalonName={manualSalonName} setManualSalonName={setManualSalonName}
            manualBusinessType={manualBusinessType} setManualBusinessType={setManualBusinessType}
            manualVtaNumber={manualVtaNumber} setManualVtaNumber={setManualVtaNumber}
            manualEmployeeCount={manualEmployeeCount} setManualEmployeeCount={setManualEmployeeCount}
            manualOwners={manualOwners} setManualOwners={setManualOwners} handleDeleteOwner={id => setManualOwners(p => p.filter(o => o.id !== id))}
            manualEmail={manualEmail} setManualEmail={setManualEmail} manualPhone={manualPhone} setManualPhone={setManualPhone}
          />
          <WizardSteps4to5
            manualStep={manualStep} manualCountry={manualCountry} setManualCountry={setManualCountry}
            manualCity={manualCity} setManualCity={setManualCity} manualProvince={manualProvince} setManualProvince={setManualProvince}
            manualZip={manualZip} setManualZip={setManualZip} manualTrialPeriod={manualTrialPeriod}
            setManualTrialPeriod={setManualTrialPeriod} manualInitialPlan={manualInitialPlan} setManualInitialPlan={setManualInitialPlan}
          />
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-100">
          <div>
            {manualStep === 2 && (
              <button type="button" onClick={() => setManualOwners(p => [...p, { id: `owner-${Date.now()}`, firstName: "", lastName: "" }])} className="px-4 py-2 bg-[#f2f1ff] hover:bg-[#e2dfff] text-[#5e53fc] rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm cursor-pointer">
                <span>+ Add New Owner</span>
              </button>
            )}
          </div>
          <div className="flex items-center gap-3">
            {manualStep > 1 && (
              <button type="button" onClick={() => setManualStep(prev => prev - 1)} className="px-5 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-2xl text-xs font-semibold cursor-pointer">Back</button>
            )}
            <button type="submit" className="px-6 py-2.5 bg-[#5e53fc] hover:bg-indigo-700 text-white rounded-xl text-xs font-semibold shadow-md cursor-pointer">
              {manualStep < 5 ? "Next" : "Add Salon and Send Invitation"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
