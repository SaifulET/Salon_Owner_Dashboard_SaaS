import { ChartPoint, TimeRange } from "./types";

export const timeRangeOptions: TimeRange[] = ["Monthly", "Yearly", "2023-2025"];

export const aspPoints: ChartPoint[] = [
  { month: "Jan", value: 43000 },
  { month: "Feb", value: 59000 },
  { month: "Mar", value: 48000 },
  { month: "Apr", value: 34000 },
  { month: "May", value: 27000 },
  { month: "Jun", value: 59000 },
  { month: "Jul", value: 40000 },
  { month: "Aug", value: 36000 },
  { month: "Sep", value: 27000 },
];

export const tableMonths = [
  { label: "Jan 2025", key: "jan" },
  { label: "Feb 2025", key: "feb" },
  { label: "Mar 2025", key: "mar" },
  { label: "Apr 2025", key: "apr" },
] as const;

export const tableRows = [
  { label: "New business MRR", amount: "€ 451,343", count: "-" },
  { label: "New customers", amount: "-", count: "1696" },
  { label: "ASP", amount: "€ 266", count: "-" },
];
