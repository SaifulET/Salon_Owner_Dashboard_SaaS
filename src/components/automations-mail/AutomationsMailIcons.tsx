import React from "react";
import { RefreshCw, Send, Eye, Check, Paperclip, Calendar, UserCheck, DollarSign, Package, Users, Calculator, Flag, Wrench, Ticket } from "lucide-react";

export const RefreshIcon = () => <RefreshCw className="w-4 h-4 shrink-0" />;
export const PaperPlaneIcon = () => <Send className="w-4 h-4 shrink-0" />;
export const EyeIcon = () => <Eye className="w-4 h-4 shrink-0" />;
export const CheckIcon = ({ className = "w-4 h-4" }: { className?: string }) => <Check className={className} />;
export const PaperclipIcon = () => <Paperclip className="w-3.5 h-3.5 text-[#98A4AE]" />;

export const getCategoryIcon = (category: string) => {
  if (category.includes("Salon Operations")) {
    return <div className="w-10 h-10 rounded-xl bg-[#5E53FC] text-white flex items-center justify-center shrink-0 shadow-sm"><Calendar className="w-4 h-4" /></div>;
  }
  if (category.includes("Client Engagement")) {
    return <div className="w-10 h-10 rounded-full bg-[#16CDC7] text-white flex items-center justify-center shrink-0 shadow-sm"><UserCheck className="w-4 h-4" /></div>;
  }
  if (category.includes("Payments") || category.includes("Billing")) {
    return <div className="w-10 h-10 rounded-full bg-[#36C76C] text-white flex items-center justify-center shrink-0 shadow-sm font-bold text-base"><DollarSign className="w-4 h-4" /></div>;
  }
  if (category.includes("Inventory")) {
    return <div className="w-10 h-10 rounded-xl bg-[#29343D] text-white flex items-center justify-center shrink-0 shadow-sm"><Package className="w-4 h-4" /></div>;
  }
  if (category.includes("Employee")) {
    return <div className="w-10 h-10 rounded-full bg-[#3B82F6] text-white flex items-center justify-center shrink-0 shadow-sm"><Users className="w-4 h-4" /></div>;
  }
  if (category.includes("Accountant")) {
    return <div className="w-10 h-10 rounded-full bg-[#4F46E5] text-white flex items-center justify-center shrink-0 shadow-sm"><Calculator className="w-4 h-4" /></div>;
  }
  if (category.includes("Super Admin") || category.includes("Platform")) {
    return <div className="w-10 h-10 rounded-full bg-[#0D9488] text-white flex items-center justify-center shrink-0 shadow-sm"><Flag className="w-4 h-4" /></div>;
  }
  if (category.includes("System") || category.includes("Technical")) {
    return <div className="w-10 h-10 rounded-full bg-[#F59E0B] text-white flex items-center justify-center shrink-0 shadow-sm"><Wrench className="w-4 h-4" /></div>;
  }
  return <div className="w-10 h-10 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shrink-0 shadow-sm"><Ticket className="w-4 h-4" /></div>;
};
