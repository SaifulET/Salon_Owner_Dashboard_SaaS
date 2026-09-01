export type ChartMode = "line" | "bar";
export type TimeRange = "Monthly" | "Yearly" | "2023-2025";
export type ChartPoint = { label: string; value: number };
export type PositionedPoint = ChartPoint & { x: number; y: number };

export interface ArpaTableRow {
  month: string;
  arpa: string;
  deltaAmt: string;
  deltaPct: string;
  deltaYearAmt: string;
  deltaYearPct: string;
  totalRev: string;
  topSalon: string;
  bottomSalon: string;
}

export interface SalonRanking {
  rank: string;
  name: string;
  subType: string;
  city: string;
  earnings: string;
  manager: string;
  email: string;
}
