import { ChartPoint, MovementPoint, BreakdownPlan, TableRowData, TimeRange } from "./types";

export const timeRangeOptions: TimeRange[] = ["Monthly", "Yearly", "2023-2025"];

export const subscriberPoints: ChartPoint[] = [
  { month: "Jan", value: 48000 }, { month: "Feb", value: 60000 }, { month: "Mar", value: 52000 },
  { month: "Apr", value: 38000 }, { month: "May", value: 24000 }, { month: "Jun", value: 45000 },
  { month: "Jul", value: 42000 }, { month: "Aug", value: 34000 }, { month: "Sep", value: 28000 },
];

export const movementsPoints: MovementPoint[] = [
  {
    month: "Jan",
    segments: [
      { label: "New", value: 22000, color: "#34C759" }, { label: "Expanded", value: 10000, color: "#00C7BE" },
      { label: "Reactivated", value: 8000, color: "#33ADE5" }, { label: "Contracted", value: 5000, color: "#FFCC00" },
      { label: "Churned", value: -18000, color: "#FF6692" }, { label: "FX Impact", value: -6000, color: "#EEEFEF" },
    ],
  },
  {
    month: "Feb",
    segments: [
      { label: "New", value: 21000, color: "#34C759" }, { label: "Expanded", value: 9000, color: "#00C7BE" },
      { label: "Reactivated", value: 7000, color: "#33ADE5" }, { label: "Contracted", value: 4000, color: "#FFCC00" },
      { label: "Churned", value: -20000, color: "#FF6692" }, { label: "FX Impact", value: -5000, color: "#EEEFEF" },
    ],
  },
  {
    month: "Mar",
    segments: [
      { label: "New", value: 23000, color: "#34C759" }, { label: "Expanded", value: 11000, color: "#00C7BE" },
      { label: "Reactivated", value: 9000, color: "#33ADE5" }, { label: "Contracted", value: 4500, color: "#FFCC00" },
      { label: "Churned", value: -17000, color: "#FF6692" }, { label: "FX Impact", value: -4000, color: "#EEEFEF" },
    ],
  },
  {
    month: "Apr",
    segments: [
      { label: "New", value: 20000, color: "#34C759" }, { label: "Expanded", value: 8000, color: "#00C7BE" },
      { label: "Reactivated", value: 7000, color: "#33ADE5" }, { label: "Contracted", value: 3500, color: "#FFCC00" },
      { label: "Churned", value: -19000, color: "#FF6692" }, { label: "FX Impact", value: -5000, color: "#EEEFEF" },
    ],
  },
  {
    month: "May",
    segments: [
      { label: "New", value: 24000, color: "#34C759" }, { label: "Expanded", value: 12000, color: "#00C7BE" },
      { label: "Reactivated", value: 10000, color: "#33ADE5" }, { label: "Contracted", value: 6000, color: "#FFCC00" },
      { label: "Churned", value: -38000, color: "#FF6692" }, { label: "FX Impact", value: -10000, color: "#EEEFEF" },
    ],
  },
  {
    month: "Jun",
    segments: [
      { label: "New", value: 22000, color: "#34C759" }, { label: "Expanded", value: 10000, color: "#00C7BE" },
      { label: "Reactivated", value: 8000, color: "#33ADE5" }, { label: "Contracted", value: 5000, color: "#FFCC00" },
      { label: "Churned", value: -20000, color: "#FF6692" }, { label: "FX Impact", value: -6000, color: "#EEEFEF" },
    ],
  },
  {
    month: "Jul",
    segments: [
      { label: "New", value: 23000, color: "#34C759" }, { label: "Expanded", value: 11000, color: "#00C7BE" },
      { label: "Reactivated", value: 9000, color: "#33ADE5" }, { label: "Contracted", value: 4500, color: "#FFCC00" },
      { label: "Churned", value: -17000, color: "#FF6692" }, { label: "FX Impact", value: -4000, color: "#EEEFEF" },
    ],
  },
  { month: "Aug", segments: [] },
  { month: "Sep", segments: [] },
];

export const breakdownPlans: BreakdownPlan[] = [
  { label: "Premium", color: "#007AFE", points: [80000, 81000, 80000, 75000, 75000, 80000, 82000, 81000, 82000] },
  { label: "Basic", color: "#FF6692", points: [60000, 62000, 60000, 55000, 56000, 60000, 61000, 60000, 61000] },
  { label: "Enterprise", color: "#FFCC00", points: [50000, 51000, 48000, 40000, 40000, 45000, 47000, 45000, 46000] },
  { label: "Addon A", color: "#34C759", points: [30000, 31000, 30000, 30000, 30000, 30000, 30000, 30000, 30000] },
  { label: "Addon B", color: "#00C7BE", points: [24000, 25000, 24000, 24000, 24000, 24000, 24000, 24000, 24000] },
  { label: "Addon C", color: "#5655D2", points: [18000, 19000, 18000, 18000, 18000, 18000, 18000, 18000, 18000] },
];

export const mainTableMonths = [
  { label: "Jan 2025", key: "jan" }, { label: "Feb 2025", key: "feb" }, { label: "Mar 2025", key: "mar" },
  { label: "Apr 2025", key: "apr" }, { label: "May 2025", key: "may" },
] as const;

export const mainTableRows: TableRowData[] = [
  { label: "New", values: { jan: "79", feb: "79", mar: "79", apr: "79", may: "79" } },
  { label: "Reactivated", isBgGray: true, values: { jan: "79", feb: "79", mar: "79", apr: "79", may: "79" } },
  { label: "Churned", values: { jan: "(79)", feb: "(79)", mar: "(79)", apr: "(79)", may: "(79)" } },
  { label: "Change", isBgGray: true, valueClass: "text-[#36C76C] font-semibold", values: { jan: "79", feb: "79", mar: "79", apr: "79", may: "79" } },
  { label: "Customers", values: { jan: "1696", feb: "1696", mar: "1696", apr: "1696", may: "1696" } },
  { label: "Growth rate", isBgGray: true, valueClass: "text-[#36C76C] font-semibold", values: { jan: "5.25%", feb: "5.25%", mar: "5.25%", apr: "5.25%", may: "5.25%" } },
];

export const movementsTransactions = [
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
];
