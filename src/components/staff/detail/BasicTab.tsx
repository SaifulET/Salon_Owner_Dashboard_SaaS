import React from "react";
import { Employee } from "../types";
import PersonalDataCard from "./PersonalDataCard";
import ContractCard from "./ContractCard";
import AdditionalDataCard, { Language } from "./AdditionalDataCard";
import SocialAccessCard from "./SocialAccessCard";

interface BasicTabProps {
  employee: Employee;
  certifications: string[];
  languages: Language[];
  courses: string[];
  manager: string;
  openEditModal: () => void;
  setIsEditAdditionalOpen: (open: boolean) => void;
  onViewPermissions: () => void;
}

export default function BasicTab({
  employee,
  certifications,
  languages,
  courses,
  manager,
  openEditModal,
  setIsEditAdditionalOpen,
  onViewPermissions
}: BasicTabProps) {
  return (
    <div className="flex flex-col gap-6 w-full text-left font-semibold text-xs">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PersonalDataCard employee={employee} openEditModal={openEditModal} />
        <ContractCard employee={employee} openEditModal={openEditModal} />
      </div>

      <AdditionalDataCard
        certifications={certifications}
        languages={languages}
        courses={courses}
        manager={manager}
        setIsEditAdditionalOpen={setIsEditAdditionalOpen}
      />

      <SocialAccessCard onViewPermissions={onViewPermissions} />
    </div>
  );
}
