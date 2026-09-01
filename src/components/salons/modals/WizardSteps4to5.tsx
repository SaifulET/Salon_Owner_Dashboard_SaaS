import React from "react";
import WizardStep4 from "./WizardStep4";
import WizardStep5 from "./WizardStep5";

interface WizardSteps4to5Props {
  manualStep: number;
  manualCountry: string;
  setManualCountry: (val: string) => void;
  manualCity: string;
  setManualCity: (val: string) => void;
  manualProvince: string;
  setManualProvince: (val: string) => void;
  manualZip: string;
  setManualZip: (val: string) => void;
  manualTrialPeriod: string;
  setManualTrialPeriod: (val: string) => void;
  manualInitialPlan: "Basic" | "Premium" | "Enterprise";
  setManualInitialPlan: (val: "Basic" | "Premium" | "Enterprise") => void;
}

export default function WizardSteps4to5({
  manualStep,
  manualCountry,
  setManualCountry,
  manualCity,
  setManualCity,
  manualProvince,
  setManualProvince,
  manualZip,
  setManualZip,
  manualTrialPeriod,
  setManualTrialPeriod,
  manualInitialPlan,
  setManualInitialPlan
}: WizardSteps4to5Props) {
  if (manualStep === 4) {
    return (
      <WizardStep4
        manualCountry={manualCountry}
        setManualCountry={setManualCountry}
        manualCity={manualCity}
        setManualCity={setManualCity}
        manualProvince={manualProvince}
        setManualProvince={setManualProvince}
        manualZip={manualZip}
        setManualZip={setManualZip}
      />
    );
  }

  if (manualStep === 5) {
    return (
      <WizardStep5
        manualTrialPeriod={manualTrialPeriod}
        setManualTrialPeriod={setManualTrialPeriod}
        manualInitialPlan={manualInitialPlan}
        setManualInitialPlan={setManualInitialPlan}
      />
    );
  }

  return null;
}
