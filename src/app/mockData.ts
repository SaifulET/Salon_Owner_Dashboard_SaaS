import { Salon, Employee } from "./types";

export const defaultEmployees: Employee[] = [
  {
    id: "emp-1", firstName: "Maria", lastName: "Rodriguez", email: "maria@bellavista.com", role: "Manager", status: "Active", employmentStatus: "Currently Hired", lastLogin: "2 hours ago",
    dob: "12/08/1990", pob: "Milano (MI)", address: "Via Dante 45, Milano", contractType: "Permanent", taxCode: "RDGMAR90M12H501K", iban: "IT99A0123456789012345678901", startDate: "01/02/2021", occupation: "Barber", remuneration: "1.800,00 €", phone: "+39 333 4455667", emergencyName: "Carlos Rodriguez", emergencyPhone: "+39 333 9988776"
  },
  {
    id: "emp-2", firstName: "Maria", lastName: "Rodriguez", email: "maria@bellavista.com", role: "Staff", status: "Pending", employmentStatus: "Currently Hired", lastLogin: "2 hours ago",
    dob: "15/05/1993", pob: "Roma (RM)", address: "Via Veneto 12, Roma", contractType: "Temporary", taxCode: "RDGMAR93M15H501Z", iban: "IT99B0123456789012345678902", startDate: "10/05/2023", occupation: "Hairdresser", remuneration: "1.500,00 €", phone: "+39 334 1122334", emergencyName: "Luisa Rodriguez", emergencyPhone: "+39 334 5566778"
  },
  {
    id: "emp-3", firstName: "Maria", lastName: "Rodriguez", email: "maria@bellavista.com", role: "Staff", status: "Inactive", employmentStatus: "Out of Team: 02/02/2025", lastLogin: "2 hours ago",
    dob: "20/11/1988", pob: "Torino (TO)", address: "Corso Francia 99, Torino", contractType: "Permanent", taxCode: "RDGMAR88M20H501Y", iban: "IT99C0123456789012345678903", startDate: "15/09/2019", endDate: "02/02/2025", occupation: "Receptionist", remuneration: "1.400,00 €", phone: "+39 335 7788990", emergencyName: "Pedro Rodriguez", emergencyPhone: "+39 335 4433221"
  }
];

export const initialSalons: Salon[] = [
  { id: "salon-1", name: "Beauty Wellness Center", tag: "SRL", manager: "Roberto Marini", city: "Bologna", region: "Region 1", email: "roberto@beautywellness.com", status: "Active", plan: "Premium", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true },
  { id: "salon-2", name: "Bella Vista Salon", tag: "SRL", manager: "Maria Rodriguez", city: "Milano", region: "Region 1", email: "maria@bellavista.com", status: "Active", plan: "Premium", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true, vip: true },
  { id: "salon-3", name: "Elite Beauty Group S.p.A.", tag: "SPA", manager: "Dr. Marco Rossi", city: "Milano", region: "Region 1", email: "marco.rossi@elitebeauty.com", status: "Active", plan: "Enterprise", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: false, enterprise: true },
  { id: "salon-4", name: "Glamour Lounge SRLS", tag: "SRL", manager: "Anna Bianchi", city: "Torino", region: "Region 1", email: "anna@glamourlounge.com", status: "Trial", plan: "Premium", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true },
  { id: "salon-5", name: "Hair Art Studio", tag: "Ind.", manager: "Francesca Neri", city: "Roma", region: "Region 2", email: "francesca@hairartstudio.com", status: "Active", plan: "Basic", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: false },
  { id: "salon-6", name: "Luxury Spa & Wellness", tag: "SRL", manager: "Alessandro Costa", city: "Firenze", region: "Region 2", email: "alessandro@luxuryspa.com", status: "Cancelled", plan: "Premium", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true },
  { id: "salon-7", name: "Modern Hair Lounge", tag: "Ind.", manager: "Chiara Fontana", city: "Verona", region: "Region 2", email: "chiara@modernhair.com", status: "Leads", plan: "Basic", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: false },
  { id: "salon-8", name: "Studio Giuseppe", tag: "Ind.", manager: "Giuseppe Verdi", city: "Roma", region: "Region 2", email: "giuseppe@studiogiuseppe.com", status: "Active", plan: "Basic", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: false },
  { id: "salon-9", name: "Trendy Cuts Studio", tag: "Ind.", manager: "Valentina Ricci", city: "Bari", region: "Region 2", email: "valentina@trendycuts.com", status: "Past Due", plan: "Basic", revenue: "299,00 €", ltv: "4.187,00 €", lastActive: "1h ago", hasTicket: true }
];
