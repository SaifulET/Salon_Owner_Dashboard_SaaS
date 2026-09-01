"use client";

import React, { useState } from "react";
import ProfileTab from "./ProfileTab";
import SystemTab from "./SystemTab";
import SecurityTab from "./SecurityTab";
import SecurityModals from "./SecurityModals";
import TwoFactorModal from "./TwoFactorModal";
import BillingTab from "./BillingTab";
import NotificationTab from "./NotificationTab";
import BackupTab from "./BackupTab";
import { SecurityData } from "./types";
import { initialSecurityData } from "./mockData";

export default function SettingsPage({ defaultActiveTab = "Profile" }: { defaultActiveTab?: string }) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab);
  const [securityData, setSecurityData] = useState<SecurityData>(initialSecurityData);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const tabs = ["Profile", "System", "Security", "Billing", "Notification", "Backup"];

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="flex w-full flex-col gap-6 text-left text-[#283442] animate-in fade-in duration-300 font-sans pb-10">
      <div className="flex flex-col gap-1">
        <h1 className="text-[20px] font-bold text-[#29343D]">Platform Settings</h1>
        <p className="text-xs text-slate-400">Manage account, system parameters, security policies, and billing preferences</p>
      </div>

      <div className="flex items-center gap-2 border-b border-[#E0E6EB] overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2.5 text-xs font-bold transition-all border-b-2 cursor-pointer whitespace-nowrap ${
              activeTab === tab ? "border-[#635BFF] text-[#635BFF]" : "border-transparent text-[#7A8897] hover:text-[#253143]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {toastMessage && (
        <div className="p-3 bg-[#EBFAF0] border border-[#36C76C]/30 text-[#36C76C] text-xs font-bold rounded-lg animate-in fade-in">
          ✓ {toastMessage}
        </div>
      )}

      {activeTab === "Profile" && <ProfileTab onSave={() => showToast("Profile settings updated successfully!")} />}
      {activeTab === "System" && <SystemTab onSave={() => showToast("System settings saved successfully!")} />}
      {activeTab === "Security" && <SecurityTab data={securityData} setData={setSecurityData} onOpenModal={setActiveModal} onSave={() => showToast("Security settings updated!")} />}
      {activeTab === "Billing" && <BillingTab onSave={() => showToast("Billing configurations saved!")} />}
      {activeTab === "Notification" && <NotificationTab onSave={() => showToast("Notification triggers updated!")} />}
      {activeTab === "Backup" && <BackupTab />}

      <SecurityModals
        activeModal={activeModal}
        onClose={() => setActiveModal(null)}
        onSavePassword={() => showToast("Password changed successfully!")}
        onUpdateRecoveryEmail={(e) => { setSecurityData((p) => ({ ...p, recoveryEmail: e })); showToast("Recovery email updated!"); }}
        onUpdateRecoveryPhone={(ph) => { setSecurityData((p) => ({ ...p, recoveryPhone: ph })); showToast("Recovery phone updated!"); }}
      />
      <TwoFactorModal isOpen={activeModal === "2fa_step1_qr"} onClose={() => setActiveModal(null)} onSuccess={() => { setSecurityData((p) => ({ ...p, twoFactorEnabled: true })); showToast("Two-Factor Authentication is now enabled!"); }} />
    </div>
  );
}
