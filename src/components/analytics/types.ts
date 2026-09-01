export type PlanType = "All" | "Basic" | "Premium" | "Enterprise";
export type ChartMode = "line" | "bar";
export type ChartTab = "MRR" | "Movements" | "Breakdown";
export type TimeRange = "Monthly" | "Yearly" | "2023-2025";
export type FilterStage = "root" | "plan";

export type ChartPoint = { month: string; value: number };
export type PositionedPoint = ChartPoint & { x: number; y: number };
export type MovementSegment = { label: string; value: number; color: string };
export type MovementPoint = { month: string; segments: MovementSegment[] };

export interface BreakdownSeriesItem {
  label: string;
  color: string;
  points: number[];
}
