import { ChartPoint, PerformanceMetricRow, TimeRange } from "./types";

export const timeRangeOptions: TimeRange[] = ["Monthly", "Weekly", "Daily", "Custom range"];

export const newLeadsPoints: ChartPoint[] = [
  { month: "Jul", value: 48 },
  { month: "Aug", value: 50 },
  { month: "Sep", value: 65 },
  { month: "Oct", value: 58 },
  { month: "Nov", value: 115 },
  { month: "Dec", value: 110 },
];

export const leadToTrialPoints: ChartPoint[] = [
  { month: "Jul", value: 38 },
  { month: "Aug", value: 45 },
  { month: "Sep", value: 55 },
  { month: "Oct", value: 60 },
  { month: "Nov", value: 95 },
  { month: "Dec", value: 105 },
];

export const leadToPaidPoints: ChartPoint[] = [
  { month: "Jul", value: 28 },
  { month: "Aug", value: 35 },
  { month: "Sep", value: 48 },
  { month: "Oct", value: 52 },
  { month: "Nov", value: 85 },
  { month: "Dec", value: 92 },
];

export const performanceMetricsRows: PerformanceMetricRow[] = [
  { period: "Mar 2025", leads: "108", trials: "72", converted: "54", leadToTrialRate: "60%", leadToPaidRate: "60%", trialToPaidRate: "60%" },
  { period: "Apr 2025", leads: "108", trials: "72", converted: "54", leadToTrialRate: "60%", leadToPaidRate: "60%", trialToPaidRate: "60%" },
  { period: "May 2025", leads: "108", trials: "72", converted: "54", leadToTrialRate: "5%", leadToPaidRate: "5%", trialToPaidRate: "5%" },
  { period: "Jun 2025", leads: "108", trials: "72", converted: "54", leadToTrialRate: "9%", leadToPaidRate: "9%", trialToPaidRate: "9%" },
  { period: "Jul 2025", leads: "108", trials: "72", converted: "54", leadToTrialRate: "20%", leadToPaidRate: "20%", trialToPaidRate: "20%" },
  { period: "Aug 2025", leads: "108", trials: "72", converted: "54", leadToTrialRate: "20%", leadToPaidRate: "20%", trialToPaidRate: "20%" },
];
