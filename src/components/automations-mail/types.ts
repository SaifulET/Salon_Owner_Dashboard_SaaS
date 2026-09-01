export interface NotificationItem {
  id: string;
  title: string;
  category: string;
  salon: string;
  date: string;
  time: string;
  type: "Email" | "SMS" | "WhatsApp";
  source: "Auto" | "Manual";
  status: "Sent" | "Failed" | "Opened" | "Clicked";
  read: boolean;
  hasAttachment?: boolean;
  attachmentCount?: number;
  emailLink?: string;
  operator?: string;
  recipient?: string;
  message?: string;
}
