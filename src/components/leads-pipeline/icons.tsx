import React from "react";
import { RefreshCw, Download, Eye, ListTodo, Trash2, Camera, Globe, Users, Phone } from "lucide-react";

export const CustomSwitch = ({ checked, onChange }: { checked: boolean; onChange: (checked: boolean) => void }) => (
  <button type="button" onClick={() => onChange(!checked)} className="relative flex items-center focus:outline-none cursor-pointer text-left">
    <div className={`w-9 h-5 rounded-[4px] transition-colors duration-200 ${checked ? "bg-[#DDDBFF]" : "bg-[#EFF4FA] border border-[#E0E6EB]"}`} />
    <div className="absolute w-4 h-4 rounded-[6px] bg-[#635BFF] transition-all duration-200 shadow-[0px_0px_2px_rgba(145,158,171,0.2)]" style={{ left: checked ? "18px" : "2px", top: "2px" }} />
  </button>
);

export const SourceIcon = ({ source }: { source: string }) => {
  if (source.includes("Instagram") || source.toLowerCase().includes("organico")) {
    return <Camera className="w-4 h-4 text-[#635BFF]" />;
  }
  if (source.toLowerCase().includes("website") || source.toLowerCase().includes("site") || source.toLowerCase().includes("chat") || source.toLowerCase().includes("google")) {
    return <Globe className="w-4 h-4 text-slate-800" />;
  }
  if (source.toLowerCase().includes("referral")) {
    return <Users className="w-4 h-4 text-[#36C76C]" />;
  }
  return <Phone className="w-4 h-4 text-slate-600" />;
};

export const TrashIconMini = ({ color }: { color?: string }) => <Trash2 className="w-4 h-4" style={{ color: color || "currentColor" }} />;
export const RefreshIcon = ({ color }: { color?: string }) => <RefreshCw className="w-4 h-4" style={{ color: color || "currentColor" }} />;
export const DownloadIcon = ({ color }: { color?: string }) => <Download className="w-4 h-4" style={{ color: color || "currentColor" }} />;
export const EyeIcon = ({ color }: { color?: string }) => <Eye className="w-4 h-4" style={{ color: color || "currentColor" }} />;
export const TaskIcon = ({ color }: { color?: string }) => <ListTodo className="w-4 h-4" style={{ color: color || "currentColor" }} />;
