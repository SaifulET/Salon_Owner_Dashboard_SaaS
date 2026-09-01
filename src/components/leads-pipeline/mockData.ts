import { Lead, PipelineStage } from "./types";

export const initialLeads: Lead[] = [
  { id: "lead-1", name: "Alessandro Bianchi", email: "alessandro.bianchi@moderncuts.it", company: "Modern Cuts Barbershop", phone: "+39 347 111 2222", source: "Organico", value: 3500, receivedDaysAgo: 3, priority: "High", stage: "to_contact", assignedTo: "Roberto Marini", task: null, taskCompleted: false },
  { id: "lead-2", name: "Elena Conti", email: "elena.conti@luxurywell.it", company: "Elena Conti Luxury Spa & Wellnes", phone: "+39 333 444 5555", source: "Website Chat", value: 15500, receivedDaysAgo: 3, priority: "Low", stage: "to_contact", assignedTo: "Maria Rodriguez", task: null, taskCompleted: false },
  { id: "lead-3", name: "Francesco Martini", email: "francesco.martini@quicky.it", company: "Quicky Custs Express", phone: "+39 328 666 7777", source: "Phone", value: 2500, receivedDaysAgo: 3, priority: "Medium", stage: "to_contact", assignedTo: "Alessandro Costa", task: null, taskCompleted: false },
  { id: "lead-4", name: "Marco Rossi", email: "marco.rossi@bellaforma.it", company: "Bella Forma Hair Salon", phone: "+39 335 888 9999", source: "Organico", value: 5000, receivedDaysAgo: 3, priority: "High", stage: "waiting_decision", assignedTo: "Dr. Marco Rossi", task: null, taskCompleted: false },
  { id: "lead-5", name: "Giulia Ferrari", email: "giulia.ferrari@stylecare.it", company: "Style & Care Beauty Center", phone: "+39 339 999 0000", source: "Referral", value: 8000, receivedDaysAgo: 3, priority: "High", stage: "won", assignedTo: "Alessandro Costa", task: null, taskCompleted: false },
  { id: "lead-6", name: "Matteo Ricci", email: "matteo.ricci@ricci-salon.it", company: "Ricci & Co. Salon", phone: "+39 335 666 7777", source: "Google Ads", value: 1400, receivedDaysAgo: 3, priority: "High", stage: "incoming", assignedTo: "Maria Rodriguez", task: "Schedule callback", taskCompleted: true },
  { id: "lead-7", name: "Sofia Marino", email: "sofia.marino@stylelab.it", company: "Style Lab Naples", phone: "+39 339 888 9999", source: "Website Chat", value: 1100, receivedDaysAgo: 2, priority: "Medium", stage: "incoming", assignedTo: "Alessandro Costa", task: "Prepare demo sandbox", taskCompleted: false }
];

export const badgeColorPresets = [
  { bgClass: "bg-[#EFF2F8]", badgeBg: "bg-[#EFF4FA] text-[#29343D]" },
  { bgClass: "bg-[#FFF9E5]", badgeBg: "bg-[#FFD648] text-[#FFF9E5] border border-[#FDE68A]" },
  { bgClass: "bg-[#EFF2F8]", badgeBg: "bg-[#F1F2FE] text-[#635BFF]" },
  { bgClass: "bg-[#F4F3FF]", badgeBg: "bg-[#635BFF] text-[#F1F2FE]" },
  { bgClass: "bg-[#ECFDFD]", badgeBg: "bg-[#ECFDFD] text-[#16CDC7]" },
  { bgClass: "bg-[#EBFAF0]", badgeBg: "bg-[#36C76C] text-white" },
  { bgClass: "bg-[#FFE5ED]", badgeBg: "bg-[#FF6692] text-white" }
];

export const ONGOING_STAGES_RAW = [
  { id: "to_contact", label: "To Contact", bgClass: "bg-[#EFF2F8]", badgeBg: "bg-[#EFF4FA] text-[#29343D]" },
  { id: "online_partner", label: "Contact me again later", bgClass: "bg-[#FFF9E5]", badgeBg: "bg-[#FFD648] text-[#FFF9E5] border border-[#FDE68A]" },
  { id: "call_to_fix", label: "Call To_fix", bgClass: "bg-[#EFF2F8]", badgeBg: "bg-[#F1F2FE] text-[#635BFF]" },
  { id: "fixed_call", label: "Fixed Call", bgClass: "bg-[#F4F3FF]", badgeBg: "bg-[#635BFF] text-[#F1F2FE]" },
  { id: "follow_up", label: "Follow Up", bgClass: "bg-[#ECFDFD]", badgeBg: "bg-[#ECFDFD] text-[#16CDC7]" },
  { id: "waiting_decision", label: "Waiting for Decision", bgClass: "bg-[#ECFDFD]", badgeBg: "bg-[#16CDC7] text-white" },
  { id: "won", label: "Won", bgClass: "bg-[#EBFAF0]", badgeBg: "bg-[#36C76C] text-white" },
  { id: "lost", label: "Lost", bgClass: "bg-[#FFE5ED]", badgeBg: "bg-[#FF6692] text-white" }
];

export const COMPLETED_STAGES_RAW = [
  { id: "not_workable", label: "Not workable", bgClass: "bg-[#FFF9E5]", badgeBg: "bg-[#FFD648] text-[#FFF9E5] border border-[#FDE68A]" },
  { id: "lost", label: "Lost", bgClass: "bg-[#FFE5ED]", badgeBg: "bg-[#FF6692] text-white" },
  { id: "prospect", label: "Prospect", bgClass: "bg-[#ECFDFD]", badgeBg: "bg-[#ECFDFD] text-[#16CDC7]" },
  { id: "won", label: "Won", bgClass: "bg-[#EBFAF0]", badgeBg: "bg-[#36C76C] text-white" }
];

export const mapToPipelineStage = (s: { id: string; label: string; bgClass: string; badgeBg: string }): PipelineStage => ({
  ...s,
  notifiedWhenLeadEnters: true,
  notifyLead: true,
  priorityDays: { low: "", medium: "", high: "" },
  priorityNotifications: { low: true, medium: true, high: true },
  emailSettings: {
    delayAmount: "1",
    delayUnit: "Minutes",
    subject: `Benvenuto in Salone! (${s.label})`,
    title: "Siamo felici di averti con noi",
    content: "Abbiamo ricevuto la tua richiesta e ti ricontatteremo a breve per confermare il tuo appuntamento.",
    ctaEnabled: true,
    ctaText: "Prenota Ora",
    signature: "Best regards,\nThe MatDash Team",
    disclaimer: "Ricevi questa email in quanto ti sei registrato sul nostro sito.",
    showImage: true
  }
});

export const ASSIGNEES = ["Roberto Marini", "Maria Rodriguez", "Dr. Marco Rossi", "Alessandro Costa"];
