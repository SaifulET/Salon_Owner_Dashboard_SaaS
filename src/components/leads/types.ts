export type ChartMode = "line" | "bar";
export type SubTab = "New Leads" | "Lead-to-trial conversion" | "Lead-to-paid conversion";
export type TimeRange = "Monthly" | "Weekly" | "Daily" | "Custom range";
export type ChartPoint = { month: string; value: number };
export type PositionedPoint = ChartPoint & { x: number; y: number };

export interface PerformanceMetricRow {
  period: string;
  leads: string;
  trials: string;
  converted: string;
  leadToTrialRate: string;
  leadToPaidRate: string;
  trialToPaidRate: string;
}
