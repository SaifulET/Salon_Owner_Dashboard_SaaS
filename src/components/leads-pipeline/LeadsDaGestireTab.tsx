import React, { useState } from "react";
import { Lead } from "./types";
import IncomingLeadCard from "./IncomingLeadCard";

interface LeadsDaGestireTabProps {
  leads: Lead[];
  onSeeMore: (lead: Lead) => void;
  onAddTask: (leadId: string) => void;
  onDeleteLead: (leadId: string) => void;
  onAssignTo: (leadId: string) => void;
  onBulkAssign: (leadIds: string[]) => void;
  onBulkDelete: (leadIds: string[]) => void;
}

export default function LeadsDaGestireTab({
  leads,
  onSeeMore,
  onAddTask,
  onDeleteLead,
  onAssignTo,
  onBulkAssign,
  onBulkDelete
}: LeadsDaGestireTabProps) {
  const [daysFilter, setDaysFilter] = useState<"All" | "Under 3 days" | "3+ days">("All");
  const [selectedLeadIds, setSelectedLeadIds] = useState<string[]>([]);
  const [activeActionsRowId, setActiveActionsRowId] = useState<string | null>(null);

  const incomingLeads = leads.filter((l) => l.stage === "incoming" || l.stage === "to_contact");
  const filteredIncomingLeads = incomingLeads.filter((l) => {
    if (daysFilter === "Under 3 days") return l.receivedDaysAgo < 3;
    if (daysFilter === "3+ days") return l.receivedDaysAgo >= 3;
    return true;
  });

  const handleToggleSelect = (id: string) => {
    setSelectedLeadIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const handleSelectAll = () => {
    if (selectedLeadIds.length === filteredIncomingLeads.length) setSelectedLeadIds([]);
    else setSelectedLeadIds(filteredIncomingLeads.map((l) => l.id));
  };

  return (
    <div className="flex flex-col gap-6 w-full text-left">
      <div className="flex flex-row justify-between items-center w-full h-[46px]">
        <div className="flex flex-col items-start gap-1">
          <h3 className="text-[16px] font-bold text-[#29343D] leading-[22px] font-sans">Leads da Gestire</h3>
          <p className="text-[15px] font-normal text-[#98A4AE] leading-[20px] font-sans">New leads that need to be entered into the pipeline</p>
        </div>
        {incomingLeads.length > 0 && (
          <div className="w-[54px] h-[32px] bg-[#EBFAF0] rounded-full flex items-center justify-center">
            <span className="text-[#36C76C] text-[14px] font-semibold leading-[24px] font-sans">{incomingLeads.length} new</span>
          </div>
        )}
      </div>

      <div className="flex flex-col lg:flex-row justify-between lg:items-end w-full lg:h-[60px] h-auto gap-4">
        <div className="flex flex-col items-start gap-2">
          <span className="text-[12px] font-semibold text-[#98A4AE] leading-[16px] font-sans">Days since lead received</span>
          <div className="flex flex-wrap items-center gap-2">
            {(["All", "Under 3 days", "3+ days"] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setDaysFilter(filter)}
                className={`h-[36px] rounded-lg flex items-center justify-center text-[12px] font-semibold font-sans px-4 transition-colors cursor-pointer ${
                  daysFilter === filter ? "border border-[#635BFF] text-[#635BFF]" : "border border-[#EFF4FA] text-[#0A2540] hover:bg-slate-50"
                }`}
              >
                {filter === "All" ? "All" : filter === "Under 3 days" ? "Less than 3 days" : "More than 3 days"}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2 h-auto relative">
          <div onClick={handleSelectAll} className="flex items-center gap-2 h-9 px-3 border border-[#E0E6EB] rounded-lg cursor-pointer hover:bg-slate-50 select-none">
            <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${selectedLeadIds.length > 0 && selectedLeadIds.length === filteredIncomingLeads.length ? "bg-[#635BFF] border-[#635BFF]" : "border-[#98A4AE]"}`}>
              {selectedLeadIds.length > 0 && <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>}
            </div>
            <span className="text-xs font-semibold text-[#29343D]">{selectedLeadIds.length > 0 ? `${selectedLeadIds.length} Selected` : "Select All"}</span>
          </div>

          {selectedLeadIds.length > 0 && (
            <div className="flex items-center gap-2">
              <button type="button" onClick={() => onBulkAssign(selectedLeadIds)} className="h-9 px-4 bg-[#DDDBFF] text-[#635BFF] text-xs font-bold rounded-lg hover:bg-[#c7c4ff] transition-colors cursor-pointer">Assign to</button>
              <button type="button" onClick={() => onBulkDelete(selectedLeadIds)} className="h-9 px-4 bg-[#FFE5ED] text-[#FF6692] text-xs font-bold rounded-lg hover:bg-[#ffd1de] transition-colors cursor-pointer">Group Delete</button>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-start gap-6 w-full pt-2">
        {filteredIncomingLeads.map((lead) => (
          <IncomingLeadCard
            key={lead.id}
            lead={lead}
            isSelected={selectedLeadIds.includes(lead.id)}
            isSelectionMode={selectedLeadIds.length > 0}
            onToggleSelect={handleToggleSelect}
            isMenuOpen={activeActionsRowId === lead.id}
            onToggleMenu={() => setActiveActionsRowId(activeActionsRowId === lead.id ? null : lead.id)}
            onSeeMore={() => { onSeeMore(lead); setActiveActionsRowId(null); }}
            onAddTask={() => { onAddTask(lead.id); setActiveActionsRowId(null); }}
            onDelete={() => { onDeleteLead(lead.id); setActiveActionsRowId(null); }}
            onAssignTo={() => { onAssignTo(lead.id); setActiveActionsRowId(null); }}
          />
        ))}
      </div>
    </div>
  );
}
