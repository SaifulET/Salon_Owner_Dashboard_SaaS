import { SalonActivity } from "./types";

export const initialSalonActivities: SalonActivity[] = [
  {
    type: "upgrade",
    title: "Plan Upgraded",
    description: "Upgraded from Basic to Premium plan",
    timestamp: "21/08/2025, 13:33:39",
    performer: "Super Admin (admin)",
    badgeBg: "bg-[#f2f1ff]",
    badgeText: "text-[#5e53fc]",
    iconBg: "bg-[#f5f3ff]",
    titleColor: "text-[#5e53fc]"
  },
  {
    type: "addUser",
    title: "User Added",
    description: "Added staff member Marco Verdi",
    timestamp: "21/08/2025, 13:33:39",
    performer: "Maria Rodriguez (user)",
    badgeBg: "bg-[#ecfeff]",
    badgeText: "text-[#0891b2]",
    iconBg: "bg-[#ecfeff]",
    titleColor: "text-[#0891b2]"
  },
  {
    type: "login",
    title: "Login",
    description: "Logged in from 192.168.1.1",
    timestamp: "21/08/2025, 13:33:39",
    performer: "Maria Rodriguez (system)",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-600",
    iconBg: "bg-slate-50",
    titleColor: "text-slate-800"
  },
  {
    type: "updateProfile",
    title: "Profile Updated",
    description: "Updated salon contact information",
    timestamp: "21/08/2025, 13:33:39",
    performer: "Maria Rodriguez (system)",
    badgeBg: "bg-slate-100",
    badgeText: "text-slate-600",
    iconBg: "bg-[#f0f9ff]",
    titleColor: "text-sky-500"
  }
];
