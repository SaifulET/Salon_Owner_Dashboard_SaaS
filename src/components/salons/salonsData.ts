import { Salon } from "./types";

export const initialSalons: Salon[] = [
  {
    id: "salon-1", name: "Beauty Wellness Center", tag: "SRL", manager: "Roberto Marini", city: "Bologna",
    region: "Region 1", email: "roberto@beautywellness.com", status: "Active", plan: "Premium", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true
  },
  {
    id: "salon-2", name: "Bella Vista Salon", tag: "SRL", manager: "Maria Rodriguez", city: "Milano",
    region: "Region 1", email: "maria@bellavista.com", status: "Active", plan: "Premium", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true, vip: true
  },
  {
    id: "salon-3", name: "Elite Beauty Group S.p.A.", tag: "SPA", manager: "Dr. Marco Rossi", city: "Milano",
    region: "Region 1", email: "marco.rossi@elitebeauty.com", status: "Active", plan: "Enterprise", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: false, enterprise: true
  },
  {
    id: "salon-4", name: "Glamour Lounge SRLS", tag: "SRL", manager: "Anna Bianchi", city: "Torino",
    region: "Region 1", email: "anna@glamourlounge.com", status: "Trial", plan: "Premium", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true
  },
  {
    id: "salon-5", name: "Hair Art Studio", tag: "Ind.", manager: "Francesca Neri", city: "Roma",
    region: "Region 2", email: "francesca@hairartstudio.com", status: "Active", plan: "Basic", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: false
  },
  {
    id: "salon-6", name: "Luxury Spa & Wellness", tag: "SRL", manager: "Alessandro Costa", city: "Firenze",
    region: "Region 2", email: "alessandro@luxuryspa.com", status: "Cancelled", plan: "Premium", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true
  },
  {
    id: "salon-7", name: "Modern Hair Lounge", tag: "Ind.", manager: "Chiara Fontana", city: "Verona",
    region: "Region 2", email: "chiara@modernhair.com", status: "Leads", plan: "Basic", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: false
  },
  {
    id: "salon-8", name: "Studio Giuseppe", tag: "Ind.", manager: "Giuseppe Verdi", city: "Roma",
    region: "Region 2", email: "giuseppe@studiogiuseppe.com", status: "Active", plan: "Basic", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: false
  },
  {
    id: "salon-9", name: "Trendy Cuts Studio", tag: "Ind.", manager: "Ricci Ricci", city: "Bari",
    region: "Region 2", email: "valentina@trendycuts.com", status: "Past Due", plan: "Basic", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true
  }
];
