import React from "react";
import SwitchToggle from "./SwitchToggle";

export interface PermissionItem {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

interface TenantPermissionsCardProps {
  permissions: PermissionItem[];
  onChange: (id: string, val: boolean) => void;
}

export default function TenantPermissionsCard({ permissions, onChange }: TenantPermissionsCardProps) {
  return (
    <div className="bg-white rounded-3xl border border-[#eef2f6] shadow-[0_2px_4px_-1px_rgba(175,182,201,0.2)] flex flex-col p-8 w-full text-left">
      <h3 className="text-sm font-extrabold text-slate-800 mb-6 uppercase tracking-wider">Tenant & Users</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {permissions.map((item) => (
          <SwitchToggle
            key={item.id}
            label={item.label}
            description={item.description}
            enabled={item.enabled}
            onChange={(val) => onChange(item.id, val)}
          />
        ))}
      </div>
    </div>
  );
}
