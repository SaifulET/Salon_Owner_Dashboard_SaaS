import { ChartPoint, MovementPoint, BreakdownSeriesItem, PlanType, TimeRange } from "./types";

export const planTypeOptions: PlanType[] = ["All", "Basic", "Premium", "Enterprise"];
export const timeRangeOptions: TimeRange[] = ["Monthly", "Yearly", "2023-2025"];
export const salonOptions = ["All / Select Salon", "Beauty Wellness Center", "Bella Vista Salon", "Elite Beauty Group"];
export const cityOptions = ["All cities", "Bologna", "Milano", "Roma", "Torino"];

export const rootFilters = ["Plan", "Region", "Currency", "Billing Frequency", "Payment Method", "Pricing Model", "Customer Age", "Industry", "Company Size", "Channel", "Data Source"];
export const planFilters = ["Analytics Insights", "Custom Fields", "Developer API", "File Share Basic", "File Share Plus", "File Share Unlimited", "Meta Pixel Integration", "Multi Branch", "Online Payments", "Queue Manager", "Scheduler Basic", "Scheduler Plus", "Scheduler Starter", "Scheduler Unlimited", "Site Designer", "Social Connect (Facebook)", "Social Connect (Google)", "Social Connect (Instagram)"];

export const mrrPoints: ChartPoint[] = [
  { month: "Jan", value: 28000 }, { month: "Feb", value: 33500 }, { month: "Mar", value: 39000 },
  { month: "Apr", value: 38500 }, { month: "May", value: 34000 }, { month: "Jun", value: 34500 },
  { month: "Jul", value: 35500 }, { month: "Aug", value: 40500 }, { month: "Sep", value: 37500 },
];
export const movementsPoints: ChartPoint[] = [
  { month: "Jan", value: 22 }, { month: "Feb", value: 18 }, { month: "Mar", value: 31 },
  { month: "Apr", value: 27 }, { month: "May", value: 15 }, { month: "Jun", value: 16 },
  { month: "Jul", value: 19 }, { month: "Aug", value: 24 }, { month: "Sep", value: 21 },
];
export const breakdownPoints: ChartPoint[] = [
  { month: "Jan", value: 12 }, { month: "Feb", value: 16 }, { month: "Mar", value: 22 },
  { month: "Apr", value: 25 }, { month: "May", value: 21 }, { month: "Jun", value: 24 },
  { month: "Jul", value: 26 }, { month: "Aug", value: 30 }, { month: "Sep", value: 29 },
];

export const movementBars: MovementPoint[] = [
  { month: "Jan", segments: [{ label: "New", value: 25000, color: "#34C759" }, { label: "Expansion", value: 15000, color: "#00C7BE" }, { label: "Reactivation", value: 10000, color: "#32ADE6" }, { label: "Other", value: 3300, color: "#F3F3F3" }, { label: "Contracted", value: 4000, color: "#FFCC00" }, { label: "Churned", value: 20000, color: "#FF6692" }] },
  { month: "Feb", segments: [{ label: "New", value: 24000, color: "#34C759" }, { label: "Expansion", value: 14000, color: "#00C7BE" }, { label: "Reactivation", value: 10000, color: "#32ADE6" }, { label: "Other", value: 3200, color: "#F3F3F3" }, { label: "Contracted", value: 3000, color: "#FFCC00" }, { label: "Churned", value: 20000, color: "#FF6692" }] },
  { month: "Mar", segments: [{ label: "New", value: 26000, color: "#34C759" }, { label: "Expansion", value: 15000, color: "#00C7BE" }, { label: "Reactivation", value: 8000, color: "#32ADE6" }, { label: "Other", value: 2800, color: "#F3F3F3" }, { label: "Contracted", value: 3300, color: "#FFCC00" }, { label: "Churned", value: 20000, color: "#FF6692" }] },
  { month: "Apr", segments: [{ label: "New", value: 25000, color: "#34C759" }, { label: "Expansion", value: 14200, color: "#00C7BE" }, { label: "Reactivation", value: 10000, color: "#32ADE6" }, { label: "Other", value: 3000, color: "#F3F3F3" }, { label: "Contracted", value: 4800, color: "#FFCC00" }, { label: "Churned", value: 20000, color: "#FF6692" }] },
  { month: "May", segments: [{ label: "New", value: 27000, color: "#34C759" }, { label: "Expansion", value: 15000, color: "#00C7BE" }, { label: "Reactivation", value: 9000, color: "#32ADE6" }, { label: "Other", value: 3000, color: "#F3F3F3" }, { label: "Contracted", value: 12000, color: "#FFCC00" }, { label: "Churned", value: 40000, color: "#FF6692" }] },
  { month: "Jun", segments: [{ label: "New", value: 22000, color: "#34C759" }, { label: "Expansion", value: 13000, color: "#00C7BE" }, { label: "Reactivation", value: 10000, color: "#32ADE6" }, { label: "Other", value: 3200, color: "#F3F3F3" }, { label: "Contracted", value: 5000, color: "#FFCC00" }, { label: "Churned", value: 18000, color: "#FF6692" }] },
  { month: "Jul", segments: [{ label: "New", value: 23000, color: "#34C759" }, { label: "Expansion", value: 14000, color: "#00C7BE" }, { label: "Reactivation", value: 10000, color: "#32ADE6" }, { label: "Other", value: 3200, color: "#F3F3F3" }, { label: "Contracted", value: 5800, color: "#FFCC00" }, { label: "Churned", value: 20000, color: "#FF6692" }] },
  { month: "Aug", segments: [] }, { month: "Sep", segments: [] }
];

export const tableMonths = [
  { label: "Jan 2025", key: "jan" }, { label: "Feb 2025", key: "feb" }, { label: "Mar 2025", key: "mar" }
] as const;

export const tableRows = [
  { label: "New", amount: "€ 19,866", count: "79", change: "-" },
  { label: "Expanded", amount: "€ 19,866", count: "79", change: "-" },
  { label: "Reactivated", amount: "€ 19,866", count: "79", change: "-" },
  { label: "Contracted", amount: "€ 19,866", count: "79", change: "-" },
  { label: "Churned", amount: "€ 19,866", count: "79", change: "-" },
  { label: "MRR Change", amount: "(€ 19,866)", count: "79", change: "-" },
  { label: "FX Impact", amount: "(€ 19,866)", count: "79", change: "-" },
  { label: "Total MRR", amount: "€ 7,474", count: "-", change: "-" },
  { label: "Growth Rate", amount: "-", count: "-", change: "5.25%" }
];

export const movementTransactions = [
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" }
];

export const breakdownSeriesList: BreakdownSeriesItem[] = [
  { label: "Analytics Insights", color: "#3B82F6", points: [91000, 91500, 91000, 84000, 84000, 90000, 93000, 95000, 92000] },
  { label: "Custom Fields", color: "#EF4444", points: [68000, 70500, 67000, 60000, 58000, 63000, 68000, 69000, 67000] },
  { label: "Developer API", color: "#FFCC00", points: [53000, 54500, 51000, 40000, 36000, 44000, 46000, 47500, 45000] },
  { label: "File Share Basic", color: "#F97316", points: [27000, 27500, 28000, 27500, 27200, 27800, 28200, 28000, 27800] },
  { label: "File Share Plus", color: "#8B5CF6", points: [25000, 25200, 25500, 25000, 24800, 25300, 25800, 25600, 25400] },
  { label: "File Share Unlimited", color: "#34C759", points: [22000, 22200, 22500, 22000, 21800, 22300, 22800, 22600, 22400] },
  { label: "Meta Pixel Integration", color: "#EC4899", points: [19000, 19200, 19500, 19000, 18800, 19300, 19800, 19600, 19400] },
  { label: "Multi Branch", color: "#06B6D4", points: [16000, 16200, 16500, 16000, 15800, 16300, 16800, 16600, 16400] },
  { label: "Online Payments", color: "#4F46E5", points: [13000, 13200, 13500, 13000, 12800, 13300, 13800, 13600, 13400] },
  { label: "Queue Manager", color: "#98A4AE", points: [10000, 10200, 10500, 10000, 9800, 10300, 10800, 10600, 10400] },
  { label: "Scheduler Basic", color: "#14B8A6", points: [3500, 3700, 3500, 3800, 3600, 4200, 8000, 10000, 10200] }
];
