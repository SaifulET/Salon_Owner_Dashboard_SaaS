export type ChartMode = "line" | "bar";
export type TimeRange = "Monthly" | "Yearly" | "2023-2025";
export type ChartPoint = { month: string; value: number };
export type PositionedPoint = ChartPoint & { x: number; y: number };

export interface TableRowData {
  label: string;
  color?: string;
  isHighlight?: boolean;
  values: {
    [key in "jan" | "feb" | "mar"]: {
      amount: string;
      amountClass?: string;
      count: string;
      countClass?: string;
      change: string;
      changeClass?: string;
    };
  };
}
