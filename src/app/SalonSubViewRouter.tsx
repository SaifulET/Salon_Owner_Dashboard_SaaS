"use client";

import React from "react";
import SalonDetailPage from "../components/salons/detail/SalonDetailPage";
import UsersAndStaffPage from "../components/staff/UsersAndStaffPage";
import PermissionsPage from "../components/permissions/PermissionsPage";
import BillingHistoryPage from "../components/billing-history/BillingHistoryPage";
import SalonSettingsPage from "../components/salon-settings/SalonSettingsPage";
import SalonActivityPage from "../components/salon-activity/SalonActivityPage";
import SalonSupportPage from "../components/salon-support/SalonSupportPage";
import SalonAutomationsPage from "../components/salon-automations/SalonAutomationsPage";
import { Salon, Employee } from "./types";
import { defaultEmployees } from "./mockData";

interface SalonSubViewRouterProps {
  salon: Salon;
  salonSubTab: string;
  setSalonSubTab: (tab: string) => void;
  onBack: () => void;
  onImpersonate: (name: string, silent?: boolean) => void;
  activePermissionEmployeeId: string | null;
  setActivePermissionEmployeeId: (id: string | null) => void;
  employeesBySalon: Record<string, Employee[]>;
  setEmployeesBySalon: React.Dispatch<React.SetStateAction<Record<string, Employee[]>>>;
}

export default function SalonSubViewRouter({
  salon,
  salonSubTab,
  setSalonSubTab,
  onBack,
  onImpersonate,
  activePermissionEmployeeId,
  setActivePermissionEmployeeId,
  employeesBySalon,
  setEmployeesBySalon
}: SalonSubViewRouterProps) {
  switch (salonSubTab) {
    case "overview":
      return <SalonDetailPage salon={salon} onBack={onBack} onImpersonate={onImpersonate} />;
    case "users_and_staff":
      return (
        <UsersAndStaffPage
          salon={salon}
          onBack={onBack}
          activePermissionEmployeeId={activePermissionEmployeeId}
          setActivePermissionEmployeeId={(id) => {
            setActivePermissionEmployeeId(id);
            if (id) setSalonSubTab("permissions");
          }}
          setSalonSubTab={setSalonSubTab}
          employees={employeesBySalon[salon.id] || defaultEmployees}
          setEmployees={(newEmployees) => {
            setEmployeesBySalon((prev) => ({
              ...prev,
              [salon.id]: typeof newEmployees === "function" ? (newEmployees as any)(prev[salon.id] || defaultEmployees) : newEmployees
            }));
          }}
        />
      );
    case "permissions":
      return (
        <PermissionsPage
          salon={salon}
          employeeId={activePermissionEmployeeId}
          onBack={() => {
            setSalonSubTab("users_and_staff");
            setActivePermissionEmployeeId(null);
          }}
        />
      );
    case "billing":
      return <BillingHistoryPage salon={salon} onBack={onBack} />;
    case "settings":
      return <SalonSettingsPage salon={salon} onBack={onBack} />;
    case "activity":
      return <SalonActivityPage salon={salon} onBack={onBack} />;
    case "support":
      return <SalonSupportPage salon={salon} onBack={onBack} />;
    case "automations":
      return <SalonAutomationsPage salon={salon} onBack={onBack} />;
    default:
      return (
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm text-center max-w-lg mx-auto my-12 animate-in fade-in">
          <h2 className="text-xl font-bold text-slate-800 mb-2 capitalize">Salon {salonSubTab.replace("_", " ")}</h2>
          <p className="text-slate-400 text-sm mb-6">This sub-view of {salon.name} is currently under construction.</p>
          <button onClick={() => setSalonSubTab("overview")} className="px-6 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-2xl text-xs font-semibold">
            Back to Overview
          </button>
        </div>
      );
  }
}
