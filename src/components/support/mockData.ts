import { Ticket, Announcement, Audience, SalonInAudience } from "./types";

export const initialTickets: Ticket[] = [
  { id: "#001", order: "Employee access issues", salonName: "Bella Forma Hair Salon", priority: "Urgent", status: "Closed", category: "Technical", assignTo: "Maria Rodriguez", date: "08/18/2025", initialRequest: "Several employees are unable to log into their accounts.", emailsSent: [{ sender: "Support Team", message: "Password reset sent.", date: "08/18/2025 14:56" }], internalNotes: [{ author: "Support Team", message: "Reset passwords for salon users.", daysAgo: "16 days ago", type: "note" }, { author: "Resolution", message: "Issue resolved successfully", daysAgo: "16 days ago", type: "resolution" }] },
  { id: "#4521", order: "Card reader terminal integration failure", salonName: "Bella Vista Salon", priority: "Urgent", status: "Open", category: "Technical", assignTo: "Maria Rodriguez", date: "08/08/2025", initialRequest: "The new POS card reader terminal is showing an 'SSL connection error' during transaction handshakes.", emailsSent: [{ sender: "Support Team", message: "Hello Maria, we are checking your firmware.", date: "08/08/2025 12:05" }], internalNotes: [{ author: "Support Team", message: "Check connection logs for Stripe.", daysAgo: "2 days ago", type: "note" }] },
  { id: "#4522", order: "Invoice clarification request", salonName: "Beauty Wellness Center", priority: "High", status: "Waiting", category: "Billing", assignTo: "Roberto Marini", date: "08/08/2025", initialRequest: "Our invoice #INV-9988 displays a charge of 299,00 € instead of discounted trial rate.", emailsSent: [{ sender: "Support Team", message: "Hello Roberto, discount coupon code updated.", date: "08/08/2025 10:10" }], internalNotes: [{ author: "Support Team", message: "Verify discount token.", daysAgo: "1 day ago", type: "note" }] },
  { id: "#4523", order: "Feedback on SMS automation speed", salonName: "Elite Beauty Group S.p.A.", priority: "Medium", status: "Open", category: "Feature Request", assignTo: "Dr. Marco Rossi", date: "08/08/2025", initialRequest: "We need custom webhooks to trigger immediate SMS updates.", emailsSent: [], internalNotes: [] },
  { id: "#4524", order: "System performance degradation report", salonName: "Glamour Lounge SRLS", priority: "High", status: "Closed", category: "Bug Report", assignTo: "Anna Bianchi", date: "07/08/2025", initialRequest: "The calendar loading page feels laggy today.", emailsSent: [{ sender: "Support Team", message: "Node West lock resolved.", date: "07/08/2025 16:30" }], internalNotes: [{ author: "Resolution", message: "DB query optimized.", daysAgo: "7 days ago", type: "resolution" }] },
  { id: "#4525", order: "General inquiry on subscription options", salonName: "Hair Art Studio", priority: "Low", status: "Closed", category: "General", assignTo: "Francesca Neri", date: "06/08/2025", initialRequest: "Is there a custom plan that accommodates 15 operators?", emailsSent: [{ sender: "Support Team", message: "Hello Francesca, we can customize a plan.", date: "06/08/2025 11:20" }], internalNotes: [] }
];

export const salonContacts: Record<string, { name: string; email: string }> = {
  "Bella Forma Hair Salon": { name: "Maria Rodriguez", email: "maria@bellavista.com" },
  "Bella Vista Salon": { name: "Maria Rodriguez", email: "maria@bellavista.com" },
  "Beauty Wellness Center": { name: "Roberto Marini", email: "roberto@beautywellness.com" },
  "Elite Beauty Group S.p.A.": { name: "Dr. Marco Rossi", email: "marco.rossi@elitebeauty.com" },
  "Glamour Lounge SRLS": { name: "Anna Bianchi", email: "anna@glamourlounge.com" },
  "Hair Art Studio": { name: "Francesca Neri", email: "francesca@hairartstudio.com" }
};

export const initialAnnouncements: Announcement[] = [
  { id: "ann-1", title: "New Feature: Advanced Analytics Dashboard", audience: "plan_specific", channel: "Email", date: "08/08/2025", status: "Sent", message: "We are excited to announce our new Advanced Analytics Dashboard.", type: "Alert", category: "Sent", sentCount: 25, openedCount: 18, timeAgo: "2d ago" },
  { id: "ann-2", title: "Scheduled Maintenance - Sunday 3 AM", audience: "all", channel: "Email & Dashboard", date: "08/08/2025", status: "Scheduled", message: "We will be performing scheduled maintenance.", type: "Maintenance", category: "Scheduled", scheduleTime: "08/19/2025 08:00", sentCount: 0, openedCount: 0, timeAgo: "-" },
  { id: "ann-3", title: "Scheduled Maintenance - Sunday 3 AM", audience: "all", channel: "Email & Dashboard", date: "08/08/2025", status: "Scheduled", message: "We will be performing scheduled maintenance.", type: "New Feature", category: "Scheduled", scheduleTime: "08/19/2025 08:00", sentCount: 0, openedCount: 0, timeAgo: "-" },
  { id: "ann-4", title: "Scheduled Maintenance - Sunday 3 AM", audience: "all", channel: "Email & Dashboard", date: "08/08/2025", status: "Draft", message: "Draft update announcement.", type: "Update", category: "Draft", sentCount: 0, openedCount: 0, timeAgo: "-" }
];

export const initialAudiences: Audience[] = [
  { id: "aud-1", name: "Audience 01", recipient: "All", employeeCount: "All", age: "All", status: "All", region: "Region 01", city: "City 01", province: "Province 01", socialMediaLinked: "No", hasWhatsappApi: "No", membershipType: "Basic", subscribedFrom: "Website", clientsNumber: "0-50", income: "Low" },
  { id: "aud-2", name: "Audience 02", recipient: "Owner", employeeCount: "Between a and b", age: "Between a and b", status: "Active", region: "Region 02", city: "City 02", province: "Province 02", socialMediaLinked: "Yes", hasWhatsappApi: "Yes", membershipType: "Premium", subscribedFrom: "Referral", clientsNumber: "51-200", income: "High" },
  { id: "aud-3", name: "Audience 03", recipient: "Employee", employeeCount: "Between a and b", age: "Between a and b", status: "Cancelled", region: "Region 03", city: "City 03", province: "Province 03", socialMediaLinked: "No", hasWhatsappApi: "Yes", membershipType: "Enterprise", subscribedFrom: "Website", clientsNumber: "201+", income: "Medium" },
  { id: "aud-4", name: "Audience 04", recipient: "Accountants", employeeCount: "Between a and b", age: "Between a and b", status: "Trial", region: "Region 04", city: "City 04", province: "Province 04", socialMediaLinked: "Yes", hasWhatsappApi: "No", membershipType: "Basic", subscribedFrom: "Ads" }
];

export const AVAILABLE_SALONS: SalonInAudience[] = [
  { id: "s-1", name: "Bella Forma Hair Salon", city: "Bologna", manager: "Roberto Marini", email: "roberto@beautywellness.com", plan: "Premium", lastActive: "1h ago" },
  { id: "s-2", name: "Urban Hair Studio", city: "Bologna", manager: "Roberto Marini", email: "roberto@beautywellness.com", plan: "Premium", lastActive: "1h ago" },
  { id: "s-3", name: "Glamour Lounge", city: "Bologna", manager: "Roberto Marini", email: "roberto@beautywellness.com", plan: "Enterprise", lastActive: "1h ago" },
  { id: "s-4", name: "Style & Care Spa", city: "Milano", manager: "Elena Conti", email: "elena@stylecare.it", plan: "Premium", lastActive: "2h ago" },
  { id: "s-5", name: "Modern Cuts Barbershop", city: "Torino", manager: "Alessandro Bianchi", email: "alessandro@moderncuts.it", plan: "Basic", lastActive: "5h ago" }
];
