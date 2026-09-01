"use client";

import React, { useState } from "react";
import PermissionsHeader from "./PermissionsHeader";
import TenantPermissionsCard, { PermissionItem } from "./TenantPermissionsCard";
import CalendarPermissionsCard from "./CalendarPermissionsCard";

interface PermissionsPageProps {
  salon: any;
  employeeId: string | null;
  onBack: () => void;
}

export default function PermissionsPage({ onBack }: PermissionsPageProps) {
  const employeeName = "Roberto Marini";

  const [tenantPermissions, setTenantPermissions] = useState<PermissionItem[]>([
    { id: "tp-1", label: "Manage salon profile", description: "Branding name header and business info", enabled: true },
    { id: "tp-2", label: "Manage subscription & feature toggles", description: "Allow subscription & feature toggles", enabled: true },
    { id: "tp-3", label: "Manage roles & member invites", description: "Add/remove users, set permissions", enabled: true },
    { id: "tp-4", label: "View audit log / user operation history", description: "Track key history events", enabled: true }
  ]);

  const [calendarPermissions, setCalendarPermissions] = useState<PermissionItem[]>([
    { id: "cp-1", label: "View team calendars (same salon)", description: "View team calendars inside salon", enabled: true },
    { id: "cp-2", label: "View all salon calendars (incl. private slots)", description: "View private slots as well", enabled: true },
    { id: "cp-3", label: "Create appointments", description: "Book new appointments", enabled: true },
    { id: "cp-4", label: "Edit appointments (own)", description: "Edit own bookings", enabled: true },
    { id: "cp-5", label: "Edit appointments (others)", description: "Edit team members bookings", enabled: true },
    { id: "cp-6", label: "Approve/reject client self-bookings", description: "Handle automated client slots", enabled: true },
    { id: "cp-7", label: "Override conflicts/overbook", description: "Force calendar overlap booking slots", enabled: true },
    { id: "cp-8", label: "Block time / set breaks", description: "Prevent appointments in specific slots", enabled: true },
    { id: "cp-9", label: "Manage shift scheduling & rotations", description: "Set recurring/Saturday rotation rules", enabled: true },
    { id: "cp-10", label: "Configure service durations & availability logic", description: "Adjust service availability logic", enabled: true },
    { id: "cp-11", label: "Export calendar / sync", description: "Sync external calendars", enabled: true },
    { id: "cp-12", label: "View client notes from calendar", description: "View private client records", enabled: true }
  ]);

  const handleTenantChange = (id: string, val: boolean) => {
    setTenantPermissions(prev => prev.map(item => item.id === id ? { ...item, enabled: val } : item));
  };

  const handleCalendarChange = (id: string, val: boolean) => {
    setCalendarPermissions(prev => prev.map(item => item.id === id ? { ...item, enabled: val } : item));
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <PermissionsHeader employeeName={employeeName} onBack={onBack} />
      <TenantPermissionsCard permissions={tenantPermissions} onChange={handleTenantChange} />
      <CalendarPermissionsCard permissions={calendarPermissions} onChange={handleCalendarChange} />

      <div className="flex justify-end gap-3.5 mt-2">
        <button
          onClick={onBack}
          className="px-6 py-2.5 bg-[#f8fafc] hover:bg-slate-100 text-slate-600 rounded-xl text-xs font-bold transition-all shadow-sm border border-slate-200 cursor-pointer"
        >
          Cancel
        </button>
        <button
          onClick={onBack}
          className="px-6 py-2.5 bg-[#5e53fc] hover:bg-[#4d42eb] text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-150 cursor-pointer"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
