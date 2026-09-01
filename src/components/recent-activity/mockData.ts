import { ActivityDetail } from "./types";

export const initialRecentActivities: ActivityDetail[] = [
  {
    id: "detail-1", salonName: "Beauty Wellness Center", salonTag: "SRL", contactName: "Roberto Marini",
    city: "Bologna", email: "roberto@beautywellness.com", activityType: "Subscribed Premium",
    activityLabel: "Subscribed Premium", activityColor: "purple", price: "€ 299", timeAgo: "30 min ago", dateKey: "Today"
  },
  {
    id: "detail-2", salonName: "Bella Vista Salon", salonTag: "SRL", hasCrown: true, contactName: "Maria Rodriguez",
    city: "Milano", email: "maria@bellavista.com", activityType: "Monthly Payment",
    activityLabel: "Monthly Payment", activityColor: "teal", price: "€ 299", timeAgo: "2h ago", dateKey: "Today"
  },
  {
    id: "detail-3", salonName: "Elite Beauty Group S.p.A.", salonTag: "SPA", hasStar: true, contactName: "Dr. Marco Rossi",
    city: "Milano", email: "marco.rossi@elitebeauty.com", activityType: "New staff",
    activityLabel: "2 new staff", activityColor: "blue", price: "-", timeAgo: "2h ago", dateKey: "Today"
  },
  {
    id: "detail-4", salonName: "Glamour Lounge SRL", salonTag: "SRL", contactName: "Anna Bianchi",
    city: "Torino", email: "anna@glamourlounge.com", activityType: "Upgraded Plan",
    activityLabel: "Upgraded Plan", activityColor: "yellow", price: "€ 299", timeAgo: "3h ago", dateKey: "Today"
  },
  {
    id: "detail-5", salonName: "Hair Art Studio", salonTag: "Ind.", contactName: "Francesca Neri",
    city: "Roma", email: "francesca@hairartstudio.com", activityType: "Modern Cuts",
    activityLabel: "Modern Cuts", activityColor: "gray", price: "-", timeAgo: "5h ago", dateKey: "Today"
  },
  {
    id: "detail-6", salonName: "Beauty Wellness Center", salonTag: "SRL", contactName: "Roberto Marini",
    city: "Bologna", email: "roberto@beautywellness.com", activityType: "Monthly Payment",
    activityLabel: "Monthly Payment", activityColor: "teal", price: "€ 299", timeAgo: "1 day ago", dateKey: "Last 7 Days"
  },
  {
    id: "detail-7", salonName: "Bella Vista Salon", salonTag: "SRL", hasCrown: true, contactName: "Maria Rodriguez",
    city: "Milano", email: "maria@bellavista.com", activityType: "Upgraded Plan",
    activityLabel: "Upgraded Plan", activityColor: "yellow", price: "€ 299", timeAgo: "2 days ago", dateKey: "Last 7 Days"
  },
  {
    id: "detail-8", salonName: "Glamour Lounge SRL", salonTag: "SRL", contactName: "Anna Bianchi",
    city: "Torino", email: "anna@glamourlounge.com", activityType: "Subscribed Premium",
    activityLabel: "Subscribed Premium", activityColor: "purple", price: "€ 299", timeAgo: "3 days ago", dateKey: "Last 7 Days"
  },
  {
    id: "detail-9", salonName: "Elite Beauty Group S.p.A.", salonTag: "SPA", hasStar: true, contactName: "Dr. Marco Rossi",
    city: "Milano", email: "marco.rossi@elitebeauty.com", activityType: "Monthly Payment",
    activityLabel: "Monthly Payment", activityColor: "teal", price: "€ 299", timeAgo: "4 days ago", dateKey: "Last 7 Days"
  },
  {
    id: "detail-10", salonName: "Hair Art Studio", salonTag: "Ind.", contactName: "Francesca Neri",
    city: "Roma", email: "francesca@hairartstudio.com", activityType: "New staff",
    activityLabel: "2 new staff", activityColor: "blue", price: "-", timeAgo: "5 days ago", dateKey: "Last 7 Days"
  }
];
