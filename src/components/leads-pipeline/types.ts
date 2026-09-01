export interface Lead {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string;
  source: string;
  value: number;
  receivedDaysAgo: number;
  priority: "High" | "Medium" | "Low";
  stage: string;
  assignedTo: string | null;
  task: string | null;
  taskCompleted: boolean;
}

export interface PipelineStage {
  id: string;
  label: string;
  bgClass: string;
  badgeBg: string;
  notifiedWhenLeadEnters: boolean;
  notifyLead: boolean;
  priorityDays: {
    low: string;
    medium: string;
    high: string;
  };
  priorityNotifications: {
    low: boolean;
    medium: boolean;
    high: boolean;
  };
  emailSettings: {
    delayAmount: string;
    delayUnit: "Minutes" | "Hours" | "Days";
    subject: string;
    title: string;
    content: string;
    ctaEnabled: boolean;
    ctaText: string;
    signature: string;
    disclaimer: string;
    showImage: boolean;
  };
}

export type PipelineSubTab = "Leads da Gestire" | "Actual Pipeline" | "Settings";
export type PipelineStatus = "Ongoing" | "Completed";
