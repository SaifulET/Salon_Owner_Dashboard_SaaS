import { ChartPoint, ChurnTableRow, TimeRange } from "./types";

export const timeRangeOptions: TimeRange[] = ["Monthly", "Yearly", "2023-2025"];

export const customerChurnMonthly: ChartPoint[] = [
  { label: "Jan", value: 43000 }, { label: "Feb", value: 53000 }, { label: "Mar", value: 45000 },
  { label: "Apr", value: 35000 }, { label: "May", value: 30000 }, { label: "Jun", value: 53000 },
  { label: "Jul", value: 45000 }, { label: "Aug", value: 35000 }, { label: "Sep", value: 32000 },
];

export const customerChurnYearly: ChartPoint[] = [
  { label: "2023", value: 35000 }, { label: "2024", value: 48000 }, { label: "2025", value: 62000 },
];

export const customerChurnCustomRange: ChartPoint[] = [
  { label: "2023", value: 38000 }, { label: "2024", value: 52000 }, { label: "2025", value: 68000 },
];

export const netMRRChurnMonthly: ChartPoint[] = [
  { label: "Jan", value: 25000 }, { label: "Feb", value: 32000 }, { label: "Mar", value: 56000 },
  { label: "Apr", value: 42000 }, { label: "May", value: 24000 }, { label: "Jun", value: 39000 },
  { label: "Jul", value: 52000 }, { label: "Aug", value: 42000 }, { label: "Sep", value: 34000 },
];

export const netMRRChurnYearly: ChartPoint[] = [
  { label: "2023", value: 28000 }, { label: "2024", value: 42000 }, { label: "2025", value: 55000 },
];

export const netMRRChurnCustomRange: ChartPoint[] = [
  { label: "2023", value: 30000 }, { label: "2024", value: 46000 }, { label: "2025", value: 59000 },
];

export const mrrChurnMonthly: ChartPoint[] = [
  { label: "Jan", value: 43000 }, { label: "Feb", value: 57000 }, { label: "Mar", value: 52000 },
  { label: "Apr", value: 40000 }, { label: "May", value: 30000 }, { label: "Jun", value: 48000 },
  { label: "Jul", value: 57000 }, { label: "Aug", value: 38000 }, { label: "Sep", value: 34000 },
];

export const mrrChurnYearly: ChartPoint[] = [
  { label: "2023", value: 40000 }, { label: "2024", value: 50000 }, { label: "2025", value: 60000 },
];

export const mrrChurnCustomRange: ChartPoint[] = [
  { label: "2023", value: 42000 }, { label: "2024", value: 54000 }, { label: "2025", value: 65000 },
];

export const monthlyTableRows: ChurnTableRow[] = [
  { month: "Jan 2025", churnRateAmt: "-", churnRateChg: "(3.72%)", churnDeltaAmt: "€ 297", churnDeltaChg: "(3.72%)", mrrRateAmt: "-", mrrRateChg: "(3.72%)", mrrDeltaAmt: "€ 297", mrrDeltaChg: "(3.72%)", netRateAmt: "-", netRateChg: "(3.72%)", lYearAmt: "-", lYearChg: "(3.72%)", plan: "Basic", city: "Rome" },
  { month: "Feb 2025", churnRateAmt: "-", churnRateChg: "(3.72%)", churnDeltaAmt: "€ 297", churnDeltaChg: "(3.72%)", mrrRateAmt: "-", mrrRateChg: "(3.72%)", mrrDeltaAmt: "€ 297", mrrDeltaChg: "(3.72%)", netRateAmt: "-", netRateChg: "(3.72%)", lYearAmt: "-", lYearChg: "(3.72%)", plan: "Premium", city: "Milano" },
  { month: "Mar 2025", churnRateAmt: "-", churnRateChg: "(3.72%)", churnDeltaAmt: "€ 297", churnDeltaChg: "(3.72%)", mrrRateAmt: "-", mrrRateChg: "(3.72%)", mrrDeltaAmt: "€ 297", mrrDeltaChg: "(3.72%)", netRateAmt: "-", netRateChg: "(3.72%)", lYearAmt: "-", lYearChg: "(3.72%)", plan: "Enterprise", city: "Bologna" },
  { month: "Apr 2025", churnRateAmt: "-", churnRateChg: "(3.72%)", churnDeltaAmt: "€ 297", churnDeltaChg: "(3.72%)", mrrRateAmt: "-", mrrRateChg: "(3.72%)", mrrDeltaAmt: "€ 297", mrrDeltaChg: "(3.72%)", netRateAmt: "-", netRateChg: "(3.72%)", lYearAmt: "-", lYearChg: "(3.72%)", plan: "Premium", city: "Rome" },
];

export const yearlyTableRows: ChurnTableRow[] = [
  { month: "2023", churnRateAmt: "-", churnRateChg: "(3.12%)", churnDeltaAmt: "€ 1,120", churnDeltaChg: "(3.12%)", mrrRateAmt: "-", mrrRateChg: "(3.12%)", mrrDeltaAmt: "€ 1,120", mrrDeltaChg: "(3.12%)", netRateAmt: "-", netRateChg: "(3.12%)", lYearAmt: "-", lYearChg: "(3.12%)", plan: "Basic", city: "Rome" },
  { month: "2024", churnRateAmt: "-", churnRateChg: "(3.50%)", churnDeltaAmt: "€ 1,180", churnDeltaChg: "(3.50%)", mrrRateAmt: "-", mrrRateChg: "(3.50%)", mrrDeltaAmt: "€ 1,180", mrrDeltaChg: "(3.50%)", netRateAmt: "-", netRateChg: "(3.50%)", lYearAmt: "-", lYearChg: "(3.50%)", plan: "Premium", city: "Milano" },
  { month: "2025", churnRateAmt: "-", churnRateChg: "(3.72%)", churnDeltaAmt: "€ 1,290", churnDeltaChg: "(3.72%)", mrrRateAmt: "-", mrrRateChg: "(3.72%)", mrrDeltaAmt: "€ 1,290", mrrDeltaChg: "(3.72%)", netRateAmt: "-", netRateChg: "(3.72%)", lYearAmt: "-", lYearChg: "(3.72%)", plan: "Enterprise", city: "Bologna" },
];

export const customYearTableRows: ChurnTableRow[] = [
  { month: "2023 (Custom)", churnRateAmt: "-", churnRateChg: "(3.20%)", churnDeltaAmt: "€ 950", churnDeltaChg: "(3.20%)", mrrRateAmt: "-", mrrRateChg: "(3.20%)", mrrDeltaAmt: "€ 950", mrrDeltaChg: "(3.20%)", netRateAmt: "-", netRateChg: "(3.20%)", lYearAmt: "-", lYearChg: "(3.20%)", plan: "Basic", city: "Bologna" },
  { month: "2024 (Custom)", churnRateAmt: "-", churnRateChg: "(3.62%)", churnDeltaAmt: "€ 990", churnDeltaChg: "(3.62%)", mrrRateAmt: "-", mrrRateChg: "(3.62%)", mrrDeltaAmt: "€ 990", mrrDeltaChg: "(3.62%)", netRateAmt: "-", netRateChg: "(3.62%)", lYearAmt: "-", lYearChg: "(3.62%)", plan: "Premium", city: "Rome" },
  { month: "2025 (Custom)", churnRateAmt: "-", churnRateChg: "(3.90%)", churnDeltaAmt: "€ 1,020", churnDeltaChg: "(3.90%)", mrrRateAmt: "-", mrrRateChg: "(3.90%)", mrrDeltaAmt: "€ 1,020", mrrDeltaChg: "(3.90%)", netRateAmt: "-", netRateChg: "(3.90%)", lYearAmt: "-", lYearChg: "(3.90%)", plan: "Enterprise", city: "Milano" },
];
