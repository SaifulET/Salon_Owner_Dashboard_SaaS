"use client";

import React, { useState } from "react";
import SalonAutomationsHeader from "./SalonAutomationsHeader";
import SalonAutomationsKpiCards from "./SalonAutomationsKpiCards";
import SalonAutomationsTable from "./SalonAutomationsTable";
import SendEmailModal from "./SendEmailModal";
import ViewEmailModal from "./ViewEmailModal";
import { initialAutomationEmails } from "./mockData";
import { AutomationEmail } from "./types";

interface Salon {
  id: string;
  name: string;
  tag: string;
  manager: string;
  city: string;
  region: string;
  email: string;
  status: "Active" | "Trial" | "Cancelled" | "Leads" | "Past Due" | "Expired";
  plan: "Basic" | "Premium" | "Enterprise";
  revenue: string;
  ltv: string;
  lastActive: string;
  hasTicket: boolean;
  vip?: boolean;
  enterprise?: boolean;
}

interface SalonAutomationsPageProps {
  salon: Salon;
  onBack: () => void;
}

export default function SalonAutomationsPage({ salon, onBack }: SalonAutomationsPageProps) {
  const [dateRange, setDateRange] = useState("All Time");
  const [source, setSource] = useState("All Sources");
  const [emails, setEmails] = useState<AutomationEmail[]>(initialAutomationEmails);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [viewingEmail, setViewingEmail] = useState<AutomationEmail | null>(null);

  const handleSendEmail = (newMail: AutomationEmail) => {
    setEmails((prev) => [newMail, ...prev]);
    setIsSendModalOpen(false);
  };

  const handleViewEmail = (subject: string) => {
    const matched = emails.find((e) => e.subject === subject);
    if (matched) setViewingEmail(matched);
  };

  const handleResendEmail = (subject: string) => {
    setEmails((prev) =>
      prev.map((e) =>
        e.subject === subject
          ? {
              ...e,
              category: "Sent",
              date: `${new Date().toLocaleDateString("en-GB")} ${new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })}`
            }
          : e
      )
    );
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300 w-full text-left font-sans">
      <SalonAutomationsHeader salonName={salon.name} onBack={onBack} />
      <SalonAutomationsKpiCards />
      <SalonAutomationsTable
        emails={emails}
        dateRange={dateRange}
        setDateRange={setDateRange}
        source={source}
        setSource={setSource}
        onOpenSendModal={() => setIsSendModalOpen(true)}
        onViewEmail={handleViewEmail}
        onResendEmail={handleResendEmail}
      />
      <SendEmailModal isOpen={isSendModalOpen} onClose={() => setIsSendModalOpen(false)} onSend={handleSendEmail} />
      <ViewEmailModal email={viewingEmail} onClose={() => setViewingEmail(null)} />
    </div>
  );
}
