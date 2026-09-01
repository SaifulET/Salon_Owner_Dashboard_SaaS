import React from "react";
import { RefreshCw, Plus, ChevronDown, Eye, Trash2, X, Megaphone, Ticket, Users } from "lucide-react";

export const RefreshIcon = () => <RefreshCw className="w-4 h-4 shrink-0" />;
export const PlusIcon = () => <Plus className="w-4 h-4 shrink-0" />;
export const ChevronDownIcon = () => <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0 ml-1.5" />;
export const EyeIcon = () => <Eye className="w-4 h-4 shrink-0" />;
export const TrashIcon = () => <Trash2 className="w-4 h-4 shrink-0" />;
export const CloseIcon = () => <X className="w-4 h-4 shrink-0" />;
export const MegaphoneIcon = () => <Megaphone className="w-4 h-4 shrink-0" />;
export const TicketIcon = () => <Ticket className="w-4 h-4 shrink-0" />;
export const UserGroupIcon = () => <Users className="w-4 h-4 shrink-0" />;

export const renderSalonLogo = (name: string) => (
  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#635BFF] to-[#16CDC7] text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
    {name.charAt(0)}
  </div>
);
