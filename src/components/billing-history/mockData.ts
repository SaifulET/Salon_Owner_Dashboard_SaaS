import { InvoiceItem } from "./types";

export const initialBillingInvoices: InvoiceItem[] = [
  {
    id: "BILL__001",
    date: "November 30, 2024",
    description: "Premium",
    billingMonth: "December 2024",
    amount: "EUR 299,00",
    method: "Credit Card (*1234)",
    status: "Paid",
    employmentStatus: "Currently Hired"
  },
  {
    id: "BILL__002",
    date: "November 30, 2024",
    description: "Premium",
    billingMonth: "December 2024",
    amount: "EUR 299,00",
    method: "Credit Card (*1234)",
    status: "Paid",
    employmentStatus: "Currently Hired"
  },
  {
    id: "BILL__003",
    date: "November 30, 2024",
    description: "Premium",
    billingMonth: "December 2024",
    amount: "EUR 299,00",
    method: "Bank Transfer",
    status: "Paid",
    employmentStatus: "Out of Team: 02/02/2025"
  }
];
