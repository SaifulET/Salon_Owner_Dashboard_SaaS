import React from "react";
import { PipelineStage } from "./types";
import StageCard from "./StageCard";

interface PipelineSettingsTabProps {
  ongoingStages: PipelineStage[];
  completedStages: PipelineStage[];
  dropdownOpenStageId: string | null;
  setDropdownOpenStageId: (id: string | null) => void;
  onToggleStageNotification: (type: "Ongoing" | "Completed", stageId: string, checked: boolean) => void;
  onOpenAddStageModal: (type: "Ongoing" | "Completed") => void;
  onEditStage: (stage: { id: string; type: "Ongoing" | "Completed" }) => void;
  onDeleteStage: (stage: { id: string; type: "Ongoing" | "Completed" }) => void;
  onEditNotification: (stage: { id: string; type: "Ongoing" | "Completed" }) => void;
}

export default function PipelineSettingsTab({
  ongoingStages,
  completedStages,
  dropdownOpenStageId,
  setDropdownOpenStageId,
  onToggleStageNotification,
  onOpenAddStageModal,
  onEditStage,
  onDeleteStage,
  onEditNotification
}: PipelineSettingsTabProps) {
  return (
    <div className="flex flex-col gap-8 w-full text-left font-sans">
      {/* Pipeline Ongoing Section */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full gap-2">
          <div className="flex flex-row items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#EBFAF0] text-[#36C76C]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12" /></svg>
            </div>
            <span className="text-[16px] font-semibold text-[#29343D] leading-[22px] font-sans">Pipeline Ongoing</span>
          </div>

          <button
            type="button"
            onClick={() => onOpenAddStageModal("Ongoing")}
            className="h-9 px-4 bg-[#DDDBFF] hover:bg-[#c7c4ff] text-[#635BFF] text-[12px] font-bold rounded-lg transition-colors font-sans cursor-pointer"
          >
            Add Stage
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full">
          {ongoingStages.map((stage, index) => (
            <StageCard
              key={`${stage.id}-${index}`}
              stage={stage}
              index={index + 1}
              type="Ongoing"
              onToggleNotification={(checked) => onToggleStageNotification("Ongoing", stage.id, checked)}
              onOpenDropdown={() => setDropdownOpenStageId(dropdownOpenStageId === stage.id ? null : stage.id)}
              isDropdownOpen={dropdownOpenStageId === stage.id}
              onEditStage={() => { onEditStage({ id: stage.id, type: "Ongoing" }); setDropdownOpenStageId(null); }}
              onDeleteStage={() => { onDeleteStage({ id: stage.id, type: "Ongoing" }); setDropdownOpenStageId(null); }}
              onEditNotification={() => { onEditNotification({ id: stage.id, type: "Ongoing" }); setDropdownOpenStageId(null); }}
            />
          ))}
        </div>
      </div>

      <hr className="w-full border-t border-[#E0E6EB]" />

      {/* Pipeline Completed Section */}
      <div className="flex flex-col gap-6 w-full">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center w-full gap-2">
          <div className="flex flex-row items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#FFE5ED] text-[#FF6692]">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </div>
            <span className="text-[16px] font-semibold text-[#29343D] leading-[22px] font-sans">Pipeline Completed</span>
          </div>

          <button
            type="button"
            onClick={() => onOpenAddStageModal("Completed")}
            className="h-9 px-4 bg-[#DDDBFF] hover:bg-[#c7c4ff] text-[#635BFF] text-[12px] font-bold rounded-lg transition-colors font-sans cursor-pointer"
          >
            Add Stage
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full">
          {completedStages.map((stage, index) => (
            <StageCard
              key={`${stage.id}-${index}`}
              stage={stage}
              index={index + 1}
              type="Completed"
              onToggleNotification={(checked) => onToggleStageNotification("Completed", stage.id, checked)}
              onOpenDropdown={() => setDropdownOpenStageId(dropdownOpenStageId === stage.id ? null : stage.id)}
              isDropdownOpen={dropdownOpenStageId === stage.id}
              onEditStage={() => { onEditStage({ id: stage.id, type: "Completed" }); setDropdownOpenStageId(null); }}
              onDeleteStage={() => { onDeleteStage({ id: stage.id, type: "Completed" }); setDropdownOpenStageId(null); }}
              onEditNotification={() => { onEditNotification({ id: stage.id, type: "Completed" }); setDropdownOpenStageId(null); }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
