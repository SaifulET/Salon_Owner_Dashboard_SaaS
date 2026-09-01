export type ChartMode = "line" | "bar";
export type SubTab = "Subscribers" | "Movements" | "Breakdown";
export type TimeRange = "Monthly" | "Yearly" | "2023-2025";

export type ChartPoint = { month: string; value: number };
export type PositionedPoint = ChartPoint & { x: number; y: number };

export interface MovementSegment {
  label: string;
  value: number;
  color: string;
}

export interface MovementPoint {
  month: string;
  segments: MovementSegment[];
}

export interface BreakdownPlan {
  label: string;
  color: string;
  points: number[];
}

export interface TableRowData {
  label: string;
  isBgGray?: boolean;
  valueClass?: string;
  values: {
    [key in "jan" | "feb" | "mar" | "apr" | "may"]: string;
  };
}
