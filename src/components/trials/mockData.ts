import { ChartPoint, TableRowData, TrialTransaction, TimeRange } from "./types";

export const timeRangeOptions: TimeRange[] = ["Monthly", "Yearly", "2023-2025"];

export const newTrialsPoints: ChartPoint[] = [
  { month: "Jan", value: 66 },
  { month: "Feb", value: 61 },
  { month: "Mar", value: 51 },
  { month: "Apr", value: 62 },
  { month: "May", value: 52 },
  { month: "Jun", value: 66 },
  { month: "Jul", value: 52 },
  { month: "Aug", value: 34 },
  { month: "Sep", value: 38 },
];

export const conversionRatePoints: ChartPoint[] = [
  { month: "Jan", value: 40 },
  { month: "Feb", value: 32 },
  { month: "Mar", value: 60 },
  { month: "Apr", value: 48 },
  { month: "May", value: 60 },
  { month: "Jun", value: 48 },
  { month: "Jul", value: 56 },
  { month: "Aug", value: 60 },
  { month: "Sep", value: 72 },
];

export const mainTableMonths = [
  { label: "Jan 2025", key: "jan" },
  { label: "Feb 2025", key: "feb" },
  { label: "Mar 2025", key: "mar" },
  { label: "Apr 2025", key: "apr" },
  { label: "May 2025", key: "may" },
] as const;

export const mainTableRows: TableRowData[] = [
  { label: "Trials", values: { jan: "476", feb: "476", mar: "476", apr: "476", may: "476" } },
  { label: "Converted", isBgGray: true, values: { jan: "66", feb: "66", mar: "66", apr: "66", may: "66" } },
  { label: "Conversion rate", values: { jan: "13.87%", feb: "13.87%", mar: "13.87%", apr: "-", may: "13.87%" } },
];

export const trialsTransactionsLogs: TrialTransaction[] = [
  { created: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", email: "Example", trialStarted: "-", paidStarted: "-", cancelDate: "-" },
  { created: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", email: "Example", trialStarted: "-", paidStarted: "-", cancelDate: "-" },
  { created: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", email: "Example", trialStarted: "-", paidStarted: "-", cancelDate: "-" },
  { created: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", email: "Example", trialStarted: "-", paidStarted: "-", cancelDate: "-" },
  { created: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", email: "Example", trialStarted: "-", paidStarted: "-", cancelDate: "-" },
  { created: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", email: "Example", trialStarted: "-", paidStarted: "-", cancelDate: "-" },
  { created: "Aug 31, 2024", customer: "Advocate Data (haylie.zboncak@advocate.com)", email: "Example", trialStarted: "-", paidStarted: "-", cancelDate: "-" },
];
