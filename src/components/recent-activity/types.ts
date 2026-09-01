export interface ActivityDetail {
  id: string;
  salonName: string;
  salonTag: string;
  hasCrown?: boolean;
  hasStar?: boolean;
  contactName: string;
  city: string;
  email: string;
  activityType: string;
  activityLabel: string;
  activityColor: "purple" | "teal" | "blue" | "yellow" | "gray";
  price: string;
  timeAgo: string;
  dateKey: string;
}
