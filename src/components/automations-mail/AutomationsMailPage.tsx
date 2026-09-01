"use client";

import React, { useState, useMemo } from "react";
import AutomationsMailHeader from "./AutomationsMailHeader";
import AutomationsMailTopFilters from "./AutomationsMailTopFilters";
import AutomationsMailSidebar from "./AutomationsMailSidebar";
import AutomationsMailList from "./AutomationsMailList";
import SendEmailModal from "./SendEmailModal";
import ViewNotificationModal from "./ViewNotificationModal";
import { NotificationItem } from "./types";
import { initialNotifications } from "./mockData";

export default function AutomationsMailPage({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);

  // Top Filters
  const [activeTypeTab, setActiveTypeTab] = useState<"All" | "Email" | "SMS" | "WhatsApp">("All");
  const [sourceFilter, setSourceFilter] = useState("All Sources");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");

  // Advanced Sidebar Filters
  const [dataRangeFilter, setDataRangeFilter] = useState("All Time");
  const [salonFilter, setSalonFilter] = useState("All Salons");
  const [operatorFilter, setOperatorFilter] = useState("All Operators");
  const [recipientFilter, setRecipientFilter] = useState("All Recipient");

  // Modals
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [activeViewingNotif, setActiveViewingNotif] = useState<NotificationItem | null>(null);

  const filteredNotifications = useMemo(() => {
    return notifications.filter((notif) => {
      const matchType = activeTypeTab === "All" || notif.type === activeTypeTab;
      const matchSource = sourceFilter === "All Sources" || notif.source === sourceFilter;
      const matchStatus = statusFilter === "All Status" || notif.status === statusFilter;
      const matchCategory = categoryFilter === "All Categories" || notif.category === categoryFilter;
      const matchSalon = salonFilter === "All Salons" || notif.salon === salonFilter;
      const matchOperator = operatorFilter === "All Operators" || notif.operator === operatorFilter;
      const matchRecipient = recipientFilter === "All Recipient" || notif.recipient === recipientFilter;

      return matchType && matchSource && matchStatus && matchCategory && matchSalon && matchOperator && matchRecipient;
    });
  }, [notifications, activeTypeTab, sourceFilter, statusFilter, categoryFilter, salonFilter, operatorFilter, recipientFilter]);

  const handleMarkAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const handleMarkAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const handleSendEmail = (newItem: NotificationItem) => {
    setNotifications((prev) => [newItem, ...prev]);
  };

  return (
    <div className="flex w-full flex-col gap-6 text-left text-[#283442] animate-in fade-in duration-300 font-sans pb-10">
      <AutomationsMailHeader
        onRefresh={() => setNotifications(initialNotifications)}
        onSendEmail={() => setIsSendModalOpen(true)}
      />

      <AutomationsMailTopFilters
        activeTypeTab={activeTypeTab}
        setActiveTypeTab={setActiveTypeTab}
        sourceFilter={sourceFilter}
        setSourceFilter={setSourceFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
      />

      <div className="flex flex-col lg:flex-row gap-6 w-full items-start">
        <AutomationsMailSidebar
          dataRangeFilter={dataRangeFilter}
          setDataRangeFilter={setDataRangeFilter}
          salonFilter={salonFilter}
          setSalonFilter={setSalonFilter}
          operatorFilter={operatorFilter}
          setOperatorFilter={setOperatorFilter}
          recipientFilter={recipientFilter}
          setRecipientFilter={setRecipientFilter}
        />

        <AutomationsMailList
          notifications={filteredNotifications}
          onViewNotification={setActiveViewingNotif}
          onMarkAllAsRead={handleMarkAllAsRead}
          onMarkAsRead={handleMarkAsRead}
        />
      </div>

      <SendEmailModal isOpen={isSendModalOpen} onClose={() => setIsSendModalOpen(false)} onSend={handleSendEmail} />
      <ViewNotificationModal notification={activeViewingNotif} onClose={() => setActiveViewingNotif(null)} onMarkAsRead={handleMarkAsRead} />
    </div>
  );
}
