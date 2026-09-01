import React, { useState } from "react";
import { Check } from "lucide-react";
import { Lead, PipelineStage, PipelineStatus } from "./types";
import ActualPipelineFilters from "./ActualPipelineFilters";
import KanbanColumn from "./KanbanColumn";

interface ActualPipelineTabProps {
  leads: Lead[];
  ongoingStages: PipelineStage[];
  completedStages: PipelineStage[];
  onSeeMore: (lead: Lead) => void;
  onAddTask: (leadId: string) => void;
  onDeleteLead: (leadId: string) => void;
  onAssignTo: (leadId: string, assignee: string) => void;
  onToggleTask: (leadId: string) => void;
  onMoveLead: (leadId: string, stageId: string) => void;
}

export default function ActualPipelineTab({
  leads,
  ongoingStages,
  completedStages,
  onSeeMore,
  onAddTask,
  onDeleteLead,
  onAssignTo,
  onToggleTask,
  onMoveLead
}: ActualPipelineTabProps) {
  const [pipelineStatus, setPipelineStatus] = useState<PipelineStatus>("Ongoing");
  const [dataRange, setDataRange] = useState("All Time");
  const [isDataRangeDropdownOpen, setIsDataRangeDropdownOpen] = useState(false);
  const [priorityFilter, setPriorityFilter] = useState<"All" | "Low" | "Medium" | "High">("All");
  const [columnVisibilityMenuOpen, setColumnVisibilityMenuOpen] = useState(false);
  const [visibleColumns, setVisibleColumns] = useState<Record<string, boolean>>({});

  const currentStages = pipelineStatus === "Ongoing" ? ongoingStages : completedStages;

  return (
    <div className="flex flex-col gap-6 w-full text-left font-sans">
      <ActualPipelineFilters
        pipelineStatus={pipelineStatus}
        setPipelineStatus={setPipelineStatus}
        dataRange={dataRange}
        setDataRange={setDataRange}
        isDataRangeDropdownOpen={isDataRangeDropdownOpen}
        setIsDataRangeDropdownOpen={setIsDataRangeDropdownOpen}
        priorityFilter={priorityFilter}
        setPriorityFilter={setPriorityFilter}
        columnVisibilityMenuOpen={columnVisibilityMenuOpen}
        setColumnVisibilityMenuOpen={setColumnVisibilityMenuOpen}
        visibleColumns={visibleColumns}
        setVisibleColumns={setVisibleColumns}
        currentStages={currentStages}
      />

      <div className="flex items-center gap-2 font-sans py-1">
        <div className="w-5 h-5 flex items-center justify-center rounded-full bg-[#EBFAF0] text-[#36C76C]">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </div>
        <span className="text-[16px] font-bold text-[#29343D]">Open Pipeline</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full pb-4 overflow-x-auto">
        {currentStages.map((stage) => {
          if (visibleColumns[stage.id] === false) return null;
          const stageLeads = leads
            .filter((l) => l.stage === stage.id)
            .filter((l) => priorityFilter === "All" || l.priority === priorityFilter);
          return (
            <KanbanColumn
              key={stage.id}
              stage={stage}
              leads={stageLeads}
              onSeeMore={onSeeMore}
              onAddTask={onAddTask}
              onDeleteLead={onDeleteLead}
              onAssignTo={onAssignTo}
              onToggleTask={onToggleTask}
              onDropLead={onMoveLead}
            />
          );
        })}
      </div>
    </div>
  );
}
