import { ChartPoint, TimeRange, TableRowData } from "./types";

export const timeRangeOptions: TimeRange[] = ["Monthly", "Yearly", "2023-2025"];

export const cashflowPoints: ChartPoint[] = [
  { month: "Jan", value: 238391 }, { month: "Feb", value: 250000 }, { month: "Mar", value: 190000 },
  { month: "Apr", value: 110000 }, { month: "May", value: 0 }, { month: "Jun", value: 0 },
  { month: "Jul", value: 0 }, { month: "Aug", value: 0 }, { month: "Sep", value: 0 },
];

export const mainTableMonths = [
  { label: "Jan 2025", key: "jan" }, { label: "Feb 2025", key: "feb" }, { label: "Mar 2025", key: "mar" }
] as const;

export const mainTableRows: TableRowData[] = [
  {
    label: "Monthly plans", color: "#34C759",
    values: {
      jan: { amount: "€ 238,391", count: "79", countClass: "text-[#36C76C] font-semibold", change: "-" },
      feb: { amount: "€ 238,391", count: "79", countClass: "text-[#36C76C] font-semibold", change: "-" },
      mar: { amount: "€ 238,391", count: "79", countClass: "text-[#36C76C] font-semibold", change: "-" },
    },
  },
  {
    label: "Yearly plans", color: "#00C7BE",
    values: {
      jan: { amount: "€ 238,391", count: "79", countClass: "text-[#36C76C] font-semibold", change: "-" },
      feb: { amount: "€ 238,391", count: "79", countClass: "text-[#36C76C] font-semibold", change: "-" },
      mar: { amount: "€ 238,391", count: "79", countClass: "text-[#36C76C] font-semibold", change: "-" },
    },
  },
  {
    label: "Metered", color: "#33ADE5",
    values: {
      jan: { amount: "€ 238,391", count: "79", countClass: "text-[#36C76C] font-semibold", change: "-" },
      feb: { amount: "€ 238,391", count: "79", countClass: "text-[#36C76C] font-semibold", change: "-" },
      mar: { amount: "€ 238,391", count: "79", countClass: "text-[#36C76C] font-semibold", change: "-" },
    },
  },
  {
    label: "One-time", color: "#FFCC00",
    values: {
      jan: { amount: "(€ 238,391)", count: "79", countClass: "text-[#FF6692] font-semibold", change: "-" },
      feb: { amount: "(€ 238,391)", count: "79", countClass: "text-[#FF6692] font-semibold", change: "-" },
      mar: { amount: "(€ 238,391)", count: "79", countClass: "text-[#FF6692] font-semibold", change: "-" },
    },
  },
  {
    label: "Discounts", color: "#FF6692",
    values: {
      jan: { amount: "(€ 238,391)", count: "79", countClass: "text-[#FF6692] font-semibold", change: "-" },
      feb: { amount: "(€ 238,391)", count: "79", countClass: "text-[#FF6692] font-semibold", change: "-" },
      mar: { amount: "(€ 238,391)", count: "79", countClass: "text-[#FF6692] font-semibold", change: "-" },
    },
  },
  {
    label: "Refunds", color: "#644B45",
    values: {
      jan: { amount: "€ 19,866", count: "-", change: "-" },
      feb: { amount: "€ 19,866", count: "-", change: "-" },
      mar: { amount: "€ 19,866", count: "-", change: "-" },
    },
  },
  {
    label: "Fees", color: "#5655D2",
    values: {
      jan: { amount: "€ 7,474", amountClass: "text-[#36C76C] font-semibold", count: "-", change: "-" },
      feb: { amount: "€ 7,474", amountClass: "text-[#36C76C] font-semibold", count: "-", change: "-" },
      mar: { amount: "€ 7,474", amountClass: "text-[#36C76C] font-semibold", count: "-", change: "-" },
    },
  },
  {
    label: "Taxes", color: "#007AFE",
    values: {
      jan: { amount: "€ 19,866", count: "-", change: "-" },
      feb: { amount: "€ 19,866", count: "-", change: "-" },
      mar: { amount: "€ 19,866", count: "-", change: "-" },
    },
  },
  {
    label: "FX loss", color: "#EEEFEF",
    values: {
      jan: { amount: "-", count: "-", change: "5.25%", changeClass: "text-[#FF6692] font-semibold" },
      feb: { amount: "-", count: "-", change: "5.25%", changeClass: "text-[#FF6692] font-semibold" },
      mar: { amount: "-", count: "-", change: "5.25%", changeClass: "text-[#FF6692] font-semibold" },
    },
  },
  {
    label: "Net cashflow", isHighlight: true,
    values: {
      jan: { amount: "€ 314,889", count: "-", change: "-" },
      feb: { amount: "€ 314,889", count: "-", change: "-" },
      mar: { amount: "€ 314,889", count: "-", change: "-" },
    },
  },
  {
    label: "Change", isHighlight: true,
    values: {
      jan: { amount: "-", count: "-", change: "5.25%" },
      feb: { amount: "-", count: "-", change: "5.25%" },
      mar: { amount: "-", count: "-", change: "5.25%" },
    },
  },
];

export const movementsTransactions = [
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
  { date: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", description: "Subscribed to Scheduler Basic yearly (EUR) v2 + 3", type: "New", change: "US$ 181 (€ 175)" },
];
