export type ChartMode = "line" | "bar";
export type TimeRange = "Monthly" | "Yearly" | "2023-2025";
export type ChartPoint = { month: string; value: number };
export type PositionedPoint = ChartPoint & { x: number; y: number };

export interface LtvTableRow {
  year: string;
  ltv: string;
  deltaAmt: string;
  deltaPct: string;
  arpa: string;
  churn: string;
}
