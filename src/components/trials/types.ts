export type ChartMode = "line" | "bar";
export type SubTab = "New Trials" | "Conversion rate";
export type TimeRange = "Monthly" | "Yearly" | "2023-2025";
export type ChartPoint = { month: string; value: number };
export type PositionedPoint = ChartPoint & { x: number; y: number };

export interface TableRowData {
  label: string;
  isBgGray?: boolean;
  valueClass?: string;
  values: {
    [key in "jan" | "feb" | "mar" | "apr" | "may"]: string;
  };
}

export interface TrialTransaction {
  created: string;
  customer: string;
  email: string;
  trialStarted: string;
  paidStarted: string;
  cancelDate: string;
}
