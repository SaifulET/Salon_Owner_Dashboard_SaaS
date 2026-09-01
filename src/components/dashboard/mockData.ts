export interface ActivityItem {
  id: string;
  time: string;
  dotColor: "teal" | "purple" | "yellow";
  boldText: string;
  text: string;
  amount?: string;
}

export const mockDashboardActivities: ActivityItem[] = [
  {
    id: "act-1",
    time: "30m ago",
    dotColor: "teal",
    boldText: "Elite Beauty Bar",
    text: "Elite Beauty Bar - Subscribed Premium",
    amount: "€ 299,00"
  },
  {
    id: "act-2",
    time: "2h ago",
    dotColor: "purple",
    boldText: "Hair & Harmony",
    text: "Hair & Harmony - Monthly Payment",
    amount: "€ 299,00"
  },
  {
    id: "act-3",
    time: "2h ago",
    dotColor: "teal",
    boldText: "Urban Hair Studio",
    text: "Urban Hair Studio - 2 new staff"
  },
  {
    id: "act-4",
    time: "3h ago",
    dotColor: "yellow",
    boldText: "Salon Cristina",
    text: "Salon Cristina - Upgraded Plan",
    amount: "€ 299,00"
  },
  {
    id: "act-5",
    time: "5h ago",
    dotColor: "yellow",
    boldText: "New support ticket",
    text: "New support ticket - Modern Cuts"
  }
];
