export type Timeframe = "Monthly" | "Yearly" | "2023-2025";
export type MetricType = "MRR" | "Subscribers" | "ARPA" | "Customer Churn" | "NET MRR Churn" | "LTV";

export interface RegionDataRow {
  region: string;
  mrr: number;
  subs: number;
  arpa: number;
  churn: number;
  netChurn: number;
  ltv: number;
  city: "Milano" | "Rome" | "Bologna";
  plan: "Basic" | "Premium" | "Enterprise";
}

export interface ItalyLeafletMapProps {
  activeMetric: string;
  timeframe: string;
  planFilter: string;
  cityFilter: string;
  onRegionHover: (regionName: string | null) => void;
  onRegionClick: (regionName: string) => void;
}
