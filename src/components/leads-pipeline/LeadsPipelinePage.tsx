"use client";

import React, { useState } from "react";
import PipelineHeader from "./PipelineHeader";
import PipelineSubTabs from "./PipelineSubTabs";
import LeadsDaGestireTab from "./LeadsDaGestireTab";
import ActualPipelineTab from "./ActualPipelineTab";
import PipelineSettingsTab from "./PipelineSettingsTab";
import NotificationEditPanel from "./NotificationEditPanel";
import ViewLeadModal from "./ViewLeadModal";
import AddTaskModal from "./AddTaskModal";
import AssignToModal from "./AssignToModal";
import DeleteLeadModal from "./DeleteLeadModal";
import AddStageModal from "./AddStageModal";
import EditStageModal from "./EditStageModal";
import DeleteStageModal from "./DeleteStageModal";
import { Lead, PipelineStage, PipelineSubTab } from "./types";
import { initialLeads, ONGOING_STAGES_RAW, COMPLETED_STAGES_RAW, mapToPipelineStage, badgeColorPresets } from "./mockData";

export default function LeadsPipelinePage({ setActiveTab }: { setActiveTab?: (tab: string) => void }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [activeSubTab, setActiveSubTab] = useState<PipelineSubTab>("Actual Pipeline");
  const [ongoingStages, setOngoingStages] = useState<PipelineStage[]>(() => ONGOING_STAGES_RAW.map(mapToPipelineStage));
  const [completedStages, setCompletedStages] = useState<PipelineStage[]>(() => COMPLETED_STAGES_RAW.map(mapToPipelineStage));

  const [dropdownOpenStageId, setDropdownOpenStageId] = useState<string | null>(null);
  const [addStageModalOpen, setAddStageModalOpen] = useState<"Ongoing" | "Completed" | null>(null);
  const [editingStage, setEditingStage] = useState<{ id: string; type: "Ongoing" | "Completed" } | null>(null);
  const [viewingNotificationStage, setViewingNotificationStage] = useState<{ id: string; type: "Ongoing" | "Completed" } | null>(null);
  const [deletingStage, setDeletingStage] = useState<{ id: string; type: "Ongoing" | "Completed" } | null>(null);

  const [addTaskLeadId, setAddTaskLeadId] = useState<string | null>(null);
  const [activeAssigneeLeadId, setActiveAssigneeLeadId] = useState<string | null>(null);
  const [detailLead, setDetailLead] = useState<Lead | null>(null);
  const [deleteLeadId, setDeleteLeadId] = useState<string | null>(null);

  const handleExportCSV = () => {
    const headers = ["ID", "Name", "Company", "Value", "Stage", "Source", "Received Days Ago", "Assigned To"];
    const rows = leads.map((l) => [l.id, `"${l.name}"`, `"${l.company}"`, l.value, l.stage, l.source, l.receivedDaysAgo, l.assignedTo || "Unassigned"]);
    const blob = new Blob([[headers.join(","), ...rows.map((e) => e.join(","))].join("\n")], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `leads_report_${Date.now()}.csv`;
    link.click();
  };

  const handleAddStage = (name: string, position: "Before" | "After", existingStageId: string, notifiedWhenLeadEnters: boolean, notifyLead: boolean, lowDays: string, medDays: string, highDays: string, lowNotif: boolean, medNotif: boolean, highNotif: boolean) => {
    if (!name.trim()) return;
    const stages = addStageModalOpen === "Ongoing" ? ongoingStages : completedStages;
    const colorIndex = stages.length % badgeColorPresets.length;
    const newStage: PipelineStage = { id: name.toLowerCase().replace(/\s+/g, "_") + "_" + Date.now(), label: name, bgClass: badgeColorPresets[colorIndex].bgClass, badgeBg: badgeColorPresets[colorIndex].badgeBg, notifiedWhenLeadEnters, notifyLead, priorityDays: { low: lowDays, medium: medDays, high: highDays }, priorityNotifications: { low: lowNotif, medium: medNotif, high: highNotif }, emailSettings: { delayAmount: "1", delayUnit: "Minutes", subject: `Welcome (${name})`, title: "Welcome", content: "Thank you for reaching out.", ctaEnabled: true, ctaText: "Book Now", signature: "Best regards,\nThe Team", disclaimer: "Automated message", showImage: true } };
    const targetIdx = stages.findIndex((s) => s.id === existingStageId);
    const insertIdx = position === "Before" ? Math.max(0, targetIdx) : targetIdx + 1;
    const newStages = [...stages.slice(0, insertIdx), newStage, ...stages.slice(insertIdx)];
    if (addStageModalOpen === "Ongoing") setOngoingStages(newStages); else setCompletedStages(newStages);
    setAddStageModalOpen(null);
  };

  const currentNotificationStage = viewingNotificationStage?.type === "Ongoing" ? ongoingStages.find((s) => s.id === viewingNotificationStage.id) : completedStages.find((s) => s.id === viewingNotificationStage?.id);

  return (
    <div className="flex w-full flex-col gap-6 text-left text-[#283442] font-sans pb-10 animate-in fade-in duration-300">
      {!viewingNotificationStage && <PipelineHeader onResync={() => setLeads(initialLeads)} onExport={handleExportCSV} />}

      {viewingNotificationStage && currentNotificationStage ? (
        <NotificationEditPanel stage={currentNotificationStage} onUpdateSettings={(us) => { const setter = viewingNotificationStage.type === "Ongoing" ? setOngoingStages : setCompletedStages; setter((p) => p.map((s) => (s.id === viewingNotificationStage.id ? { ...s, emailSettings: { ...s.emailSettings, ...us } } : s))); }} onBack={() => setViewingNotificationStage(null)} />
      ) : (
        <section className="relative w-full rounded-[12px] bg-white p-0 shadow-[0px_2px_4px_-1px_rgba(175,182,201,0.2)]">
          <PipelineSubTabs activeSubTab={activeSubTab} setActiveSubTab={setActiveSubTab} />
          <div className="p-6 sm:p-[30px] flex flex-col gap-6 w-full">
            {activeSubTab === "Leads da Gestire" && <LeadsDaGestireTab leads={leads} onSeeMore={setDetailLead} onAddTask={setAddTaskLeadId} onDeleteLead={setDeleteLeadId} onAssignTo={setActiveAssigneeLeadId} onBulkAssign={(ids) => setActiveAssigneeLeadId(ids[0])} onBulkDelete={(ids) => setLeads((p) => p.filter((l) => !ids.includes(l.id)))} />}
            {activeSubTab === "Actual Pipeline" && <ActualPipelineTab leads={leads} ongoingStages={ongoingStages} completedStages={completedStages} onSeeMore={setDetailLead} onAddTask={setAddTaskLeadId} onDeleteLead={setDeleteLeadId} onAssignTo={(id, a) => setLeads((p) => p.map((l) => (l.id === id ? { ...l, assignedTo: a } : l)))} onToggleTask={(id) => setLeads((p) => p.map((l) => (l.id === id ? { ...l, taskCompleted: !l.taskCompleted } : l)))} onMoveLead={(id, sid) => setLeads((p) => p.map((l) => (l.id === id ? { ...l, stage: sid } : l)))} />}
            {activeSubTab === "Settings" && <PipelineSettingsTab ongoingStages={ongoingStages} completedStages={completedStages} dropdownOpenStageId={dropdownOpenStageId} setDropdownOpenStageId={setDropdownOpenStageId} onToggleStageNotification={(t, sid, c) => { const setter = t === "Ongoing" ? setOngoingStages : setCompletedStages; setter((p) => p.map((s) => (s.id === sid ? { ...s, notifiedWhenLeadEnters: c } : s))); }} onOpenAddStageModal={setAddStageModalOpen} onEditStage={setEditingStage} onDeleteStage={setDeletingStage} onEditNotification={setViewingNotificationStage} />}
          </div>
        </section>
      )}

      {detailLead && <ViewLeadModal lead={detailLead} onClose={() => setDetailLead(null)} onAssign={(id) => setActiveAssigneeLeadId(id)} />}
      {addTaskLeadId && <AddTaskModal initialTask={leads.find((l) => l.id === addTaskLeadId)?.task || ""} onClose={() => setAddTaskLeadId(null)} onSave={(task) => { setLeads((p) => p.map((l) => (l.id === addTaskLeadId ? { ...l, task, taskCompleted: false } : l))); setAddTaskLeadId(null); }} />}
      {activeAssigneeLeadId && <AssignToModal onClose={() => setActiveAssigneeLeadId(null)} onAssign={(a) => { setLeads((p) => p.map((l) => (l.id === activeAssigneeLeadId ? { ...l, assignedTo: a, stage: "to_contact" } : l))); setActiveAssigneeLeadId(null); }} />}
      {deleteLeadId && <DeleteLeadModal onClose={() => setDeleteLeadId(null)} onConfirm={() => { setLeads((p) => p.filter((l) => l.id !== deleteLeadId)); setDeleteLeadId(null); }} />}
      {addStageModalOpen && <AddStageModal stages={addStageModalOpen === "Ongoing" ? ongoingStages : completedStages} onClose={() => setAddStageModalOpen(null)} onSubmit={handleAddStage} />}
      {editingStage && <EditStageModal stage={(editingStage.type === "Ongoing" ? ongoingStages : completedStages).find((s) => s.id === editingStage.id)!} onClose={() => setEditingStage(null)} onSubmit={(nwe, nl, ld, md, hd, ln, mn, hn) => { const setter = editingStage.type === "Ongoing" ? setOngoingStages : setCompletedStages; setter((p) => p.map((s) => (s.id === editingStage.id ? { ...s, notifiedWhenLeadEnters: nwe, notifyLead: nl, priorityDays: { low: ld, medium: md, high: hd }, priorityNotifications: { low: ln, medium: mn, high: hn } } : s))); setEditingStage(null); }} />}
      {deletingStage && <DeleteStageModal isOpen={true} onClose={() => setDeletingStage(null)} onConfirm={() => { const setter = deletingStage.type === "Ongoing" ? setOngoingStages : setCompletedStages; setter((p) => p.filter((s) => s.id !== deletingStage.id)); setDeletingStage(null); }} />}
    </div>
  );
}
