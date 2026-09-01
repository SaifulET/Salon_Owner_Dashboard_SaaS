export interface Ticket {
  id: string;
  order: string;
  salonName: string;
  priority: "Urgent" | "High" | "Medium" | "Low";
  status: "Open" | "Waiting" | "Closed";
  category: string;
  assignTo: string;
  date: string;
  initialRequest: string;
  emailsSent: Array<{ sender: string; message: string; date: string }>;
  internalNotes: Array<{
    title?: string;
    category?: string;
    author: string;
    message: string;
    daysAgo: string;
    type: "note" | "resolution";
  }>;
}

export interface Announcement {
  id: string;
  title: string;
  audience: string;
  channel: string;
  date: string;
  status: string;
  message: string;
  type?: "Alert" | "Maintenance" | "New Feature" | "Update";
  category?: "Sent" | "Scheduled" | "Draft";
  scheduleTime?: string;
  sentCount?: number;
  openedCount?: number;
  timeAgo?: string;
}

export interface Audience {
  id: string;
  name: string;
  recipient: "All" | "Owner" | "Employee" | "Accountants" | "Clients";
  employeeCount: "All" | "Between a and b";
  age: "All" | "Between a and b";
  status: "All" | "Active" | "Cancelled" | "Trial";
  region: string;
  city: string;
  province: string;
  socialMediaLinked?: string;
  hasWhatsappApi?: string;
  membershipType?: string;
  subscribedFrom?: string;
  clientsNumber?: string;
  income?: string;
}

export interface SalonInAudience {
  id: string;
  name: string;
  manager: string;
  city: string;
  email: string;
  plan: "Basic" | "Premium" | "Enterprise";
  lastActive: string;
}

export type SupportSubTab = "tickets" | "announcements" | "audiences";

export interface SupportPageProps {
  activeTicketId?: string | null;
  onCloseTicketDetail?: () => void;
}
