import React from "react";
import WizardStep1 from "./WizardStep1";
import WizardStep2, { Owner } from "./WizardStep2";
import WizardStep3 from "./WizardStep3";

interface WizardSteps1to3Props {
  manualStep: number;
  manualSalonName: string;
  setManualSalonName: (val: string) => void;
  manualBusinessType: string;
  setManualBusinessType: (val: string) => void;
  manualVtaNumber: string;
  setManualVtaNumber: (val: string) => void;
  manualEmployeeCount: string;
  setManualEmployeeCount: (val: string) => void;
  manualOwners: Owner[];
  setManualOwners: React.Dispatch<React.SetStateAction<Owner[]>>;
  handleDeleteOwner: (id: string) => void;
  manualEmail: string;
  setManualEmail: (val: string) => void;
  manualPhone: string;
  setManualPhone: (val: string) => void;
}

export default function WizardSteps1to3({
  manualStep,
  manualSalonName,
  setManualSalonName,
  manualBusinessType,
  setManualBusinessType,
  manualVtaNumber,
  setManualVtaNumber,
  manualEmployeeCount,
  setManualEmployeeCount,
  manualOwners,
  setManualOwners,
  handleDeleteOwner,
  manualEmail,
  setManualEmail,
  manualPhone,
  setManualPhone
}: WizardSteps1to3Props) {
  if (manualStep === 1) {
    return (
      <WizardStep1
        manualSalonName={manualSalonName}
        setManualSalonName={setManualSalonName}
        manualBusinessType={manualBusinessType}
        setManualBusinessType={setManualBusinessType}
        manualVtaNumber={manualVtaNumber}
        setManualVtaNumber={setManualVtaNumber}
        manualEmployeeCount={manualEmployeeCount}
        setManualEmployeeCount={setManualEmployeeCount}
      />
    );
  }

  if (manualStep === 2) {
    return (
      <WizardStep2
        manualOwners={manualOwners}
        setManualOwners={setManualOwners}
        handleDeleteOwner={handleDeleteOwner}
      />
    );
  }

  if (manualStep === 3) {
    return (
      <WizardStep3
        manualEmail={manualEmail}
        setManualEmail={setManualEmail}
        manualPhone={manualPhone}
        setManualPhone={setManualPhone}
      />
    );
  }

  return null;
}
