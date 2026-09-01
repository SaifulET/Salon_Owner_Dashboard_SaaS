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
