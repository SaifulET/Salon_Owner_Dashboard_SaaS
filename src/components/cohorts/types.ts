export type TimeRange = "Monthly" | "Yearly" | "2023-2025";
export type TabType = "Net MRR Retention" | "Subscriber Retention";
export type CellType = "high" | "med" | "low";

export interface CohortRow {
  month: string;
  mrr: string;
  plan: string;
  city: string;
  cells: { value: string; type: CellType }[];
}
