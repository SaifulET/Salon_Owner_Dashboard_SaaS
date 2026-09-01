import React, { useState } from "react";
import { MoreVertical, Calendar, Eye, Trash2, UserPlus, CheckSquare } from "lucide-react";
import { Lead } from "./types";
import { ASSIGNEES } from "./mockData";
import { SourceIcon } from "./icons";

interface KanbanLeadCardProps {
  lead: Lead;
  onSeeMore: (lead: Lead) => void;
  onAddTask: (leadId: string) => void;
  onDeleteLead: (leadId: string) => void;
  onAssignTo: (leadId: string, assignee: string) => void;
  onToggleTask: (leadId: string) => void;
  onDragStart: (e: React.DragEvent, leadId: string) => void;
}

export default function KanbanLeadCard({
  lead,
  onSeeMore,
  onAddTask,
  onDeleteLead,
  onAssignTo,
  onToggleTask,
  onDragStart
}: KanbanLeadCardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const getPriorityClasses = (p: string) => {
    if (p === "High") return "bg-[#FFE5ED] text-[#FF6692]";
    if (p === "Medium") return "bg-[#FFF9E5] text-[#FFD648]";
    return "bg-[#EBFAF0] text-[#36C76C]";
  };

  const formattedValue = new Intl.NumberFormat("de-DE").format(lead.value) + " €";

  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, lead.id)}
      className="p-4 bg-white rounded-xl shadow-[0_2px_4px_rgba(0,0,0,0.02)] border border-[#E0E6EB] hover:shadow-md transition-all flex flex-col gap-2.5 text-left font-sans cursor-grab active:cursor-grabbing relative"
    >
      <div className="flex justify-between items-start">
        <h4 className="font-bold text-[#29343D] text-[14px] leading-tight truncate pr-1">{lead.name}</h4>
        <div className="relative">
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors cursor-pointer">
            <MoreVertical className="w-4 h-4" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-6 z-40 w-[140px] bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 flex flex-col text-xs font-semibold">
              <button type="button" onClick={() => { onSeeMore(lead); setMenuOpen(false); }} className="px-3 py-1.5 text-left hover:bg-slate-50 text-[#29343D] flex items-center gap-2 cursor-pointer"><Eye className="w-3.5 h-3.5 text-[#635BFF]" /> View</button>
              <button type="button" onClick={() => { onAddTask(lead.id); setMenuOpen(false); }} className="px-3 py-1.5 text-left hover:bg-slate-50 text-[#29343D] flex items-center gap-2 cursor-pointer"><CheckSquare className="w-3.5 h-3.5 text-sky-500" /> Task</button>
              <button type="button" onClick={() => { onDeleteLead(lead.id); setMenuOpen(false); }} className="px-3 py-1.5 text-left hover:bg-slate-50 text-rose-600 flex items-center gap-2 cursor-pointer"><Trash2 className="w-3.5 h-3.5" /> Delete</button>
            </div>
          )}
        </div>
      </div>

      <p className="text-xs text-[#98A4AE] font-normal truncate -mt-1">{lead.company}</p>

      <div className="flex justify-between items-center text-xs">
        <span className="text-[#98A4AE] font-medium">{formattedValue}</span>
        <SourceIcon source={lead.source} />
      </div>

      <div className="flex justify-between items-center text-xs">
        <span className="text-[#98A4AE] font-medium">Time in stage</span>
        <span className={`px-2.5 py-0.5 rounded text-[10px] font-bold ${getPriorityClasses(lead.priority)}`}>{lead.priority}</span>
      </div>

      <div className="flex items-center gap-1.5 text-[11px] text-[#98A4AE] pt-1 border-t border-slate-100">
        <Calendar className="w-3.5 h-3.5 text-[#98A4AE]" />
        <span>{lead.receivedDaysAgo}d ago</span>
      </div>

      {lead.task && (
        <div onClick={() => onToggleTask(lead.id)} className="flex items-center gap-2 p-1.5 rounded-lg bg-amber-50/70 border border-amber-100 text-[11px] text-amber-900 cursor-pointer select-none">
          <input type="checkbox" checked={lead.taskCompleted} readOnly className="rounded text-[#635BFF] w-3 h-3 cursor-pointer" />
          <span className={`truncate flex-1 font-medium ${lead.taskCompleted ? "line-through text-slate-400" : ""}`}>{lead.task}</span>
        </div>
      )}
    </div>
  );
}
