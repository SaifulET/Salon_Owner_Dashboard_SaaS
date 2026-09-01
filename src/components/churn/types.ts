export type ChartMode = "line" | "bar";
export type TimeRange = "Monthly" | "Yearly" | "2023-2025";
export type TabType = "Customer Churn" | "Net MRR Churn" | "MRR Churn";

export type ChartPoint = { label: string; value: number };
export type PositionedPoint = ChartPoint & { x: number; y: number };

export interface ChurnTableRow {
  month: string;
  churnRateAmt: string;
  churnRateChg: string;
  churnDeltaAmt: string;
  churnDeltaChg: string;
  mrrRateAmt: string;
  mrrRateChg: string;
  mrrDeltaAmt: string;
  mrrDeltaChg: string;
  netRateAmt: string;
  netRateChg: string;
  lYearAmt: string;
  lYearChg: string;
  plan: string;
  city: string;
}
