import { ChartPoint, TimeRange, LtvTableRow } from "./types";

export const timeRangeOptions: TimeRange[] = ["Monthly", "Yearly", "2023-2025"];

export const ltvPoints: ChartPoint[] = [
  { month: "Jan", value: 43000 },
  { month: "Feb", value: 59000 },
  { month: "Mar", value: 48000 },
  { month: "Apr", value: 34000 },
  { month: "May", value: 27000 },
  { month: "Jun", value: 59000 },
  { month: "Jul", value: 40000 },
  { month: "Aug", value: 36000 },
  { month: "Sep", value: 27000 },
];

export const tableRows: LtvTableRow[] = [
  { year: "2020", ltv: "€ 1,250", deltaAmt: "€ 45", deltaPct: "(3%)", arpa: "€ 210", churn: "(20%)" },
  { year: "2021", ltv: "€ 1,250", deltaAmt: "€ 45", deltaPct: "(3%)", arpa: "€ 210", churn: "(20%)" },
  { year: "2022", ltv: "€ 1,250", deltaAmt: "€ 45", deltaPct: "(3%)", arpa: "€ 210", churn: "(20%)" },
  { year: "2023", ltv: "€ 1,250", deltaAmt: "€ 45", deltaPct: "(3%)", arpa: "€ 210", churn: "(20%)" },
  { year: "2024", ltv: "€ 1,250", deltaAmt: "€ 45", deltaPct: "(3%)", arpa: "€ 210", churn: "(20%)" },
  { year: "2025", ltv: "€ 1,250", deltaAmt: "€ 45", deltaPct: "(3%)", arpa: "€ 210", churn: "(20%)" },
];
