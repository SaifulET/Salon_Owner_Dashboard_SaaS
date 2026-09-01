import { ChartPoint, ArpaTableRow, SalonRanking, TimeRange } from "./types";

export const timeRangeOptions: TimeRange[] = ["Monthly", "Yearly", "2023-2025"];

export const arpaMonthlyPoints: ChartPoint[] = [
  { label: "Jan", value: 43000 }, { label: "Feb", value: 59000 }, { label: "Mar", value: 48000 },
  { label: "Abr", value: 34000 }, { label: "May", value: 27000 }, { label: "Jun", value: 59000 },
  { label: "Jul", value: 40000 }, { label: "Aug", value: 36000 }, { label: "Sep", value: 27000 },
];

export const arpaYearlyPoints: ChartPoint[] = [
  { label: "2023", value: 35000 }, { label: "2024", value: 48000 }, { label: "2025", value: 62000 },
];

export const arpaCustomPoints: ChartPoint[] = [
  { label: "2023", value: 38000 }, { label: "2024", value: 52000 }, { label: "2025", value: 68000 },
];

export const monthlyTableRows: ArpaTableRow[] = [
  { month: "Jan 2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476", topSalon: "€ 821", bottomSalon: "€ 321" },
  { month: "Feb 2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476", topSalon: "€ 821", bottomSalon: "€ 321" },
  { month: "Mar 2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476", topSalon: "€ 821", bottomSalon: "€ 321" },
  { month: "Apr 2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476", topSalon: "€ 821", bottomSalon: "€ 321" },
  { month: "May 2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476", topSalon: "€ 821", bottomSalon: "€ 321" },
  { month: "Jun 2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476", topSalon: "€ 821", bottomSalon: "€ 321" },
  { month: "Jul 2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476", topSalon: "€ 821", bottomSalon: "€ 321" },
  { month: "Ago 2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476", topSalon: "€ 821", bottomSalon: "€ 321" },
  { month: "Set 2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476", topSalon: "€ 821", bottomSalon: "€ 321" },
];

export const yearlyTableRows: ArpaTableRow[] = [
  { month: "2023", arpa: "€ 232", deltaAmt: "€ 420", deltaPct: "3%", deltaYearAmt: "€ 340", deltaYearPct: "3%", totalRev: "€ 410k", topSalon: "€ 790", bottomSalon: "€ 290" },
  { month: "2024", arpa: "€ 248", deltaAmt: "€ 455", deltaPct: "3.5%", deltaYearAmt: "€ 360", deltaYearPct: "3.5%", totalRev: "€ 445k", topSalon: "€ 810", bottomSalon: "€ 310" },
  { month: "2025", arpa: "€ 255", deltaAmt: "€ 476", deltaPct: "4%", deltaYearAmt: "€ 376", deltaYearPct: "4%", totalRev: "€ 476k", topSalon: "€ 821", bottomSalon: "€ 321" },
];

export const customTableRows: ArpaTableRow[] = [
  { month: "2023 (Custom)", arpa: "€ 238", deltaAmt: "€ 430", deltaPct: "3.2%", deltaYearAmt: "€ 345", deltaYearPct: "3.2%", totalRev: "€ 420k", topSalon: "€ 795", bottomSalon: "€ 295" },
  { month: "2024 (Custom)", arpa: "€ 250", deltaAmt: "€ 460", deltaPct: "3.8%", deltaYearAmt: "€ 365", deltaYearPct: "3.8%", totalRev: "€ 455k", topSalon: "€ 815", bottomSalon: "€ 315" },
  { month: "2025 (Custom)", arpa: "€ 258", deltaAmt: "€ 482", deltaPct: "4.2%", deltaYearAmt: "€ 382", deltaYearPct: "4.2%", totalRev: "€ 482k", topSalon: "€ 825", bottomSalon: "€ 325" },
];

export const salonRankings: SalonRanking[] = [
  { rank: "#01", name: "Beauty Wellness Center", subType: "Premium", city: "Rome", earnings: "€ 376", manager: "Roberto Marini", email: "roberto@beautywellness.com" },
  { rank: "#02", name: "Beauty Wellness Center", subType: "Basic", city: "Rome", earnings: "€ 366", manager: "Roberto Marini", email: "roberto@beautywellness.com" },
  { rank: "#03", name: "Beauty Wellness Center", subType: "Enterprise", city: "Rome", earnings: "€ 356", manager: "Dr. Marco Rossi", email: "marco.rossi@elitebeauty.com" },
  { rank: "#04", name: "Beauty Wellness Center", subType: "Enterprise", city: "Rome", earnings: "€ 346", manager: "Dr. Marco Rossi", email: "marco.rossi@elitebeauty.com" },
  { rank: "#05", name: "Beauty Wellness Center", subType: "Basic", city: "Rome", earnings: "€ 336", manager: "Anna Bianchi", email: "anna@glamourlounge.com" },
];
