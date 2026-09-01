"use client";

import React, { useState } from "react";
import SupportHeader from "./SupportHeader";
import SupportStatCards from "./SupportStatCards";
import SupportTabsNav from "./SupportTabsNav";
import SupportTicketsTab from "./SupportTicketsTab";
import SupportTicketDetail from "./SupportTicketDetail";
import SupportAnnouncementsTab from "./SupportAnnouncementsTab";
import SupportAudiencesTab from "./SupportAudiencesTab";
import AudienceDetailView from "./AudienceDetailView";
import AudienceBuilderPage from "./AudienceBuilderPage";
import AudienceSalonsModal from "./AudienceSalonsModal";
import AddSalonModal from "./AddSalonModal";
import AdvancedAudienceFiltersModal from "./AdvancedAudienceFiltersModal";
import SendEmailModal from "./SendEmailModal";
import ViewEmailModal from "./ViewEmailModal";
import AddNoteModal from "./AddNoteModal";
import NewAnnouncementModal from "./NewAnnouncementModal";
import NewAudienceModal from "./NewAudienceModal";
import { Ticket, Announcement, Audience, SupportSubTab, SupportPageProps, SalonInAudience } from "./types";
import { initialTickets, initialAnnouncements, initialAudiences, AVAILABLE_SALONS } from "./mockData";

export default function SupportPage({ activeTicketId = null, onCloseTicketDetail }: SupportPageProps) {
  const [activeTab, setActiveTab] = useState<SupportSubTab>("tickets");
  const [tickets, setTickets] = useState<Ticket[]>(initialTickets);
  const [announcements, setAnnouncements] = useState<Announcement[]>(initialAnnouncements);
  const [audiences, setAudiences] = useState<Audience[]>(initialAudiences);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(activeTicketId ? initialTickets.find((t) => t.id === activeTicketId) || null : null);
  const [viewedAudience, setViewedAudience] = useState<Audience | null>(null);
  const [showAudienceBuilder, setShowAudienceBuilder] = useState(false);
  const [salonsInAudience, setSalonsInAudience] = useState<SalonInAudience[]>(AVAILABLE_SALONS);

  const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false);
  const [isAudienceModalOpen, setIsAudienceModalOpen] = useState(false);
  const [isSalonsModalOpen, setIsSalonsModalOpen] = useState(false);
  const [isAddSalonOpen, setIsAddSalonOpen] = useState(false);
  const [isAdvancedFiltersOpen, setIsAdvancedFiltersOpen] = useState(false);
  const [isSendEmailOpen, setIsSendEmailOpen] = useState(false);
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
  const [viewingEmail, setViewingEmail] = useState<any | null>(null);
  const [editingNoteIdx, setEditingNoteIdx] = useState<number | null>(null);

  return (
    <div className="flex w-full flex-col gap-6 text-left text-[#283442] animate-in fade-in duration-300 font-sans pb-10">
      {!selectedTicket && !viewedAudience && !showAudienceBuilder && (
        <>
          <SupportHeader onRefresh={() => { setTickets(initialTickets); setAnnouncements(initialAnnouncements); setAudiences(initialAudiences); }} onNewAnnouncement={() => setIsAnnouncementModalOpen(true)} />
          <SupportStatCards tickets={tickets} />
          <section className="relative w-full rounded-[12px] bg-white p-6 shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)] flex flex-col gap-6">
            <SupportTabsNav activeTab={activeTab} setActiveTab={setActiveTab} onNewAudienceClick={() => setIsAudienceModalOpen(true)} />
            {activeTab === "tickets" && <SupportTicketsTab tickets={tickets} onSelectTicket={setSelectedTicket} onDeleteTicket={(id) => setTickets((p) => p.filter((t) => t.id !== id))} />}
            {activeTab === "announcements" && <SupportAnnouncementsTab announcements={announcements} onPreviewAnnouncement={() => {}} onDeleteAnnouncement={(id) => setAnnouncements((p) => p.filter((a) => a.id !== id))} />}
            {activeTab === "audiences" && <SupportAudiencesTab audiences={audiences} onViewAudience={setViewedAudience} onEditAudience={(a) => setViewedAudience(a)} onDeleteAudience={(a) => setAudiences((p) => p.filter((x) => x.id !== a.id))} onOpenAdvancedFilters={() => setIsAdvancedFiltersOpen(true)} />}
          </section>
        </>
      )}

      {selectedTicket && (
        <SupportTicketDetail
          ticket={selectedTicket}
          onBack={() => { setSelectedTicket(null); onCloseTicketDetail?.(); }}
          onUpdateStatus={(id, s) => { setTickets((p) => p.map((t) => (t.id === id ? { ...t, status: s } : t))); setSelectedTicket((p) => (p ? { ...p, status: s } : null)); }}
          onUpdatePriority={(id, pr) => { setTickets((p) => p.map((t) => (t.id === id ? { ...t, priority: pr } : t))); setSelectedTicket((p) => (p ? { ...p, priority: pr } : null)); }}
          onUpdateAssignee={(id, a) => { setTickets((p) => p.map((t) => (t.id === id ? { ...t, assignTo: a } : t))); setSelectedTicket((p) => (p ? { ...p, assignTo: a } : null)); }}
          onOpenSendEmail={() => setIsSendEmailOpen(true)}
          onOpenAddNote={() => { setEditingNoteIdx(null); setIsAddNoteOpen(true); }}
          onViewEmail={setViewingEmail}
          onEditNote={(idx) => { setEditingNoteIdx(idx); setIsAddNoteOpen(true); }}
        />
      )}

      {!selectedTicket && viewedAudience && <AudienceDetailView audience={viewedAudience} onBack={() => setViewedAudience(null)} onOpenSalonsModal={() => setIsSalonsModalOpen(true)} />}
      {!selectedTicket && !viewedAudience && showAudienceBuilder && <AudienceBuilderPage onSave={(aud) => { setAudiences((p) => [aud, ...p]); setShowAudienceBuilder(false); }} onBack={() => setShowAudienceBuilder(false)} />}

      <NewAnnouncementModal isOpen={isAnnouncementModalOpen} onClose={() => setIsAnnouncementModalOpen(false)} onCreate={(a) => setAnnouncements((p) => [a, ...p])} />
      <NewAudienceModal isOpen={isAudienceModalOpen} onClose={() => setIsAudienceModalOpen(false)} onCreate={(aud) => setAudiences((p) => [aud, ...p])} />
      {viewedAudience && <AudienceSalonsModal audience={viewedAudience} salons={salonsInAudience} onClose={() => setIsSalonsModalOpen(false)} onOpenAddSalon={() => setIsAddSalonOpen(true)} onRemoveSalon={(id) => setSalonsInAudience((p) => p.filter((s) => s.id !== id))} />}
      <AddSalonModal isOpen={isAddSalonOpen} onClose={() => setIsAddSalonOpen(false)} onAddSalon={(s) => setSalonsInAudience((p) => [...p, s])} />
      <AdvancedAudienceFiltersModal isOpen={isAdvancedFiltersOpen} onClose={() => setIsAdvancedFiltersOpen(false)} onApply={() => {}} />
      <SendEmailModal isOpen={isSendEmailOpen} onClose={() => setIsSendEmailOpen(false)} onSend={(msg) => { if (selectedTicket) { const newE = { sender: "Support Team", message: msg, date: new Date().toLocaleDateString("en-US") }; setTickets((p) => p.map((t) => (t.id === selectedTicket.id ? { ...t, emailsSent: [newE, ...t.emailsSent] } : t))); setSelectedTicket((p) => (p ? { ...p, emailsSent: [newE, ...p.emailsSent] } : null)); } }} />
      <ViewEmailModal email={viewingEmail} onClose={() => setViewingEmail(null)} />
      <AddNoteModal isOpen={isAddNoteOpen} initialNote={editingNoteIdx !== null && selectedTicket ? selectedTicket.internalNotes[editingNoteIdx] : null} onClose={() => setIsAddNoteOpen(false)} onSave={(msg, type) => { if (selectedTicket) { const newN = { author: type === "resolution" ? "Resolution" : "Support Team", message: msg, daysAgo: "Just now", type }; setTickets((p) => p.map((t) => (t.id === selectedTicket.id ? { ...t, internalNotes: [newN, ...t.internalNotes] } : t))); setSelectedTicket((p) => (p ? { ...p, internalNotes: [newN, ...p.internalNotes] } : null)); } }} />
    </div>
  );
}
