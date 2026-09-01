"use client";

import React, { useState } from "react";
import { Employee } from "./types";
import DetailHeader from "./detail/DetailHeader";
import BasicTab from "./detail/BasicTab";
import ActivityTab from "./detail/ActivityTab";
import RemunerationTab from "./detail/RemunerationTab";
import ProductionTab from "./detail/ProductionTab";
import EditEmployeeModal from "./detail/EditEmployeeModal";
import EditAdditionalModal from "./detail/EditAdditionalModal";
import TerminateModal from "./detail/TerminateModal";

interface EmployeeDetailPageProps {
  employee: Employee;
  onBack: () => void;
  onViewPermissions: () => void;
  onUpdateEmployee: (updated: Employee) => void;
}

export default function EmployeeDetailPage({ employee, onBack, onViewPermissions, onUpdateEmployee }: EmployeeDetailPageProps) {
  const [activeSubTab, setActiveSubTab] = useState<"basic" | "remuneration" | "activity" | "production">("basic");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditAdditionalOpen, setIsEditAdditionalOpen] = useState(false);
  const [isTerminateModalOpen, setIsTerminateModalOpen] = useState(false);

  const [certifications, setCertifications] = useState<string[]>(["Men's Barber Certification (2020)", "Advanced Colorist Diploma (2022)"]);
  const [languages, setLanguages] = useState<{ lang: string; level: string }[]>([
    { lang: "Italian", level: "Native" }, { lang: "English", level: "Advanced" }, { lang: "Spanish", level: "Intermediate" }
  ]);
  const [courses, setCourses] = useState<string[]>(["Advanced fade cutting technique - 2023", "Customer service & salon management - 2024"]);
  const [manager, setManager] = useState("Maria Rodriguez");

  const payslips = [
    { date: "November 2024", net: "€ 1,700", gross: "€ 2,200", contributions: "€ 400", tfr: "€ 100", login: "Never" },
    { date: "October 2024", net: "€ 1,700", gross: "€ 2,200", contributions: "€ 400", tfr: "€ 100", login: "Never" },
    { date: "September 2024", net: "€ 1,700", gross: "€ 2,200", contributions: "€ 400", tfr: "€ 100", login: "Never" }
  ];
  const stamps = [
    { date: "November 29, 2024", time: "09:00 - 18:00 (1h break)", total: "8h 00m", added: "Auto" },
    { date: "November 28, 2024", time: "09:00 - 18:00 (1h break)", total: "8h 00m", added: "Auto" },
    { date: "November 27, 2024", time: "09:00 - 18:00 (1h break)", total: "8h 00m", added: "Auto" }
  ];
  const loyalCustomers = [
    { name: "Marco Rossi", appts: 12, spent: "€ 480", lastAppt: "Nov 25, 2024" },
    { name: "Giuseppe Verdi", appts: 8, spent: "€ 320", lastAppt: "Nov 20, 2024" },
    { name: "Luca Bianchi", appts: 6, spent: "€ 240", lastAppt: "Nov 15, 2024" }
  ];

  return (
    <div className="flex flex-col gap-6 text-[#29343D] animate-in fade-in duration-300 font-sans">
      <DetailHeader
        employee={employee} onBack={onBack} onOpenEditModal={() => setIsEditModalOpen(true)}
        onOpenTerminateModal={() => setIsTerminateModalOpen(true)} activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab}
      />

      <div className="w-full">
        {activeSubTab === "basic" && <BasicTab employee={employee} certifications={certifications} languages={languages} courses={courses} manager={manager} openEditModal={() => setIsEditModalOpen(true)} setIsEditAdditionalOpen={setIsEditAdditionalOpen} onViewPermissions={onViewPermissions} />}
        {activeSubTab === "activity" && <ActivityTab stamps={stamps} loyalCustomers={loyalCustomers} />}
        {activeSubTab === "remuneration" && <RemunerationTab employee={employee} payslips={payslips} />}
        {activeSubTab === "production" && <ProductionTab />}
      </div>

      <EditEmployeeModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} employee={employee} onSave={(updated) => { onUpdateEmployee(updated); setIsEditModalOpen(false); }} />
      <EditAdditionalModal
        isOpen={isEditAdditionalOpen} onClose={() => setIsEditAdditionalOpen(false)}
        initialCertifications={certifications} initialCourses={courses} initialLanguages={languages} initialManager={manager}
        onSave={(d) => { setCertifications(d.certifications); setCourses(d.courses); setLanguages(d.languages); setManager(d.manager); setIsEditAdditionalOpen(false); }}
      />
      <TerminateModal
        isOpen={isTerminateModalOpen} onClose={() => setIsTerminateModalOpen(false)}
        onConfirm={(endDate) => {
          onUpdateEmployee({ ...employee, endDate: endDate || new Date().toLocaleDateString("it-IT"), employmentStatus: `Out of Team: ${endDate || new Date().toLocaleDateString("it-IT")}`, status: "Inactive" });
          setIsTerminateModalOpen(false);
        }}
      />
    </div>
  );
}
