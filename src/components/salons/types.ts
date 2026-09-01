export interface Salon {
  id: string;
  name: string;
  tag: string;
  manager: string;
  city: string;
  region: string;
  email: string;
  status: "Active" | "Trial" | "Cancelled" | "Leads" | "Past Due" | "Expired";
  plan: "Basic" | "Premium" | "Enterprise";
  revenue: string;
  ltv: string;
  lastActive: string;
  hasTicket: boolean;
  vip?: boolean;
  enterprise?: boolean;
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: "Manager" | "Staff" | "Sole Director";
  status: "Active" | "Pending" | "Inactive";
  employmentStatus: "Currently Hired" | string;
  lastLogin: string;
  dob: string;
  pob: string;
  address: string;
  contractType: string;
  taxCode: string;
  iban: string;
  startDate: string;
  endDate?: string;
  occupation: string;
  remuneration: string;
  phone: string;
  emergencyName: string;
  emergencyPhone: string;
}

export interface DocumentItem {
  id: string;
  title: string;
  size: string;
  type: string;
  updated: string;
  fileUrl?: string;
}

export interface Member {
  id: string;
  name: string;
  company: string;
  cfPiva: string;
  type: string;
  possession: string;
  role: string;
  dob: string;
  pob: string;
  residence: string;
  appointmentDate: string;
}
