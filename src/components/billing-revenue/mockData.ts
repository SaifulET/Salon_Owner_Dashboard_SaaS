import { BillingRecord, FailedPayment } from "./types";

export const initialBillingRecords: BillingRecord[] = [
  { id: "rec-1", salon: "Beauty Wellness Center", legal: "SRL", owner: "Roberto Marini", city: "Bologna", email: "roberto@beautywellness.com", invoice: "INV-2024-001", plan: "Premium", amount: "299.00 €", status: "Paid", billingDate: "30/11/2024", dueDate: "30/11/2024", month: "This Month" },
  { id: "rec-2", salon: "Bella Vista Salon", legal: "SRL", owner: "Maria Rodriguez", city: "Milano", email: "maria@bellavista.com", invoice: "INV-2024-001", plan: "Basic", amount: "299.00 €", status: "Paid", billingDate: "30/11/2024", dueDate: "30/11/2024", month: "This Month", selected: true },
  { id: "rec-3", salon: "Elite Beauty Group S.p.A.", legal: "SPA", owner: "Dr. Marco Rossi", city: "Milano", email: "marco.rossi@elitebeauty.com", invoice: "INV-2024-001", plan: "Premium", amount: "299.00 €", status: "Failed", billingDate: "30/11/2024", dueDate: "30/11/2024", month: "Last Month", tag: "Insufficient..." },
  { id: "rec-4", salon: "Elite Beauty Group S.p.A.", legal: "SPA", owner: "Dr. Marco Rossi", city: "Milano", email: "marco.rossi@elitebeauty.com", invoice: "INV-2024-001", plan: "Premium", amount: "299.00 €", status: "Failed", billingDate: "30/11/2024", dueDate: "30/11/2024", month: "Last Month", tag: "Insufficient..." },
  { id: "rec-5", salon: "Elite Beauty Group S.p.A.", legal: "SPA", owner: "Dr. Marco Rossi", city: "Milano", email: "marco.rossi@elitebeauty.com", invoice: "INV-2024-001", plan: "Premium", amount: "299.00 €", status: "Failed", billingDate: "30/11/2024", dueDate: "30/11/2024", month: "Last Month" }
];

export const initialFailedPayments: FailedPayment[] = [
  { id: "fail-1", salon: "Bella Vista Salon", method: "Credit Card", plan: "Premium", amount: "299.00 €", dueDate: "30/11/2024", status: "Insufficient funds" },
  { id: "fail-2", salon: "Urban Hair Studio", method: "Bank Transfer", plan: "Basic", amount: "299.00 €", dueDate: "30/11/2024", status: "Insufficient funds" },
  { id: "fail-3", salon: "Glamour Lounge", method: "Credit Card", plan: "Premium", amount: "299.00 €", dueDate: "30/11/2024", status: "Insufficient funds" }
];

export const planCardsData = [
  { name: "Basic", amount: "1.782,00 €", salons: "18 salons", color: "bg-[#21c7bd]", label: "bg-[#ddd8ff] text-[#5e53fc]", width: "56%" },
  { name: "Premium", amount: "6.279,00 €", salons: "21 salons", color: "bg-[#635bff]", label: "bg-[#d7f5ef] text-[#1ba886]", width: "72%" },
  { name: "Enterprise", amount: "4.792,00 €", salons: "8 salons", color: "bg-[#ff5f9c]", label: "bg-[#635bff] text-white", width: "67%" }
];

export const distributionMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
export const distributionYears = ["2021", "2022", "2023", "2024", "2025", "2026"];
