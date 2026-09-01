export type Plan = "Basic" | "Premium" | "Enterprise";
export type BillingStatus = "Paid" | "Pending" | "Failed" | "Refunded";
export type FilterStatus = "All Statuses" | BillingStatus;
export type FilterPlan = "All Plans" | Plan;
export type FilterTime = "All Time" | "This Month" | "Last Month" | "Custom...";
export type ModalName = "plan" | "failed" | "report" | null;

export interface BillingRecord {
  id: string;
  salon: string;
  legal: string;
  owner: string;
  city: string;
  email: string;
  invoice: string;
  plan: Plan;
  amount: string;
  status: BillingStatus;
  billingDate: string;
  dueDate: string;
  month: "This Month" | "Last Month";
  tag?: string;
  selected?: boolean;
}

export interface FailedPayment {
  id: string;
  salon: string;
  method: string;
  plan: Plan;
  amount: string;
  dueDate: string;
  status: string;
}
