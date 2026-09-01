import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import { Lead, PipelineStage } from "./types";
import KanbanLeadCard from "./KanbanLeadCard";

interface KanbanColumnProps {
  stage: PipelineStage;
  leads: Lead[];
  onSeeMore: (lead: Lead) => void;
  onAddTask: (leadId: string) => void;
  onDeleteLead: (leadId: string) => void;
  onAssignTo: (leadId: string, assignee: string) => void;
  onToggleTask: (leadId: string) => void;
  onDropLead: (leadId: string, targetStageId: string) => void;
}

export default function KanbanColumn({
  stage,
  leads,
  onSeeMore,
  onAddTask,
  onDeleteLead,
  onAssignTo,
  onToggleTask,
  onDropLead
}: KanbanColumnProps) {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const leadId = e.dataTransfer.getData("text/plain");
    if (leadId) onDropLead(leadId, stage.id);
  };

  const handleDragStart = (e: React.DragEvent, leadId: string) => {
    e.dataTransfer.setData("text/plain", leadId);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={() => setIsDragOver(false)}
      onDrop={handleDrop}
      className={`rounded-[12px] p-5 flex flex-col gap-4 transition-all duration-200 min-h-[460px] ${
        isDragOver ? "bg-[#EFF4FA]/60 border-2 border-dashed border-[#635BFF]" : `${stage.bgClass} border border-transparent`
      }`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-[14px] text-[#29343D]">{stage.label}</h3>
        <div className="flex items-center gap-2">
          <span className="w-5 h-5 rounded-full bg-[#E0DEFF] text-[#635BFF] flex items-center justify-center text-[11px] font-bold">
            {leads.length}
          </span>
          <button type="button" className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer">
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {leads.length === 0 ? (
          <div className="flex-1 flex items-center justify-center min-h-[200px]">
            <span className="text-[12px] font-bold text-[#98A4AE]/50 tracking-wider">EMPTY</span>
          </div>
        ) : (
          leads.map((lead) => (
            <KanbanLeadCard
              key={lead.id}
              lead={lead}
              onSeeMore={onSeeMore}
              onAddTask={onAddTask}
              onDeleteLead={onDeleteLead}
              onAssignTo={onAssignTo}
              onToggleTask={onToggleTask}
              onDragStart={handleDragStart}
            />
          ))
        )}
      </div>
    </div>
  );
}
